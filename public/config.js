var config = {
    style: 'mapbox://styles/mehdibaha/ck8n2wsq20s341iou1e0mixmc',
    accessToken: 'pk.eyJ1IjoibWVoZGliYWhhIiwiYSI6ImNrOGZ3bWdmMDAya24zZm8xbGJkYWw3cXkifQ.fS6Ny7_0bZ7swBKW7rvgEQ',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'Un regard positif sur le Coronavirus',
    subtitle: 'Récapitulatif des efforts déployés pour résoudre une crise inédite',
    byline: 'Par Mehdi Baha',
    footer: 'Sources: Johns Hopkins University Center, Wikipedia',
    chapters: [
        {
            id: '1-china',
            title: `Genèse d'une pandémie inédite`,
            description: `La crise du Coronavirus a commencé en Chine, dans la province de Wuhan. Les premiers cas sont apparus au courant du mois de décembre 2019.`,
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
                Depuis, ce virus s’est propagé partout dans le monde et a atteint plus de 180 pays. 1 200 000 personnes ont été touchées et le virus a causé plus 65 000 morts.
                Cette crise sanitaire est inédite et son issue est incertaine. Cela nous pousse naturellement à suivre l’évolution des seules informations que nous maîtrisons.
                Pourtant, des femmes et des hommes sont mobilisés depuis le début de cette crise. Ils contribuent aux développement de nouveaux soins, aident les plus vulnérables ou soutiennent ceux qui le peuvent.
                Cette page a pour vocation de mettre en lumière l’esprit de collaboration et de bravoure dont l’humanité fait pour l’instant preuve.
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
                },
                {
                    layer: '2-world-last-text',
                    opacity: 1.0
                }  
            ],
            onChapterExit: [
                {
                    layer: '2-world-last',
                    opacity: 0.0
                },
                {
                    layer: '2-world-last-text',
                    opacity: 0.0
                }  
            ]
        },
        {
            id: '3-eurasia',
            title: `Des échanges vitaux qui ne cessent de se multiplier`,
            description: `
               Depuis le début de cette crise, plus de 20 millions d'équipements médicaux ont transité entre l’Europe et l’Asie sous la forme d’aide humanitaire.
               Les masques forment la majeure partie de ces équipements. A cela on peut rajouter des ventilateurs, des respirateurs artificiels et des tests de dépistage.
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
                Les technologies d’aujourd’hui arrivent à freiner l’avancée de cette pandémie, mais les technologies de demain sont peut-être les seuls capables de l’arrêter entièrement.
                En Europe, plus de 400 laboratoires travaillent depuis le début de cette crise pour mettre au point de nouveaux traitements. Plus de 200 articles scientifiques ont été publiés depuis liés au sujet, et leur chiffre ne cesse d’augmenter.
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
                    opacity: 0.7
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
                A cause du confinement, des milliers d’établissements, restaurants, bars, ont vu leur existence être menacée.
                En France, afin de pallier à ce risque, plus de 435 campagnes de financement ont été lancées. Avec pour seul objetif : aider ces commerces à survivre.
            `,
            location: {
                center: [2.46526, 46.84656],
                zoom: 5.41,
                pitch: 28.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: '5-france-numbers',
                    opacity: 0.8
                },
                {
                    layer: '5-france-amounts',
                    opacity: 0.8
                }  
            ],
            onChapterExit: [
                {
                    layer: '5-france-numbers',
                    opacity: 0.0
                },
                {
                    layer: '5-france-amounts',
                    opacity: 0.0
                }  
            ]
        },
        {
            id: '6-france-usa',
            title: `L'information circule toujours grâce à une infrastructure solide`,
            description: `
                Nous sommes plus d’un x dans le monde à être obligés d’être confinés.
                Cela accru nos besoins en technologies de communication de +40%, et a mis en risque de saturation toute l’infrastructure réseau existante.
                Pourtant, ce pic de consommation, n’a causé aucun incident technique majeur de nature à compromettre nos services de communications.
                Cela est dû aux efforts monumentaux déployés par des organisations et des personnes, pour que l’information circule toujours.
            `,
            location: {
                center: [-48.098, 39.035],
                zoom: 3.25,
                pitch: 12.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '7-usa',
            title: `Chez les américains, the show must go on`,
            description: `
                Devant un contexte économique incertain, de nombreuses entreprises ont entrepris de geler leurs recrutements.
                Aux Etats-Unis, sur une base de 4500 entreprises sondées, plus de 3000 sociétés ont décidé de garder leurs candidatures ouvertes et de maintenir les recrutemetns malgré ce contexte difficile.
            `,
            location: {
                center: [-97.76231, 35.94771],
                zoom: 4.35,
                pitch: 24.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '8-world',
            title: 'Un dernier hommage',
            description: `
                Pour finir, il est important de mettre en lumière le personnel soignant dans le monde entier, qui travaille d’arrache pied pour soigner les plus vulnérables d’entre nous.
                Ils sont plus de 40 millions dans le monde, avec plus d’un millions de bénévoles pour les aider.
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
        {
            id: '9-wrap-up',
            description: `
                Merci à tous d’avoir suivi cette visualisation. Si vous l’appréciez, n’hésitez pas à la partager sans modération.
                Si vous voulez racontez vos propres histoires avec un format similaire, n’hésitez pas à me contacter (elmehdi.baha@gmail.com) pour en savoir + sur comment ces visualisations sont construites.
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
