import Image from "next/image";

export function generateMetadata() {
  return {
    title: "Création de Salle de Bain Complète - Design et Rénovation",
    description: "Eco Vert Europé propose des services de création et rénovation de salles de bain complètes. Du design à l’installation, nous réalisons des espaces fonctionnels et esthétiques. Contactez-nous pour un devis gratuit.",
    alternates: {
      canonical: "/nos_service/creation-salle-de-bain",
    },
    openGraph: {
      title: "Eco Vert Europé | Création de Salle de Bain Complète - Design et Rénovation",
      description: "Eco Vert Europé propose des services de création et rénovation de salles de bain complètes. Du design à l’installation, nous réalisons des espaces fonctionnels et esthétiques. Contactez-nous pour un devis gratuit.",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/nos_service/creation-salle-de-bain`,
      robots: {
        index: true,
        follow: true,
      },
      siteName: "Eco Vert Europé | Création de Salle de Bain Complète",
      images: [
        {
          url: `/opengraph-image.jpg`,
          secureUrl: `/opengraph-image.jpg`,
          width: 1200,
          height: 675,
          alt: "Eco Vert Europé | Création de Salle de Bain Complète - Design et Rénovation",
        },
      ],
      type: "website",
    },
  };
}

export default function CreationSalleDeBainService() {
  return (
    <div className="bg-white ">
      <div className="">
        {/* Hero Section */}
        <div className="relative h-screen min-w-full w-full">
          <div className="bg-black opacity-60 inset-0 absolute"></div>
          <Image
            width={1920}
            height={1080}
            src="/img/service/salle-de-bain.jpg" // Replace with your bathroom creation image
            alt="Création de Salle de Bain Complète – Design et Rénovation"
            className="object-cover object-top h-screen min-w-full w-full"
            title="Création de Salle de Bain Complète – Design et Rénovation"
          />
          <div
            className={`absolute inset-0 container text-center space-y-1 p-2 rounded-xl md:space-y-4 flex items-center justify-center flex-col`}
          >
            <h1 className="font-black text-2xl md:text-6xl text-white text-center font-panchang-bold">
              Création de Salle de Bain Complète - Design et Fonctionnalité
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-5xl mx-auto overflow-hidden">
          <div className="p-6">
            <p className="text-secondary mb-4 font-panchang">
              Chez Eco Vert Europé, nous transformons vos idées en réalité avec des salles de bain complètes, alliant design moderne et fonctionnalité. De la conception à l’installation, nous prenons en charge tous les aspects de votre projet pour créer un espace unique et adapté à vos besoins.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-4 font-panchang-bold">
              Nos Services en Création de Salle de Bain
            </h2>
            <ul className="list-disc list-inside font-panchang text-secondary mb-6">
              <li>Conception et design sur mesure</li>
              <li>Rénovation complète de salles de bain</li>
              <li>Installation de sanitaires (douche, baignoire, lavabo, WC)</li>
              <li>Pose de carrelage et revêtements muraux</li>
              <li>Plomberie et électricité adaptées</li>
              <li>Installation de meubles de salle de bain et rangements</li>
              <li>Éclairage et ventilation optimisés</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mb-4 font-panchang-bold">
              Pourquoi choisir Eco Vert Europé ?
            </h2>
            <ul className="font-panchang list-disc list-inside text-secondary mb-6">
              <li>Designers et artisans qualifiés</li>
              <li>Utilisation de matériaux de haute qualité</li>
              <li>Respect des normes de sécurité et d’hygiène</li>
              <li>Devis gratuit et suivi personnalisé</li>
            </ul>

            <h2 className="font-panchang-bold text-2xl font-semibold text-primary mb-4">
              Zones d’intervention
            </h2>
            <p className="text-secondary mb-6 font-panchang">
              Nous intervenons dans toute la région pour vous offrir des solutions de création et rénovation de salles de bain adaptées à vos besoins.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}