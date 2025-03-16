import Image from "next/image";

export function generateMetadata() {
  return {
    title: "Plaque de Plâtre & Cloisons - Installation et Rénovation",
    description: "Eco Vert Europé propose des services professionnels d’installation de plaques de plâtre et de cloisons. Créez des espaces fonctionnels et esthétiques avec nos solutions sur mesure. Contactez-nous pour un devis gratuit.",
    alternates: {
      canonical: "/nos_service/plaque-de-platre-cloisons",
    },
    openGraph: {
      title: "Eco Vert Europé | Plaque de Plâtre & Cloisons - Installation et Rénovation",
      description: "Eco Vert Europé propose des services professionnels d’installation de plaques de plâtre et de cloisons. Créez des espaces fonctionnels et esthétiques avec nos solutions sur mesure. Contactez-nous pour un devis gratuit.",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/nos_service/plaque-de-platre-cloisons`,
      robots: {
        index: true,
        follow: true,
      },
      siteName: "Eco Vert Europé | Plaque de Plâtre & Cloisons",
      images: [
        {
          url: `/opengraph-image.jpg`,
          secureUrl: `/opengraph-image.jpg`,
          width: 1200,
          height: 675,
          alt: "Eco Vert Europé | Plaque de Plâtre & Cloisons - Installation et Rénovation",
        },
      ],
      type: "website",
    },
  };
}

export default function PlaqueDePlatreCloisonsService() {
  return (
    <div className="bg-tertiary py-10">
      <div className="">
        {/* Hero Section */}
        <div className="relative h-screen min-w-full w-full">
          <div className="bg-black opacity-60 inset-0 absolute"></div>
          <Image
            width={1920}
            height={1080}
            src="/img/service/plaque-de-platre.jpg" // Replace with your drywall and partitions image
            alt="Plaque de Plâtre & Cloisons – Installation et Rénovation"
            className="object-cover object-top h-screen min-w-full w-full"
            title="Plaque de Plâtre & Cloisons – Installation et Rénovation"
          />
          <div
            className={`absolute inset-0 container text-center space-y-1 p-2 rounded-xl md:space-y-4 flex items-center justify-center flex-col`}
          >
            <h1 className="font-black text-2xl md:text-6xl text-white text-center font-panchang-bold">
              Plaque de Plâtre & Cloisons - Espaces sur Mesure
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-5xl mx-auto overflow-hidden">
          <div className="p-6">
            <p className="text-secondary mb-4 font-panchang">
              Chez Eco Vert Europé, nous proposons des solutions professionnelles pour l’installation de plaques de plâtre et de cloisons. Que ce soit pour créer de nouveaux espaces, rénover des pièces, ou améliorer l’isolation acoustique et thermique, nos experts garantissent des résultats de haute qualité.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-4 font-panchang-bold">
              Nos Services en Plaque de Plâtre & Cloisons
            </h2>
            <ul className="list-disc list-inside font-panchang text-secondary mb-6">
              <li>Installation de plaques de plâtre (BA13)</li>
              <li>Création de cloisons et séparations de pièces</li>
              <li>Rénovation de murs et plafonds</li>
              <li>Isolation acoustique et thermique</li>
              <li>Pose de doublages et faux plafonds</li>
              <li>Finitions (peinture, enduit, etc.)</li>
              <li>Démolition et préparation des surfaces</li>
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
              Nous intervenons dans toute la région pour vous offrir des solutions de plaques de plâtre et de cloisons adaptées à vos besoins.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}