"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from 'embla-carousel-auto-scroll'

export default  function LogoScroll() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ stopOnInteraction: false, speed: 0.3 }),
  ]);
  const images = [
    { image: "1.png", title: "Grohe" },
    { image: "2.png", title: "Schneider Electric" },
    { image: "3.png", title: "Atlantic" },
    { image: "4.png", title: "Daikin" },
    { image: "5.png", title: "BigMat" },
    { image: "6.png", title: "Castorama" },  
    { image: "7.png", title: "Daikin Point.P " },
    { image: "8.png", title: "Leroy Merlin " },
    { image: "9.png", title: "Saint-Gobain " },
    { image: "10.png", title: "Velux" } 
  ];

  return (
    <div className=" py-20">
      <h2 className="mb-4  font-panchang-bold uppercase text-tertiary text-2xl lg:text-3xl  text-center"><span className=" text-primary">Nos</span> principaux fournisseurs et partenaires</h2>
      <div className=" w-full  mx-auto mt-10 cursor-grab active:cursor-grabbing">
        <div className="py-2 overflow-hidden" ref={emblaRef}>
          <div className="flex flex-row flex-nowrap gap-32 pl-32 ">        
            {images.map((src, index) => ( 
              <img title={src.title} width={600} height={300} src={`/img/logoScroll/${src.image}`} className=" select-none  max-w-none h-36 w-auto" alt={src.title} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
   
  );
}