"use client"
import services from "@/data/service";
import gsap from "gsap";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
export default function Service() {
    const serviceRefs = useRef([]);

    useEffect(() => {
        serviceRefs.current.forEach((image,index) => {
            gsap.fromTo(image,
                { scale: 0.8, opacity: 0},
                
                {
                    scale: 1, opacity: 1, duration: 1, delay: index * 0.05, ease: "power3.out",
                    scrollTrigger: {
                        trigger: image,
                        start: "top 80%", 
                        toggleActions: "play none none play",
                    }
                }
            );
        });
    }, []);
    return (
        <div className="flex flex-col  items-center  justify-center bg-primary py-20 ">
            <h2 className="mb-4 font-panchang-bold font-medium uppercase text-white text-2xl lg:text-3xl  text-center container"> <span className=" text-tertiary">Nos Services </span> Complets pour Votre Habitat</h2>
            <p className=" pb-10 container font-panchang text-center text-xs lg:text-sm text-white ">Chez Eco Vert Europé, nous mettons à votre disposition un savoir-faire complet pour tous vos projets de rénovation et d’amélioration de l’habitat. De la toiture à l’électricité, en passant par la salle de bain et la façade, nos experts vous accompagnent avec des solutions sur mesure, alliant qualité, durabilité et performance énergétique.</p>
            <div className="  flex flex-col gap-4 ">
                {services.map((service, index) => (
                    <div ref={(el) => (serviceRefs.current[index] = el)}  key={index} className=" flex flex-col lg:even:flex-row lg:odd:flex-row-reverse p-6 justify-start gap-6">
                        <div className="lg:w-1/2 lg:h-[30rem] ">
                            <Image width={1920} height={1080} src={service.img} className=" border-white w-full h-full rounded-[30px]  border-4 object-center object-cover" alt="Eco Vert Europé" title="Eco Vert Europé"/>
                        </div>
                        <div className="lg:w-1/2 flex flex-col  justify-center gap-6  ">
                            <div className=" flex items-center gap-4 ">
                                <MoveUpRight className="stroke-white stroke-2 hidden lg:block " size={50} />
                                <h3 className="font-panchang-bold  font-semibold text-white text-lg lg:text-2xl uppercase">{service.title}</h3>
                            </div>
                            <p className=" font-panchang lg:text-lg  text-secondary  ">{service.description}</p>
                            <Link href={service.href} className="bg-white p-3 text-center font-panchang-bold text-primary rounded-3xl hover:bg-primary border-4 border-white hover:text-white duration-700">Lire More</Link>
                        </div>
                    </div>
                ))}
            </div>
            <div className=" pt-10">
                <Link href={'/nos_service'} className=" bg-white w-fit p-4 px-10 font-panchang-bold rounded-full hover:bg-primary border-4 border-white hover:text-white duration-700">Lire More Service</Link>
            </div>
        </div>

    )
}