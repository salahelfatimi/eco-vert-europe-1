import services from "@/data/service";
import gsap from "gsap";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
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
        <div className="flex flex-col bg-primary py-20 ">
            <h2 className="mb-4 font-panchang font-medium uppercase text-secondary text-xl lg:text-3xl  text-center container"> <span className=" text-tertiary">Nos Services </span> Complets pour Votre Habitat</h2>
            <p className=" pb-10 container font-panchang text-center text-xs text-secondary ">Chez Eco Vert Europé, nous mettons à votre disposition un savoir-faire complet pour tous vos projets de rénovation et d’amélioration de l’habitat. De la toiture à l’électricité, en passant par la salle de bain et la façade, nos experts vous accompagnent avec des solutions sur mesure, alliant qualité, durabilité et performance énergétique.</p>
            <div className=" container  grid grid-cols-1 md:grid-cols-2 gap-10">
                {services.map((service, index) => (
                    <div ref={(el) => (serviceRefs.current[index] = el)}  key={index} className="  bg-tertiary  rounded-3xl  flex flex-col   p-6 justify-start gap-6     ">
                        <div className="">
                            <Image width={500} height={500} src={service.img} className="w-full h-[250px] rounded-[30px]  border-4 border-primary object-center object-cover" alt="Eco Vert Europé" title="Eco Vert Europé"/>
                        </div>
                        <div className=" flex flex-col  justify-center gap-6  ">
                            <div className=" flex items-center gap-4 ">
                                <MoveUpRight className="stroke-primary stroke-2 " size={50} />
                                <h3 className="font-panchang  font-semibold text-primary text- uppercase">{service.title}</h3>
                            </div>
                            <p className=" font-panchang text-sm  text-secondary  ">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>

    )
}