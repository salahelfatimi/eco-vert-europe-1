import Image from "next/image";

export function generateMetadata() {
  return {
    title: "Carrelage - Pose et Rénovation de Carrelage",
    description: "Eco Vert Europé propose des services professionnels de pose et rénovation de carrelage pour vos sols et murs. Découvrez nos solutions sur mesure pour des espaces esthétiques et durables. Contactez-nous pour un devis gratuit.",
    alternates: {
      canonical: "/nos_service/carrelage",
    },
    openGraph: {
      title: "Eco Vert Europé | Carrelage - Pose et Rénovation de Carrelage",
      description: "Eco Vert Europé propose des services professionnels de pose et rénovation de carrelage pour vos sols et murs. Découvrez nos solutions sur mesure pour des espaces esthétiques et durables. Contactez-nous pour un devis gratuit.",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/nos_service/carrelage`,
      robots: {
        index: true,
        follow: true,
      },
      siteName: "Eco Vert Europé | Carrelage",
      images: [
        {
          url: `/opengraph-image.jpg`,
          secureUrl: `/opengraph-image.jpg`,
          width: 1200,
          height: 675,
          alt: "Eco Vert Europé | Carrelage - Pose et Rénovation de Carrelage",
        },
      ],
      type: "website",
    },
  };
}

export default function CarrelageService() {
  return (
    <div className="bg-white ">
      <div className="">
        {/* Hero Section */}
        <div className="relative h-screen min-w-full w-full">
          <div className="bg-black opacity-60 inset-0 absolute"></div>
          <Image
            width={1920}
            height={1080}
            src="/img/service/carrelage.jpg" // Replace with your tiling service image
            alt="Carrelage – Pose et Rénovation de Carrelage"
            className="object-cover object-top h-screen min-w-full w-full"
            title="Carrelage – Pose et Rénovation de Carrelage"
          />
          <div
            className={`absolute inset-0 container text-center space-y-1 p-2 rounded-xl md:space-y-4 flex items-center justify-center flex-col`}
          >
            <h1 className="font-black text-2xl md:text-6xl text-white text-center font-panchang-bold">
              Carrelage - Sols et Murs Élégants et Durables
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-5xl mx-auto overflow-hidden">
          <div className="p-6">
            <p className="text-secondary mb-4 font-panchang">
              Chez Eco Vert Europé, nous proposons des services professionnels de pose et rénovation de carrelage pour vos sols et murs. Que ce soit pour une salle de bain, une cuisine, ou un espace extérieur, nos experts garantissent des résultats esthétiques et durables.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-4 font-panchang-bold">
              Nos Services en Carrelage
            </h2>
            <ul className="list-disc list-inside font-panchang text-secondary mb-6">
              <li>Pose de carrelage pour sols et murs</li>
              <li>Rénovation et remplacement de carrelage</li>
              <li>Carrelage pour salles de bain et cuisines</li>
              <li>Carrelage extérieur (terrasses, balcons, etc.)</li>
              <li>Création de motifs et designs personnalisés</li>
              <li>Pose de joints et finitions</li>
              <li>Conseils et choix de matériaux adaptés</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mb-4 font-panchang-bold">
              Pourquoi choisir Eco Vert Europé ?
            </h2>
            <ul className="font-panchang list-disc list-inside text-secondary mb-6">
              <li>Artisans qualifiés et expérimentés</li>
              <li>Utilisation de matériaux de haute qualité</li>
              <li>Respect des normes de sécurité et de durabilité</li>
              <li>Devis gratuit et intervention rapide</li>
            </ul>

            <h2 className="font-panchang-bold text-2xl font-semibold text-primary mb-4">
              Zones d’intervention
            </h2>
            <p className="text-secondary mb-6 font-panchang">
              Nous intervenons dans toute la région pour vous offrir des solutions de carrelage adaptées à vos besoins.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}