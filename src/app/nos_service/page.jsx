import allServices from "@/data/allService";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function generateMetadata() {
    return {
      title: "Nos Services de Rénovation et Travaux | Eco Vert Europé",
      description: "Découvrez tous les services proposés par Eco Vert Europé : rénovation, toiture, isolation, plomberie, chauffage, électricité et plus encore.",
      alternates: {
        canonical: "/nos_service",
      },
      openGraph: {
        title: "Eco Vert Europé | Nos Services de Rénovation et Travaux",
        description: "Découvrez tous les services proposés par Eco Vert Europé : rénovation, toiture, isolation, plomberie, chauffage, électricité et plus encore.",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/nos_service`,
        robots: {
          index: true,
          follow: true,
        },
        siteName: "Eco Vert Europé",
        images: [
          {
            url: `/opengraph-image.jpg`,
            secureUrl: `/opengraph-image.jpg`,
            width: 1200,
            height: 675,
            alt: "Nos Services de Rénovation et Travaux - Eco Vert Europé",
          },
        ],
        type: "website",
      },
    };
  }

  
export default function Service(){
    return(
        <div>
            <div className=" relative">
                <div className=" absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>
                <Image src="/img/img1.jpg" alt="Eco Vert Europé" title="Eco Vert Europé" width={1920} loading="eager" height={1080} className="  shadow-2xl header-image object-cover h-screen w-screen object-center" />
                <div className=" absolute inset-0 flex flex-col items-center justify-center z-20">
                    <h1 className=" text-4xl text-center lg:text-8xl text-white font-panchang-bold"> Nos Service</h1>
                </div>
            </div>
            <div className="  flex flex-col gap-4 ">
                {allServices.map((service, index) => (
                    <div   key={index} className=" flex flex-col lg:even:flex-row  lg:odd:flex-row-reverse p-6 justify-start gap-6">
                        <div className="lg:w-1/2 lg:h-[30rem] ">
                            <Image width={1920} height={1080} src={service.img} className=" border-primary w-full h-full rounded-[30px]  border-4 object-center object-cover" alt="Eco Vert Europé" title="Eco Vert Europé"/>
                        </div>
                        <div className="lg:w-1/2 flex flex-col    justify-center gap-6  ">
                            <div className=" flex items-center gap-4 ">
                                <MoveUpRight className="stroke-primary stroke-2 min-w-10  " size={50} />
                                <h3 className="font-panchang-bold  font-semibold text-primary text-lg lg:text-2xl uppercase">{service.title}</h3>
                            </div>
                            <p className=" font-panchang text-lg  text-secondary  ">{service.description}</p>
                            <Link href={service.href} className="text-center bg-primary p-4 font-panchang-bold text-white rounded-3xl hover:bg-white border-4 border-primary hover:text-primary duration-700">Lire More</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}