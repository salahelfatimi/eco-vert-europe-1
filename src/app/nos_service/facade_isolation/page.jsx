import Image from "next/image";
import Link from "next/link";

export function generateMetadata() {
  return {
    title: "Façade & Isolation - Rénovation et Isolation Thermique",
    description: "Eco Vert Europé propose des services professionnels de rénovation de façade et d’isolation thermique. Améliorez l’efficacité énergétique et l’esthétique de votre bâtiment. Contactez-nous pour un devis gratuit.",
    alternates: {
      canonical: "/nos_service/facade_isolation",
    },
    openGraph: {
      title: "Eco Vert Europé | Façade & Isolation - Rénovation et Isolation Thermique",
      description: "Eco Vert Europé propose des services professionnels de rénovation de façade et d’isolation thermique. Améliorez l’efficacité énergétique et l’esthétique de votre bâtiment. Contactez-nous pour un devis gratuit.",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/nos_service/facade_isolation`,
      robots: {
        index: true,
        follow: true,
      },
      siteName: "Eco Vert Europé | Façade & Isolation",
      images: [
        {
          url: `/opengraph-image.jpg`,
          secureUrl: `/opengraph-image.jpg`,
          width: 1200,
          height: 675,
          alt: "Eco Vert Europé | Façade & Isolation - Rénovation et Isolation Thermique",
        },
      ],
      type: "website",
    },
  };
}

export default function FacadeIsolationService() {
  return (
    <div className="bg-white ">
      <div className="">
        {/* Hero Section */}
        <div className="relative h-screen min-w-full w-full">
          <div className="bg-black opacity-60 inset-0 absolute"></div>
          <Image
            width={1920}
            height={1080}
            src="/img/service/peinture.jpg" // Replace with your facade and insulation image
            alt="Façade & Isolation – Rénovation et Isolation Thermique"
            className="object-cover object-top h-screen min-w-full w-full"
            title="Façade & Isolation – Rénovation et Isolation Thermique"
          />
          <div
            className={`absolute inset-0 container text-center space-y-1 p-2 rounded-xl md:space-y-4 flex items-center justify-center flex-col`}
          >
            <h1 className="font-black text-2xl md:text-6xl text-white text-center font-panchang-bold">
              Façade & Isolation - Performance et Esthétique
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
              Chez Eco Vert Europé, nous proposons des solutions complètes pour la rénovation de façade et l’isolation thermique de votre bâtiment. Que ce soit pour améliorer l’efficacité énergétique, l’esthétique, ou la durabilité, nos experts garantissent des résultats de haute qualité.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-4 font-panchang-bold">
              Nos Services en Façade & Isolation
            </h2>
            <ul className="list-disc list-inside font-panchang text-secondary mb-6">
              <li>Rénovation de façade (ravalement, enduit, peinture)</li>
              <li>Isolation thermique par l’extérieur (ITE)</li>
              <li>Isolation des murs, combles et planchers</li>
              <li>Pose de bardage et revêtements de façade</li>
              <li>Réparation et étanchéité des façades</li>
              <li>Amélioration de l’isolation acoustique</li>
              <li>Conseils et audit énergétique pour une meilleure performance</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mb-4 font-panchang-bold">
              Pourquoi choisir Eco Vert Europé ?
            </h2>
            <ul className="font-panchang list-disc list-inside text-secondary mb-6">
              <li>Artisans qualifiés et expérimentés</li>
              <li>Utilisation de matériaux écologiques et performants</li>
              <li>Respect des normes de sécurité et de durabilité</li>
              <li>Devis gratuit et intervention rapide</li>
            </ul>

            <h2 className="font-panchang-bold text-2xl font-semibold text-primary mb-4">
              Zones d’intervention
            </h2>
            <p className="text-secondary mb-6 font-panchang">
              Nous intervenons dans toute la région pour vous offrir des solutions de façade et d’isolation adaptées à vos besoins.
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
}