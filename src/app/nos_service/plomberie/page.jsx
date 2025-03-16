import Image from "next/image";

export function generateMetadata() {
  return {
    title: "Plomberie - Expert Réparation & Installation",
    description: "Besoin d’un plombier en Moselle ? Eco Vert Europé propose des services de réparation, installation, et maintenance de plomberie. Disponible 24h/24, 7j/7, pour des interventions rapides et sécurisées. Contactez-nous pour un service fiable et adapté à vos besoins.",
    alternates: {
      canonical: "/nos_service/plomberie",
    },
    openGraph: {
      title: "Eco Vert Europé | Dépannage d'urgence 24h/24 et 7j/7 | Plomberie - Expert Réparation & Installation",
      description: "Besoin d’un plombier en Moselle ? Eco Vert Europé propose des services de réparation, installation, et maintenance de plomberie. Disponible 24h/24, 7j/7, pour des interventions rapides et sécurisées. Contactez-nous pour un service fiable et adapté à vos besoins.",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/nos_service/plomberie`,
      robots: {
        index: true,
        follow: true,
      },
      siteName: "Eco Vert Europé | Dépannage d'urgence 24h/24 et 7j/7",
      images: [
        {
          url: `/opengraph-image.jpg`,
          secureUrl: `/opengraph-image.jpg`,
          width: 1200,
          height: 675,
          alt: "Eco Vert Europé | Dépannage d'urgence 24h/24 et 7j/7 | Plomberie - Expert Réparation & Installation",
        },
      ],
      type: "website",
    },
  };
}

export default function PlomberieService() {
  return (
    <div className="bg-tertiary py-10">
      <div className="">
        {/* Hero Section */}
        <div className="relative h-screen min-w-full w-full">
          <div className="bg-black opacity-60 inset-0 absolute"></div>
          <Image
            width={1920}
            height={1080}
            src="/img/service/plomberie.jpg" // Replace with your plumbing image
            alt="Plomberie – Votre Partenaire de Confiance pour Tous Vos Besoins en Plomberie"
            className="object-cover object-top h-screen min-w-full w-full"
            title="Plomberie – Votre Partenaire de Confiance pour Tous Vos Besoins en Plomberie"
          />
          <div
            className={`absolute inset-0 container text-center space-y-1 p-2 rounded-xl md:space-y-4 flex items-center justify-center flex-col`}
          >
            <h1 className="font-black text-2xl md:text-6xl text-white text-center font-panchang-bold">
              Travaux de Plomberie - Installation & Réparation
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-5xl mx-auto overflow-hidden">
          <div className="p-6">
            <p className="text-secondary mb-4 font-panchang">
              Chez Eco Vert Europé, nous vous accompagnons dans tous vos projets de plomberie, que ce soit pour une installation neuve, une réparation d’urgence, ou une rénovation complète. Nos plombiers qualifiés garantissent des systèmes performants, sécurisés et conformes aux normes en vigueur.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-4 font-panchang-bold">
              Nos Services en Plomberie
            </h2>
            <ul className="list-disc list-inside font-panchang text-secondary mb-6">
              <li>Installation de systèmes de plomberie (neuf et rénovation)</li>
              <li>Réparation de fuites et canalisations</li>
              <li>Remplacement de robinetterie et sanitaires</li>
              <li>Installation et entretien de chauffe-eau</li>
              <li>Débouchage de canalisations et évacuations</li>
              <li>Installation de systèmes de chauffage central</li>
              <li>Dépannage d’urgence 24h/24 et 7j/7</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mb-4 font-panchang-bold">
              Pourquoi choisir Eco Vert Europé ?
            </h2>
            <ul className="font-panchang list-disc list-inside text-secondary mb-6">
              <li>Plombiers qualifiés et certifiés</li>
              <li>Respect des normes de sécurité et d’hygiène</li>
              <li>Intervention rapide et devis gratuit</li>
              <li>Matériaux et équipements de qualité</li>
            </ul>

            <h2 className="font-panchang-bold text-2xl font-semibold text-primary mb-4">
              Zones d’intervention
            </h2>
            <p className="text-secondary mb-6 font-panchang">
              Nous intervenons dans toute la région pour répondre à vos besoins en plomberie avec rapidité et efficacité.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}