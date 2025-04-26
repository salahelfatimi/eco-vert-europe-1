// pages/electricite.js

import Image from "next/image";
import Link from "next/link";

export  function generateMetadata() {
    return {
      title: "Électricité - Expert Réparation & Installation",
      description: "Besoin d’un électricien en Moselle ? Eco Vert Europé propose des services de réparation, mise aux normes, et installation électrique. Disponible 24h/24, 7j/7, pour des interventions rapides et sécurisées. Contactez-nous pour un service fiable et adapté à vos besoins.",
      alternates: {
        canonical: "/nos_service/electricite",
      },
      openGraph: {
        title: "Eco Vert Europé | Dépannage d'urgence 24h/24 et 7j/7 | Électricité - Expert Réparation & Installation",
        description: "Besoin d’un électricien en Moselle ? Eco Vert Europé propose des services de réparation, mise aux normes, et installation électrique. Disponible 24h/24, 7j/7, pour des interventions rapides et sécurisées. Contactez-nous pour un service fiable et adapté à vos besoins.",
        url:`${process.env.NEXT_PUBLIC_BASE_URL}/nos_service/electricite`,
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
            alt: "Eco Vert Europé | Dépannage d'urgence 24h/24 et 7j/7 | Électricité - Expert Réparation & Installation",
          }
        ],
        type: "website",
      
      },
      
     
    };
   
  }

export default function ElectriciteService() {
  return (
    <div className="bg-white  ">
      <div className="">
        <div className=" relative h-screen min-w-full w-full">
            <div className="bg-black opacity-60 inset-0 absolute"></div>
            <Image   width={1920} height={1080}  src='/img/service/electrique.jpg' alt='Électricité – Votre Partenaire de Confiance pour Tous Vos Besoins Électriques' className="  object-cover object-top  h-screen min-w-full w-full" title='Électricité – Votre Partenaire de Confiance pour Tous Vos Besoins Électriques' />
            <div  className={` absolute inset-0 container text-center space-y-1  p-2 rounded-xl md:space-y-4 flex items-center justify-center flex-col `}>
                <h1 className="font-black text-2xl md:text-6xl text-white text-center font-panchang-bold"> Travaux d'Électricité - Installation & Rénovation Électrique</h1>                   
            </div>
        </div>        
        <div className="max-w-5xl mx-auto  overflow-hidden">
          <div className="p-6">
            <p className="text-secondary  mb-4 font-panchang">
            Chez Eco Vert Europé, nous vous accompagnons dans tous vos projets d’électricité, que ce soit pour une installation neuve, une mise aux normes, ou une rénovation complète. Nos électriciens qualifiés garantissent des systèmes performants, sécurisés et conformes aux normes NF C 15-100.
            </p>
            <h2 className="text-2xl font-semibold text-primary mb-4 font-panchang-bold">
              Nos Services en Électricité
            </h2>
            <ul className="list-disc list-inside font-panchang text-secondary  mb-6">
              <li>
                Installation électrique complète (neuf et rénovation)
              </li>
              <li>
                Remise aux normes et conformité électrique
              </li>
              <li>
                Remplacement de tableau électrique
              </li>
              <li>
                Installation et dépannage de prises, interrupteurs et luminaires
              </li>
              <li>
                Installation de chauffage électrique et VMC
              </li>
              <li>
                Câblage et domotique pour une maison connectée
              </li>
              <li>
                Dépannage électrique rapide et efficace
              </li>
            </ul>
            <h2 className="text-2xl font-semibold text-primary mb-4 font-panchang-bold">
              Pourquoi choisir Eco Vert Europé ?
            </h2>
            <ul className="font-panchang list-disc list-inside text-secondary mb-6">
              <li>
                Électriciens qualifiés et certifiés
              </li>
              <li>
                Respect des normes de sécurité et d’efficacité énergétique
              </li>
              <li>
                Intervention rapide et devis gratuit
              </li>
              <li>
                Matériaux et équipements de qualité
              </li>
            </ul>
            <h2 className="font-panchang-bold text-2xl font-semibold text-primary mb-4">
              Zones d’intervention
            </h2>
            <p className="text-secondary mb-6 font-panchang">
              Nous intervenons dans toute la région pour répondre à vos besoins électriques avec rapidité et efficacité.
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
