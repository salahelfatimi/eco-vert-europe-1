
import Faq from "@/components/pages/faq";
import Header from "@/components/pages/header";
import Processus from "@/components/pages/processus";
import Reve from "@/components/pages/reve";
import Service from "@/components/pages/service";
import LogoScroll from "@/components/tools/logoScroll";
import SactionNumbers from "@/components/tools/sactionNumbers";

export function generateMetadata() {
  return {
    title: "Eco Vert Europé - Société Générale Clé en Main",
    description: "Besoin d'un service clé en main en Moselle ? Société Générale Clé en Main propose des solutions complètes en rénovation, construction, et aménagement. Interventions rapides, professionnelles et adaptées à vos besoins.",
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: "Eco Vert Europé - Société Générale Clé en Main",
      description: "Besoin d'un service clé en main en Moselle ? Société Générale Clé en Main propose des solutions complètes en rénovation, construction, et aménagement. Interventions rapides, professionnelles et adaptées à vos besoins.",
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
        <SactionNumbers/>

        <Reve/>
        <Service/>
        <Processus/>
      
        <Faq/>
    </div>
  );
}
