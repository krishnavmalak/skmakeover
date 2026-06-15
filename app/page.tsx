import { HomePage } from '@/components/home-page';

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "SK Makeover",
    image: "https://skmakeover.pages.dev/images/logo.jpeg",
    description: "SK Makeover is a luxury bridal makeup studio by celebrity artist Vidya Malak, created for premium bridal clients who want a minimalist, editorial finish.",
    url: "https://skmakeover.pages.dev",
    founder: {
      "@type": "Person",
      name: "Vidya Malak"
    },
    priceRange: "$$"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePage locale="en" />
    </>
  );
}
