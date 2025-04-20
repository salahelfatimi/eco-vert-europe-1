export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.eco-vert-europe.com';

  const routes = [
    '',
    '/contact',
    '/a_propos',
    '/reserver_un_devis',
    '/nos_service',
    '/nos_service/amelioration_energetique',
    '/nos_service/carrelage',
    '/nos_service/chauffage_pompe_a_chaleur',
    '/nos_service/construction_amenagement',
    '/nos_service/creation_salle_de_bain',
    '/nos_service/electricite',
    '/nos_service/etancheite',
    '/nos_service/facade_isolation',
    '/nos_service/plaque_de_platre_cloisons',
    '/nos_service/plomberie',
    '/nos_service/renovation_complete',
    '/nos_service/revetements_de_sols_en_resine',
    '/nos_service/toiture',
  ];

  const sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return Response.json(sitemap);
}
