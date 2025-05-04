import Image from "next/image";
import Link from "next/link";

export function generateMetadata() {
  return {
    title: "Revêtements de Sols en Résine - Esthétique, Résistance et Durabilité",
    description:
      "Eco Vert Europé vous propose des solutions de revêtements de sols en résine adaptées à vos besoins : résine époxy, polyuréthane, finitions antidérapantes, résistantes et faciles d'entretien.",
    alternates: {
      canonical: "/nos_service/revetements_de_sols_en_resine",
    },
    openGraph: {
      title:
        "Eco Vert Europé | Revêtements de Sols en Résine - Esthétique, Résistance et Durabilité",
      description:
        "Eco Vert Europé vous propose des solutions de revêtements de sols en résine adaptées à vos besoins : résine époxy, polyuréthane, finitions antidérapantes, résistantes et faciles d'entretien.",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/nos_service/revetements_de_sols_en_resine`,
      robots: {
        index: true,
        follow: true,
      },
      siteName:
        "Eco Vert Europé | Revêtements de Sols en Résine",
      images: [
        {
          url: `/opengraph-image.jpg`,
          secureUrl: `/opengraph-image.jpg`,
          width: 1200,
          height: 675,
          alt: "Eco Vert Europé | Revêtements de Sols en Résine - Esthétique, Résistance et Durabilité",
        },
      ],
      type: "website",
    },
  };
}

export default function RevetementsResineService() {
  return (
    <div className="bg-white ">
      <div className="">
        {/* Hero Section */}
        <div className="relative h-screen min-w-full w-full">
          <div className="bg-black opacity-60 inset-0 absolute"></div>
          <Image
            width={1920}
            height={1080}
            src="/img/service/revetements-de-sols-en-resine.jpg"
            alt="Revêtements de Sols en Résine – Esthétique, Résistance et Durabilité"
            className="object-cover object-top h-screen min-w-full w-full"
            title="Revêtements de Sols en Résine – Esthétique, Résistance et Durabilité"
          />
          <div className={`absolute inset-0 container text-center space-y-1 p-2 rounded-xl md:space-y-4 flex items-center justify-center flex-col`}>
            <h1 className="font-black text-2xl md:text-6xl text-white text-center font-panchang-bold">
              Revêtements de Sols en Résine - Esthétique, Résistance et Durabilité
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
              Nos revêtements de sols en résine offrent une solution hautement résistante, esthétique et simple à entretenir, idéale pour les espaces industriels, commerciaux et résidentiels.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-4 font-panchang-bold">
              Nos Prestations en Revêtements de Sols
            </h2>
            <ul className="list-disc list-inside font-panchang text-secondary mb-6">
              <li>Pose de résine époxy et polyuréthane</li>
              <li>Traitement des sols industriels, commerciaux et résidentiels</li>
              <li>Finitions antidérapantes, mates, brillantes ou décoratives</li>
              <li>Résistance aux chocs, produits chimiques et à l’humidité</li>
              <li>Personnalisation des coloris et effets visuels</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mb-4 font-panchang-bold">
              Pourquoi choisir Eco Vert Europé ?
            </h2>
            <ul className="font-panchang list-disc list-inside text-secondary mb-6">
              <li>Équipe expérimentée et équipements professionnels</li>
              <li>Matériaux respectueux de l’environnement</li>
              <li>Résultats durables et esthétiques</li>
              <li>Devis gratuits et conseils personnalisés</li>
            </ul>

            <h2 className="font-panchang-bold text-2xl font-semibold text-primary mb-4">
              Zones d’intervention
            </h2>
            <p className="text-secondary mb-6 font-panchang">
              Nous intervenons sur l’ensemble de la région pour vos besoins en revêtements de sols en résine, que ce soit pour une habitation, un commerce ou un local industriel.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}
