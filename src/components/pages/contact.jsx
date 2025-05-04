"use client";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Contact(){
    const [isLoading, setIsLoading] = useState(false);
    const [validation, setValidation] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        purpose: "",
        msg:""
    });
    

    const sendEmail = async (e) => {
        e.preventDefault();
        
        setValidation(true);

        if (
        formData.fullName &&
        formData.phone &&
        formData.purpose
        ) {
        setIsLoading(true);
        const loadingToast = toast.loading("Envoi en cours...");
        try {
            const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
            });
            if (response.status === 200) {
            setFormData({
                fullName: "",
                phone: "",
                purpose: "",
                msg:""
            });
            setValidation(false);
            setIsLoading(false);
            toast.dismiss(loadingToast);
            toast.success("Message envoyé avec succès !");
            }
        } catch {
            toast.dismiss(loadingToast);
            setIsLoading(false);
            toast.error("Échec de l'envoi de l'e-mail.");
        }
        }
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };


    return(
        <div id="contactez-nous" className=" font-panchang relative flex flex-col pb-8  items-center justify-center   ">
            <div className="relative h-[20rem] min-w-full w-full">
                <div className="bg-black opacity-60 inset-0 absolute"></div>
                <Image
                    width={1920}
                    height={1080}
                    src="/img/contact.jpg" 
                    alt="Carrelage – Pose et Rénovation de Carrelage"
                    className="object-cover object-top h-[20rem] min-w-full w-full"
                    title="Carrelage – Pose et Rénovation de Carrelage"
                />
                <div className={`absolute inset-0 container text-center space-y-1 p-2 rounded-xl md:space-y-4 flex items-center justify-center flex-col`}>
                    <h1 className="font-black text-2xl md:text-6xl text-white text-center font-panchang-bold">
                        Contactez-nous
                    </h1>
                </div>
            </div>
            <Toaster
                toastOptions={{
                    className: " bg-[#1e1e1e] text-primary ",
                }}
            />
            <div className=" container w-full flex-col xl:flex-row  gap-16 flex p-8  justify-between items-center ">
                          
                <form onSubmit={sendEmail} className="flex flex-col gap-4   w-full ">
                        <div className=" flex flex-col gap-2 w-full">
                            <input  value={formData.fullName} onChange={handleInputChange} type="text" name="fullName" id="fullName" placeholder=" Nom et Prénom" className={`${!formData.fullName && validation && "border-red-500 placeholder:text-red-500"}  placeholder:font-medium capitalize placeholder:text-primary  text-[#22242B] px-4 h-14 rounded   border-primary  border-2 bg-[#F4F8FF]`} />
                            <p className="text-red-500 text-xs font-medium">{!formData.fullName &&validation &&"Veuillez entrer votre nom complet."}</p>
                        </div>
                        <div className=" flex flex-col gap-2 w-full">
                            <input value={formData.phone} onChange={handleInputChange}  type="tel" name="phone" id="phone" placeholder="Téléphone" className={`${!formData.phone && validation && "border-red-500 placeholder:text-red-500"} px-4 rounded text-[#22242B]  capitalize border-primary   placeholder:font-medium placeholder:text-primary  border-2 bg-[#F4F8FF] h-14`}/>
                            <p className="text-red-500 text-xs font-medium">{!formData.phone &&validation &&"Veuillez entrer votre numéro de téléphone."}</p>
                        </div>
                        <div className=" flex flex-col gap-2 w-full">
                            <select value={formData.purpose} onChange={handleInputChange} name="purpose" id="purpose" className={`${!formData.purpose && validation && "border-red-500 text-red-500"}  rounded  h-14 px-4 border-primary   text-primary  capitalize border-2 bg-[#F4F8FF] font-medium   text-bold`} >
                            <option value={''} > type de projett de Rénovation * </option>
                                <option value="Étanchéité" >Étanchéité</option>
                                <option value="Toiture">Toiture</option>
                                <option value="Plomberie">Plomberie</option>
                                <option value="Chauffage & Pompe à Chaleur">Chauffage & Pompe à Chaleur</option>
                                <option value="Électricité">Électricité</option>
                                <option value="Façade & Isolation">Façade & Isolation</option>
                                <option value="Création de Salle de Bain Complète">Création de Salle de Bain Complète</option>
                                <option value="Plaque de Plâtre & Cloisons">Plaque de Plâtre & Cloisons</option>
                                <option value="Carrelage">Carrelage</option>
                                <option value="Construction & Aménagement">Construction & Aménagement</option>
                                <option value="Rénovation Complète">Rénovation Complète</option>
                                <option value="Amélioration Énergétique">Amélioration Énergétique</option>
                                <option value="Autre">Autre</option>
                            </select>
                            <p className="text-red-500 text-xs font-medium">{!formData.purpose &&validation &&"Sélectionnez votre objectif."}</p>
                        </div>
                        <div className=" flex flex-col gap-2 w-full">
                            <textarea value={formData.msg} onChange={handleInputChange}  placeholder=" Votre Message "  className={`  placeholder:font-medium capitalize placeholder:text-primary  text-[#22242B] p-4 rounded   border-primary   border-2 bg-[#F4F8FF]`} rows={6} name="msg" id=""></textarea>
                        </div>
                        <button type="submit" className="bg-primary  py-4 hover:text-primary  hover:bg-[#F4F8FF] border-2 border-primary   duration-500 font-medium text-white "> {isLoading ? "Envoi en cours..." : 'Envoyer'} </button>
                    
                </form>
            </div>

        </div>
    )
}