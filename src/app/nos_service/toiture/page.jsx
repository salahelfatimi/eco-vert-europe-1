import Image from "next/image";
import Link from "next/link";

export function generateMetadata() {
  return {
    title: "Travaux de Toiture - Solidité et Durabilité pour Votre Habitat",
    description: "Eco Vert Europé propose des services professionnels de toiture : rénovation, réparation, installation, et entretien pour garantir une maison bien protégée. Contactez-nous pour un devis gratuit.",
    alternates: {
      canonical: "/nos_service/toiture",
    },
    openGraph: {
      title: "Eco Vert Europé | Travaux de Toiture - Solidité et Durabilité pour Votre Habitat",
      description: "Eco Vert Europé propose des services professionnels de toiture : rénovation, réparation, installation, et entretien pour garantir une maison bien protégée. Contactez-nous pour un devis gratuit.",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/nos_service/toiture`,
      robots: {
        index: true,
        follow: true,
      },
      siteName: "Eco Vert Europé | Travaux de Toiture",
      images: [
        {
          url: `/opengraph-image.jpg`,
          secureUrl: `/opengraph-image.jpg`,
          width: 1200,
          height: 675,
          alt: "Eco Vert Europé | Travaux de Toiture - Solidité et Durabilité pour Votre Habitat",
        },
      ],
      type: "website",
    },
  };
}

export default function ToitureService() {
  return (
    <div className="bg-white ">
      <div className="">
        {/* Hero Section */}
        <div className="relative h-screen min-w-full w-full">
          <div className="bg-black opacity-60 inset-0 absolute"></div>
          <Image
            width={1920}
            height={1080}
            src="/img/service/toiture.jpg"
            alt="Travaux de Toiture – Solidité et Durabilité pour Votre Habitat"
            className="object-cover object-top h-screen min-w-full w-full"
            title="Travaux de Toiture – Solidité et Durabilité pour Votre Habitat"
          />
          <div className={`absolute inset-0 container text-center space-y-1 p-2 rounded-xl md:space-y-4 flex items-center justify-center flex-col`}>
            <h1 className="font-black text-2xl md:text-6xl text-white text-center font-panchang-bold">
              Travaux de Toiture - Solidité et Durabilité pour Votre Habitat
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-5xl mx-auto overflow-hidden">
          <div className="p-6">
            <p className="text-secondary mb-4 font-panchang">
              Spécialistes de la toiture, nous réalisons tous types de travaux : rénovation, pose neuve, réparation et entretien. Nous vous assurons une toiture fiable, esthétique et durable.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-4 font-panchang-bold">
              Nos Prestations en Travaux de Toiture
            </h2>
            <ul className="list-disc list-inside font-panchang text-secondary mb-6">
              <li>Réparation de toitures (tuiles cassées, infiltrations...)</li>
              <li>Pose de toitures neuves (tuiles, ardoises, zinc...)</li>
              <li>Rénovation complète de toitures anciennes</li>
              <li>Pose de gouttières et chéneaux</li>
              <li>Isolation thermique par la toiture</li>
              <li>Entretien préventif et nettoyage de toiture</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mb-4 font-panchang-bold">
              Pourquoi faire appel à Eco Vert Europé ?
            </h2>
            <ul className="font-panchang list-disc list-inside text-secondary mb-6">
              <li>Équipe expérimentée et savoir-faire local</li>
              <li>Matériaux performants et durables</li>
              <li>Interventions rapides et devis gratuit</li>
              <li>Respect des normes en vigueur</li>
            </ul>

            <h2 className="font-panchang-bold text-2xl font-semibold text-primary mb-4">
              Zones d’intervention
            </h2>
            <p className="text-secondary mb-6 font-panchang">
              Nous intervenons dans toute la région pour vos projets de toiture, que ce soit pour une maison, un immeuble ou un bâtiment professionnel.
            </p>
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
      </div>
    </div>
  );
}