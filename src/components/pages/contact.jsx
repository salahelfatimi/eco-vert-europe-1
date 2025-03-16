"use client";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

export default function Contact(){
    const [etaps,setEtaps]=useState(1)
    const [isLoading, setIsLoading] = useState(false);
    const [validation, setValidation] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        adresse:"",

        purpose: "",
        details: "",
        budget: 0,
        delai:"",
        localisation: '',

        comment: "",
        remarques: "",
      
        
    });
    
    console.log(formData)
    const sendEmail = async (e) => {
        e.preventDefault();
        
        setValidation(true);
        if ( formData.fullName && formData.phone && formData.adresse && formData.purpose && formData.details ) {
        setIsLoading(true);
        const loadingToast = toast.loading("Envoi en cours...");
        try {
            const response = await fetch("/api/contact", {
            method: "POST",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(formData),});
            if (response.status === 200) {
            setFormData({
                fullName: "",
                phone: "",
                email: "",
                adresse:"",
        
                purpose: "",
                details: "",
                budget: 0,
                delai:"",
        
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
        setFormData({...formData,[name]: value,});
    };
    const handeleNext =(e)=>{
        if(etaps==1){
            !formData.fullName  && !formData.phone && !formData.adresse ? setValidation(true):e == 'suivante' && etaps<3 && setEtaps(etaps+1)
        }
        if(etaps==2){
            !formData.purpose  && !formData.details ? setValidation(true):e == 'suivante' && etaps<3 && setEtaps(etaps+1)
        }
        if(etaps==3){
            e == 'suivante' && etaps<3 && setEtaps(etaps+1)
        }
        e == 'retour' && etaps>1 && setEtaps(etaps-1)
    }

    return(
        <div id="contactez-nous" className=" relative flex  flex-col py-8  items-center justify-center pt-40  ">
            <Toaster toastOptions={{className: " bg-[#1e1e1e] text-primary",}}/>
            <h1 className="font-semibold text-3xl xl:text-3xl font-panchang  text-primary p-4 text-center  capitalize   ">Formulaire de Contact pour Projets de Rénovation</h1>
            <p className=" font-panchang text-white container text-center">Merci de remplir le formulaire ci-dessous pour nous contacter ou demander un devis pour vos projets de rénovation, nous vous répondrons dans les plus brefs délais.</p>
            <div className=" flex flex-row justify-between items-center gap-2 w-full container py-6">
                <div className={` ${etaps === 1 || etaps === 2 || etaps === 3 ? ' bg-primary' : 'border-primary border-2'}  min-w-10 min-h-10 flex items-center justify-center rounded-full`}>
                    <span className=" font-panchang-bold text-xl text-white">1</span>
                </div>
                <span className=" h-[0.05rem] w-full bg-white "></span>
                <div className={` ${etaps === 2 || etaps === 3 ? ' bg-primary' : 'border-primary border-2'}  min-w-10 min-h-10 flex items-center justify-center rounded-full`}>
                    <span className=" font-panchang-bold text-xl text-white">2</span>
                </div>
                <span className=" h-[0.05rem] w-full bg-white "></span>
                <div className={` ${etaps === 3 ? ' bg-primary' : 'border-primary border-2'}  min-w-10 min-h-10 flex items-center justify-center rounded-full`}>
                    <span className=" font-panchang-bold text-xl text-white">3</span>
                </div>
            </div>
            <div className=" container w-full flex-col xl:flex-row  gap-16 flex p-8  justify-between items-center ">         
                <form onSubmit={sendEmail} className="flex flex-col gap-4   w-full ">
                        <div className={`flex flex-col gap-4 w-full ${ etaps == 1 ?'block':'hidden'}`}>
                            <div className=" flex flex-col gap-2 w-full">
                                <input  value={formData.fullName} onChange={handleInputChange} type="text" name="fullName" id="fullName" placeholder=" Nom et Prénom * " className={`${!formData.fullName && validation && "border-red-500 placeholder:text-red-500"}  placeholder:font-medium capitalize placeholder:text-primary text-white px-4 h-14 rounded  font-panchang  border-primary border-2 bg-tertiary`} />
                            </div>
                            <div className=" flex flex-col gap-2 w-full">
                                <input value={formData.phone} onChange={handleInputChange}  type="tel" name="phone" id="phone" placeholder="Téléphone * " className={`${!formData.phone && validation && "border-red-500 placeholder:text-red-500"} px-4 rounded text-white  capitalize border-primary placeholder:font-medium placeholder:text-primary border-2 bg-tertiary h-14 font-panchang`}/>
                            </div>
                            <div className=" flex flex-col gap-2 w-full">
                                <input value={formData.email} onChange={handleInputChange}  type="email" name="email" id="email" placeholder="Adresse e-mail" className={` px-4 rounded text-white  capitalize border-primary placeholder:font-medium placeholder:text-primary border-2 bg-tertiary h-14 font-panchang`}/>
                            </div>
                            <div className=" flex flex-col gap-2 w-full">
                                <input value={formData.adresse} onChange={handleInputChange}  type="text" name="adresse" id="adresse" placeholder="Adresse postale * " className={`${!formData.adresse && validation && "border-red-500 placeholder:text-red-500"} px-4 rounded text-white  capitalize border-primary placeholder:font-medium placeholder:text-primary border-2 bg-tertiary h-14 font-panchang`}/>
                            </div>
                        </div>
                        <div className={`flex flex-col gap-4 w-full ${ etaps == 2 ?'block':'hidden'}`}>
                            <div className=" flex flex-col gap-2 w-full">
                                <select value={formData.purpose} onChange={handleInputChange} name="purpose" id="purpose" className={`${!formData.purpose && validation && "border-red-500 text-red-500"}  rounded  h-14 px-4 border-primary text-primary capitalize border-2 bg-tertiary font-medium   text-bold font-panchang`} >
                                    <option value={''} > type de projett de Rénovation * </option>
                                    <option value="Vitrerie & Miroiterie" >Vitrerie & Miroiterie</option>
                                    <option value="Plomberie">Plomberie</option>
                                    <option value="Climatisation">Climatisation</option>
                                    <option value="Chauffage">Chauffage</option>
                                    <option value="Installation Borne De Recharge">Installation Borne De Recharge</option>
                                    <option value="Serrurerie">Serrurerie</option>
                                    <option value="Electricité">Electricité</option>
                                    <option value="Autre">Autre</option>
                                </select>
                            </div>
                            <div className=" flex flex-col gap-2 w-full">
                                <textarea value={formData.details} onChange={handleInputChange}  placeholder=" Détails du Projet * "  className={` font-panchang placeholder:font-medium capitalize placeholder:text-primary text-white p-4 rounded   border-primary border-2 bg-tertiary`} rows={3} name="details" id=""></textarea>
                            </div>
                            <div className=" flex flex-col gap-2 w-full">
                                <input  value={formData.budget} onChange={handleInputChange} type="number" name="budget" id="budget" placeholder="Budget" className={`  placeholder:font-medium capitalize placeholder:text-primary text-white px-4 h-14 rounded  font-panchang  border-primary border-2 bg-tertiary [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`} />
                            </div>
                            <div className=" flex flex-col gap-2 w-full">
                                <input value={formData.delai} onChange={handleInputChange}  type="date" name="delai" id="delai" placeholder="Délai" className={`${!formData.delai && validation && "border-red-500 placeholder:text-red-500"} px-4 rounded text-white  capitalize border-primary placeholder:font-medium placeholder:text-primary border-2 bg-tertiary h-14 font-panchang`}/>
                            </div>
                         
                        </div>
                        <div className={`flex flex-col gap-4 w-full ${ etaps == 3 ?'block':'hidden'}`}>
                            <div className=" flex flex-col gap-2 w-full">
                                <select value={formData.comment} onChange={handleInputChange} name="comment" id="Comment" className={` rounded  h-14 px-4 border-primary text-primary capitalize border-2 bg-tertiary font-medium   text-bold font-panchang`} >
                                    <option value={''} > Comment avez-vous entendu parler de nous ? </option>
                                    <option value="Recherche sur Internet" >Recherche sur Internet</option>
                                    <option value="Recommandation d'un ami/entreprise">Recommandation d'un ami/entreprise</option>
                                    <option value="Publicité">Publicité</option>
                                    <option value="Autre (veuillez préciser)">Autre (veuillez préciser)</option>
                                    
                                </select>
                            </div>
                            <div className=" flex flex-col gap-2 w-full">
                                <textarea value={formData.remarques} onChange={handleInputChange}  placeholder=" Remarques / Commentaires (optionnel) "  className={` font-panchang placeholder:font-medium capitalize placeholder:text-primary text-white p-4 rounded   border-primary border-2 bg-tertiary`} rows={3} name="remarques" id="remarques"></textarea>
                            </div>
                        </div>
                        <div className=" w-full flex flex-col md:flex-row gap-4">
                            <button onClick={()=>(handeleNext('retour'))} type="button" className= {`  w-full rounded-full bg-primary py-4 hover:text-primary hover:bg-tertiary border-2 border-primary duration-500 font-medium text-white `}> Retour </button>
                            <button onClick={()=>(handeleNext('suivante'))} type="button" className= {` ${etaps==3 ? 'hidden':'block'} w-full rounded-full bg-primary py-4 hover:text-primary hover:bg-tertiary border-2 border-primary duration-500 font-medium text-white `}> Suivante </button>
                            <button type="submit" className={`${etaps==3 ? 'block':'hidden'} w-full rounded-full bg-primary py-4 hover:text-primary hover:bg-tertiary border-2 border-primary duration-500 font-medium text-white `}> {isLoading ? "Envoi en cours..." : 'Envoyer'} </button>
                        </div>
                       
                </form>
            </div>

        </div>
    )
}