import Image from "next/image";
import { ClipboardList, Box, Layout, HardHat, Settings } from 'lucide-react';

export default function Processus() {
    return (
        <div className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image src="/img/img3.jpg" layout="fill" objectFit="cover" quality={50}  alt="Eco Vert Europé" title="Eco Vert Europé" />
                <div className="absolute inset-0 bg-black opacity-70"></div> 
            </div>
            <div className="container relative z-10">
                <h2 className="font-panchang-bold font-medium text-xl uppercase text-white text-2xl lg:text-4xl text-center mb-12">
                    Notre Processus <br /> de <span className="text-primary">Travaux</span>
                </h2>
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="flex items-start gap-6">
                        <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                            <span className="font-panchang font-bold text-white text-lg">1</span>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <ClipboardList className="text-primary w-5 h-5" />
                                <h3 className="font-panchang text-primary font-medium text-xl">Étude & Conception</h3>
                            </div>
                            <p className="font-panchang text-lg text-gray-300 mt-2">
                                Analyse de votre projet et définition des solutions adaptées pour vos travaux (toiture, chauffage, plomberie, etc.).
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-6">
                        <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                            <span className="font-panchang font-bold text-white text-lg">2</span>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <Box className="text-primary w-5 h-5" />
                                <h3 className="font-panchang text-primary font-medium text-xl">Sélection des Matériaux & Équipements</h3>
                            </div>
                            <p className="font-panchang text-lg text-gray-300 mt-2">
                                Choix de matériaux durables et performants pour l’électricité, l’isolation, le carrelage, la façade, la peinture, etc.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-6">
                        <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                            <span className="font-panchang font-bold text-white text-lg">3</span>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <Layout className="text-primary w-5 h-5" />
                                <h3 className="font-panchang font-medium text-xl text-primary">Visualisation & Planification</h3>
                            </div>
                            <p className="font-panchang text-lg text-gray-300 mt-2">
                                Conception de plans détaillés et modélisation 3D pour une meilleure projection de votre rénovation.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-6">
                        <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                            <span className="font-panchang font-bold text-white text-lg">4</span>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <HardHat className="text-primary w-5 h-5" />
                                <h3 className="font-panchang text-primary font-medium text-xl">Travaux d’Installation & Réfection</h3>
                            </div>
                            <ul className="font-panchang text-lg text-gray-300 list-disc pl-10 mt-2">
                                <li>Toiture & Étanchéité</li>
                                <li>Électricité & Plomberie</li>
                                <li>Chauffage & Pompe à Chaleur</li>
                                <li>Carrelage & Plaque de Plâtre</li>
                                <li>Peinture Intérieure & Extérieure</li>
                                <li>Création Complète de Salle de Bain</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-start gap-6">
                        <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                            <span className="font-panchang font-bold text-white text-lg">5</span>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <Settings className="text-primary w-5 h-5" />
                                <h3 className="font-panchang text-primary font-medium text-xl">Suivi & Coordination</h3>
                            </div>
                            <p className="font-panchang text-lg text-gray-300 mt-2">
                                Supervision des travaux, respect des délais et gestion des équipes spécialisées pour garantir un résultat optimal.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}