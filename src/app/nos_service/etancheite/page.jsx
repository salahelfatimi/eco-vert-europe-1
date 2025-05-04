import Image from "next/image";
import Link from "next/link";

export function generateMetadata() {
  return {
    title: "Travaux d'Étanchéité - Protégez votre Habitat contre l'Humidité",
    description: "Eco Vert Europé vous propose des services d'étanchéité de qualité : toitures, terrasses, murs et fondations. Protégez durablement votre bâtiment contre les infiltrations. Contactez-nous pour un devis gratuit.",
    alternates: {
      canonical: "/nos_service/etancheite",
    },
    openGraph: {
      title: "Eco Vert Europé | Travaux d'Étanchéité - Protection & Durabilité",
      description: "Eco Vert Europé vous propose des services d'étanchéité de qualité : toitures, terrasses, murs et fondations. Protégez durablement votre bâtiment contre les infiltrations. Contactez-nous pour un devis gratuit.",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/nos_service/etancheite`,
      robots: {
        index: true,
        follow: true,
      },
      siteName: "Eco Vert Europé | Étanchéité",
      images: [
        {
          url: `/opengraph-image.jpg`,
          secureUrl: `/opengraph-image.jpg`,
          width: 1200,
          height: 675,
          alt: "Eco Vert Europé | Travaux d'Étanchéité - Protection & Durabilité",
        },
      ],
      type: "website",
    },
  };
}

export default function EtancheiteService() {
  return (
    <div className="bg-white">
      <div>
        {/* Hero Section */}
        <div className="relative h-screen min-w-full w-full">
          <div className="bg-black opacity-60 inset-0 absolute"></div>
          <Image
            width={1920}
            height={1080}
            src="/img/service/etancheite.jpg"
            alt="Travaux d'Étanchéité – Protection contre l'humidité"
            className="object-cover object-top h-screen min-w-full w-full"
            title="Travaux d'Étanchéité – Protection contre l'humidité"
          />
          <div className="absolute inset-0 container text-center space-y-1 p-2 rounded-xl md:space-y-4 flex items-center justify-center flex-col">
            <h1 className="font-black text-2xl md:text-6xl text-white text-center font-panchang-bold">
              Travaux d'Étanchéité - Protégez votre Habitat
            </h1>
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
              <Link href={'/reserver_un_devis'} className="mt-3 bg-primary font-panchang duration-700 w-fit py-2 px-6 text-sm lg:text-base font-satoshi font-bold text-white rounded-full border-primary border-4">
                Réserver une consultation
              </Link>
              <Link href={'tel:+33771710513'} className="mt-3 bg-white font-panchang duration-700 w-fit py-2 px-6 text-sm lg:text-base font-satoshi font-bold text-primary rounded-full border-primary border-4">
                Me faire rappeler
              </Link>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-5xl mx-auto overflow-hidden">
          <div className="p-6">
            <p className="text-secondary mb-4 font-panchang">
              L'étanchéité est essentielle pour préserver la solidité de votre habitation. Nos solutions empêchent l'eau et l'humidité de s'infiltrer, prolongeant ainsi la durée de vie de vos structures.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-4 font-panchang-bold">
              Nos Prestations en Étanchéité
            </h2>
            <ul className="list-disc list-inside font-panchang text-secondary mb-6">
              <li>Étanchéité de toitures plates et inclinées</li>
              <li>Étanchéité de terrasses accessibles ou non</li>
              <li>Étanchéité des murs enterrés et fondations</li>
              <li>Traitement contre l'humidité ascensionnelle</li>
              <li>Application de résines d'étanchéité</li>
              <li>Contrôle et maintenance régulière</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mb-4 font-panchang-bold">
              Pourquoi choisir Eco Vert Europé ?
            </h2>
            <ul className="font-panchang list-disc list-inside text-secondary mb-6">
              <li>Techniciens qualifiés et expérimentés</li>
              <li>Solutions adaptées à chaque type de bâtiment</li>
              <li>Intervention rapide et devis gratuit</li>
              <li>Garantie de performance et durabilité</li>
            </ul>

            <h2 className="font-panchang-bold text-2xl font-semibold text-primary mb-4">
              Zones d’intervention
            </h2>
            <p className="text-secondary mb-6 font-panchang">
              Nous intervenons dans toute la région pour vos projets d'étanchéité, en neuf comme en rénovation.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}
