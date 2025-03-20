// List of countries (with their correct data)
const countries = [
    {
        name: "Afghanistan",
        population: 38,  // in millions
        gdp: 0.02,  // in trillion USD
        maxElevation: 7480,  // in meters (Noshaq)
        area: 652230  // in km²
    },
    {
        name: "Albania",
        population: 3,  // in millions
        gdp: 0.015,  // in trillion USD
        maxElevation: 2754,  // in meters (Maja e Korabit)
        area: 28748  // in km²
    },
    {
        name: "Algeria",
        population: 44,  // in millions
        gdp: 0.2,  // in trillion USD
        maxElevation: 3028,  // in meters (Tassili n'Ajjer)
        area: 2381741  // in km²
    },
    {
        name: "Andorra",
        population: 0.08,  // in millions
        gdp: 0.003,  // in trillion USD
        maxElevation: 2942,  // in meters (Coma Pedrosa)
        area: 468  // in km²
    },
    {
        name: "Angola",
        population: 34,  // in millions
        gdp: 0.13,  // in trillion USD
        maxElevation: 2620,  // in meters (Mount Namuli)
        area: 1246700  // in km²
    },
    {
        name: "Antigua and Barbuda",
        population: 0.1,  // in millions
        gdp: 0.003,  // in trillion USD
        maxElevation: 402,  // in meters (Boggy Peak)
        area: 442  // in km²
    },
    {
        name: "Argentina",
        population: 45,  // in millions
        gdp: 0.64,  // in trillion USD
        maxElevation: 6962,  // in meters (Aconcagua)
        area: 2780400  // in km²
    },
    {
        name: "Armenia",
        population: 3,  // in millions
        gdp: 0.014,  // in trillion USD
        maxElevation: 4090,  // in meters (Mount Aragats)
        area: 29743  // in km²
    },
    {
        name: "Australia",
        population: 26,  // in millions
        gdp: 1.43,  // in trillion USD
        maxElevation: 2228,  // in meters (Mount Kosciuszko)
        area: 7692024  // in km²
    },
    {
        name: "Austria",
        population: 9,  // in millions
        gdp: 0.49,  // in trillion USD
        maxElevation: 3798,  // in meters (Grossglockner)
        area: 83879  // in km²
    },
    {
        name: "Azerbaijan",
        population: 10,  // in millions
        gdp: 0.08,  // in trillion USD
        maxElevation: 4466,  // in meters (Bazarduzu Dagi)
        area: 86600  // in km²
    },
    {
        name: "Bahamas",
        population: 0.4,  // in millions
        gdp: 0.01,  // in trillion USD
        maxElevation: 63,  // in meters (Mount Alvernia)
        area: 13943  // in km²
    },
    {
        name: "Bahrain",
        population: 1.7,  // in millions
        gdp: 0.04,  // in trillion USD
        maxElevation: 134,  // in meters (Jabal ad-Dukhan)
        area: 765  // in km²
    },
    {
        name: "Bangladesh",
        population: 168,  // in millions
        gdp: 0.47,  // in trillion USD
        maxElevation: 1230,  // in meters (Saka Haphong)
        area: 147570  // in km²
    },
    {
        name: "Barbados",
        population: 0.3,  // in millions
        gdp: 0.004,  // in trillion USD
        maxElevation: 336,  // in meters (Mount Hillaby)
        area: 430  // in km²
    },
    {
        name: "Belarus",
        population: 9,  // in millions
        gdp: 0.06,  // in trillion USD
        maxElevation: 346,  // in meters (Dzyarzhynskaya Hara)
        area: 207600  // in km²
    },
    {
        name: "Belgium",
        population: 11,  // in millions
        gdp: 0.52,  // in trillion USD
        maxElevation: 694,  // in meters (Signal de Botrange)
        area: 30528  // in km²
    },
        {
            name: "Belize",
            population: 0.4,  // in millions
            gdp: 0.002,  // in trillion USD
            maxElevation: 1124,  // in meters (Caracol)
            area: 22966  // in km²
        },
        {
            name: "Benin",
            population: 13,  // in millions
            gdp: 0.01,  // in trillion USD
            maxElevation: 658,  // in meters (Mont Sokbaro)
            area: 112622  // in km²
        },
        {
            name: "Bhutan",
            population: 0.8,  // in millions
            gdp: 0.002,  // in trillion USD
            maxElevation: 7551,  // in meters (Gangkhar Puensum)
            area: 38394  // in km²
        },
        {
            name: "Bolivia",
            population: 12,  // in millions
            gdp: 0.04,  // in trillion USD
            maxElevation: 6542,  // in meters (Nevado Sajama)
            area: 1098581  // in km²
        },
        {
            name: "Bosnia and Herzegovina",
            population: 3.3,  // in millions
            gdp: 0.02,  // in trillion USD
            maxElevation: 2386,  // in meters (Maglić)
            area: 51209  // in km²
        },
        {
            name: "Botswana",
            population: 2.5,  // in millions
            gdp: 0.02,  // in trillion USD
            maxElevation: 1490,  // in meters (Mount Otse)
            area: 581730  // in km²
        },
        {
            name: "Brazil",
            population: 214,  // in millions
            gdp: 2.055,  // in trillion USD
            maxElevation: 2995,  // in meters (Pico da Neblina)
            area: 8515767  // in km²
        },
        {
            name: "Brunei",
            population: 0.4,  // in millions
            gdp: 0.02,  // in trillion USD
            maxElevation: 1850,  // in meters (Bukit Pagon)
            area: 5765  // in km²
        },
        {
            name: "Bulgaria",
            population: 7,  // in millions
            gdp: 0.07,  // in trillion USD
            maxElevation: 2925,  // in meters (Musala)
            area: 110994  // in km²
        },
        {
            name: "Burkina Faso",
            population: 22,  // in millions
            gdp: 0.02,  // in trillion USD
            maxElevation: 749,  // in meters (Tena Kourou)
            area: 272967  // in km²
        },
        {
            name: "Burundi",
            population: 13,  // in millions
            gdp: 0.003,  // in trillion USD
            maxElevation: 2670,  // in meters (Mount Heha)
            area: 27834  // in km²
        },
        {
            name: "Cabo Verde",
            population: 0.5,  // in millions
            gdp: 0.002,  // in trillion USD
            maxElevation: 2829,  // in meters (Pico do Fogo)
            area: 4033  // in km²
        },
        {
            name: "Cambodia",
            population: 17,  // in millions
            gdp: 0.02,  // in trillion USD
            maxElevation: 1813,  // in meters (Phnom Aural)
            area: 181035  // in km²
        },
        {
            name: "Canada",
            population: 38,  // in millions
            gdp: 1.64,  // in trillion USD
            maxElevation: 5959,  // in meters (Mount Logan)
            area: 9984670  // in km²
        },
            {
                name: "Central African Republic",
                population: 5,  // in millions
                gdp: 0.003,  // in trillion USD
                maxElevation: 1420,  // in meters (Mount Ngaoui)
                area: 622984  // in km²
            },
            {
                name: "Chad",
                population: 18,  // in millions
                gdp: 0.01,  // in trillion USD
                maxElevation: 3415,  // in meters (Mount Emi Koussi)
                area: 1284000  // in km²
            },
            {
                name: "Chile",
                population: 19,  // in millions
                gdp: 0.31,  // in trillion USD
                maxElevation: 6887,  // in meters (Ojos del Salado)
                area: 756102  // in km²
            },
            {
                name: "China",
                population: 1410,  // in millions
                gdp: 17.7,  // in trillion USD
                maxElevation: 8848,  // in meters (Mount Everest, border with Nepal)
                area: 9706961  // in km²
            },
            {
                name: "Colombia",
                population: 51,  // in millions
                gdp: 0.33,  // in trillion USD
                maxElevation: 5775,  // in meters (Pico Cristóbal Colón)
                area: 1141748  // in km²
            },
            {
                name: "Comoros",
                population: 0.8,  // in millions
                gdp: 0.0008,  // in trillion USD
                maxElevation: 2361,  // in meters (Mount Karthala)
                area: 2235  // in km²
            },
            {
                name: "Congo-Brazzaville",
                population: 5.5,  // in millions
                gdp: 0.01,  // in trillion USD
                maxElevation: 1020,  // in meters (Mount Berongou)
                area: 342000  // in km²
            },
            {
                name: "Congo-Kinshasa",
                population: 94,  // in millions
                gdp: 0.05,  // in trillion USD
                maxElevation: 5110,  // in meters (Mount Stanley)
                area: 2344858  // in km²
            },
            {
                name: "Costa Rica",
                population: 5,  // in millions
                gdp: 0.06,  // in trillion USD
                maxElevation: 3820,  // in meters (Cerro Chirripó)
                area: 51100  // in km²
            },
            {
                name: "Croatia",
                population: 4,  // in millions
                gdp: 0.06,  // in trillion USD
                maxElevation: 1831,  // in meters (Dinara)
                area: 56594  // in km²
            },
            {
                name: "Cuba",
                population: 11,  // in millions
                gdp: 0.1,  // in trillion USD
                maxElevation: 1974,  // in meters (Pico Turquino)
                area: 109884  // in km²
            },
            {
                name: "Cyprus",
                population: 1.2,  // in millions
                gdp: 0.03,  // in trillion USD
                maxElevation: 1952,  // in meters (Mount Olympus)
                area: 9251  // in km²
            },
            {
                name: "Czechia",
                population: 10,  // in millions
                gdp: 0.3,  // in trillion USD
                maxElevation: 1603,  // in meters (Snezka)
                area: 78866  // in km²
            },
            {
                name: "Denmark",
                population: 5.8,  // in millions
                gdp: 0.33,  // in trillion USD
                maxElevation: 170,  // in meters (Mollehoj)
                area: 42933  // in km²
            },
            {
                name: "Djibouti",
                population: 0.9,  // in millions
                gdp: 0.003,  // in trillion USD
                maxElevation: 2028,  // in meters (Monta Moussa)
                area: 23200  // in km²
            },
            {
                name: "Dominica",
                population: 0.07,  // in millions
                gdp: 0.0008,  // in trillion USD
                maxElevation: 1447,  // in meters (Morne Diablotins)
                area: 751  // in km²
            },
            {
                name: "Dominican Republic",
                population: 11,  // in millions
                gdp: 0.1,  // in trillion USD
                maxElevation: 3087,  // in meters (Pico Duarte)
                area: 48730  // in km²
            },
            {
                name: "Ecuador",
                population: 18,  // in millions
                gdp: 0.1,  // in trillion USD
                maxElevation: 6310,  // in meters (Mount Chimborazo)
                area: 283561  // in km²
            },
            {
                name: "Egypt",
                population: 105,  // in millions
                gdp: 0.38,  // in trillion USD
                maxElevation: 2637,  // in meters (Mount Catherine)
                area: 1002450  // in km²
            },
            {
                name: "El Salvador",
                population: 6,  // in millions
                gdp: 0.027,  // in trillion USD
                maxElevation: 2730,  // in meters (Cerro El Pital)
                area: 21041  // in km²
            },
            {
                name: "Equatorial Guinea",
                population: 1.4,  // in millions
                gdp: 0.012,  // in trillion USD
                maxElevation: 3008,  // in meters (Mount Pico Basile)
                area: 28051  // in km²
            },
            {
                name: "Eritrea",
                population: 3.5,  // in millions
                gdp: 0.004,  // in trillion USD
                maxElevation: 3018,  // in meters (Mount Emba Soira)
                area: 117600  // in km²
            },
            {
                name: "Estonia",
                population: 1.3,  // in millions
                gdp: 0.03,  // in trillion USD
                maxElevation: 318,  // in meters (Suur Munamagi)
                area: 45227  // in km²
            },
            {
                name: "Eswatini",
                population: 1.2,  // in millions
                gdp: 0.004,  // in trillion USD
                maxElevation: 1862,  // in meters (Emlembe)
                area: 17364  // in km²
            },
            {
                name: "Ethiopia",
                population: 120,  // in millions
                gdp: 0.1,  // in trillion USD
                maxElevation: 4620,  // in meters (Ras Dashen)
                area: 1104300  // in km²
            },
            {
                name: "Finland",
                population: 5.5,  // in millions
                gdp: 0.29,  // in trillion USD
                maxElevation: 1324,  // in meters (Mount Halti)
                area: 338424  // in km²
            },
            {
                name: "France",
                population: 67,  // in millions
                gdp: 2.938,  // in trillion USD
                maxElevation: 4808,  // in meters (Mont Blanc)
                area: 551695  // in km²
            },
            {
                name: "Gabon",
                population: 2.3,  // in millions
                gdp: 0.02,  // in trillion USD
                maxElevation: 1575,  // in meters (Mount Iboundji)
                area: 267668  // in km²
            },
            {
                name: "Gambia",
                population: 2.5,  // in millions
                gdp: 0.002,  // in trillion USD
                maxElevation: 53,  // in meters (Red Rock Hill)
                area: 11295  // in km²
            },
            {
                name: "Germany",
                population: 83,  // in millions
                gdp: 4.9,  // in trillion USD
                maxElevation: 2962,  // in meters (Zugspitze)
                area: 357022  // in km²
            },
            {
                name: "Georgia",
                population: 3.7,  // in millions
                gdp: 0.03,  // in trillion USD
                maxElevation: 5203,  // in meters (Zugspitze)
                area: 69700  // in km²
            },
            {
                name: "Ghana",
                population: 32,  // in millions
                gdp: 0.07,  // in trillion USD
                maxElevation: 884,  // in meters (Mount Afadja)
                area: 238533  // in km²
            },
            {
                name: "Greece",
                population: 10,  // in millions
                gdp: 0.27,  // in trillion USD
                maxElevation: 2917,  // in meters (Mount Olympus)
                area: 131957  // in km²
            },
            {
                name: "Grenada",
                population: 0.11,  // in millions
                gdp: 0.001,  // in trillion USD
                maxElevation: 840,  // in meters (Mount Saint Catherine)
                area: 344  // in km²
            },
            {
                name: "Guatemala",
                population: 19,  // in millions
                gdp: 0.09,  // in trillion USD
                maxElevation: 4220,  // in meters (Volcán Tajumulco)
                area: 108889  // in km²
            },
            {
                name: "Guinea",
                population: 14,  // in millions
                gdp: 0.02,  // in trillion USD
                maxElevation: 1750,  // in meters (Mount Nimba)
                area: 245857  // in km²
            },
            {
                name: "Guinea-Bissau",
                population: 2,  // in millions
                gdp: 0.002,  // in trillion USD
                maxElevation: 300,  // in meters (Pico de N'Ta)
                area: 36125  // in km²
            },
            {
                name: "Guyana",
                population: 0.8,  // in millions
                gdp: 0.002,  // in trillion USD
                maxElevation: 1280,  // in meters (Mount Roraima)
                area: 214969  // in km²
            },
            {
                name: "Haiti",
                population: 12,  // in millions
                gdp: 0.01,  // in trillion USD
                maxElevation: 2675,  // in meters (Pico de la Selle)
                area: 27750  // in km²
            },
            {
                name: "Honduras",
                population: 10,  // in millions
                gdp: 0.02,  // in trillion USD
                maxElevation: 2870,  // in meters (Cerro Las Minas)
                area: 112492  // in km²
            },
            {
                name: "Hungary",
                population: 9.7,  // in millions
                gdp: 0.03,  // in trillion USD
                maxElevation: 1014,  // in meters (Kékes)
                area: 93030  // in km²
            },
            {
                name: "Iceland",
                population: 0.4,  // in millions
                gdp: 0.03,  // in trillion USD
                maxElevation: 2110,  // in meters (Hvannadalshnúkur)
                area: 103000  // in km²
            },
            {
                name: "India",
                population: 1391,  // in millions
                gdp: 3.73,  // in trillion USD
                maxElevation: 8586,  // in meters (Kanchenjunga)
                area: 3287263  // in km²
            },
            {
                name: "Indonesia",
                population: 277,  // in millions
                gdp: 1.11,  // in trillion USD
                maxElevation: 4884,  // in meters (Puncak Jaya)
                area: 1904569  // in km²
            },
            {
                name: "Iran",
                population: 85,  // in millions
                gdp: 0.55,  // in trillion USD
                maxElevation: 5671,  // in meters (Mount Damavand)
                area: 1648195  // in km²
            },
            {
                name: "Iraq",
                population: 42,  // in millions
                gdp: 0.23,  // in trillion USD
                maxElevation: 3587,  // in meters (Mount Haji Ibrahim)
                area: 438317  // in km²
            },
            {
                name: "Ireland",
                population: 5,  // in millions
                gdp: 0.57,  // in trillion USD
                maxElevation: 1039,  // in meters (Carrauntoohil)
                area: 70273  // in km²
            },
            {
                name: "Israel",
                population: 9,  // in millions
                gdp: 0.48,  // in trillion USD
                maxElevation: 1208,  // in meters (Mount Hermon)
                area: 22072  // in km²
            },
            {
                name: "Italy",
                population: 60,  // in millions
                gdp: 2.1,  // in trillion USD
                maxElevation: 4807,  // in meters (Mont Blanc)
                area: 301340  // in km²
            },
            {
                name: "Jamaica",
                population: 2.9,  // in millions
                gdp: 0.016,  // in trillion USD
                maxElevation: 2256,  // in meters (Blue Mountain Peak)
                area: 10991  // in km²
            },
            {
                name: "Japan",
                population: 125,  // in millions
                gdp: 4.91,  // in trillion USD
                maxElevation: 3776,  // in meters (Mount Fuji)
                area: 377975  // in km²
            },
            {
                name: "Jordan",
                population: 10,  // in millions
                gdp: 0.04,  // in trillion USD
                maxElevation: 1854,  // in meters (Jebel Umm ad Dami)
                area: 89342  // in km²
            },
            {
                name: "Kazakhstan",
                population: 19,  // in millions
                gdp: 0.21,  // in trillion USD
                maxElevation: 7010,  // in meters (Pik Khan Tengri)
                area: 2724900  // in km²
            },
            {
                name: "Kenya",
                population: 54,  // in millions
                gdp: 0.1,  // in trillion USD
                maxElevation: 5199,  // in meters (Mount Kenya)
                area: 580367  // in km²
            },
            {
                name: "Kiribati",
                population: 0.1,  // in millions
                gdp: 0.0001,  // in trillion USD
                maxElevation: 81,  // in meters (Banaba)
                area: 811  // in km²
            },
            {
                name: "North Korea",
                population: 26,  // in millions
                gdp: 0.02,  // in trillion USD
                maxElevation: 2744,  // in meters (Paektu Mountain)
                area: 120540  // in km²
            },
            {
                name: "South Korea",
                population: 51,  // in millions
                gdp: 2.03,  // in trillion USD
                maxElevation: 1950,  // in meters (Mount Hallasan)
                area: 100032  // in km²
            },
            {
                name: "Kuwait",
                population: 4,  // in millions
                gdp: 0.08,  // in trillion USD
                maxElevation: 306,  // in meters (Mount Al-Safah)
                area: 17818  // in km²
            },
            {
                name: "Kyrgyzstan",
                population: 6,  // in millions
                gdp: 0.008,  // in trillion USD
                maxElevation: 7439,  // in meters (Jengish Chokusu)
                area: 199951  // in km²
            },
            {
                name: "Laos",
                population: 7,  // in millions
                gdp: 0.01,  // in trillion USD
                maxElevation: 2820,  // in meters (Phou Bia)
                area: 237955  // in km²
            },
            {
                name: "Latvia",
                population: 2,  // in millions
                gdp: 0.03,  // in trillion USD
                maxElevation: 312,  // in meters (Gaizinkalns)
                area: 64559  // in km²
            },
            {
                name: "Lebanon",
                population: 7,  // in millions
                gdp: 0.03,  // in trillion USD
                maxElevation: 3088,  // in meters (Qurnat as Sawda)
                area: 10452  // in km²
            },
            {
                name: "Lesotho",
                population: 2.2,  // in millions
                gdp: 0.003,  // in trillion USD
                maxElevation: 3482,  // in meters (Thabana Ntlenyana)
                area: 30355  // in km²
            },
            {
                name: "Liberia",
                population: 5,  // in millions
                gdp: 0.004,  // in trillion USD
                maxElevation: 1440,  // in meters (Mount Nimba)
                area: 111369  // in km²
            },
            {
                name: "Libya",
                population: 7,  // in millions
                gdp: 0.04,  // in trillion USD
                maxElevation: 2278,  // in meters (Babe el Azizia)
                area: 1759540  // in km²
            },
    
                {
                    name: "Liechtenstein",
                    population: 0.04,  // in millions
                    gdp: 0.003,  // in trillion USD
                    maxElevation: 2599,  // in meters (Piz Lindur)
                    area: 160  // in km²
                },
                {
                    name: "Lithuania",
                    population: 2.7,  // in millions
                    gdp: 0.05,  // in trillion USD
                    maxElevation: 294,  // in meters (Aukštojas Hill)
                    area: 65300  // in km²
                },
                {
                    name: "Luxembourg",
                    population: 0.63,  // in millions
                    gdp: 0.08,  // in trillion USD
                    maxElevation: 560,  // in meters (Kneiff)
                    area: 2586  // in km²
                },
                {
                    name: "Madagascar",
                    population: 30,  // in millions
                    gdp: 0.014,  // in trillion USD
                    maxElevation: 2876,  // in meters (Maromokotro)
                    area: 587041  // in km²
                },
                {
                    name: "Malawi",
                    population: 20.5,  // in millions
                    gdp: 0.01,  // in trillion USD
                    maxElevation: 3002,  // in meters (Mount Nyika)
                    area: 118484  // in km²
                },
                {
                    name: "Malaysia",
                    population: 33,  // in millions
                    gdp: 0.37,  // in trillion USD
                    maxElevation: 4095,  // in meters (Mount Kinabalu)
                    area: 330803  // in km²
                },
                {
                    name: "Maldives",
                    population: 0.53,  // in millions
                    gdp: 0.005,  // in trillion USD
                    maxElevation: 2.4,  // in meters (Villingili Island)
                    area: 298  // in km²
                },
                {
                    name: "Mali",
                    population: 20,  // in millions
                    gdp: 0.02,  // in trillion USD
                    maxElevation: 1155,  // in meters (Mount Hombori)
                    area: 1240192  // in km²
                },
                {
                    name: "Malta",
                    population: 0.5,  // in millions
                    gdp: 0.016,  // in trillion USD
                    maxElevation: 253,  // in meters (Ta' Dmejrek)
                    area: 316  // in km²
                },
                {
                    name: "Marshall Islands",
                    population: 0.06,  // in millions
                    gdp: 0.0002,  // in trillion USD
                    maxElevation: 10,  // in meters (No name)
                    area: 181  // in km²
                },
                {
                    name: "Mauritania",
                    population: 4.5,  // in millions
                    gdp: 0.008,  // in trillion USD
                    maxElevation: 915,  // in meters (Mount Ijill)
                    area: 1030700  // in km²
                },
                {
                    name: "Mauritius",
                    population: 1.3,  // in millions
                    gdp: 0.022,  // in trillion USD
                    maxElevation: 828,  // in meters (Piton de la Petite Rivière Noire)
                    area: 2040  // in km²
                },
                {
                    name: "Mexico",
                    population: 126,  // in millions
                    gdp: 1.27,  // in trillion USD
                    maxElevation: 5636,  // in meters (Pico de Orizaba)
                    area: 1964375  // in km²
                },
                {
                    name: "Micronesia",
                    population: 0.1,  // in millions
                    gdp: 0.0004,  // in trillion USD
                    maxElevation: 791,  // in meters (Mount Nanlaud)
                    area: 702  // in km²
                },
                {
                    name: "Moldova",
                    population: 2.6,  // in millions
                    gdp: 0.011,  // in trillion USD
                    maxElevation: 430,  // in meters (Bălănești Hill)
                    area: 33846  // in km²
                },
                {
                    name: "Monaco",
                    population: 0.04,  // in millions
                    gdp: 0.006,  // in trillion USD
                    maxElevation: 163,  // in meters (Chemin des Révoires)
                    area: 2.02  // in km²
                },
                {
                    name: "Mongolia",
                    population: 3.4,  // in millions
                    gdp: 0.01,  // in trillion USD
                    maxElevation: 4374,  // in meters (Mount Khuiten)
                    area: 1564116  // in km²
                },
                {
                    name: "Montenegro",
                    population: 0.6,  // in millions
                    gdp: 0.005,  // in trillion USD
                    maxElevation: 2522,  // in meters (Zla Kolata)
                    area: 13812  // in km²
                },
                {
                    name: "Morocco",
                    population: 37,  // in millions
                    gdp: 0.12,  // in trillion USD
                    maxElevation: 4165,  // in meters (Mount Toubkal)
                    area: 710850  // in km²
                },
                {
                    name: "Mozambique",
                    population: 33,  // in millions
                    gdp: 0.03,  // in trillion USD
                    maxElevation: 2436,  // in meters (Mount Binga)
                    area: 801590  // in km²
                },
                {
                    name: "Myanmar",
                    population: 54,  // in millions
                    gdp: 0.07,  // in trillion USD
                    maxElevation: 5881,  // in meters (Hkakabo Razi)
                    area: 676578  // in km²
                },
                {
                    name: "Namibia",
                    population: 2.5,  // in millions
                    gdp: 0.01,  // in trillion USD
                    maxElevation: 2573,  // in meters (Brandberg Mountain)
                    area: 825615  // in km²
                },
                {
                    name: "Nauru",
                    population: 0.01,  // in millions
                    gdp: 0.0001,  // in trillion USD
                    maxElevation: 65,  // in meters (Command Ridge)
                    area: 21  // in km²
                },
                {
                    name: "Nepal",
                    population: 30,  // in millions
                    gdp: 0.03,  // in trillion USD
                    maxElevation: 8848,  // in meters (Mount Everest)
                    area: 147516  // in km²
                },
                {
                    name: "Netherlands",
                    population: 17,  // in millions
                    gdp: 0.91,  // in trillion USD
                    maxElevation: 322,  // in meters (Vaalserberg)
                    area: 41543  // in km²
                },
                {
                    name: "New Zealand",
                    population: 5,  // in millions
                    gdp: 0.21,  // in trillion USD
                    maxElevation: 3724,  // in meters (Aoraki / Mount Cook)
                    area: 268021  // in km²
                },
                {
                    name: "Nicaragua",
                    population: 6.5,  // in millions
                    gdp: 0.01,  // in trillion USD
                    maxElevation: 2385,  // in meters (Pico Mogotón)
                    area: 130375  // in km²
                },
                {
                    name: "Niger",
                    population: 26,  // in millions
                    gdp: 0.01,  // in trillion USD
                    maxElevation: 2022,  // in meters (Mount Bagzane)
                    area: 1267000  // in km²
                },
                {
                    name: "Nigeria",
                    population: 223,  // in millions
                    gdp: 0.47,  // in trillion USD
                    maxElevation: 2180,  // in meters (Chappal Waddi)
                    area: 923768  // in km²
                },
                {
                    name: "North Macedonia",
                    population: 2.1,  // in millions
                    gdp: 0.013,  // in trillion USD
                    maxElevation: 2764,  // in meters (Mount Korab)
                    area: 25713  // in km²
                },
                {
                    name: "Norway",
                    population: 5.5,  // in millions
                    gdp: 0.48,  // in trillion USD
                    maxElevation: 2469,  // in meters (Galdhøpiggen)
                    area: 385207  // in km²
                },
                {
                    name: "Oman",
                    population: 5.2,  // in millions
                    gdp: 0.08,  // in trillion USD
                    maxElevation: 2980,  // in meters (Jebel Shams)
                    area: 309500  // in km²
                },
                {
                    name: "Pakistan",
                    population: 238,  // in millions
                    gdp: 0.35,  // in trillion USD
                    maxElevation: 8611,  // in meters (K2)
                    area: 881913  // in km²
                },
                {
                    name: "Palau",
                    population: 0.02,  // in millions
                    gdp: 0.0003,  // in trillion USD
                    maxElevation: 242,  // in meters (Mount Ngerchelchuus)
                    area: 459  // in km²
                },
                {
                    name: "Panama",
                    population: 4.5,  // in millions
                    gdp: 0.07,  // in trillion USD
                    maxElevation: 3478,  // in meters (Volcán Barú)
                    area: 75417  // in km²
                },
                {
                    name: "Papua New Guinea",
                    population: 9,  // in millions
                    gdp: 0.03,  // in trillion USD
                    maxElevation: 4509,  // in meters (Mount Wilhelm)
                    area: 462840  // in km²
                },
                {
                    name: "Paraguay",
                    population: 7,  // in millions
                    gdp: 0.04,  // in trillion USD
                    maxElevation: 842,  // in meters (Cordillera de Ybytyruzú)
                    area: 406752  // in km²
                },
                {
                    name: "Peru",
                    population: 33,  // in millions
                    gdp: 0.23,  // in trillion USD
                    maxElevation: 6768,  // in meters (Huascarán)
                    area: 1285216  // in km²
                },
                {
                    name: "Philippines",
                    population: 113,  // in millions
                    gdp: 0.43,  // in trillion USD
                    maxElevation: 2954,  // in meters (Mount Apo)
                    area: 300000  // in km²
                },
                {
                    name: "Poland",
                    population: 38,  // in millions
                    gdp: 0.72,  // in trillion USD
                    maxElevation: 2499,  // in meters (Rysy)
                    area: 312696  // in km²
                },
                {
                    name: "Portugal",
                    population: 10,  // in millions
                    gdp: 0.25,  // in trillion USD
                    maxElevation: 1993,  // in meters (Pico)
                    area: 92212  // in km²
                },
                {
                    name: "Qatar",
                    population: 2.9,  // in millions
                    gdp: 0.18,  // in trillion USD
                    maxElevation: 103,  // in meters (Qatar's highest point)
                    area: 11586  // in km²
                },
                {
                    name: "Romania",
                    population: 19,  // in millions
                    gdp: 0.29,  // in trillion USD
                    maxElevation: 2544,  // in meters (Moldoveanu Peak)
                    area: 238397  // in km²
                },
                {
                    name: "Russia",
                    population: 146,  // in millions
                    gdp: 1.48,  // in trillion USD
                    maxElevation: 5642,  // in meters (Mount Elbrus)
                    area: 17098242  // in km²
                },
                {
                    name: "Rwanda",
                    population: 13,  // in millions
                    gdp: 0.01,  // in trillion USD
                    maxElevation: 4507,  // in meters (Mount Karisimbi)
                    area: 26338  // in km²
                },
                {
                    name: "Saint Kitts and Nevis",
                    population: 0.05,  // in millions
                    gdp: 0.0008,  // in trillion USD
                    maxElevation: 1156,  // in meters (Liamuiga)
                    area: 261  // in km²
                },
                {
                    name: "Saint Lucia",
                    population: 0.18,  // in millions
                    gdp: 0.002,  // in trillion USD
                    maxElevation: 950,  // in meters (Mount Gimie)
                    area: 616  // in km²
                },
                {
                    name: "Saint Vincent and the Grenadines",
                    population: 0.11,  // in millions
                    gdp: 0.001,  // in trillion USD
                    maxElevation: 1234,  // in meters (Soufrière)
                    area: 389  // in km²
                },
                {
                    name: "Samoa",
                    population: 0.2,  // in millions
                    gdp: 0.0008,  // in trillion USD
                    maxElevation: 1858,  // in meters (Mount Fiamoe)
                    area: 2842  // in km²
                },
                {
                    name: "San Marino",
                    population: 0.03,  // in millions
                    gdp: 0.001,  // in trillion USD
                    maxElevation: 739,  // in meters (Monte Titano)
                    area: 61  // in km²
                },
                {
                    name: "Sao Tome and Principe",
                    population: 0.2,  // in millions
                    gdp: 0.0005,  // in trillion USD
                    maxElevation: 2024,  // in meters (Mount Pico)
                    area: 964  // in km²
                },
                {
                    name: "Saudi Arabia",
                    population: 35,  // in millions
                    gdp: 1.0,  // in trillion USD
                    maxElevation: 3140,  // in meters (Jabal Sawda)
                    area: 2149690  // in km²
                },
                {
                    name: "Senegal",
                    population: 18,  // in millions
                    gdp: 0.027,  // in trillion USD
                    maxElevation: 648,  // in meters (Nevis Peak)
                    area: 196722  // in km²
                },
                {
                    name: "Serbia",
                    population: 7,  // in millions
                    gdp: 0.06,  // in trillion USD
                    maxElevation: 2656,  // in meters (Mount Midžor)
                    area: 88361  // in km²
                },
                {
                    name: "Seychelles",
                    population: 0.1,  // in millions
                    gdp: 0.0008,  // in trillion USD
                    maxElevation: 905,  // in meters (Morne Seychellois)
                    area: 459  // in km²
                },
                {
                    name: "Sierra Leone",
                    population: 8,  // in millions
                    gdp: 0.004,  // in trillion USD
                    maxElevation: 1948,  // in meters (Mount Bintumani)
                    area: 71740  // in km²
                },
                {
                    name: "Singapore",
                    population: 5.5,  // in millions
                    gdp: 0.42,  // in trillion USD
                    maxElevation: 163,  // in meters (Bukit Timah Hill)
                    area: 728  // in km²
                },
                {
                    name: "Slovakia",
                    population: 5.4,  // in millions
                    gdp: 0.03,  // in trillion USD
                    maxElevation: 2655,  // in meters (Gerlachovský štít)
                    area: 49035  // in km²
                },
                {
                    name: "Slovenia",
                    population: 2.1,  // in millions
                    gdp: 0.06,  // in trillion USD
                    maxElevation: 2864,  // in meters (Triglav)
                    area: 20273  // in km²
                },
                {
                    name: "Solomon Islands",
                    population: 0.7,  // in millions
                    gdp: 0.002,  // in trillion USD
                    maxElevation: 2447,  // in meters (Mount Makarakomburu)
                    area: 28450  // in km²
                },
                {
                    name: "Somalia",
                    population: 17,  // in millions
                    gdp: 0.01,  // in trillion USD
                    maxElevation: 2450,  // in meters (Mount Shimbiris)
                    area: 637657  // in km²
                },
                {
                    name: "South Africa",
                    population: 60,  // in millions
                    gdp: 0.4,  // in trillion USD
                    maxElevation: 3482,  // in meters (Drakensberg Mountains)
                    area: 1219090  // in km²
                },
                {
                    name: "South Sudan",
                    population: 11,  // in millions
                    gdp: 0.01,  // in trillion USD
                    maxElevation: 3187,  // in meters (Mount Kinyeti)
                    area: 619745  // in km²
                },
                {
                    name: "Spain",
                    population: 47,  // in millions
                    gdp: 1.44,  // in trillion USD
                    maxElevation: 3718,  // in meters (Teide)
                    area: 505992  // in km²
                },
                {
                    name: "Sri Lanka",
                    population: 22,  // in millions
                    gdp: 0.07,  // in trillion USD
                    maxElevation: 2524,  // in meters (Pidurutalagala)
                    area: 65610  // in km²
                },
                {
                    name: "Sudan",
                    population: 45,  // in millions
                    gdp: 0.06,  // in trillion USD
                    maxElevation: 3042,  // in meters (Jabal Marra)
                    area: 1861484  // in km²
                },
                {
                    name: "Suriname",
                    population: 0.6,  // in millions
                    gdp: 0.004,  // in trillion USD
                    maxElevation: 1280,  // in meters (Juliana Top)
                    area: 163820  // in km²
                },
                {
                    name: "Sweden",
                    population: 10,  // in millions
                    gdp: 0.55,  // in trillion USD
                    maxElevation: 2106,  // in meters (Kebnekaise)
                    area: 450295  // in km²
                },
                {
                    name: "Switzerland",
                    population: 9,  // in millions
                    gdp: 0.87,  // in trillion USD
                    maxElevation: 4634,  // in meters (Dufourspitze)
                    area: 41285  // in km²
                },
                {
                    name: "Syria",
                    population: 21,  // in millions
                    gdp: 0.02,  // in trillion USD
                    maxElevation: 2814,  // in meters (Mount Hermon)
                    area: 185180  // in km²
                },
                {
                    name: "Taiwan",
                    population: 24,  // in millions
                    gdp: 0.7,  // in trillion USD
                    maxElevation: 3952,  // in meters (Yushan)
                    area: 36193  // in km²
                },
                {
                    name: "Tajikistan",
                    population: 9,  // in millions
                    gdp: 0.006,  // in trillion USD
                    maxElevation: 7495,  // in meters (Ismoil Somoni Peak)
                    area: 143100  // in km²
                },
                {
                    name: "Tanzania",
                    population: 68,  // in millions
                    gdp: 0.06,  // in trillion USD
                    maxElevation: 5895,  // in meters (Mount Kilimanjaro)
                    area: 945087  // in km²
                },
                {
                    name: "Thailand",
                    population: 70,  // in millions
                    gdp: 0.53,  // in trillion USD
                    maxElevation: 2596,  // in meters (Doi Inthanon)
                    area: 513120  // in km²
                },
                {
                    name: "Timor-Leste",
                    population: 1.3,  // in millions
                    gdp: 0.002,  // in trillion USD
                    maxElevation: 2963,  // in meters (Mount Tatamailau)
                    area: 15007  // in km²
                },
                {
                    name: "Togo",
                    population: 8,  // in millions
                    gdp: 0.008,  // in trillion USD
                    maxElevation: 986,  // in meters (Mount Agou)
                    area: 56785  // in km²
                },
                {
                    name: "Tonga",
                    population: 0.1,  // in millions
                    gdp: 0.0005,  // in trillion USD
                    maxElevation: 1030,  // in meters (Mount Talau)
                    area: 748  // in km²
                },
                {
                    name: "Trinidad and Tobago",
                    population: 1.4,  // in millions
                    gdp: 0.023,  // in trillion USD
                    maxElevation: 940,  // in meters (Mount Puy)
                    area: 5128  // in km²
                },
                {
                    name: "Tunisia",
                    population: 12,  // in millions
                    gdp: 0.05,  // in trillion USD
                    maxElevation: 1544,  // in meters (Mount Ain Et Touila)
                    area: 163610  // in km²
                },
                {
                    name: "Turkey",
                    population: 86,  // in millions
                    gdp: 1.0,  // in trillion USD
                    maxElevation: 5137,  // in meters (Mount Ararat)
                    area: 783562  // in km²
                },
                {
                    name: "Turkmenistan",
                    population: 6,  // in millions
                    gdp: 0.04,  // in trillion USD
                    maxElevation: 3139,  // in meters (Mount Ayrybaba)
                    area: 488100  // in km²
                },
                {
                    name: "Tuvalu",
                    population: 0.01,  // in millions
                    gdp: 0.00002,  // in trillion USD
                    maxElevation: 4.5,  // in meters (Fongafale)
                    area: 26  // in km²
                },
                {
                    name: "Uganda",
                    population: 48,  // in millions
                    gdp: 0.04,  // in trillion USD
                    maxElevation: 5109,  // in meters (Mount Stanley)
                    area: 241038  // in km²
                },
                {
                    name: "Ukraine",
                    population: 41,  // in millions
                    gdp: 0.16,  // in trillion USD
                    maxElevation: 2061,  // in meters (Mount Hoverla)
                    area: 603500  // in km²
                },
                {
                    name: "United Arab Emirates",
                    population: 9,  // in millions
                    gdp: 0.42,  // in trillion USD
                    maxElevation: 1910,  // in meters (Jebel Jais)
                    area: 83600  // in km²
                },
                {
                    name: "United Kingdom",
                    population: 67,  // in millions
                    gdp: 3.07,  // in trillion USD
                    maxElevation: 1345,  // in meters (Ben Nevis)
                    area: 243610  // in km²
                },
                {
                    name: "United States",
                    population: 331,  // in millions
                    gdp: 25.46,  // in trillion USD
                    maxElevation: 6190,  // in meters (Mount Denali)
                    area: 9833517  // in km²
                },
                {
                    name: "Uruguay",
                    population: 3.5,  // in millions
                    gdp: 0.06,  // in trillion USD
                    maxElevation: 514,  // in meters (Cerro Catedral)
                    area: 176215  // in km²
                },
                {
                    name: "Uzbekistan",
                    population: 35,  // in millions
                    gdp: 0.08,  // in trillion USD
                    maxElevation: 4643,  // in meters (Pik Mayakovskogo)
                    area: 447400  // in km²
                },
                {
                    name: "Vanuatu",
                    population: 0.3,  // in millions
                    gdp: 0.001,  // in trillion USD
                    maxElevation: 1817,  // in meters (Mount Tabwémassana)
                    area: 12189  // in km²
                },
                {
                    name: "Vatican City",
                    population: 0.0008,  // in millions
                    gdp: 0.0002,  // in trillion USD
                    maxElevation: 75,  // in meters (Vatican Hill)
                    area: 0.44  // in km²
                },
                {
                    name: "Venezuela",
                    population: 29,  // in millions
                    gdp: 0.07,  // in trillion USD
                    maxElevation: 5007,  // in meters (Pico Bolívar)
                    area: 916445  // in km²
                },
                {
                    name: "Vietnam",
                    population: 98,  // in millions
                    gdp: 0.37,  // in trillion USD
                    maxElevation: 3143,  // in meters (Fansipan)
                    area: 331210  // in km²
                },
                {
                    name: "Yemen",
                    population: 30,  // in millions
                    gdp: 0.02,  // in trillion USD
                    maxElevation: 3760,  // in meters (Jabal an-Nabi Shu'ayb)
                    area: 527968  // in km²
                },
                {
                    name: "Zambia",
                    population: 19,  // in millions
                    gdp: 0.02,  // in trillion USD
                    maxElevation: 2286,  // in meters (Mount Mafinga)
                    area: 752612  // in km²
                },
                {
                    name: "Zimbabwe",
                    population: 16,  // in millions
                    gdp: 0.02,  // in trillion USD
                    maxElevation: 2592,  // in meters (Mount Nyangani)
                    area: 390757  // in km²
                }
            ];
            
    // Add more countries similarly...

// List of countries with corresponding images and map links for 14 days
const dailyCountries = [
    { name: "New Zealand", image: "newzealand.png", map: "https://www.google.co.uk/maps/@-40.9715378,173.6765153,123452m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D" },
    { name: "Sri Lanka", image: "srilanka.png", map: "https://www.google.co.uk/maps/@8.6823843,81.4507647,146632m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDMxNi4wIKXMDSoASAFQAw%3D%3D" },
    { name: "Nepal", image: "nepal.png", map: "https://www.google.co.uk/maps/@29.2270785,81.9682565,182135m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDMxNi4wIKXMDSoASAFQAw%3D%3D" },
    { name: "Papua New Guinea", image: "papuanewguinea.png", map: "https://www.google.co.uk/maps/@-4.891908,150.2658789,843503m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDMxNi4wIKXMDSoASAFQAw%3D%3D" },
    { name: "Oman", image: "oman.png", map: "https://www.google.co.uk/maps/@19.0547814,54.6954745,132136m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDMxNi4wIKXMDSoASAFQAw%3D%3D" },
    { name: "Italy", image: "italy.jpg", map: "https://goo.gl/maps/ItalyMapLink" },
    { name: "Kenya", image: "kenya.jpg", map: "https://goo.gl/maps/KenyaMapLink" },
    { name: "India", image: "india.jpg", map: "https://goo.gl/maps/IndiaMapLink" },
    { name: "Mexico", image: "mexico.jpg", map: "https://goo.gl/maps/MexicoMapLink" },
    { name: "South Korea", image: "southkorea.jpg", map: "https://goo.gl/maps/SouthKoreaMapLink" },
    { name: "Germany", image: "germany.jpg", map: "https://goo.gl/maps/GermanyMapLink" },
    { name: "Australia", image: "australia.jpg", map: "https://goo.gl/maps/AustraliaMapLink" },
    { name: "United Kingdom", image: "uk.jpg", map: "https://goo.gl/maps/UKMapLink" },
    { name: "South Africa", image: "southafrica.jpg", map: "https://goo.gl/maps/SouthAfricaMapLink" }
];

// Get the current day index (0-13) using the date
const startDate = new Date('2025-03-19');  // Set the start date
const today = new Date();
const dayIndex = Math.floor((today - startDate) / (1000 * 60 * 60 * 24)) % dailyCountries.length;

const todayCountry = dailyCountries[dayIndex];
// Fixed country to guess
document.getElementById("country-image").src = todayCountry.image;
const chosenCountry = countries.find(country => country.name === todayCountry.name);
const googleMapUrl = todayCountry.map;

let attempts = 0;

// Function to check the guess
document.getElementById("submit").addEventListener("click", function() {
    const userGuess = document.getElementById("country").value.trim();

    if (!userGuess) {
        alert("Please enter a guess!");
        return;
    }

    attempts++;

    // Find the country object by the guessed name
    const guessedCountry = countries.find(country => country.name.toLowerCase() === userGuess.toLowerCase());

    if (guessedCountry) {
        // If the guess is correct
        if (guessedCountry.name.toLowerCase() === chosenCountry.name.toLowerCase()) {
            document.getElementById("result").innerHTML = `${guessedCountry.name} is correct! Number of attempts: ${attempts}. <a href="${googleMapUrl}" target="_blank">Click here to see the country.</a> Come back tommorow to guess new random place. A new random place will appear each day.`;


            // Display the comparison results
            displayComparison(guessedCountry);

            // Reset the game after a short time
            resetGame();
        } else {
            document.getElementById("result").textContent = `${guessedCountry.name} is wrong! Try again. Number of attempts: ${attempts}.`;
            
            // Show comparison for the guessed country
            displayComparison(guessedCountry);
        }
    } else {
        document.getElementById("result").textContent = `Invalid country name. Please try again.`;
    }

    // Clear the input field
    document.getElementById("country").value = '';
});

// Function to display the country information and comparison
function displayComparison(guessedCountry) {
    let comparisonText = "";
    let populationImage = "";
    let populationText = "";
    let gdpImage = "";
    let gdpText = "";
    let maxElevationImage = "";
    let maxElevationText = "";
    let areaImage = "";
    let areaText = "";

    // Comparison for Population
    if (guessedCountry.population > chosenCountry.population) {
        populationImage = `<img src="arrowdown.png" alt="Above" class="arrow-img"/>`;
        populationText = `. Its population is lower than that of ${guessedCountry.name}`;
    } else if (guessedCountry.population < chosenCountry.population) {
        populationImage = `<img src="arrowup.png" alt="Below" class="arrow-img"/>`;
        populationText = `. Its population is higher than that of ${guessedCountry.name}`;
    } else {
        populationImage = `<span style="color:green;">✔</span>`;
        populationText = ``;
    }

    // Comparison for GDP
    if (guessedCountry.gdp > chosenCountry.gdp) {
        gdpImage = `<img src="arrowdown.png" alt="Above" class="arrow-img"/>`;
        gdpText = `. Its GDP is lower than that of ${guessedCountry.name}`;
    } else if (guessedCountry.gdp < chosenCountry.gdp) {
        gdpImage = `<img src="arrowup.png" alt="Below" class="arrow-img" />`;
        gdpText = `. Its GDP is higher than that of ${guessedCountry.name}`;
    } else {
        gdpImage = `<span style="color:green;">✔</span>`;
        gdpText = ``;
    }

    // Comparison for Max Elevation
    if (guessedCountry.maxElevation > chosenCountry.maxElevation) {
        maxElevationImage = `<img src="arrowdown.png" alt="Above" class="arrow-img" />`;
        maxElevationText = `. Its highest point is lower than that of ${guessedCountry.name}`;
    } else if (guessedCountry.maxElevation < chosenCountry.maxElevation) {
        maxElevationImage = `<img src="arrowup.png" alt="Below" class="arrow-img" />`;
        maxElevationText = `. Its highest point is higher than that of ${guessedCountry.name}`;
    } else {
        maxElevationImage = `<span style="color:green;">✔</span>`;
        maxElevationText = ``;
    }

    // Comparison for Area
    if (guessedCountry.area > chosenCountry.area) {
        areaImage = `<img src="arrowdown.png" alt="Above" class="arrow-img"/>`;
        areaText = `. Its surface area is smaller than that of ${guessedCountry.name}`;
    } else if (guessedCountry.area < chosenCountry.area) {
        areaImage = `<img src="arrowup.png" alt="Below" class="arrow-img"/>`;
        areaText = `. Its surface area is bigger than that of ${guessedCountry.name}`;
    } else {
        areaImage = `<span style="color:green;">✔</span>`;
        areaText = ``;
    }

    comparisonText += `
        <div class="comparison-item">${populationImage} Population of ${guessedCountry.name}: ${guessedCountry.population.toLocaleString()} million${populationText}</div>
        <div class="comparison-item">${gdpImage} GDP of ${guessedCountry.name}: ${guessedCountry.gdp} trillion${gdpText}</div>
        <div class="comparison-item"><div>${maxElevationImage} Highest point in ${guessedCountry.name}: ${guessedCountry.maxElevation.toLocaleString()} meters${maxElevationText}</div>
        <div class="comparison-item"><div>${areaImage} Surface area of ${guessedCountry.name}: ${guessedCountry.area.toLocaleString()} km²${areaText}</div>
    `;

    // Show comparison result
    document.getElementById("comparison").innerHTML = comparisonText;
}

// Reset the game after the correct guess
function resetGame() {
    setTimeout(function() {
        // Reset attempts and result text
        attempts = 0;
        document.getElementById("attempts").textContent = attempts;
        document.getElementById("result").textContent = '';
        document.getElementById("comparison").textContent = ''; // Clear the comparison text

        // The country remains "Germany", no randomization

        // Clear the input field for the next guess
        document.getElementById("country").value = '';
    }, 3000); // Reset the game after 3 seconds
}
