import { dictionaries } from './translations';
import type { SupportedLanguage } from './types';

export type { SupportedLanguage };

/**
 * Core translation logic similar to Krisivikas
 */
export function translate(
  key: string,
  lang: SupportedLanguage,
  params?: Record<string, string | number>,
  fallback?: string
): string {
  const dict = dictionaries[lang] || dictionaries.en;
  
  // Resolve dot-notation key (e.g. 'hero.title')
  const keys = key.split('.');
  let value: any = dict;
  for (const k of keys) {
    if (value === undefined) break;
    value = value[k];
  }

  if (value === undefined || value === '') {
    // Fallback to English
    let enValue: any = dictionaries.en;
    for (const k of keys) {
      if (enValue === undefined) break;
      enValue = enValue[k];
    }
    if (lang !== 'en' && enValue) {
      value = enValue;
    } else {
      return fallback || key;
    }
  }

  // Interpolate variables if params provided
  let stringValue = String(value);
  if (params && stringValue) {
    Object.keys(params).forEach((paramKey) => {
      const placeholder = `%{${paramKey}}`;
      stringValue = stringValue.replace(new RegExp(placeholder, 'g'), String(params[paramKey]));
    });
  }

  return stringValue;
}

/**
 * A helper to provide an isolated i18n instance per component
 * keeping the `.t()` syntax you already implemented!
 */
export function getI18n(lang: SupportedLanguage = 'en') {
  return {
    t: (key: string, params?: Record<string, string | number>, fallback?: string) => translate(key, lang, params, fallback),
    translations: dictionaries,
    locale: lang
  };
}
