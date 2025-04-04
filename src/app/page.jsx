
import Faq from "@/components/pages/faq";
import Header from "@/components/pages/header";
import Processus from "@/components/pages/processus";
import Reve from "@/components/pages/reve";
import Service from "@/components/pages/service";
import LogoScroll from "@/components/tools/logoScroll";

export function generateMetadata() {
  return {
    title: "Eco Vert Europé | Rénovation & Construction Clés en Main",
    description:
      "Eco Vert Europé, votre expert en rénovation et construction. Travaux clés en main : électricité, plomberie, gros œuvre, peinture, isolation, aménagement intérieur et extérieur.",
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: "Eco Vert Europé | Rénovation & Construction Clés en Main",
      description:
        "Eco Vert Europé vous accompagne dans vos projets de rénovation et construction. Expertise en gros œuvre, second œuvre, et aménagement intérieur et extérieur.",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      siteName: "Eco Vert Europé",
      images: [
        {
          url: "/opengraph-image.jpg",
          secureUrl: "/opengraph-image.jpg",
          width: 1200,
          height: 675,
          alt: "Eco Vert Europé - Rénovation et Construction Clés en Main",
        },
      ],
      type: "website",
    },
  };
}

export default function Home() {
  
  return (
    <div className="flex flex-col ">
        <Header/>
        <LogoScroll />
        <Reve/>
        <Service/>
        <Processus/>
      
        <Faq/>
    </div>
  );
}
