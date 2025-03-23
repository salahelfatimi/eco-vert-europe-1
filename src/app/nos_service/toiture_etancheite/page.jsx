import Image from "next/image";

export function generateMetadata() {
  return {
    title: "Toiture & Étanchéité - Solutions Durables pour Votre Toit",
    description: "Eco Vert Europé propose des services professionnels de toiture et d’étanchéité. Réparation, installation, et entretien de toits pour une protection optimale contre les intempéries. Contactez-nous pour un devis gratuit.",
    alternates: {
      canonical: "/nos_service/toiture-etancheite",
    },
    openGraph: {
      title: "Eco Vert Europé | Toiture & Étanchéité - Solutions Durables pour Votre Toit",
      description: "Eco Vert Europé propose des services professionnels de toiture et d’étanchéité. Réparation, installation, et entretien de toits pour une protection optimale contre les intempéries. Contactez-nous pour un devis gratuit.",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/nos_service/toiture-etancheite`,
      robots: {
        index: true,
        follow: true,
      },
      siteName: "Eco Vert Europé | Toiture & Étanchéité",
      images: [
        {
          url: `/opengraph-image.jpg`,
          secureUrl: `/opengraph-image.jpg`,
          width: 1200,
          height: 675,
          alt: "Eco Vert Europé | Toiture & Étanchéité - Solutions Durables pour Votre Toit",
        },
      ],
      type: "website",
    },
  };
}

export default function ToitureEtancheiteService() {
  return (
    <div className="bg-white ">
      <div className="">
        {/* Hero Section */}
        <div className="relative h-screen min-w-full w-full">
          <div className="bg-black opacity-60 inset-0 absolute"></div>
          <Image
            width={1920}
            height={1080}
            src="/img/service/toiture.jpg" // Replace with your roofing and waterproofing image
            alt="Toiture & Étanchéité – Solutions Durables pour Votre Toit"
            className="object-cover object-top h-screen min-w-full w-full"
            title="Toiture & Étanchéité – Solutions Durables pour Votre Toit"
          />
          <div
            className={`absolute inset-0 container text-center space-y-1 p-2 rounded-xl md:space-y-4 flex items-center justify-center flex-col`}
          >
            <h1 className="font-black text-2xl md:text-6xl text-white text-center font-panchang-bold">
              Toiture & Étanchéité - Protection Optimale pour Votre Maison
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-5xl mx-auto overflow-hidden">
          <div className="p-6">
            <p className="text-secondary mb-4 font-panchang">
              Chez Eco Vert Europé, nous offrons des solutions complètes pour vos besoins en toiture et étanchéité. Que ce soit pour une réparation, une installation neuve, ou une rénovation, nos experts garantissent des résultats durables et une protection optimale contre les intempéries.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-4 font-panchang-bold">
              Nos Services en Toiture & Étanchéité
            </h2>
            <ul className="list-disc list-inside font-panchang text-secondary mb-6">
              <li>Réparation de toiture (fuites, tuiles cassées, etc.)</li>
              <li>Installation de toits neufs (tuiles, ardoises, zinc, etc.)</li>
              <li>Rénovation complète de toiture</li>
              <li>Étanchéité de toits plats et terrasses</li>
              <li>Pose de gouttières et systèmes d’évacuation d’eau</li>
              <li>Isolation de toiture pour une meilleure performance énergétique</li>
              <li>Entretien et inspection régulière de toiture</li>
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
              Nous intervenons dans toute la région pour vous offrir des solutions de toiture et d’étanchéité adaptées à vos besoins.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}