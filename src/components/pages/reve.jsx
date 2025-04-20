import Image from "next/image";
import Link from "next/link";

export default function Reve(){
    return(
        <div className="bg-white ">
            <div className="  flex flex-col-reverse lg:flex-row justify-between gap- items-center p-6 gap-10 md:h-fit container  ">
                <div className="lg:w-1/2">
                    <h2 className=" font-panchang-bold font-medium uppercase text-tertiary text-xl lg:text-4xl">Votre <span className=" text-primary">rêve ,</span><br className=" hidden lg:block" /> notre <span className=" text-primary">expertise</span></h2>
                    <p className="font-panchang text-lg font-light mt-5 text-tertiary">
                        Nous offrons une expérience complète de rénovation et d’aménagement clés en main, couvrant chaque étape du projet, de la conception à la réalisation. <br />
                        Que ce soit pour la toiture, l’isolation, le chauffage, l’électricité, la façade, la plomberie ou encore l’aménagement intérieur, nous créons des espaces harmonieux, fonctionnels et durables.
                    </p>
                    <div className=" flex  flex-col gap-2 mt-5">
                        <Link href={'tel:+33771710513'} className="mt-3 text-center  text-sm  font-panchang duration-700 w-full py-3 px-4   font-medium text-primary rounded-lg border-primary border-2"> Me faire rappeler </Link>
                        <Link href={'/reserver_un_devis'} className="mt-3 text-center bg-primary text-sm  font-panchang duration-700 w-full py-3 px-4   font-medium text-white rounded-lg border-primary border-2"> Réserver une consultation </Link>
                    </div>
                   
                </div>
                <div className="lg:w-1/2 w-full relative h-[500px] md:h-[600px]">
                <Image width={1920} quality={50} height={1080}  src="/img/img1.jpg" className="absolute shadow-2xl right-0 top-0 w-[300px] md:w-[400px] md:h-[400px] h-[300px] object-cover z-10 lg:hover:scale-110 duration-700 cursor-pointer " alt="Votre rêve , notre expertise" title="Votre rêve , notre expertise" />
                <Image width={1920} quality={50} height={1080} src="/img/img2.jpg" className="absolute shadow-2xl left-0 top-16 w-[300px] md:w-[400px] md:h-[500px] h-[400px] object-cover z-0 opacity-90 lg:hover:scale-110 duration-700 cursor-pointer" alt="Votre rêve , notre expertise" title="Votre rêve , notre expertise"/>
                </div>
            </div>
        </div>
    )
}