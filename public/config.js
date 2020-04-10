var config = {
    style: 'mapbox://styles/mehdibaha/ck8n2wsq20s341iou1e0mixmc',
    accessToken: 'pk.eyJ1IjoibWVoZGliYWhhIiwiYSI6ImNrOGZ3bWdmMDAya24zZm8xbGJkYWw3cXkifQ.fS6Ny7_0bZ7swBKW7rvgEQ',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'Un regard positif sur le Coronavirus',
    subtitle: 'ou la Map Des Bonnes Nouvelles',
    byline: 'Par Mehdi Baha',
    footer: 'Sources: Johns Hopkins University Center, Wikipedia',
    colors: {'2-world': '#f7952e', '3-eurasia': '#ff4d88'},
    chapters: [
        {
            id: '1-china',
            title: `Genèse d'une pandémie inédite`,
            description: `
            Le premier patient présentant des symptômes du <span style="font-weight:700;color:#f7952e">coronavirus est dépisté en Chine</span>, dans la province de Hubei.
            Il s'agirait d'un homme de 55 ans.<br>Le 17 décembre, Zhang Jixian, un médecin de Hubei, prévient les autorités qu'il ne s'agit pas d'une simple pneumonie atypique.<br>
            Le marché de Wuhan est suspecté d'être le point de départ de l'épidémie.
            `,
            location: {
                center: [83.767, 30.901],
                zoom: 3.81,
                pitch: 28.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: '2-world-first',
                    opacity: 0.5,
                }
            ],
            onChapterExit: [
                {
                    layer: '2-world-first',
                    opacity: 0
                }
            ]
        },
        {
            id: '2-world',
            title: `Genèse d'une pandémie inédite`,
            description: `
                Depuis, ce virus s’est propagé dans plus de 180 pays dans le monde. <span style="font-weight:700;color:#f7952e">Plus d'1,6M de personnes ont été touchées et le virus a causé plus 96 000 morts.</span><br>
                Pourtant, depuis le début de cette crise, des efforts collectifs collossaux ont été déployés.<br><b>Cette page a pour but de mettre en lumière ces actions positives.</b>
            `,
            location: {
                center: [-0.109, 20.626],
                zoom: 2.22,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: '2-world-last',
                    opacity: 0.4
                }
            ],
            onChapterExit: [
                {
                    layer: '2-world-last',
                    opacity: 0.0
                }
            ]
        },
        {
            id: '3-eurasia',
            title: `Des échanges vitaux qui ne cessent d'augmenter`,
            description: `
               Près de 2 millions de <span style="font-weight:700;color:#ff4d88">masques de protection</span> et plus de 50.000 <span style="font-weight:700;color:#ff4d88">tests de dépistage</span> ont transité entre l’Europe et l’Asie.
               Ces équipements médicaux ont tous transité sous la forme d'aide humanitaire.
            `,
            location: {
                center: [44.131, 42.510],
                zoom: 2.91,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: '3-eurasia',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: '3-eurasia',
                    opacity: 0.0
                }
            ]
        },
        {
            id: '4-europe',
            title: `Progresser plus vite que le virus ne se propage`,
            description: `
                Les technologies d’aujourd’hui arrivent à freiner l’avancée de cette pandémie, mais les technologies de demain sont potentiellement les seuls capables de l’arrêter.
                En Europe, <span style="font-weight:700;color:#808080">plus de 26 essais cliniques</span> ont été mis au point pour rechercher des nouveaux traitements.
            `,
            location: {
                center: [3.477, 48.352],
                zoom: 3.76,
                pitch: 28.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: '4-europe',
                    opacity: 0.3
                }
            ],
            onChapterExit: [
                {
                    layer: '4-europe',
                    opacity: 0.0
                }
            ]
        },
        {
            id: '5-france',
            title: `La France fait preuve de solidarité`,
            description: `
                A cause du confinement, des centaines d’établissements, restaurants, bars, ont vu chacune de leur existence menacée.
                En France, afin de pallier à ce risque, <span style="font-weight:700;color:#cc00c2">plus de 900 campagnes de financement</span> ont été lancées. Avec pour seul objetif: aider ces établissements à survivre.
            `,
            location: {
                center: [2.46526, 46.84656],
                zoom: 5.41,
                pitch: 28.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: '5-france',
                    opacity: 0.3
                }
            ],
            onChapterExit: [
                {
                    layer: '5-france',
                    opacity: 0.0
                }
            ]
        },
        {
            id: '6-france-usa',
            title: `L'information circule toujours grâce à une infrastructure solide`,
            description: `
                Le confinement généralisé accroit nos besoins en <span style="font-weight:700;color:#873dff">technologies de communication</span>, et met en risque de saturation l’infrastructure existante.
                Pourtant, ce pic de consommation, n’a causé aucun incident technique majeur de nature à compromettre nos services de communications.
                Cela est dû aux efforts communs d'organisations et des personnes, pour que <span style="font-weight:700;color:#873dff">l’information circule toujours.</span>
            `,
            location: {
                center: [-48.098, 39.035],
                zoom: 3.25,
                pitch: 12.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: '6-france-usa',
                    opacity: 0.7
                }
            ],
            onChapterExit: [
                {
                    layer: '6-france-usa',
                    opacity: 0.0
                }
            ]
        },
        {
            id: '7-usa',
            title: `Chez les américains, the show must go on`,
            description: `
                Devant un contexte économique incertain, de nombreuses entreprises ont entrepris de <span style="font-weight:700;color:#ff2e2e">geler leurs recrutements</span>.
                Aux Etats-Unis, sur une base de 350 entreprises sondées, plus de 280 sociétés ont décidé de garder <span style="font-weight:700;color:#00d12d">leurs candidatures ouvertes et de maintenir les recrutements</span> malgré ce contexte difficile.
            `,
            location: {
                center: [-97.76231, 35.94771],
                zoom: 4.35,
                pitch: 24.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: '7-usa',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: '7-usa',
                    opacity: 0.0
                }
            ]
        },
        {
            id: '8-world',
            title: 'Un grand merci',
            description: `
                Pour finir, il est important de mettre en lumière le personnel soignant.<br>
                Ils sont <span style="font-weight:700;color:#6a57ff">40 millions de médecins</span> et <span style="font-weight:700;color:#ff8fff">infirmiers</span> dans le monde à travailler d’arrache-pied pour soigner les plus vulnérables d’entre nous.
            `,
            location: {
                center: [18.26332, 5.86677],
                zoom: 2.12,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: '8-world-physicians',
                    opacity: 0.5
                },
                {
                    layer: '8-world-nurses',
                    opacity: 0.5
                }  
            ],
            onChapterExit: [
                {
                    layer: '8-world-physicians',
                    opacity: 0.0
                },
                {
                    layer: '8-world-nurses',
                    opacity: 0.0
                }  
            ]
        },
        {
            id: '9-wrap-up',
            description: `
                Merci d'avoir suivi cette visualisation. Si vous l’appréciez, n’hésitez pas à la partager sans modération.
                Si vous voulez racontez vos propres histoires avec un format similaire, n’hésitez pas à me contacter (elmehdi.baha@gmail.com) pour en savoir +.
            `,
            location: {
                center: [18.26332, 5.86677],
                zoom: 2.12,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },    
    ]
};
