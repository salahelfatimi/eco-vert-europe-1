'use client'
import Lenis from "lenis";
import { Instagram } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

export default function Footer(){
    useEffect( () => {
        const lenis = new Lenis()
        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
    }, [])
    return(

        <div className="bg-primary " >
            <div className=" flex lg:flex-row flex-col items-center justify-between container py-10 ">
                {/* <Image src="/img/logo_white.png" height={500} width={500} alt="Caravan Serai" title="Caravan Serai" className=" w-40" /> */}
                <div className="flex flex-col items-center lg:items-start gap-1">
                    <p className=" text-white font-panchang-bold text-lg font-bold  ">Information :</p>
                    <p className=" text-white font-panchang  "><span>Location : </span>France</p>
                    <p className=" text-white font-panchang  "><span>Telephone : </span>+33771710513</p>
                    <p className=" text-white font-panchang  "><span>E-mail : </span>eco.vert.europe@gmail.com</p>
                </div>
            </div>
            <div className=" bg-black py-6 ">
                <div className=" container flex flex-col-reverse gap-6 lg:flex-row items-center justify-between ">
                    <div >
                        <p className={`select-none flex  flex-col lg:flex-row gap-1  font-panchang  items-center font-semibold capitalize text-center lg:text-start text-white `}> Copyright &copy; {new Date().getFullYear()} . Touts les droits sont réservés <span className=" text-primary uppercase font-panchang-bold   "> Eco vert europé</span> </p>
                    </div>
                </div>
               
            </div>
        </div>
       
    )
}