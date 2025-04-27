"use client"
import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
    useEffect(() => {
        gsap.to(".header-image, .header-overlay", {
            scale: 1.5,
            
            scrollTrigger: {
                trigger: ".header-image",
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        });
    }, []);

    return (
        <div className=" overflow-hidden ">
            <div className="relative">
                <div className="header-overlay absolute top-0 left-0 w-full h-full bg-black  z-10 opacity-60"></div>
                <Image src="/img/header.jpg" alt="Eco Vert Europé" title="Eco Vert Europé" width={1920} quality={50} height={1080} className="  shadow-2xl header-image object-cover h-screen w-screen object-center" />
                <div className=" container z-20 flex flex-col w-full  items-center  gap-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <h1 className="font-panchang-bold font-medium text-3xl lg:text-6xl">
                    Eco Vert Europé – Société Générale Clé en Main
                    </h1>
                    <div className=" flex flex-col lg:flex-row gap-4 items-center">
                        <Link href={'/reserver_un_devis'} className="mt-3 bg-primary hover:bg-white hover:text-primary font-panchang duration-700 w-fit py-2 px-10 text-sm lg:text-base font-satoshi font-bold text-white rounded-full border-primary border-4"> Réserver une consultation </Link>
                        <Link href={'tel:+33771710513'} className="mt-3 bg-white hover:bg-tertiary hover:text-white font-panchang duration-700 w-fit py-2 px-10 text-sm lg:text-base font-satoshi font-bold text-primary rounded-full border-white border-4">  Me faire rappeler</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}