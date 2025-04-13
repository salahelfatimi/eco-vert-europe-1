"use client";
import CountUp from "react-countup";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

export default function SactionNumbers() {
    const [counterOn, setCounterOn] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true,
        onChange: (inView) => setCounterOn(inView),
    });

    return (
        <div ref={ref} className="bg-primary">
            <div className="py-10 px-10 container mx-auto">
                {/* Section Title */}
                <div className="text-center mb-10">
                    <h2 className="text-xl lg:text-4xl font-panchang-bold text-white uppercase">
                        Nos chiffres clés
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-10 text-center">
                    <div className="flex flex-col gap-2 items-center justify-center text-white">
                        <h2 className="font-panchang-bold font-medium uppercase">Chantiers réalisés</h2>
                        <p className="font-panchang-bold text-xl lg:text-4xl">
                            {counterOn ? <CountUp duration={5} start={1} end={350} suffix=" +" /> : 0}
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-center text-white">
                        <h2 className="font-panchang-bold font-medium uppercase">Clients satisfaits</h2>
                        <p className="font-panchang-bold text-xl lg:text-4xl">
                            {counterOn ? <CountUp duration={5} start={1} end={500} suffix=" +" /> : 0}
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-center text-white">
                        <h2 className="font-panchang-bold font-medium uppercase">Années d'expérience</h2>
                        <p className="font-panchang-bold text-xl lg:text-4xl">
                            {counterOn ? <CountUp duration={5} start={1} end={15} suffix=" +" /> : 0}
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-center text-white">
                        <h2 className="font-panchang-bold font-medium uppercase">Disponibilité</h2>
                        <p className="font-panchang-bold text-xl lg:text-4xl">24h/7j</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
