import Image from "next/image";
import Link from "next/link";

export function generateMetadata() {
  return {
    title: "Rénovation Complète - Transformation de Votre Espace",
    description: "Eco Vert Europé propose des services de rénovation complète pour transformer votre maison ou entreprise. De la conception à la réalisation, nous prenons en charge tous les aspects de votre projet. Contactez-nous pour un devis gratuit.",
    alternates: {
      canonical: "/nos_service/renovation_complete",
    },
    openGraph: {
      title: "Eco Vert Europé | Rénovation Complète - Transformation de Votre Espace",
      description: "Eco Vert Europé propose des services de rénovation complète pour transformer votre maison ou entreprise. De la conception à la réalisation, nous prenons en charge tous les aspects de votre projet. Contactez-nous pour un devis gratuit.",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/nos_service/renovation_complete`,
      robots: {
        index: true,
        follow: true,
      },
      siteName: "Eco Vert Europé | Rénovation Complète",
      images: [
        {
          url: `/opengraph-image.jpg`,
          secureUrl: `/opengraph-image.jpg`,
          width: 1200,
          height: 675,
          alt: "Eco Vert Europé | Rénovation Complète - Transformation de Votre Espace",
        },
      ],
      type: "website",
    },
  };
}

export default function RenovationCompleteService() {
  return (
    <div className="bg-white ">
      <div className="">
        <div className="relative h-screen min-w-full w-full">
          <div className="bg-black opacity-60 inset-0 absolute"></div>
          <Image
            width={1920}
            height={1080}
            src="/img/service/complete.jpg" // Replace with your complete renovation image
            alt="Rénovation Complète – Transformation de Votre Espace"
            className="object-cover object-top h-screen min-w-full w-full"
            title="Rénovation Complète – Transformation de Votre Espace"
          />
          <div
            className={`absolute inset-0 container text-center space-y-1 p-2 rounded-xl md:space-y-4 flex items-center justify-center flex-col`}
          >
            <h1 className="font-black text-2xl md:text-6xl text-white text-center font-panchang-bold">
              Rénovation Complète - Transformez Votre Espace
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-5xl mx-auto overflow-hidden">
          <div className="p-6">
            <p className="text-secondary mb-4 font-panchang">
              Chez Eco Vert Europé, nous proposons des services de rénovation complète pour transformer votre maison ou entreprise. De la conception à la réalisation, nous prenons en charge tous les aspects de votre projet pour créer un espace moderne, fonctionnel et esthétique.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-4 font-panchang-bold">
              Nos Services en Rénovation Complète
            </h2>
            <ul className="list-disc list-inside font-panchang text-secondary mb-6">
              <li>Rénovation intérieure et extérieure</li>
              <li>Transformation de pièces (cuisine, salle de bain, etc.)</li>
              <li>Modernisation des systèmes électriques et de plomberie</li>
              <li>Isolation thermique et acoustique</li>
              <li>Remplacement de fenêtres et portes</li>
              <li>Rénovation de toiture et façade</li>
              <li>Aménagement sur mesure</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mb-4 font-panchang-bold">
              Pourquoi choisir Eco Vert Europé ?
            </h2>
            <ul className="font-panchang list-disc list-inside text-secondary mb-6">
              <li>Équipe d’experts qualifiés et expérimentés</li>
              <li>Utilisation de matériaux de haute qualité</li>
              <li>Respect des normes de sécurité et de durabilité</li>
              <li>Devis gratuit et suivi personnalisé</li>
            </ul>

            <h2 className="font-panchang-bold text-2xl font-semibold text-primary mb-4">
              Zones d’intervention
            </h2>
            <p className="text-secondary mb-6 font-panchang">
              Nous intervenons dans toute la région pour vous offrir des solutions de rénovation complète adaptées à vos besoins.
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