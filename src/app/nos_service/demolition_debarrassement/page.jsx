// pages/demolition-debarrassement.js

import Image from "next/image";
import Link from "next/link";

export function generateMetadata() {
  return {
    title: "Démolition & Débarras - Intervention Rapide et Sécurisée",
    description: "Eco Vert Europé assure vos travaux de démolition et débarras avec rapidité, sécurité et respect de l’environnement. Demandez votre devis gratuit !",
    alternates: {
      canonical: "/nos_service/demolition-debarrassement",
    },
    openGraph: {
      title: "Eco Vert Europé | Démolition & Débarras - Intervention Rapide et Sécurisée",
      description: "Eco Vert Europé assure vos travaux de démolition et débarras avec rapidité, sécurité et respect de l’environnement. Demandez votre devis gratuit !",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/nos_service/demolition-debarrassement`,
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
          alt: "Eco Vert Europé | Démolition & Débarras - Intervention Rapide et Sécurisée",
        }
      ],
      type: "website",
    },
  };
}

export default function DemolitionDebarrassementService() {
  return (
    <div className="bg-white">
      <div className="">
        <div className="relative h-screen min-w-full w-full">
          <div className="bg-black opacity-60 inset-0 absolute"></div>
          <Image width={1920} height={1080} src='/img/service/demolition-debarrassement.jpg' alt='Démolition & Débarras – Libérez Vos Espaces Rapidement' className="object-cover object-top h-screen min-w-full w-full" title='Démolition & Débarras – Libérez Vos Espaces Rapidement' />
          <div className="absolute inset-0 container text-center space-y-1 p-2 rounded-xl md:space-y-4 flex items-center justify-center flex-col">
            <h1 className="font-black text-2xl md:text-6xl text-white text-center font-panchang-bold">Démolition & Débarras - Intervention Rapide et Sécurisée</h1>
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
        <div className="max-w-5xl mx-auto overflow-hidden">
          <div className="p-6">
            <p className="text-secondary mb-4 font-panchang">
              Chez Eco Vert Europé, nous vous accompagnons pour tous vos besoins de démolition et de débarras, que ce soit pour un chantier, une maison ou un local professionnel. Nous garantissons des interventions rapides, sécurisées et respectueuses de l’environnement.
            </p>
            <h2 className="text-2xl font-semibold text-primary mb-4 font-panchang-bold">
              Nos Services de Démolition & Débarras
            </h2>
            <ul className="list-disc list-inside font-panchang text-secondary mb-6">
              <li>Démolition intérieure (murs, cloisons, carrelages...)</li>
              <li>Démolition partielle ou complète de bâtiments</li>
              <li>Débarras de maisons, appartements et locaux</li>
              <li>Tri sélectif et évacuation des gravats et encombrants</li>
              <li>Gestion sécurisée des déchets et respect des normes</li>
              <li>Intervention rapide et sur mesure selon vos besoins</li>
            </ul>
            <h2 className="text-2xl font-semibold text-primary mb-4 font-panchang-bold">
              Pourquoi choisir Eco Vert Europé ?
            </h2>
            <ul className="font-panchang list-disc list-inside text-secondary mb-6">
              <li>Équipe expérimentée et formée aux normes de sécurité</li>
              <li>Matériel professionnel adapté à chaque intervention</li>
              <li>Respect des délais et devis gratuit</li>
              <li>Approche écoresponsable pour la gestion des déchets</li>
            </ul>
            <h2 className="font-panchang-bold text-2xl font-semibold text-primary mb-4">
              Zones d’intervention
            </h2>
            <p className="text-secondary mb-6 font-panchang">
              Nous intervenons rapidement dans toute la région pour vos projets de démolition et débarras, en garantissant un service fiable et sécurisé.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}
