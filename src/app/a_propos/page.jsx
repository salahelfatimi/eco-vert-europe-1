import SactionNumbers from "@/components/tools/sactionNumbers";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return(
        <div>
            <div className=" relative">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <Image src="/img/aboutUs/aboutUs.jpg" alt="Hero Image" width={5000} height={3000} className="w-full h-96 object-cover object-center" />
                <div className="absolute inset-0 flex items-center justify-center text-white container">
                    <h1 className=" text-2xl lg:text-4xl  font-panchang-bold text-center">À Propos – Eco Vert Europé</h1>
                </div>
            </div>
            <SactionNumbers/>
            <div className="flex flex-col items-center justify-center py-10 container space-y-4 text-center">
                <h2 className=" font-panchang-bold text-2xl lg:text-4xl text-primary">Experts en Rénovation et Construction</h2>
                <p className=" font-panchang lg:text-sm text-xs">Chez Eco Vert Europé, nous transformons vos espaces avec des solutions de rénovation et construction clés en main. Avec une expertise reconnue et un savoir-faire éprouvé, nous réalisons des projets sur mesure alliant design, qualité et durabilité.</p>
                <p className=" font-panchang lg:text-sm text-xs">Depuis plus de 10 ans, nous accompagnons nos clients dans la modernisation de leurs espaces, en garantissant des résultats à la hauteur de leurs attentes.</p>
                <div className=" flex flex-col lg:flex-row gap-4 items-center">
                    <Link href={'/contact'} className="mt-3 bg-primary  font-panchang duration-700 w-fit py-2 px-10 text-sm lg:text-base font-satoshi font-bold text-white rounded-full border-primary border-4"> Réserver un rdv en ligne</Link>
                    <Link href={'tel:+212602314804'} className="mt-3 bg-white  font-panchang duration-700 w-fit py-2 px-10 text-sm lg:text-base font-satoshi font-bold text-primary rounded-full border-primary border-4">  Me faire rappeler</Link>
                </div>
            </div>
            <div className=" bg-primary flex flex-col lg:flex-row items-center justify-between">
                <div className=" lg:w-1/2 ">
                    <Image src="/img/aboutUs/aboutUs_3.jpg" alt="Hero Image" width={1000} height={1000} className=" h-[40rem]   object-cover object-center" />
                </div>
                <div className="lg:w-1/2 container space-y-4 py-10">
                    <h2 className=" font-panchang-bold text-2xl lg:text-4xl text-white">Nos Engagements</h2>
                    <ul className=" font-panchang space-y-4 lg:text-sm  text-xs list-inside">
                        <li><strong className="  text-white">Travail de qualité :</strong> Des matériaux haut de gamme et un souci du détail.</li>
                        <li><strong className="  text-white">Respect des délais :</strong> Planification rigoureuse pour une exécution efficace.</li>
                        <li><strong className="  text-white">Accompagnement personnalisé :</strong> Un interlocuteur unique pour chaque projet.</li>
                        <li><strong className="  text-white"> Éco-responsabilité :</strong> Des solutions durables pour des rénovations respectueuses de l’environnement.</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center container text-center space-y-4 py-10 bg-tertiary">
                <h2 className=" font-panchang-bold text-2xl lg:text-4xl text-primary">Pourquoi Choisir Eco Vert Europé ?</h2>
                <ul className=" font-panchang space-y-4 lg:text-sm  text-xs list-inside text-white">
                    <li><strong className="  text-white">Entreprise responsable  :</strong>  Utilisation de matériaux durables et respect des normes environnementales.</li>
                    <li><strong className="  text-white">Savoir-faire et expertise :</strong> Une équipe qualifiée et passionnée pour des réalisations impeccables.</li>
                    <li><strong className="  text-white">Respect des délais :</strong> Une organisation optimisée pour des chantiers livrés à temps.</li>
                    <li><strong className="  text-white"> Solutions personnalisées :</strong> Chaque projet est unique, nous nous adaptons à vos envies et contraintes.</li>
                </ul>
                <div className=" flex flex-col lg:flex-row gap-4 items-center">
                    <Link href={'/contact'} className="mt-3 bg-primary hover:bg-tertiary hover:text-primary font-panchang duration-700 w-fit py-2 px-10 text-sm lg:text-base font-satoshi font-bold text-white rounded-full border-primary border-4"> Réserver un rdv en ligne</Link>
                    <Link href={'tel:+212602314804'} className="mt-3 bg-white hover:bg-tertiary hover:text-white font-panchang duration-700 w-fit py-2 px-10 text-sm lg:text-base font-satoshi font-bold text-primary rounded-full border-white border-4">  Me faire rappeler</Link>
                </div>
            </div>
            <div className="  flex flex-col-reverse lg:flex-row items-center justify-between">
                <div className="container space-y-4 lg:w-1/2 py-10">
                    <h2 className=" font-panchang-bold text-2xl lg:text-4xl text-primary">Nos Domaines d’Expertise</h2>
                    <ul className=" font-panchang space-y-4 lg:text-sm text-xs list-inside">
                        <li><strong className="  text-primary">Rénovation intérieure :</strong> Salle de bain, cuisine, salon.</li>
                        <li><strong className="  text-primary">Rénovation extérieure :</strong> Façade, toiture, isolation.</li>
                        <li><strong className="  text-primary">Construction neuve :</strong> Maisons individuelles, extensions.</li>
                        <li><strong className="  text-primary">Aménagements extérieurs :</strong> Terrasses, jardins, allées.</li>
                        <li><strong className="  text-primary">Énergie renouvelable :</strong> Solutions photovoltaïques et thermiques.</li>
                    </ul>
                </div>
                <div className=" lg:w-1/2 ">
                    <Image src="/img/aboutUs/aboutUs_1.jpg" alt="Hero Image" width={1000} height={1000} className=" h-[40rem]   object-cover object-center" />
                </div>
            </div>
           
          
              
        </div>
    )
}