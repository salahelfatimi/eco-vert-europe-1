import Image from "next/image";
import Link from "next/link";

export function generateMetadata() {
  return {
    title: "Amélioration Énergétique - Solutions Éco-Énergétiques",
    description: "Eco Vert Europé propose des solutions d’amélioration énergétique pour votre maison ou entreprise. Isolation, chauffage performant, et énergies renouvelables pour réduire votre consommation et vos factures. Contactez-nous pour un audit énergétique gratuit.",
    alternates: {
      canonical: "/nos_service/amelioration-energetique",
    },
    openGraph: {
      title: "Eco Vert Europé | Amélioration Énergétique - Solutions Éco-Énergétiques",
      description: "Eco Vert Europé propose des solutions d’amélioration énergétique pour votre maison ou entreprise. Isolation, chauffage performant, et énergies renouvelables pour réduire votre consommation et vos factures. Contactez-nous pour un audit énergétique gratuit.",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/nos_service/amelioration-energetique`,
      robots: {
        index: true,
        follow: true,
      },
      siteName: "Eco Vert Europé | Amélioration Énergétique",
      images: [
        {
          url: `/opengraph-image.jpg`,
          secureUrl: `/opengraph-image.jpg`,
          width: 1200,
          height: 675,
          alt: "Eco Vert Europé | Amélioration Énergétique - Solutions Éco-Énergétiques",
        },
      ],
      type: "website",
    },
  };
}

export default function AmeliorationEnergetiqueService() {
  return (
    <div className="bg-white ">
      <div className="">
        {/* Hero Section */}
        <div className="relative h-screen min-w-full w-full">
          <div className="bg-black opacity-60 inset-0 absolute"></div>
          <Image
            width={1920}
            height={1080}
            src="/img/service/energetique.jpg" // Replace with your energy improvement image
            alt="Amélioration Énergétique – Solutions pour une Maison Éco-Énergétique"
            className="object-cover object-top h-screen min-w-full w-full"
            title="Amélioration Énergétique – Solutions pour une Maison Éco-Énergétique"
          />
          <div
            className={`absolute inset-0 container text-center space-y-1 p-2 rounded-xl md:space-y-4 flex items-center justify-center flex-col`}
          >
            <h1 className="font-black text-2xl md:text-6xl text-white text-center font-panchang-bold">
              Amélioration Énergétique - Solutions Éco-Énergétiques
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-5xl mx-auto overflow-hidden">
          <div className="p-6">
            <p className="text-secondary mb-4 font-panchang">
              Chez Eco Vert Europé, nous vous accompagnons dans vos projets d’amélioration énergétique pour rendre votre maison ou entreprise plus économe et respectueuse de l’environnement. De l’isolation thermique à l’installation de systèmes de chauffage performants, nous proposons des solutions sur mesure pour réduire votre consommation d’énergie et vos factures.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-4 font-panchang-bold">
              Nos Services en Amélioration Énergétique
            </h2>
            <ul className="list-disc list-inside font-panchang text-secondary mb-6">
              <li>Isolation thermique des murs, toitures et combles</li>
              <li>Installation de systèmes de chauffage performants (pompes à chaleur, chaudières à condensation)</li>
              <li>Pose de fenêtres et portes à haute performance énergétique</li>
              <li>Installation de panneaux solaires photovoltaïques</li>
              <li>Mise en place de systèmes de ventilation double flux</li>
              <li>Audit énergétique et conseils sur mesure</li>
              <li>Financement et aides pour vos travaux d’économie d’énergie</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mb-4 font-panchang-bold">
              Pourquoi choisir Eco Vert Europé ?
            </h2>
            <ul className="font-panchang list-disc list-inside text-secondary mb-6">
              <li>Experts certifiés en amélioration énergétique</li>
              <li>Solutions adaptées à vos besoins et à votre budget</li>
              <li>Utilisation de matériaux écologiques et performants</li>
              <li>Accompagnement dans les démarches administratives (aides et subventions)</li>
            </ul>

            <h2 className="font-panchang-bold text-2xl font-semibold text-primary mb-4">
              Zones d’intervention
            </h2>
            <p className="text-secondary mb-6 font-panchang">
              Nous intervenons dans toute la région pour vous proposer des solutions d’amélioration énergétique adaptées à vos besoins.
            </p>
            <div className=" flex flex-col lg:flex-row gap-4 items-center justify-center">
                <Link href={'/contact'} className="mt-3 bg-primary  font-panchang duration-700 w-fit py-2 px-10 text-sm lg:text-base font-satoshi font-bold text-white rounded-full border-primary border-4"> Réserver un rdv en ligne</Link>
                <Link href={'tel:+212602314804'} className="mt-3 bg-white  font-panchang duration-700 w-fit py-2 px-10 text-sm lg:text-base font-satoshi font-bold text-primary rounded-full border-primary border-4">  Me faire rappeler</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}