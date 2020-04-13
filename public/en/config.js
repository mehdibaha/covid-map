var config = {
    style: 'mapbox://styles/mehdibaha/ck8n2wsq20s341iou1e0mixmc',
    accessToken: 'pk.eyJ1IjoibWVoZGliYWhhIiwiYSI6ImNrOGZ3bWdmMDAya24zZm8xbGJkYWw3cXkifQ.fS6Ny7_0bZ7swBKW7rvgEQ',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'Coronavirus: A positive outlook',
    subtitle: 'also: the good news map 🙂',
    byline: 'by Mehdi Baha',
    footer: `Sources: available by <a target="_blank" href="https://github.com/mehdibaha/covid-map">going here</a>`,
    chapters: [
        {
            id: '1-china',
            title: `The start of an unprecedented pandemic`,
            description: `
            The first patient with symptoms of <span style="font-weight:700;color:#f7952e">Coronavirus was detected in the Hubei province, China</span>.<br>
            
            On December 17, Zhang Jixian, a Hubei doctor, warned the authorities that this was no regular pneumonia.
            The Wuhan market is suspected to be the starting point of this global pandemic.
            `,
            location: {
                center: [97.21732, 31.16806],
                zoom: 4.17,
                pitch: 26.00,
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
            title: `The start of an unprecedented pandemic`,
            description: `
                Since then, this virus has spread to more than 180 countries around the world. <span style="font-weight:700;color:#f7952e">More than 1.6M people have been affected and the virus has caused more than 96,000 deaths.</span><br>
                
                Yet, since the beginning of this crisis, huge efforts have been made to stop this crisis.<br><b>This page aims to highlight these efforts.</b>
            `,
            location: {
                center: [11.59341, 15.90830],
                zoom: 1.68,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: '2-world-last',
                    opacity: 0.75
                },
                {
                    layer: '2-world-last-blur',
                    opacity: 0.75
                }
            ],
            onChapterExit: [
                {
                    layer: '2-world-last',
                    opacity: 0.0
                },
                {
                    layer: '2-world-last-blur',
                    opacity: 0.0
                }
            ]
        },
        {
            id: '3-eurasia',
            title: `Crucial exports that continue to increase in number`,
            description: `
            Nearly 2 million <span style="font-weight:700;color:#ff4d88">protective masks</span> and more than 50,000 <span style="font-weight:700;color:#ff4d88">screening tests</span> have transited between Europe and Asia.<br>
            
            These medical equipments have all transited in the form of humanitarian aid.
            `,
            location: {
                center: [28.20832, 42.87337],
                zoom: 2.30,
                pitch: 21.00,
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
            title: `Progressing faster than the virus spreads`,
            description: `
                Today's technologies are able to slow the progress of this pandemic, but tomorrow's technologies may be the only ones capable of stopping it.<br>
                
                In Europe, <span style="font-weight:800;color:#808080">more than 26 clinical trials</span> so far have been developed to search for new treatments.
            `,
            location: {
                center: [7.02730,  44.92631],
                zoom: 4.30,
                pitch: 21.00,
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
            title: `France showing its spirit of solidarity`,
            description: `
                Due to social isolation, hundreds of establishments, restaurants, bars, have seen their existence threatened.<br>
                
                In France, in order to mitigate this risk, <span style="font-weight:700;color:#cc00c2">more than 900 fundraising campaigns</span> have been launched. With the sole aim of helping these establishments to survive.
            `,
            location: {
                center: [2.30399, 46.19885],
                zoom: 5.30,
                pitch: 21.00,
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
            title: `Information continues to flows thanks to a solid infrastructure`,
            description: `
                Widespread social isolation increased our need for <span style="font-weight:700;color:#873dff">communication technologies</span>, and puts the existing infrastructure at risk.<br>
                
                However, this consumption spike has not caused any major technical incidents that could have compromisd our communication services.
                This is thanks to the joint efforts of organizations and individuals who ensure that <span style="font-weight:700;color:#873dff">information can always flow</span>.
            `,
            location: {
                center: [-58.34023, 41.41125],
                zoom: 2.95,
                pitch: 20.00,
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
            title: `In the US, business as usual`,
            description: `
                Faced with an uncertain economic context, many companies have understanbly chosen to <span style="font-weight:700;color:#ff2e2e">freeze their recruitments</span>.<br>
                
                In the United States, based on 350 companies surveyed, more than 280 companies decided to keep <span style="font-weight:700;color:#00d12d">their applications open and to maintain recruitments </span> despite this difficult context.
            `,
            location: {
                center: [-108.18248, 38.50433],
                zoom: 3.78,
                pitch: 20.00,
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
                Finally, it is now important more than ever to thank all caregivers.<br>
                
                More than <span style="font-weight:700;color:#6a57ff">10 million doctors</span> and <span style="font-weight:700;color:#ff8fff">25 million nurses</span> around the world are working hard to care for the most vulnerable among us.
            `,
            location: {
                center: [11.59341, 15.90830],
                zoom: 1.68,
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
                Thank you for following this visualization.<br><br>
                
                If you like it, please feel free to share it !
                If you want to tell your own stories with a similar format, you can contact me (elmehdi.baha@gmail.com) for more information.<br><br>
                
                
                Finally, I would like to thank <a href="https://mapbox.com/">Mapbox</a> who graciously offered me the hosting costs as well as <a href="https://serpapi.com">SerpApi</a> for helping me find the data I needed.
            `,
            location: {
                center: [11.59341, 15.90830],
                zoom: 1.68,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },    
    ]
};
