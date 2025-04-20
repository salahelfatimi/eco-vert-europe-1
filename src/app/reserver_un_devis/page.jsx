import Reserver_un_devis from "@/components/pages/reserver_un_devis";

export function generateMetadata() {
  return {
    title: "Demandez un Devis Gratuit | Eco Vert Europé",
    description: "Demandez votre devis gratuit en ligne pour tous vos travaux avec Eco Vert Europé : rénovation, isolation, toiture, sols, et plus encore.",
    alternates: {
      canonical: "/reserver_un_devis",
    },
    openGraph: {
      title: "Demandez un Devis Gratuit | Eco Vert Europé - Travaux & Rénovation",
      description: "Demandez votre devis gratuit en ligne pour tous vos travaux avec Eco Vert Europé : rénovation, isolation, toiture, sols, et plus encore.",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/reserver_un_devis`,
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
          alt: "Demandez un Devis Gratuit | Eco Vert Europé - Travaux & Rénovation",
        }
      ],
      type: "website",

    },


  };

}


export default function ContactPage() {
  return (
    <div className=" flex flex-col gap-12  ">
      <Reserver_un_devis />
    </div>
  )
}