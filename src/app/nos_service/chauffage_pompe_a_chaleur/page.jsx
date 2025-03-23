import Image from "next/image";

export function generateMetadata() {
  return {
    title: "Chauffage & Pompe à Chaleur - Solutions Énergétiques Modernes",
    description: "Eco Vert Europé propose des services professionnels de chauffage et d’installation de pompes à chaleur. Découvrez nos solutions modernes et économiques pour un confort optimal. Contactez-nous pour un devis gratuit.",
    alternates: {
      canonical: "/nos_service/chauffage-pompe-a-chaleur",
    },
    openGraph: {
      title: "Eco Vert Europé | Chauffage & Pompe à Chaleur - Solutions Énergétiques Modernes",
      description: "Eco Vert Europé propose des services professionnels de chauffage et d’installation de pompes à chaleur. Découvrez nos solutions modernes et économiques pour un confort optimal. Contactez-nous pour un devis gratuit.",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/nos_service/chauffage-pompe-a-chaleur`,
      robots: {
        index: true,
        follow: true,
      },
      siteName: "Eco Vert Europé | Chauffage & Pompe à Chaleur",
      images: [
        {
          url: `/opengraph-image.jpg`,
          secureUrl: `/opengraph-image.jpg`,
          width: 1200,
          height: 675,
          alt: "Eco Vert Europé | Chauffage & Pompe à Chaleur - Solutions Énergétiques Modernes",
        },
      ],
      type: "website",
    },
  };
}

export default function ChauffagePompeAChaleurService() {
  return (
    <div className="bg-white ">
      <div className="">
        {/* Hero Section */}
        <div className="relative h-screen min-w-full w-full">
          <div className="bg-black opacity-60 inset-0 absolute"></div>
          <Image
            width={1920}
            height={1080}
            src="/img/service/chauffage.jpg" // Replace with your heating and heat pump image
            alt="Chauffage & Pompe à Chaleur – Solutions Modernes pour un Confort Optimal"
            className="object-cover object-top h-screen min-w-full w-full"
            title="Chauffage & Pompe à Chaleur – Solutions Modernes pour un Confort Optimal"
          />
          <div
            className={`absolute inset-0 container text-center space-y-1 p-2 rounded-xl md:space-y-4 flex items-center justify-center flex-col`}
          >
            <h1 className="font-black text-2xl md:text-6xl text-white text-center font-panchang-bold">
              Chauffage & Pompe à Chaleur - Confort et Économie d’Énergie
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-5xl mx-auto overflow-hidden">
          <div className="p-6">
            <p className="text-secondary mb-4 font-panchang">
              Chez Eco Vert Europé, nous proposons des solutions modernes et économiques pour vos besoins en chauffage et en pompes à chaleur. Que ce soit pour une installation neuve, une rénovation, ou un entretien, nos experts garantissent un confort optimal et une réduction de vos coûts énergétiques.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-4 font-panchang-bold">
              Nos Services en Chauffage & Pompe à Chaleur
            </h2>
            <ul className="list-disc list-inside font-panchang text-secondary mb-6">
              <li>Installation de systèmes de chauffage central (gaz, fioul, électrique)</li>
              <li>Pose de pompes à chaleur (air-air, air-eau, géothermique)</li>
              <li>Rénovation et modernisation de systèmes de chauffage existants</li>
              <li>Entretien et maintenance de chaudières et pompes à chaleur</li>
              <li>Dépannage et réparation de systèmes de chauffage</li>
              <li>Conseils et audit énergétique pour une meilleure efficacité</li>
              <li>Financement et aides pour vos projets de chauffage</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mb-4 font-panchang-bold">
              Pourquoi choisir Eco Vert Europé ?
            </h2>
            <ul className="font-panchang list-disc list-inside text-secondary mb-6">
              <li>Techniciens qualifiés et certifiés</li>
              <li>Solutions adaptées à vos besoins et à votre budget</li>
              <li>Utilisation de matériaux et équipements de haute qualité</li>
              <li>Intervention rapide et devis gratuit</li>
            </ul>

            <h2 className="font-panchang-bold text-2xl font-semibold text-primary mb-4">
              Zones d’intervention
            </h2>
            <p className="text-secondary mb-6 font-panchang">
              Nous intervenons dans toute la région pour vous offrir des solutions de chauffage et de pompes à chaleur adaptées à vos besoins.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}