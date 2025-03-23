const menuItems = [
    { title: 'Accueil', href: '/' },
    {
        title: 'Nos services',
        href: '/nos_service',
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
    { title: 'Articles', href: '/articles' },
    { title: 'Contact', href: '/contact' },
];

export default menuItems;