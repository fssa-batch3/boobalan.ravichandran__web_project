const dhanukaDetails = JSON.parse(localStorage.getItem("dhanuka_details"));

if(!dhanukaDetails){
    localStorage.setItem("dhanuka_details", JSON.stringify(
      [
        {
            actual_price: "980",
            application: "Wheat, sugarcane, maize, and barley are crops.\n\nMODE OF ACTION: Acetolactate synthase (ALS), the first enzyme in the biosynthesis pathway of the crucial branched chain amino acid, is inhibited by Sempra since it belongs to the sulfonylurea group of herbicides. Weeds die (are killed) when ALS is inhibited because the plant becomes starved for these amino acids. Sempra has no effect on grass family agricultural plants like maize, sugarcane, etc. since these plants contain powerful mixed function oxidases that break down the herbicide molecule into acid metabolite forms.\n\n36g/acre is the dosage.",
            benifits: "Effectiveness at Low Dose: At 36 gm/acre, Sempra effectively controls Cyperus rotundus. Moreover, it provides soil residual action and manages weeds that emerge late. Its dosage is small when compared to conventional herbicides.\n\nDuring 24 hours of application, Sempra verifies Cyperus rotundus' nutrient uptake, resulting in a good, healthy crop.\nSempra has no negative effects on the sugarcane and maize crops.\n\nHigh Soil Residual Action: Sempra suppresses newly sprouting Cyperus rotundus because of its strong soil residual effect.\n\nReduced Weeding Costs: Sempra frees users from having to repeatedly weed by hand, which reduces the expense of manually applying herbicides.\nIncreased Yield: Sempra increases yield, which increases profits.",
            category: "DHANUKA",
            description: "Dhanuka Agritech Ltd.'s Sempra Herbicide is the first herbicide to be made available in India for the purpose of effectively controlling Cyperus rotundus.\nIt is a post-emergence herbicide that is systemic, selective, and has a WDG formulation for the efficient management of Cyperus rotundus from nuts in Sugarcane and Maize crop.\nSempra Herbicide travels through the Xylem and Phloem in both directions, demonstrating its potent systemic activity.",
            discount: "110",
            manufacture_company: "Dhanuka Agritech Ltd",
            product_name: "SEMPRA HERBICIDE",
            product_unique_id: "edd30055-e3ab-4515-817f-aa0624d7fc3e",
            product_weight: "500 gm",
            source: "../../assets/images/dhanuka/dhan1.jpg"
        },
        {
            actual_price: "750",
            application: "It works as a broad-spectrum fungicide with a protective effect. When exposed to air, the product becomes fungitoxic. It is changed into an isothiocyanate, which renders sulphahydral (SH) groups in fungal enzymes inactive. Sometimes, mancozeb and fungal enzymes interchange metals, which disrupts the operation of the fungal enzymes.\n\nDOSAGE: 600–800 grammes per acre.",
             benifits:" Phycomycetes, advanced fungus, and other groups of fungi that infect various crops are controlled by a broad range fungicide thanks to its multisite activity.\nused in various crops for seed treatments, nursery drenching, and foliar sprays.\nIt can be used frequently for a number of years without running the risk of developing resistance.\nThe ideal fungicide to use in conjunction with systemic fungicides to stop or postpone the emergence of resistance.\nIn addition to preventing illness, it also gives crops tiny amounts of manganese and zinc, which maintains plants healthy and green.\nIt is quite safe from environmental hazards and natural adversaries. Thus, a component of integrated disease management.\nBecause it offers stronger crop protection and nutritional advantages over other fungicides, resulting in higher yields and better quality, it is less expensive in the long term than those other fungicides.",
            category: "DHANUKA",
            description: " A contact fungicide of the dithiocarbamate group, Dhanuka M-45 Fungicide (Mancozeb 75% WP) prevents the growth of fungi and the transmission of illnesses. It decreases the enzyme activity in fungus, which in turn decreases energy generation and ultimately causes fungus death.",
            discount: "150",
            manufacture_company: "Dhanuka Agritech Ltd",
            product_name: "DHANUKA M45 FUNGICIDE",
            product_unique_id: "79c04fef-0b90-4750-a944-f9d3401e7308",
            product_weight: "300 gm",
            source: "../../assets/images/dhanuka/dhan2.avif"
        },
        {
            actual_price: "450",
            application: "First spray at the initiation of infection. Second spray 8-10 days after or as and when required.",
             benifits:" This broad-spectrum fungicide has both curative and preventative effects. This chemical exhibits translocation action and is highly systemic. With the exception of particularly alkaline products, most fungicides and insecticides are compatible with it.",
             category: "DHANUKA",
            description: " Systemic fungicide and bactericide, Kasu-B also kills bacteria. It quickly and efficiently translocates into the plants and suppresses the infections as a result of its antibacterial systemic activity.\nBoth the prevention and treatment of diseases are possible with Kasu-B.\nMost fungicides and insecticides are compatible with Kasu-B, with the exception of extremely alkaline compounds.\nKasu-B poses no threat to crops, people, animals, parasitoids, or predators.",
            discount: "60",
            manufacture_company: "Dhanuka Agritech Ltd",
            product_name: "DHANUKA M45 FUNGICIDE",
            product_unique_id: "a17aebfa-de85-4c43-b1e0-f60b4ba11d68",
            product_weight: "250 ml",
            source: "../../assets/images/dhanuka/dhan3.avif"
        },
        {
            actual_price: "1200",
            application: "  This broad-spectrum fungicide has both curative and preventative effects. This chemical exhibits translocation action and is highly systemic. With the exception of particularly alkaline products, most fungicides and insecticides are compatible with it. Use 400 ml of Markar Insecticide to 2 litres of water for an effective termite control method for crops. Spread this mixture across a one acre area after combining it with 20 to 25 kg of sand. Following its application, use mild irrigation (sugar cane crop).",
            benifits:"Markar is a world-renowned, new generation, the broad-spectrum insecticide of Pyrethroid ester group.Markar is an effective termiticide as well as insecticide controlling a wide range of insects like sucking and chewing insects in crops.Markar has contact and stomach action, controls different types of larvae, whitefly, mites and jassids very effectively.Markar has phyto-tonic effect which improves the vigour and keeps the crop healthy, thereby quality produce.",   
            category: "DHANUKA",
            description: "Marker (Bifenthrin 10% EC) is a world-renowned, new generation, the broad-spectrum insecticide of Pyrethroid group. Markar through its contact and stomach action controls different types of larvae, whitefly, mites and jassids very effectively. Marker has strong bonding tendency in the soil thus it persists and exhibits longer duration extraordinary control of termite.",
            discount: "160",
            manufacture_company: "Dhanuka Agritech Ltd",
            product_name: "DHANUKA MAKER INSECTICIDE",
            product_unique_id: "23217f2c-c41f-41c5-b25b-c28b28352fd6",
            product_weight: "500 ml",
            source: "../../assets/images/dhanuka/dhan4.jpg"
        }
      ]
    ));
};

const dow_agro_science_details = JSON.parse(localStorage.getItem("dow_agro_science_details"));
 if(!dow_agro_science_details){

    localStorage.setItem("dow_agro_science_details", JSON.stringify(
        [
            {
                actual_price:"1300",
                application: " 1.0 to 2.0 ml per litre of water for foliar\n500 to 700 ml of soil or drip per acre, applied twice over a period of 20 to 30 days.\nAlso produces positive outcomes for nursery, seed, and root treatments during transplantation.",
               benifits:"Plants contain silicon, which boosts their overall defences.\nincreased ability of plants to withstand abiotic conditions such high winds, dryness, excessive salinity, etc.\nMoreover, silicon supports plant defences against biotic stressors like bacterial, fungal, and insect attacks.\nSilicon lessens the toxicity of excess metals in the P, Mn, Al, and alkalis and aids plant uptake of additional micronutrients from the alkaline/calcareous soils.",
                category: "DOW AGRO SCIENCE",
                description:"Dow has for the first time made 100% silicon available to plants in the form of \"\"ortho-silicic acid\"\" with the introduction of NUTRIBUILDTM Silicon OSA 3%.\nThe silicon micronutrient boosts photosynthesis, which improves crop health overall. It also helps manage numerous types of stress, including pest attacks, water shortages, lodging, salinity, metal toxicity, etc." ,
                discount: "180",
                manufacture_company:"Dow chemical",
                product_name:"DOW NUTRIBUILD - SILICON OSA 3%",
                product_unique_id:"bb730660-a90d-49ee-b22a-6a415e564790",
                product_weight:"500 ml",
                source:"../../assets/images/dow agro/dow1.jpg"
            },
            {
                actual_price:"800",
                application: "1 kg/ha to 2.5 kg/ha of drip\nbefore flowering and fruiting, two to three treatments during the growing stage\nCrops include fruits (such as grapes, pomegranates, citrus, and bananas) as well as vegetables (such as chillies, tomatoes, onions, and brinjal) (cotton, rice, sugarcane, soybean, and others)\nFor soil pH levels up to 7, use Fe EDTA, while for soil pH levels above 7, use Fe EDDHA." ,
                benifits:"Food production and the growth of crops both require iron.\nIt contributes to the synthesis of chlorophyll.\nMany enzymes involved in the transfer of energy, nitrogen reduction and fixation, and the synthesis of lignin are also composed of iron.",
                category: "DOW AGRO SCIENCE",
                description:"The main symptom of iron deficiency is the yellowing of young leaves because of low quantities of chlorophyll.\nLeaves that are severely deficient in Fe turn entirely yellow or virtually white before dying and turning brown.\nThe majority of iron deficits arise in calcareous (high pH) soils. Furthermore, especially on soils with low levels of accessible Fe, the cool and wet weather exacerbates Fe deficits.\nLand that is poorly aerated or heavily compacted hinders plants' ability to absorb Fe.\nHigh quantities of phosphorus, manganese, and zinc that are readily available in the soil have a negative impact on fee absorption.",
                discount: "180",
                manufacture_company:"Dow chemical ",
                product_name:"DOW NUTRIBUILD Fe EDTA 12%E" ,
                product_unique_id:"24d58d81-6f91-4000-b9e1-b18187612785",
                product_weight:"500 gms",
                source:"../../assets/images/dow agro/dow2.jpg"
           },
            {
                actual_price:"1200",
                application: "1 kg/ha to 2.5 kg/ha of drip\nbefore flowering and fruiting, two to three treatments during the growing stage\nCrops include fruits (such as grapes, pomegranates, citrus, and bananas) as well as vegetables (such as chillies, tomatoes, onions, and brinjal) (cotton, rice, sugarcane, soybean, and others)\nFor soil pH levels up to 7, use Fe EDTA, while for soil pH levels above 7, use Fe EDDHA.",
                benifits:"Food production and the growth of crops both require iron.\nIt contributes to the synthesis of chlorophyll.\nMany enzymes involved in the transfer of energy, nitrogen reduction and fixation, and the synthesis of lignin are also composed of iron.",
                category:"DOW AGRO SCIENCE" ,
                description:"Dow has for the first time made 100% silicon available to plants in the form of \"\"ortho-silicic acid\"\" with the introduction of NUTRIBUILDTM Silicon OSA 3%.\nThe silicon micronutrient boosts photosynthesis, which improves crop health overall. It also helps manage numerous types of stress, including pest attacks, water shortages, lodging, salinity, metal toxicity, etc.",
                discount: "300",
                manufacture_company:"Dow chemical" ,
                product_name:"DOW NUTRIBUILD - SILICON OSA 3%",
                product_unique_id:"3438e3df-f46d-48bf-8b44-b4c7fd7d3220",
                product_weight:"500 gm",
                source:"../../assets/images/dow agro/dow3.avif"
            },

        ]));
 };
 
const adama_details = JSON.parse(localStorage.getItem("adama_details"));
if(!adama_details){

   localStorage.setItem("adama_details", JSON.stringify(
       [
        {
            actual_price:"1044",
            application:"2 mL/litre and 400ml/acre",
           benifits:"Agil is used for selective weed control in many broadleaf crops such as sugar beet, oilseed rape, soybeans, sunflower, other field crops, vegetables, fruit trees, vineyards and forestry and best result is achieved when sprayed at the 2-4 leaf stage.\\nAgil Herbicide is a systemic herbicide, which is quickly absorbed by the leaves and translocated from the foliage to the growing points of the leaves and roots of the sprayed weeds.\\nRainfall 1 hour after application will not affect the product activity. Optimal activity is achieved when applied early and weeds are actively growing.\\nAgil Herbicide is safe for beneficial insects and mammals and is environmentally friendly.",
            category: "ADAMA",
            description:"Agil Herbicide is a herbicide of the aryloxy phenoxy propionates family. It is used for the post-emergence control of a wide range of annual and perennial grasses.",
            discount: "209",
            manufacture_company:"Adama - Fertilizers",
            product_name:"AGIL HERBICID",
            product_unique_id:"89e60418-9bd7-4c43-b3cc-2f839b6cef7d",
            product_weight:"400 ml",
            source:"../../assets/images/Adama/ada1.avif"
        },
        {
            actual_price:"1286",
            application: "Blackgram, Redgram, Pigeonpea, Chickpea, Groundnut, Soybean, Rice, Chipotle, Tomato, Cauliflower, Cabbage, Broccoli, and Kale are some examples of crops.\\n\\nHelicoverpa, Spodoptera, Fall armyworm, Cut Worm, Pod Borers, DBM, Stem Borers, Bollworms, and Leaf Roller are several insects and diseases.\\n\\n2ml per litre of water is the dosage.",
            benifits:"Plethora acts as a chitin synthesis inhibitor and also affects the insect nervous system by inhibiting sodium ions entry into nerve cells hence, the insecticide hampers moulting & also paralyses the insect. It has phytotonic effect on the crop.",
            category: "ADAMA",
            description:"Innovative product with a dual mode of action is Plethora Insecticide. Lepidopteran pesticide Plethora has a broad spectrum and has a phytotonic effect on the crop. Inhibits chitin formation and has an impact on the nervous system of insects by preventing sodium ions from entering nerve cells. As a result, the pesticide hinders moulting and paralyses insects.",
            discount: "130",
            manufacture_company:"PLETHORA - Fertilizers",
            product_name:"PLETHORA INSECTICIDE",
            product_unique_id:"2f8cbf08-05c3-4350-bb20-3b4d139315ba",
            product_weight:"200 ml",
            source:"../../assets/images/Adama/ada2.avif"
        },
        {
            actual_price:"1700",
            application: "A wide range of fungal infections and illnesses can be controlled using Custodia Fungicide. Custodia Fungicide has excellent curative and preventative qualities, allowing for flexibility and a wide treatment window. Due to its dual mode of action, it is effective at several phases of fungus development. Custodia Fungicide has a good effect on the physiological function of the crop when used since it increases yield and quality of the produce, which brings in a higher price.\\n\\nCustodia Fungicide Technical Content: Azoxystrobin 11% + Tebuconazole 18.3% w/w SC\\n\\nChili, onions, potatoes, tomatoes, grapes, wheat, and apples are the target crops.\\n\\nPowdery mildew and dieback, fruit rot, purple blotch, sheath blight, yellow rust, early and late blight, downy and powdery mildew, apple scab, and pre-mature leaf fall disease are the insects and pests that are targeted.dosage of 1 ml per litre of water.",
            benifits:"Custodia is a Broad spectrum fungicide for the control of many fungal pathogens & diseases. Custodia has very good preventive & curative properties which provides flexibility & broad window of application. It has a dual mode of action, hence it works at multiple stages of fungal development.",
            category: "ADAMA",
            description:"A wide range of fungal infections and illnesses can be controlled using Custodia Fungicide. Custodia Fungicide has excellent curative and preventative qualities, allowing for flexibility and a wide treatment window. Due to its dual mode of action, it is effective at several phases of fungus development. Custodia Fungicide has a good effect on the physiological function of the crop when used since it increases yield and quality of the produce, which brings in a higher price.",
            discount: "340",
            manufacture_company:"ADAMA Agricultural Solutions UK Ltd",
            product_name:"CUSTODIA FUNGICIDE",
            product_unique_id:"59a6e214-1031-420c-887a-0bac1bac42f8",
            product_weight:"500 ml",
            source:"../../assets/images/Adama/ada3.avif"
        },
        {
            actual_price:"560",
            application: "Technical Content: Bifenthrin 9.4% SC and Diafenthiuron 47% Target Plants: Cotton and Chilies Thrips, whiteflies, aphids, and leafhoppers are the pests that are being targeted. 250ml/acre, or 1.25–1.5ml/liter of waterannel gated, is the dosage.",
            benifits:"Takaf is a special dual-mode of action combination product.  Takaf interferes with sodium channel gating to block mitochondrial ATP synthase, paralysing the pest while also having an impact on the central and peripheral nervous systems.",
            category: "ADAMA",
            description:"Takaf Adama interferes with sodium channel gating to paralyse the insect by inhibiting mitochondrial ATP synthase while also having an impact on the central and peripheral nervous systems.",
            discount: "60",
            manufacture_company:"ADAMA Agricultural Solutions UK Ltd",
            product_name:"TAKAF INSECTICIDE",
            product_unique_id:"dc4fd5cf-efb1-48f0-bf03-832199f55ea5",
            product_weight:"300 ml",
            source:"../../assets/images/Adama/ada4.avif"
        },
       ]
   ));
    };