'use client'
import { useState } from "react";
export default function Faq() {
    const [openFaq, setOpenFaq] = useState(0);
    const faqData = [
        {
            question: "Quels types de travaux réalisez-vous ?",
            answer: "Nous prenons en charge une large gamme de travaux, allant de la rénovation énergétique à la création complète de salles de bain, en passant par la toiture, l’électricité, la plomberie, l’isolation des façades, la pose de carrelage et bien plus."
        },
        {
            question: "Proposez-vous des devis gratuits ?",
            answer: "Oui ! Chez Eco Vert Europé, chaque projet commence par un devis gratuit et personnalisé. Nous étudions vos besoins et vous proposons une solution sur mesure adaptée à votre budget."
        },
        {
            question: "Quels matériaux utilisez-vous ?",
            answer: "Nous sélectionnons uniquement des matériaux de haute qualité, durables et respectueux de l’environnement, adaptés à chaque type de travaux (toiture, isolation, plomberie, etc.)."
        },
        {
            question: "En combien de temps vos travaux sont-ils réalisés ?",
            answer: "La durée dépend de la nature et de la taille du projet. Après étude de votre demande, nous vous fournirons un planning clair avec des délais précis, et nous nous engageons à les respecter."
        },
        {
            question: "Est-il possible de financer mes travaux ?",
            answer: "Oui, nous pouvons vous accompagner pour explorer différentes solutions de financement adaptées à vos projets de rénovation énergétique et autres travaux."
        },
        {
            question: "Travaillez-vous avec des partenaires ou marques spécifiques ?",
            answer: "Nous collaborons avec des marques reconnues pour garantir la qualité et la durabilité de nos installations (isolation, chauffage, peinture, etc.)."
        },
        {
            question: "Intervenez-vous dans toute la région ?",
            answer: "Oui, Eco Vert Europé intervient sur l’ensemble de votre département et les zones environnantes, pour tous types de travaux, qu’ils soient intérieurs ou extérieurs."
        }
    ];
    return(
        <div className="bg-white">
            <div className="container  flex flex-col justify-between gap-10 items-center py-20  ">
                <h2  className=" font-panchang-bold font-medium uppercase text-tertiary text-2xl lg:text-4xl "> Foire Aux Questions <span className=" text-primary">(FAQ)</span></h2>
                <div className=" flex flex-col gap-6 w-full">
                    {faqData.map((faq, index) => (
                        <div key={index} className="flex flex-col p-4 gap-2 border-b-2 border-primary">
                            <h3 onClick={()=>(setOpenFaq(index))} className="font-panchang-bold cursor-pointer lg:text-base text-sm font-medium uppercase text-primary"> - {faq.question}</h3>
                            <div className={`overflow-hidden transition-all duration-700 ease-in-out ${openFaq == index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <p className="font-panchang text-xs lg:text-sm text-tertiary">{faq.answer}</p>
                            </div>                    
                        </div>
                    ))}
                </div>
            
            </div>
        </div>
    )
}