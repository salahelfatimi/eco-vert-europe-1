import Image from "next/image";
import Link from "next/link";

export function generateMetadata() {
  return {
    title: "Eco Vert Europé | page n'existe pas",
    description:"Eco Vert Europé, votre expert en rénovation et construction. Travaux clés en main : électricité, plomberie, gros œuvre, peinture, isolation, aménagement intérieur et extérieur.",
    openGraph: {
      title: "Eco Vert Europé | page n'existe pas",
      description:"Eco Vert Europé vous accompagne dans vos projets de rénovation et construction. Expertise en gros œuvre, second œuvre, et aménagement intérieur et extérieur.",
      siteName: "Eco Vert Europé",
      images: [
        {
          url: "/opengraph-image.jpg",
          secureUrl: "/opengraph-image.jpg",
          width: 1200,
          height: 675,
          alt: "Eco Vert Europé | page n'existe pas",
        },
      ],
      type: "website",
    },
  };
}

export default function NotFound() {
  return (
    <>
      <div className="flex flex-col gap-4 items-center justify-center h-96  pt-36 bg-white inset-0 min-h-screen font-panchang ">
        <Image src={'/img/logo-1.png'} width={500} height={500} className="w-44" alt=" Eco Vert Europé " title=" Eco Vert Europé " />
        <p className=" font-bold text-2xl flex items-center gap-2 flex-col text-center justify-center text-black">
          Il semble que cette page n&apos;existe pas
        </p>
        <Link
          className=" underline underline-offset-4  font-bold text-xl text-primary flex  duration-700 items-center gap-2"
          href="/"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </>
  );
}
