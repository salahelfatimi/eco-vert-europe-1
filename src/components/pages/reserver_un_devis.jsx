"use client";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Reserver_un_devis() {
    const [etaps, setEtaps] = useState(1)
    const [isLoading, setIsLoading] = useState(false);
    const [validation, setValidation] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        adresse: "",

        purpose: "",
        details: "",
        budget: 0,
        delai: "",
        localisation: '',

        comment: "",
        remarques: "",


    });

    console.log(formData)
    const sendEmail = async (e) => {
        e.preventDefault();

        setValidation(true);
        if (formData.fullName && formData.phone && formData.adresse && formData.purpose && formData.delai) {
            setIsLoading(true);
            const loadingToast = toast.loading("Envoi en cours...");
            try {
                const response = await fetch("/api/reserver_un_devis", {
                    method: "POST",
                    headers: { "Content-Type": "application/json", },
                    body: JSON.stringify(formData),
                });
                if (response.status === 200) {
                    setFormData({
                        fullName: "",
                        phone: "",
                        email: "",
                        adresse: "",

                        purpose: "",
                        details: "",
                        budget: 0,
                        delai: "",

                        comment: "",
                        remarques: "",
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
        setFormData({ ...formData, [name]: value, });
    };

    const handleNext = (e) => {
        if (e === 'suivante') {
            if (etaps === 1) {
                if (!formData.fullName || !formData.phone || !formData.adresse) {
                    toast.error('Please fill in all required fields.');
                    setValidation(true);
                    return;
                }
            } else if (etaps === 2) {
                if (!formData.purpose || !formData.delai) {
                    toast.error('Please fill in all required fields.');
                    setValidation(true);
                    return;
                }
            }
            if (etaps < 3) {
                setEtaps(etaps + 1);
            }
        } else if (e === 'retour' && etaps > 1) {
            setEtaps(etaps - 1);
        }
    };

    return (
        <div id="contactez-nous" className=" relative flex  font-panchang flex-col pb-8  items-center justify-center   ">
            <div className="relative h-[30rem] min-w-full w-full mb-10">
                <div className="bg-black opacity-60 inset-0 absolute"></div>
                <Image
                    width={1920}
                    height={1080}
                    src="/img/contact.jpg" 
                    alt="Carrelage – Pose et Rénovation de Carrelage"
                    className="object-cover object-top h-[30rem] min-w-full w-full"
                    title="Carrelage – Pose et Rénovation de Carrelage"
                />
                <div className={`absolute inset-0 container text-center space-y-1 p-2 rounded-xl md:space-y-4 flex items-center justify-center flex-col`}>
                    <h1 className="font-black text-2xl md:text-6xl text-white text-center font-panchang-bold">
                        Réservez Votre Devis Gratuit en Ligne avec Eco Vert Europé                    
                    </h1>
                </div>
            </div>
            <Toaster position="bottom-right" reverseOrder={false} />
            <p className=" font-panchang text-primary container text-center">Merci de remplir le formulaire ci-dessous pour nous contacter ou demander un devis pour vos projets de rénovation, nous vous répondrons dans les plus brefs délais.</p>
            <div className=" flex flex-row justify-between items-center gap-2 w-full container py-6">
                <div className={` ${etaps === 1 || etaps === 2 || etaps === 3 ? ' bg-primary text-white' : 'border-primary border-2 text-primary'}  min-w-10 min-h-10 flex items-center justify-center rounded-full`}>
                    <span className=" font-panchang-bold text-xl ">1</span>
                </div>
                <span className=" h-[0.05rem] w-full bg-primary "></span>
                <div className={` ${etaps === 2 || etaps === 3 ? ' bg-primary text-white' : 'border-primary border-2 text-primary'}  min-w-10 min-h-10 flex items-center justify-center rounded-full`}>
                    <span className=" font-panchang-bold text-xl ">2</span>
                </div>
                <span className=" h-[0.05rem] w-full bg-primary "></span>
                <div className={` ${etaps === 3 ? ' bg-primary text-white' : 'border-primary border-2 text-primary'}  min-w-10 min-h-10 flex items-center justify-center rounded-full`}>
                    <span className=" font-panchang-bold text-xl ">3</span>
                </div>
            </div>
            <div className=" container w-full flex-col xl:flex-row  gap-16 flex p-8  justify-between items-center ">
                <form onSubmit={sendEmail} className="flex flex-col gap-4   w-full ">
                    <div className={`flex flex-col gap-4 w-full ${etaps == 1 ? 'block' : 'hidden'}`}>
                        <div className=" flex flex-col gap-2 w-full">
                            <input value={formData.fullName} onChange={handleInputChange} type="text" name="fullName" id="fullName" placeholder=" Nom et Prénom * " className={`${!formData.fullName && validation && "border-red-500 placeholder:text-red-500"}  placeholder:font-medium capitalize placeholder:text-primary text-white px-4 h-14 rounded  font-panchang  border-primary border-2 bg-white`} />
                        </div>
                        <div className=" flex flex-col gap-2 w-full">
                            <input value={formData.phone} onChange={handleInputChange} type="tel" name="phone" id="phone" placeholder="Téléphone * " className={`${!formData.phone && validation && "border-red-500 placeholder:text-red-500"} px-4 rounded text-white  capitalize border-primary placeholder:font-medium placeholder:text-primary border-2 bg-white h-14 font-panchang`} />
                        </div>
                        <div className=" flex flex-col gap-2 w-full">
                            <input value={formData.email} onChange={handleInputChange} type="email" name="email" id="email" placeholder="Adresse e-mail" className={` px-4 rounded text-white  capitalize border-primary placeholder:font-medium placeholder:text-primary border-2 bg-white h-14 font-panchang`} />
                        </div>
                        <div className=" flex flex-col gap-2 w-full">
                            <input value={formData.adresse} onChange={handleInputChange} type="text" name="adresse" id="adresse" placeholder="Adresse postale * " className={`${!formData.adresse && validation && "border-red-500 placeholder:text-red-500"} px-4 rounded text-white  capitalize border-primary placeholder:font-medium placeholder:text-primary border-2 bg-white h-14 font-panchang`} />
                        </div>
                    </div>
                    <div className={`flex flex-col gap-4 w-full ${etaps == 2 ? 'block' : 'hidden'}`}>
                        <div className=" flex flex-col gap-2 w-full">
                            <select value={formData.purpose} onChange={handleInputChange} name="purpose" id="purpose" className={`${!formData.purpose && validation && "border-red-500 text-red-500"}  rounded  h-14 px-4 border-primary  capitalize border-2 bg-white font-medium   text-bold font-panchang`} >
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
                        </div>
                        <div className=" flex flex-col gap-2 w-full">
                            <textarea value={formData.details} onChange={handleInputChange} placeholder=" Détails du Projet * " className={` font-panchang placeholder:font-medium capitalize  p-4 rounded   border-primary border-2 bg-white`} rows={3} name="details" id=""></textarea>
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <div className="relative">
                                <input
                                value={formData.budget ? `€${formData.budget}` : ''}
                                onChange={(e) => {
                                    const value = e.target.value.replace(/[^0-9]/g, ''); // strip non-numeric
                                    handleInputChange({ target: { name: 'budget', value } });
                                }}
                                type="text"
                                name="budget"
                                id="budget"
                                placeholder="€ Budget"
                                className="placeholder:font-medium capitalize w-full px-4 h-14 rounded font-panchang border-primary border-2 bg-white"
                                />
                            </div>
                        </div>
                        <div className=" flex flex-col gap-2 w-full">
                            <input value={formData.delai} onChange={handleInputChange} type="date" name="delai" id="delai" placeholder="Délai" className={`${!formData.delai && validation && "border-red-500 placeholder:text-red-500"} px-4 rounded  capitalize border-primary placeholder:font-medium  border-2 bg-white h-14 font-panchang`} />
                        </div>

                    </div>
                    <div className={`flex flex-col gap-4 w-full ${etaps == 3 ? 'block' : 'hidden'}`}>
                        <div className=" flex flex-col gap-2 w-full">
                            <select value={formData.comment} onChange={handleInputChange} name="comment" id="Comment" className={` rounded  h-14 px-4 border-primary text-primary capitalize border-2 bg-white font-medium   text-bold font-panchang`} >
                                <option value={''} > Comment avez-vous entendu parler de nous ? </option>
                                <option value="Recherche sur Internet" >Recherche sur Internet</option>
                                <option value="Recommandation d'un ami/entreprise">Recommandation d'un ami/entreprise</option>
                                <option value="Publicité">Publicité</option>
                                <option value="Autre (veuillez préciser)">Autre (veuillez préciser)</option>

                            </select>
                        </div>
                        <div className=" flex flex-col gap-2 w-full">
                            <textarea value={formData.remarques} onChange={handleInputChange} placeholder=" Remarques / Commentaires (optionnel) " className={` font-panchang placeholder:font-medium capitalize placeholder:text-primary text-white p-4 rounded   border-primary border-2 bg-white`} rows={3} name="remarques" id="remarques"></textarea>
                        </div>
                    </div>
                    <div className=" w-full flex flex-col md:flex-row gap-4">
                        <button onClick={() => handleNext('retour')} type="button" className={`${etaps === 1 ? 'hidden' : 'block'} w-full rounded-full bg-primary py-4 hover:text-primary hover:bg-white border-2 border-primary duration-500 font-medium text-white`}>Retour</button>
                        <button onClick={() => handleNext('suivante')} type="button" className={`${etaps === 3 ? 'hidden' : 'block'} w-full rounded-full bg-primary py-4 hover:text-primary hover:bg-white border-2 border-primary duration-500 font-medium text-white`}>Suivante</button>
                        <button type="submit" className={`${etaps === 3 ? 'block' : 'hidden'} w-full rounded-full bg-primary py-4 hover:text-primary hover:bg-white border-2 border-primary duration-500 font-medium text-white`}>{isLoading ? "Envoi en cours..." : 'Envoyer'}</button>
                    </div>

                </form>
            </div>

        </div>
    )
}