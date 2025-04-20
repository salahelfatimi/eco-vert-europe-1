import Contact from "@/components/pages/contact";

export function generateMetadata() {
  return {
    title: "Contactez Eco Vert Europé - Demande d'information & Devis",
    description: "Prenez contact avec Eco Vert Europé pour vos projets de rénovation, isolation, toiture, sols, et plus encore. Réponse rapide garantie.",
    alternates: {
      canonical: "/contact",
    },
    openGraph: {
      title: "Contactez Eco Vert Europé | Rénovation & Travaux",
      description: "Prenez contact avec Eco Vert Europé pour vos projets de rénovation, isolation, toiture, sols, et plus encore. Réponse rapide garantie.",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
      robots: {
        index: true,
        follow: true,
      },
      siteName: "Eco Vert Europé",
      images: [
        {
          url: `/opengraph-image.jpg`,
          secureUrl: `/opengraph-image.jpg`,
          width: 1200,
          height: 675,
          alt: "Contactez Eco Vert Europé | Rénovation & Travaux",
        },
      ],
      type: "website",
    },
  };
}



export default function ContactPage() {
  return (
    <div className=" flex flex-col gap-12  ">
      <Contact />
    </div>
  )
}