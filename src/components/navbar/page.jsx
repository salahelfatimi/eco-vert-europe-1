'use client';
import { File, MapPin, Menu, Phone, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const itemNav=[
        {title:'Accueil',href:'/'},
        {
            title: 'Nos services',
            href: '#',
            dropdown: [
                { title: 'Toiture & Étanchéité', href: '/nos_service/toiture_etancheite' },
                { title: 'Plomberie', href: '/nos_service/plomberie' },
                { title: 'Chauffage & Pompe à Chaleur', href: '/nos_service/chauffage_pompe_a_chaleur' },
                { title: 'Électricité', href: '/nos_service/electricite' },
                { title: 'Façade & Isolation', href: '/nos_service/facade_isolation' },
                { title: 'Création de Salle de Bain Complète', href: '/nos_service/creation_salle_de_bain' },
                { title: 'Plaque de Plâtre & Cloisons', href: '/nos_service/plaque_de_platre_cloisons' },
                { title: 'Carrelage', href: '/nos_service/carrelage' },
                { title: 'Construction & Aménagement', href: '/nos_service/construction_amenagement' },
                { title: 'Rénovation Complète', href: '/nos_service/renovation_complete' },
                { title: 'Amélioration Énergétique', href: '/nos_service/amelioration_energetique' },
            ],
        },
        // {title:'Réalisations',href:'/Réalisations'},
        {title:'Articles',href:'/articles'},
        {title:'Contact',href:'/contact'},
    ]

    return (
       
            <div className="fixed z-50 right-0 left-0">
                <div className="bg-white py-6 ">
                    <div className="px-20 flex justify-between items-center">
                        <Link href="/" className="flex gap-4 items-center justify-center">
                            {/* <Image
                                src="/logo.svg"
                                width={70}
                                height={70}
                                priority
                                alt="Services Reparation"
                            /> */}
                            <h2>Eco vert europé</h2>
                        </Link>
                        <div className="xl:block hidden">
                            <ul className="flex gap-10 items-center">
                                {itemNav.map((ele, index) => (
                                    <li key={index} className="relative group">
                                        <div className="flex items-center gap-1 cursor-pointer font-medium text-sm font-panchang text-tertiary hover:text-primary">
                                            <Link href={ele.href} className="flex items-center"> {ele.title} {ele.dropdown && <ChevronDown size={16} />} </Link>
                                        </div>
                                        {ele.dropdown && (
                                            <ul className="absolute left-0 top-full bg-white shadow-lg mt-2  border border-primary w-48 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300">
                                                {ele.dropdown.map((item, idx) => (
                                                   <li key={idx} className="hover:bg-primary hover:text-white text-xs font-panchang" > <Link href={item.href} className="block px-4 py-2 text-tertiary hover:text-white" > {item.title} </Link> </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="xl:hidden block">
                            <Menu size={40} className="cursor-pointer" onClick={() => setOpen(!open)} />
                            {open && (
                                <div className="fixed z-50 inset-0 bg-white p-4">
                                    <X size={40} className="text-red-600 cursor-pointer" onClick={() => setOpen(false)} />
                                    <ul className="mt-8 space-y-4">
                                        {itemNav.map((ele, index) => (
                                            <li key={index} className="text-lg">
                                                {ele.dropdown ? (
                                                    <div className="flex flex-col">
                                                       <button className="flex justify-between items-center w-full text-left font-medium text-black hover:text-[#0276FF]" onClick={() => setDropdownOpen((prev) => prev === index ? null : index ) } >
                                                            {ele.title}
                                                            <ChevronDown size={20} className={`transition-transform duration-300 ${ dropdownOpen === index ? "rotate-180" : "" }`} />
                                                        </button>
                                                        {dropdownOpen === index && (
                                                            <ul className="ml-4 mt-2 space-y-2">
                                                                {ele.dropdown.map((item, idx) => (
                                                                    <li key={idx}>
                                                                       <Link href={item.href} className="block text-black hover:text-[#0276FF]" onClick={() => setOpen(false)} > {item.title} </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </div>
                                                ) : (
                                                    <Link href={ele.href} className="block text-black hover:text-[#0276FF]" onClick={() => setOpen(false)} > {ele.title} </Link>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
       
    );
}
