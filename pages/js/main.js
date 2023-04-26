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
            product_name: "DHANUKA KASU-B FUNGICIDE",
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
            product_unique_id:"59a6e214-1031-420c-887a-0bac1baf42f8",
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

    // ----------------upl- details----------------------
const upl_details = JSON.parse(localStorage.getItem("upl_details"));
if(!upl_details){

   localStorage.setItem("upl_details", JSON.stringify(
       [
        {
            actual_price:"1044",
            application:"2 mL/litre and 400ml/acre",
           benifits:"Agil is used for selective weed control in many broadleaf crops such as sugar beet, oilseed rape, soybeans, sunflower, other field crops, vegetables, fruit trees, vineyards and forestry and best result is achieved when sprayed at the 2-4 leaf stage.\\nAgil Herbicide is a systemic herbicide, which is quickly absorbed by the leaves and translocated from the foliage to the growing points of the leaves and roots of the sprayed weeds.\\nRainfall 1 hour after application will not affect the product activity. Optimal activity is achieved when applied early and weeds are actively growing.\\nAgil Herbicide is safe for beneficial insects and mammals and is environmentally friendly.",
            category: "UPL",
            description:"Agil Herbicide is a herbicide of the aryloxy phenoxy propionates family. It is used for the post-emergence control of a wide range of annual and perennial grasses.",
            discount: "209",
            manufacture_company:"Adama - Fertilizers",
            product_name:"AGIL HERBICID",
            product_unique_id:"89e60418-9bd7-4c43-b3cc-2f839b6cef77d",
            product_weight:"400 ml",
            source:"../../assets/images/upl/up9.avif"
        },
        {
            actual_price:"1286",
            application: "Blackgram, Redgram, Pigeonpea, Chickpea, Groundnut, Soybean, Rice, Chipotle, Tomato, Cauliflower, Cabbage, Broccoli, and Kale are some examples of crops.\\n\\nHelicoverpa, Spodoptera, Fall armyworm, Cut Worm, Pod Borers, DBM, Stem Borers, Bollworms, and Leaf Roller are several insects and diseases.\\n\\n2ml per litre of water is the dosage.",
            benifits:"Plethora acts as a chitin synthesis inhibitor and also affects the insect nervous system by inhibiting sodium ions entry into nerve cells hence, the insecticide hampers moulting & also paralyses the insect. It has phytotonic effect on the crop.",
            category: "UPL",
            description:"Innovative product with a dual mode of action is Plethora Insecticide. Lepidopteran pesticide Plethora has a broad spectrum and has a phytotonic effect on the crop. Inhibits chitin formation and has an impact on the nervous system of insects by preventing sodium ions from entering nerve cells. As a result, the pesticide hinders moulting and paralyses insects.",
            discount: "130",
            manufacture_company:"PLETHORA - Fertilizers",
            product_name:"PLETHORA INSECTICIDE",
            product_unique_id:"2f8cbf08-05c3-4350-bb20-3b4d1393159ba",
            product_weight:"200 ml",
            source:"../../assets/images/upl/upl1.jpg"
        },
        {
            actual_price:"1700",
            application: "A wide range of fungal infections and illnesses can be controlled using Custodia Fungicide. Custodia Fungicide has excellent curative and preventative qualities, allowing for flexibility and a wide treatment window. Due to its dual mode of action, it is effective at several phases of fungus development. Custodia Fungicide has a good effect on the physiological function of the crop when used since it increases yield and quality of the produce, which brings in a higher price.\\n\\nCustodia Fungicide Technical Content: Azoxystrobin 11% + Tebuconazole 18.3% w/w SC\\n\\nChili, onions, potatoes, tomatoes, grapes, wheat, and apples are the target crops.\\n\\nPowdery mildew and dieback, fruit rot, purple blotch, sheath blight, yellow rust, early and late blight, downy and powdery mildew, apple scab, and pre-mature leaf fall disease are the insects and pests that are targeted.dosage of 1 ml per litre of water.",
            benifits:"Custodia is a Broad spectrum fungicide for the control of many fungal pathogens & diseases. Custodia has very good preventive & curative properties which provides flexibility & broad window of application. It has a dual mode of action, hence it works at multiple stages of fungal development.",
            category: "UPL",
            description:"A wide range of fungal infections and illnesses can be controlled using Custodia Fungicide. Custodia Fungicide has excellent curative and preventative qualities, allowing for flexibility and a wide treatment window. Due to its dual mode of action, it is effective at several phases of fungus development. Custodia Fungicide has a good effect on the physiological function of the crop when used since it increases yield and quality of the produce, which brings in a higher price.",
            discount: "340",
            manufacture_company:"ADAMA Agricultural Solutions UK Ltd",
            product_name:"CUSTODIA FUNGICIDE",
            product_unique_id:"59a6e214-1031-4260c-887a-0gac1bac42f8",
            product_weight:"500 ml",
            source:"../../assets/images/upl/upl2.jpg"
        },
        {
            actual_price:"560",
            application: "Technical Content: Bifenthrin 9.4% SC and Diafenthiuron 47% Target Plants: Cotton and Chilies Thrips, whiteflies, aphids, and leafhoppers are the pests that are being targeted. 250ml/acre, or 1.25–1.5ml/liter of waterannel gated, is the dosage.",
            benifits:"Takaf is a special dual-mode of action combination product.  Takaf interferes with sodium channel gating to block mitochondrial ATP synthase, paralysing the pest while also having an impact on the central and peripheral nervous systems.",
            category: "UPL",
            description:"Takaf Adama interferes with sodium channel gating to paralyse the insect by inhibiting mitochondrial ATP synthase while also having an impact on the central and peripheral nervous systems.",
            discount: "60",
            manufacture_company:"ADAMA Agricultural Solutions UK Ltd",
            product_name:"TAKAF INSECTICIDE",
            product_unique_id:"dc4fd5cf-efb1-48f0-bf403-832199f55ea5",
            product_weight:"300 ml",
            source:"../../assets/images/upl/upl3.avif"
        },
       ]
   ));
    };
// -----tata-rallis----------------------------------
const tata_rallis_details = JSON.parse(localStorage.getItem("tata_rallis_details"));
if(!tata_rallis_details){

   localStorage.setItem("tata_rallis_details", JSON.stringify(
       [
        {
            actual_price:"1044",
            application:"2 mL/litre and 400ml/acre",
           benifits:"Agil is used for selective weed control in many broadleaf crops such as sugar beet, oilseed rape, soybeans, sunflower, other field crops, vegetables, fruit trees, vineyards and forestry and best result is achieved when sprayed at the 2-4 leaf stage.\\nAgil Herbicide is a systemic herbicide, which is quickly absorbed by the leaves and translocated from the foliage to the growing points of the leaves and roots of the sprayed weeds.\\nRainfall 1 hour after application will not affect the product activity. Optimal activity is achieved when applied early and weeds are actively growing.\\nAgil Herbicide is safe for beneficial insects and mammals and is environmentally friendly.",
            category: "TATA RALLIS",
            description:"Agil Herbicide is a herbicide of the aryloxy phenoxy propionates family. It is used for the post-emergence control of a wide range of annual and perennial grasses.",
            discount: "209",
            manufacture_company:"Adama - Fertilizers",
            product_name:"AGIL HERBICID",
            product_unique_id:"89e60418-9bd7-4c43-b33cc-2f839b6cef7d",
            product_weight:"400 ml",
            source:"../../assets/images/Tata/tata1.jpg"
        },
        {
            actual_price:"1286",
            application: "Blackgram, Redgram, Pigeonpea, Chickpea, Groundnut, Soybean, Rice, Chipotle, Tomato, Cauliflower, Cabbage, Broccoli, and Kale are some examples of crops.\\n\\nHelicoverpa, Spodoptera, Fall armyworm, Cut Worm, Pod Borers, DBM, Stem Borers, Bollworms, and Leaf Roller are several insects and diseases.\\n\\n2ml per litre of water is the dosage.",
            benifits:"Plethora acts as a chitin synthesis inhibitor and also affects the insect nervous system by inhibiting sodium ions entry into nerve cells hence, the insecticide hampers moulting & also paralyses the insect. It has phytotonic effect on the crop.",
            category: "TATA RALLIS",
            description:"Innovative product with a dual mode of action is Plethora Insecticide. Lepidopteran pesticide Plethora has a broad spectrum and has a phytotonic effect on the crop. Inhibits chitin formation and has an impact on the nervous system of insects by preventing sodium ions from entering nerve cells. As a result, the pesticide hinders moulting and paralyses insects.",
            discount: "130",
            manufacture_company:"PLETHORA - Fertilizers",
            product_name:"PLETHORA INSECTICIDE",
            product_unique_id:"2f8cbf08-05c3-4350-bb20-3b4d6139315ba",
            product_weight:"200 ml",
            source:"../../assets/images/Tata/tata2.jpg"
        },
        {
            actual_price:"1700",
            application: "A wide range of fungal infections and illnesses can be controlled using Custodia Fungicide. Custodia Fungicide has excellent curative and preventative qualities, allowing for flexibility and a wide treatment window. Due to its dual mode of action, it is effective at several phases of fungus development. Custodia Fungicide has a good effect on the physiological function of the crop when used since it increases yield and quality of the produce, which brings in a higher price.\\n\\nCustodia Fungicide Technical Content: Azoxystrobin 11% + Tebuconazole 18.3% w/w SC\\n\\nChili, onions, potatoes, tomatoes, grapes, wheat, and apples are the target crops.\\n\\nPowdery mildew and dieback, fruit rot, purple blotch, sheath blight, yellow rust, early and late blight, downy and powdery mildew, apple scab, and pre-mature leaf fall disease are the insects and pests that are targeted.dosage of 1 ml per litre of water.",
            benifits:"Custodia is a Broad spectrum fungicide for the control of many fungal pathogens & diseases. Custodia has very good preventive & curative properties which provides flexibility & broad window of application. It has a dual mode of action, hence it works at multiple stages of fungal development.",
            category: "TATA RALLIS",
            description:"A wide range of fungal infections and illnesses can be controlled using Custodia Fungicide. Custodia Fungicide has excellent curative and preventative qualities, allowing for flexibility and a wide treatment window. Due to its dual mode of action, it is effective at several phases of fungus development. Custodia Fungicide has a good effect on the physiological function of the crop when used since it increases yield and quality of the produce, which brings in a higher price.",
            discount: "340",
            manufacture_company:"ADAMA Agricultural Solutions UK Ltd",
            product_name:"CUSTODIA FUNGICIDE",
            product_unique_id:"59a6e214-1031-42hc-887a-0baac1bac42f8",
            product_weight:"500 ml",
            source:"../../assets/images/Tata/tata3.avif"
        },
        {
            actual_price:"560",
            application: "Technical Content: Bifenthrin 9.4% SC and Diafenthiuron 47% Target Plants: Cotton and Chilies Thrips, whiteflies, aphids, and leafhoppers are the pests that are being targeted. 250ml/acre, or 1.25–1.5ml/liter of waterannel gated, is the dosage.",
            benifits:"Takaf is a special dual-mode of action combination product.  Takaf interferes with sodium channel gating to block mitochondrial ATP synthase, paralysing the pest while also having an impact on the central and peripheral nervous systems.",
            category: "TATA RALLIS",
            description:"Takaf Adama interferes with sodium channel gating to paralyse the insect by inhibiting mitochondrial ATP synthase while also having an impact on the central and peripheral nervous systems.",
            discount: "60",
            manufacture_company:"ADAMA Agricultural Solutions UK Ltd",
            product_name:"TAKAF INSECTICIDE",
            product_unique_id:"dc4fd5cf-efb1-48f0-bf03-832d199f55ea5",
            product_weight:"300 ml",
            source:"../../assets/images/Tata/tata5.avif"
        },
       ]
   ));
    };

    // ------------bayer------------------------
    const bayer_details = JSON.parse(localStorage.getItem("bayer_details"));
if(!bayer_details){

   localStorage.setItem("bayer_details", JSON.stringify(
       [
        {
            actual_price:"1044",
            application:"2 mL/litre and 400ml/acre",
           benifits:"Agil is used for selective weed control in many broadleaf crops such as sugar beet, oilseed rape, soybeans, sunflower, other field crops, vegetables, fruit trees, vineyards and forestry and best result is achieved when sprayed at the 2-4 leaf stage.\\nAgil Herbicide is a systemic herbicide, which is quickly absorbed by the leaves and translocated from the foliage to the growing points of the leaves and roots of the sprayed weeds.\\nRainfall 1 hour after application will not affect the product activity. Optimal activity is achieved when applied early and weeds are actively growing.\\nAgil Herbicide is safe for beneficial insects and mammals and is environmentally friendly.",
            category: "BAYER",
            description:"Agil Herbicide is a herbicide of the aryloxy phenoxy propionates family. It is used for the post-emergence control of a wide range of annual and perennial grasses.",
            discount: "209",
            manufacture_company:"Adama - Fertilizers",
            product_name:"AGIL HERBICID",
            product_unique_id:"89e60418-9bd7-4c43-b3ccc-2f839b6cef7d",
            product_weight:"400 ml",
            source:"../../assets/images/bayer/bay1.avif"
        },
        {
            actual_price:"1286",
            application: "Blackgram, Redgram, Pigeonpea, Chickpea, Groundnut, Soybean, Rice, Chipotle, Tomato, Cauliflower, Cabbage, Broccoli, and Kale are some examples of crops.\\n\\nHelicoverpa, Spodoptera, Fall armyworm, Cut Worm, Pod Borers, DBM, Stem Borers, Bollworms, and Leaf Roller are several insects and diseases.\\n\\n2ml per litre of water is the dosage.",
            benifits:"Plethora acts as a chitin synthesis inhibitor and also affects the insect nervous system by inhibiting sodium ions entry into nerve cells hence, the insecticide hampers moulting & also paralyses the insect. It has phytotonic effect on the crop.",
            category: "BAYER",
            description:"Innovative product with a dual mode of action is Plethora Insecticide. Lepidopteran pesticide Plethora has a broad spectrum and has a phytotonic effect on the crop. Inhibits chitin formation and has an impact on the nervous system of insects by preventing sodium ions from entering nerve cells. As a result, the pesticide hinders moulting and paralyses insects.",
            discount: "130",
            manufacture_company:"PLETHORA - Fertilizers",
            product_name:"PLETHORA INSECTICIDE",
            product_unique_id:"2f8cbf08-05c3-4350-bbc20-3b4d139315ba",
            product_weight:"200 ml",
            source:"../../assets/images/bayer/bay2.avif"
        },
        {
            actual_price:"1700",
            application: "A wide range of fungal infections and illnesses can be controlled using Custodia Fungicide. Custodia Fungicide has excellent curative and preventative qualities, allowing for flexibility and a wide treatment window. Due to its dual mode of action, it is effective at several phases of fungus development. Custodia Fungicide has a good effect on the physiological function of the crop when used since it increases yield and quality of the produce, which brings in a higher price.\\n\\nCustodia Fungicide Technical Content: Azoxystrobin 11% + Tebuconazole 18.3% w/w SC\\n\\nChili, onions, potatoes, tomatoes, grapes, wheat, and apples are the target crops.\\n\\nPowdery mildew and dieback, fruit rot, purple blotch, sheath blight, yellow rust, early and late blight, downy and powdery mildew, apple scab, and pre-mature leaf fall disease are the insects and pests that are targeted.dosage of 1 ml per litre of water.",
            benifits:"Custodia is a Broad spectrum fungicide for the control of many fungal pathogens & diseases. Custodia has very good preventive & curative properties which provides flexibility & broad window of application. It has a dual mode of action, hence it works at multiple stages of fungal development.",
            category: "BAYER",
            description:"A wide range of fungal infections and illnesses can be controlled using Custodia Fungicide. Custodia Fungicide has excellent curative and preventative qualities, allowing for flexibility and a wide treatment window. Due to its dual mode of action, it is effective at several phases of fungus development. Custodia Fungicide has a good effect on the physiological function of the crop when used since it increases yield and quality of the produce, which brings in a higher price.",
            discount: "340",
            manufacture_company:"ADAMA Agricultural Solutions UK Ltd",
            product_name:"CUSTODIA FUNGICIDE",
            product_unique_id:"59a0e214-1031-420c-887a-0bacc1bac42f8",
            product_weight:"500 ml",
            source:"../../assets/images/bayer/bsy3.avif"
        },
        {
            actual_price:"560",
            application: "Technical Content: Bifenthrin 9.4% SC and Diafenthiuron 47% Target Plants: Cotton and Chilies Thrips, whiteflies, aphids, and leafhoppers are the pests that are being targeted. 250ml/acre, or 1.25–1.5ml/liter of waterannel gated, is the dosage.",
            benifits:"Takaf is a special dual-mode of action combination product.  Takaf interferes with sodium channel gating to block mitochondrial ATP synthase, paralysing the pest while also having an impact on the central and peripheral nervous systems.",
            category: "BAYER",
            description:"Takaf Adama interferes with sodium channel gating to paralyse the insect by inhibiting mitochondrial ATP synthase while also having an impact on the central and peripheral nervous systems.",
            discount: "60",
            manufacture_company:"ADAMA Agricultural Solutions UK Ltd",
            product_name:"TAKAF INSECTICIDE",
            product_unique_id:"dc4fd5cf-efb1-48f0-bf03-8321a99f55ea5",
            product_weight:"300 ml",
            source:"../../assets/images/bayer/bsy5.avif"
        },
       ]
   ));
    };


    // ----------aries agro-------------------
    const aries_agro_details = JSON.parse(localStorage.getItem("aries_agro_details"));
    if(!aries_agro_details){
    
       localStorage.setItem("aries_agro_details", JSON.stringify(
           [
            {
                actual_price:"1044",
                application:"2 mL/litre and 400ml/acre",
               benifits:"Agil is used for selective weed control in many broadleaf crops such as sugar beet, oilseed rape, soybeans, sunflower, other field crops, vegetables, fruit trees, vineyards and forestry and best result is achieved when sprayed at the 2-4 leaf stage.\\nAgil Herbicide is a systemic herbicide, which is quickly absorbed by the leaves and translocated from the foliage to the growing points of the leaves and roots of the sprayed weeds.\\nRainfall 1 hour after application will not affect the product activity. Optimal activity is achieved when applied early and weeds are actively growing.\\nAgil Herbicide is safe for beneficial insects and mammals and is environmentally friendly.",
                category: "ARIES AGRO",
                description:"Agil Herbicide is a herbicide of the aryloxy phenoxy propionates family. It is used for the post-emergence control of a wide range of annual and perennial grasses.",
                discount: "209",
                manufacture_company:"Adama - Fertilizers",
                product_name:"AGIL HERBICID",
                product_unique_id:"89e60418-9bd7-4c43-b3cc-2f83r9b6cef7d",
                product_weight:"400 ml",
                source:"../../assets/images/geolife/geo1.jpg"
            },
            {
                actual_price:"1286",
                application: "Blackgram, Redgram, Pigeonpea, Chickpea, Groundnut, Soybean, Rice, Chipotle, Tomato, Cauliflower, Cabbage, Broccoli, and Kale are some examples of crops.\\n\\nHelicoverpa, Spodoptera, Fall armyworm, Cut Worm, Pod Borers, DBM, Stem Borers, Bollworms, and Leaf Roller are several insects and diseases.\\n\\n2ml per litre of water is the dosage.",
                benifits:"Plethora acts as a chitin synthesis inhibitor and also affects the insect nervous system by inhibiting sodium ions entry into nerve cells hence, the insecticide hampers moulting & also paralyses the insect. It has phytotonic effect on the crop.",
                category: "ARIES AGRO",
                description:"Innovative product with a dual mode of action is Plethora Insecticide. Lepidopteran pesticide Plethora has a broad spectrum and has a phytotonic effect on the crop. Inhibits chitin formation and has an impact on the nervous system of insects by preventing sodium ions from entering nerve cells. As a result, the pesticide hinders moulting and paralyses insects.",
                discount: "130",
                manufacture_company:"PLETHORA - Fertilizers",
                product_name:"PLETHORA INSECTICIDE",
                product_unique_id:"2f8cbf08-05c3-4350-bb20-3b4d13f9315ba",
                product_weight:"200 ml",
                source:"../../assets/images/geolife/geo2.jpg"
            },
            {
                actual_price:"1700",
                application: "A wide range of fungal infections and illnesses can be controlled using Custodia Fungicide. Custodia Fungicide has excellent curative and preventative qualities, allowing for flexibility and a wide treatment window. Due to its dual mode of action, it is effective at several phases of fungus development. Custodia Fungicide has a good effect on the physiological function of the crop when used since it increases yield and quality of the produce, which brings in a higher price.\\n\\nCustodia Fungicide Technical Content: Azoxystrobin 11% + Tebuconazole 18.3% w/w SC\\n\\nChili, onions, potatoes, tomatoes, grapes, wheat, and apples are the target crops.\\n\\nPowdery mildew and dieback, fruit rot, purple blotch, sheath blight, yellow rust, early and late blight, downy and powdery mildew, apple scab, and pre-mature leaf fall disease are the insects and pests that are targeted.dosage of 1 ml per litre of water.",
                benifits:"Custodia is a Broad spectrum fungicide for the control of many fungal pathogens & diseases. Custodia has very good preventive & curative properties which provides flexibility & broad window of application. It has a dual mode of action, hence it works at multiple stages of fungal development.",
                category: "ARIES AGRO",
                description:"A wide range of fungal infections and illnesses can be controlled using Custodia Fungicide. Custodia Fungicide has excellent curative and preventative qualities, allowing for flexibility and a wide treatment window. Due to its dual mode of action, it is effective at several phases of fungus development. Custodia Fungicide has a good effect on the physiological function of the crop when used since it increases yield and quality of the produce, which brings in a higher price.",
                discount: "340",
                manufacture_company:"ADAMA Agricultural Solutions UK Ltd",
                product_name:"CUSTODIA FUNGICIDE",
                product_unique_id:"59a6e214-1031-420c-887a-0b0ac1bac42f8",
                product_weight:"500 ml",
                source:"../../assets/images/geolife/geo3.jpg"
            },
            {
                actual_price:"560",
                application: "Technical Content: Bifenthrin 9.4% SC and Diafenthiuron 47% Target Plants: Cotton and Chilies Thrips, whiteflies, aphids, and leafhoppers are the pests that are being targeted. 250ml/acre, or 1.25–1.5ml/liter of waterannel gated, is the dosage.",
                benifits:"Takaf is a special dual-mode of action combination product.  Takaf interferes with sodium channel gating to block mitochondrial ATP synthase, paralysing the pest while also having an impact on the central and peripheral nervous systems.",
                category: "ARIES AGRO",
                description:"Takaf Adama interferes with sodium channel gating to paralyse the insect by inhibiting mitochondrial ATP synthase while also having an impact on the central and peripheral nervous systems.",
                discount: "60",
                manufacture_company:"ADAMA Agricultural Solutions UK Ltd",
                product_name:"TAKAF INSECTICIDE",
                product_unique_id:"dc4fd5cf-efb1-48f0-bf03-8321979f55ea5",
                product_weight:"300 ml",
                source:"../../assets/images/geolife/geo4.jpg"
            },
           ]
       ));
        };


        // --------------Barrix---------------------
        const barrix_details = JSON.parse(localStorage.getItem("barrix_details"));
        if(!barrix_details){
        
           localStorage.setItem("barrix_details", JSON.stringify(
               [
                {
                    actual_price:"1044",
                    application:"2 mL/litre and 400ml/acre",
                   benifits:"Agil is used for selective weed control in many broadleaf crops such as sugar beet, oilseed rape, soybeans, sunflower, other field crops, vegetables, fruit trees, vineyards and forestry and best result is achieved when sprayed at the 2-4 leaf stage.\\nAgil Herbicide is a systemic herbicide, which is quickly absorbed by the leaves and translocated from the foliage to the growing points of the leaves and roots of the sprayed weeds.\\nRainfall 1 hour after application will not affect the product activity. Optimal activity is achieved when applied early and weeds are actively growing.\\nAgil Herbicide is safe for beneficial insects and mammals and is environmentally friendly.",
                    category: "BARRIX",
                    description:"Agil Herbicide is a herbicide of the aryloxy phenoxy propionates family. It is used for the post-emergence control of a wide range of annual and perennial grasses.",
                    discount: "209",
                    manufacture_company:"Adama - Fertilizers",
                    product_name:"AGIL HERBICID",
                    product_unique_id:"89e60418-9bd7-4c43-b3cc-2fe839b6cef7d",
                    product_weight:"400 ml",
                    source:"../../assets/images/barrix/barrix1.jpg"
                },
                {
                    actual_price:"1286",
                    application: "Blackgram, Redgram, Pigeonpea, Chickpea, Groundnut, Soybean, Rice, Chipotle, Tomato, Cauliflower, Cabbage, Broccoli, and Kale are some examples of crops.\\n\\nHelicoverpa, Spodoptera, Fall armyworm, Cut Worm, Pod Borers, DBM, Stem Borers, Bollworms, and Leaf Roller are several insects and diseases.\\n\\n2ml per litre of water is the dosage.",
                    benifits:"Plethora acts as a chitin synthesis inhibitor and also affects the insect nervous system by inhibiting sodium ions entry into nerve cells hence, the insecticide hampers moulting & also paralyses the insect. It has phytotonic effect on the crop.",
                    category: "BARRIX",
                    description:"Innovative product with a dual mode of action is Plethora Insecticide. Lepidopteran pesticide Plethora has a broad spectrum and has a phytotonic effect on the crop. Inhibits chitin formation and has an impact on the nervous system of insects by preventing sodium ions from entering nerve cells. As a result, the pesticide hinders moulting and paralyses insects.",
                    discount: "130",
                    manufacture_company:"PLETHORA - Fertilizers",
                    product_name:"PLETHORA INSECTICIDE",
                    product_unique_id:"2f8cbf08-05c3-4350-bb20-3b4d2139315ba",
                    product_weight:"200 ml",
                    source:"../../assets/images/barrix/barrix2.jpg"
                },
                {
                    actual_price:"1700",
                    application: "A wide range of fungal infections and illnesses can be controlled using Custodia Fungicide. Custodia Fungicide has excellent curative and preventative qualities, allowing for flexibility and a wide treatment window. Due to its dual mode of action, it is effective at several phases of fungus development. Custodia Fungicide has a good effect on the physiological function of the crop when used since it increases yield and quality of the produce, which brings in a higher price.\\n\\nCustodia Fungicide Technical Content: Azoxystrobin 11% + Tebuconazole 18.3% w/w SC\\n\\nChili, onions, potatoes, tomatoes, grapes, wheat, and apples are the target crops.\\n\\nPowdery mildew and dieback, fruit rot, purple blotch, sheath blight, yellow rust, early and late blight, downy and powdery mildew, apple scab, and pre-mature leaf fall disease are the insects and pests that are targeted.dosage of 1 ml per litre of water.",
                    benifits:"Custodia is a Broad spectrum fungicide for the control of many fungal pathogens & diseases. Custodia has very good preventive & curative properties which provides flexibility & broad window of application. It has a dual mode of action, hence it works at multiple stages of fungal development.",
                    category: "BARRIX",
                    description:"A wide range of fungal infections and illnesses can be controlled using Custodia Fungicide. Custodia Fungicide has excellent curative and preventative qualities, allowing for flexibility and a wide treatment window. Due to its dual mode of action, it is effective at several phases of fungus development. Custodia Fungicide has a good effect on the physiological function of the crop when used since it increases yield and quality of the produce, which brings in a higher price.",
                    discount: "340",
                    manufacture_company:"ADAMA Agricultural Solutions UK Ltd",
                    product_name:"CUSTODIA FUNGICIDE",
                    product_unique_id:"59a6e204-1031-420c-887a-0bac1bhac42f8",
                    product_weight:"500 ml",
                    source:"../../assets/images/barrix/barrix3.jpg"
                },
                {
                    actual_price:"560",
                    application: "Technical Content: Bifenthrin 9.4% SC and Diafenthiuron 47% Target Plants: Cotton and Chilies Thrips, whiteflies, aphids, and leafhoppers are the pests that are being targeted. 250ml/acre, or 1.25–1.5ml/liter of waterannel gated, is the dosage.",
                    benifits:"Takaf is a special dual-mode of action combination product.  Takaf interferes with sodium channel gating to block mitochondrial ATP synthase, paralysing the pest while also having an impact on the central and peripheral nervous systems.",
                    category: "BARRIX",
                    description:"Takaf Adama interferes with sodium channel gating to paralyse the insect by inhibiting mitochondrial ATP synthase while also having an impact on the central and peripheral nervous systems.",
                    discount: "60",
                    manufacture_company:"ADAMA Agricultural Solutions UK Ltd",
                    product_name:"TAKAF INSECTICIDE",
                    product_unique_id:"dc4fd5cf-efb1-48f0-bf03-832199wf55ea5",
                    product_weight:"300 ml",
                    source:"../../assets/images/barrix/barrix4.jpg"
                },
               ]
           ));
            };

// --------------------indofil detAILS----------------------
const indofil_details = JSON.parse(localStorage.getItem("indofil_details"));
        if(!indofil_details){
        
           localStorage.setItem("indofil_details", JSON.stringify(
               [
                {
                    actual_price:"1044",
                    application:"2 mL/litre and 400ml/acre",
                   benifits:"Agil is used for selective weed control in many broadleaf crops such as sugar beet, oilseed rape, soybeans, sunflower, other field crops, vegetables, fruit trees, vineyards and forestry and best result is achieved when sprayed at the 2-4 leaf stage.\\nAgil Herbicide is a systemic herbicide, which is quickly absorbed by the leaves and translocated from the foliage to the growing points of the leaves and roots of the sprayed weeds.\\nRainfall 1 hour after application will not affect the product activity. Optimal activity is achieved when applied early and weeds are actively growing.\\nAgil Herbicide is safe for beneficial insects and mammals and is environmentally friendly.",
                    category: "INDOFIL",
                    description:"Agil Herbicide is a herbicide of the aryloxy phenoxy propionates family. It is used for the post-emergence control of a wide range of annual and perennial grasses.",
                    discount: "209",
                    manufacture_company:"Adama - Fertilizers",
                    product_name:"AGIL HERBICID",
                    product_unique_id:"89e60418-9bd7-4c43-b3cc-2f8j39b6cef7d",
                    product_weight:"400 ml",
                    source:"../../assets/images/indofil/indo1.jpg"
                },
                {
                    actual_price:"1286",
                    application: "Blackgram, Redgram, Pigeonpea, Chickpea, Groundnut, Soybean, Rice, Chipotle, Tomato, Cauliflower, Cabbage, Broccoli, and Kale are some examples of crops.\\n\\nHelicoverpa, Spodoptera, Fall armyworm, Cut Worm, Pod Borers, DBM, Stem Borers, Bollworms, and Leaf Roller are several insects and diseases.\\n\\n2ml per litre of water is the dosage.",
                    benifits:"Plethora acts as a chitin synthesis inhibitor and also affects the insect nervous system by inhibiting sodium ions entry into nerve cells hence, the insecticide hampers moulting & also paralyses the insect. It has phytotonic effect on the crop.",
                    category: "INDOFIL",
                    description:"Innovative product with a dual mode of action is Plethora Insecticide. Lepidopteran pesticide Plethora has a broad spectrum and has a phytotonic effect on the crop. Inhibits chitin formation and has an impact on the nervous system of insects by preventing sodium ions from entering nerve cells. As a result, the pesticide hinders moulting and paralyses insects.",
                    discount: "130",
                    manufacture_company:"PLETHORA - Fertilizers",
                    product_name:"PLETHORA INSECTICIDE",
                    product_unique_id:"2f8cbf08-05c3-4350-bb20-3b4dr139315ba",
                    product_weight:"200 ml",
                    source:"../../assets/images/indofil/indo2.jpg"
                },
                {
                    actual_price:"1700",
                    application: "A wide range of fungal infections and illnesses can be controlled using Custodia Fungicide. Custodia Fungicide has excellent curative and preventative qualities, allowing for flexibility and a wide treatment window. Due to its dual mode of action, it is effective at several phases of fungus development. Custodia Fungicide has a good effect on the physiological function of the crop when used since it increases yield and quality of the produce, which brings in a higher price.\\n\\nCustodia Fungicide Technical Content: Azoxystrobin 11% + Tebuconazole 18.3% w/w SC\\n\\nChili, onions, potatoes, tomatoes, grapes, wheat, and apples are the target crops.\\n\\nPowdery mildew and dieback, fruit rot, purple blotch, sheath blight, yellow rust, early and late blight, downy and powdery mildew, apple scab, and pre-mature leaf fall disease are the insects and pests that are targeted.dosage of 1 ml per litre of water.",
                    benifits:"Custodia is a Broad spectrum fungicide for the control of many fungal pathogens & diseases. Custodia has very good preventive & curative properties which provides flexibility & broad window of application. It has a dual mode of action, hence it works at multiple stages of fungal development.",
                    category: "INDOFIL",
                    description:"A wide range of fungal infections and illnesses can be controlled using Custodia Fungicide. Custodia Fungicide has excellent curative and preventative qualities, allowing for flexibility and a wide treatment window. Due to its dual mode of action, it is effective at several phases of fungus development. Custodia Fungicide has a good effect on the physiological function of the crop when used since it increases yield and quality of the produce, which brings in a higher price.",
                    discount: "340",
                    manufacture_company:"ADAMA Agricultural Solutions UK Ltd",
                    product_name:"CUSTODIA FUNGICIDE",
                    product_unique_id:"59a6e214-1031-420c-887a-0bac1dba942f8",
                    product_weight:"500 ml",
                    source:"../../assets/images/indofil/indo3.jpg"
                },
                {
                    actual_price:"560",
                    application: "Technical Content: Bifenthrin 9.4% SC and Diafenthiuron 47% Target Plants: Cotton and Chilies Thrips, whiteflies, aphids, and leafhoppers are the pests that are being targeted. 250ml/acre, or 1.25–1.5ml/liter of waterannel gated, is the dosage.",
                    benifits:"Takaf is a special dual-mode of action combination product.  Takaf interferes with sodium channel gating to block mitochondrial ATP synthase, paralysing the pest while also having an impact on the central and peripheral nervous systems.",
                    category: "INDOFIL",
                    description:"Takaf Adama interferes with sodium channel gating to paralyse the insect by inhibiting mitochondrial ATP synthase while also having an impact on the central and peripheral nervous systems.",
                    discount: "60",
                    manufacture_company:"ADAMA Agricultural Solutions UK Ltd",
                    product_name:"TAKAF INSECTICIDE",
                    product_unique_id:"dc4fd5cf-efb1-48f0-bf03-8321w99f55ea5",
                    product_weight:"300 ml",
                    source:"../../assets/images/indofil/indo4.jpg"
                },
               ]
           ));
            };

            // ----------------Rinuja----------------------------------
            const rinuja_details = JSON.parse(localStorage.getItem("rinuja_details"));
        if(!rinuja_details){
        
           localStorage.setItem("rinuja_details", JSON.stringify(
               [
                {
                    actual_price:"1044",
                    application:"2 mL/litre and 400ml/acre",
                   benifits:"Agil is used for selective weed control in many broadleaf crops such as sugar beet, oilseed rape, soybeans, sunflower, other field crops, vegetables, fruit trees, vineyards and forestry and best result is achieved when sprayed at the 2-4 leaf stage.\\nAgil Herbicide is a systemic herbicide, which is quickly absorbed by the leaves and translocated from the foliage to the growing points of the leaves and roots of the sprayed weeds.\\nRainfall 1 hour after application will not affect the product activity. Optimal activity is achieved when applied early and weeds are actively growing.\\nAgil Herbicide is safe for beneficial insects and mammals and is environmentally friendly.",
                    category: "RINUJA",
                    description:"Agil Herbicide is a herbicide of the aryloxy phenoxy propionates family. It is used for the post-emergence control of a wide range of annual and perennial grasses.",
                    discount: "209",
                    manufacture_company:"Adama - Fertilizers",
                    product_name:"AGIL HERBICID",
                    product_unique_id:"89e60418-9bd7-4c43-b3cc-2f83e9b6cef7d",
                    product_weight:"400 ml",
                    source:"../../assets/images/rinuja/rinu1.jpg"
                },
                {
                    actual_price:"1286",
                    application: "Blackgram, Redgram, Pigeonpea, Chickpea, Groundnut, Soybean, Rice, Chipotle, Tomato, Cauliflower, Cabbage, Broccoli, and Kale are some examples of crops.\\n\\nHelicoverpa, Spodoptera, Fall armyworm, Cut Worm, Pod Borers, DBM, Stem Borers, Bollworms, and Leaf Roller are several insects and diseases.\\n\\n2ml per litre of water is the dosage.",
                    benifits:"Plethora acts as a chitin synthesis inhibitor and also affects the insect nervous system by inhibiting sodium ions entry into nerve cells hence, the insecticide hampers moulting & also paralyses the insect. It has phytotonic effect on the crop.",
                    category: "RINUJA",
                    description:"Innovative product with a dual mode of action is Plethora Insecticide. Lepidopteran pesticide Plethora has a broad spectrum and has a phytotonic effect on the crop. Inhibits chitin formation and has an impact on the nervous system of insects by preventing sodium ions from entering nerve cells. As a result, the pesticide hinders moulting and paralyses insects.",
                    discount: "130",
                    manufacture_company:"PLETHORA - Fertilizers",
                    product_name:"PLETHORA INSECTICIDE",
                    product_unique_id:"2f8cbf08-05c3-4350-bb20-3b4d3139315ba",
                    product_weight:"200 ml",
                    source:"../../assets/images/rinuja/rinu2.jpg"
                },
                {
                    actual_price:"1700",
                    application: "A wide range of fungal infections and illnesses can be controlled using Custodia Fungicide. Custodia Fungicide has excellent curative and preventative qualities, allowing for flexibility and a wide treatment window. Due to its dual mode of action, it is effective at several phases of fungus development. Custodia Fungicide has a good effect on the physiological function of the crop when used since it increases yield and quality of the produce, which brings in a higher price.\\n\\nCustodia Fungicide Technical Content: Azoxystrobin 11% + Tebuconazole 18.3% w/w SC\\n\\nChili, onions, potatoes, tomatoes, grapes, wheat, and apples are the target crops.\\n\\nPowdery mildew and dieback, fruit rot, purple blotch, sheath blight, yellow rust, early and late blight, downy and powdery mildew, apple scab, and pre-mature leaf fall disease are the insects and pests that are targeted.dosage of 1 ml per litre of water.",
                    benifits:"Custodia is a Broad spectrum fungicide for the control of many fungal pathogens & diseases. Custodia has very good preventive & curative properties which provides flexibility & broad window of application. It has a dual mode of action, hence it works at multiple stages of fungal development.",
                    category: "RINUJA",
                    description:"A wide range of fungal infections and illnesses can be controlled using Custodia Fungicide. Custodia Fungicide has excellent curative and preventative qualities, allowing for flexibility and a wide treatment window. Due to its dual mode of action, it is effective at several phases of fungus development. Custodia Fungicide has a good effect on the physiological function of the crop when used since it increases yield and quality of the produce, which brings in a higher price.",
                    discount: "340",
                    manufacture_company:"ADAMA Agricultural Solutions UK Ltd",
                    product_name:"CUSTODIA FUNGICIDE",
                    product_unique_id:"59a6e214-1031-420c-887a-0bac1bac462f8",
                    product_weight:"500 ml",
                    source:"../../assets/images/rinuja/rinu3.jpg"
                },
                {
                    actual_price:"560",
                    application: "Technical Content: Bifenthrin 9.4% SC and Diafenthiuron 47% Target Plants: Cotton and Chilies Thrips, whiteflies, aphids, and leafhoppers are the pests that are being targeted. 250ml/acre, or 1.25–1.5ml/liter of waterannel gated, is the dosage.",
                    benifits:"Takaf is a special dual-mode of action combination product.  Takaf interferes with sodium channel gating to block mitochondrial ATP synthase, paralysing the pest while also having an impact on the central and peripheral nervous systems.",
                    category: "RINUJA",
                    description:"Takaf Adama interferes with sodium channel gating to paralyse the insect by inhibiting mitochondrial ATP synthase while also having an impact on the central and peripheral nervous systems.",
                    discount: "60",
                    manufacture_company:"ADAMA Agricultural Solutions UK Ltd",
                    product_name:"TAKAF INSECTICIDE",
                    product_unique_id:"dc4fd5cf-efb1-48f0-bf03-8732199f55ea5",
                    product_weight:"300 ml",
                    source:"../../assets/images/rinuja/rinu4.jpg"
                },
               ]
           ));
            };

    // ------------------Bio Insecticides--------------------
    const bio_insecticides_details = JSON.parse(localStorage.getItem("bio_insecticides_details"));
    if(!bio_insecticides_details){
    
       localStorage.setItem("bio_insecticides_details", JSON.stringify(
           [
            {
                actual_price:"1044",
                application:"2 mL/litre and 400ml/acre",
               benifits:"Agil is used for selective weed control in many broadleaf crops such as sugar beet, oilseed rape, soybeans, sunflower, other field crops, vegetables, fruit trees, vineyards and forestry and best result is achieved when sprayed at the 2-4 leaf stage.\\nAgil Herbicide is a systemic herbicide, which is quickly absorbed by the leaves and translocated from the foliage to the growing points of the leaves and roots of the sprayed weeds.\\nRainfall 1 hour after application will not affect the product activity. Optimal activity is achieved when applied early and weeds are actively growing.\\nAgil Herbicide is safe for beneficial insects and mammals and is environmentally friendly.",
                category: "BIO INSECTICIDES",
                description:"Agil Herbicide is a herbicide of the aryloxy phenoxy propionates family. It is used for the post-emergence control of a wide range of annual and perennial grasses.",
                discount: "209",
                manufacture_company:"Adama - Fertilizers",
                product_name:"AGIL HERBICID",
                product_unique_id:"89e60418-9bd7-4c43-b3cc-2f839b36cef7d",
                product_weight:"400 ml",
                source:"../../assets/images/Insecticide/ins1.jpg"
            },
            {
                actual_price:"1286",
                application: "Blackgram, Redgram, Pigeonpea, Chickpea, Groundnut, Soybean, Rice, Chipotle, Tomato, Cauliflower, Cabbage, Broccoli, and Kale are some examples of crops.\\n\\nHelicoverpa, Spodoptera, Fall armyworm, Cut Worm, Pod Borers, DBM, Stem Borers, Bollworms, and Leaf Roller are several insects and diseases.\\n\\n2ml per litre of water is the dosage.",
                benifits:"Plethora acts as a chitin synthesis inhibitor and also affects the insect nervous system by inhibiting sodium ions entry into nerve cells hence, the insecticide hampers moulting & also paralyses the insect. It has phytotonic effect on the crop.",
                category: "BIO INSECTICIDES",
                description:"Innovative product with a dual mode of action is Plethora Insecticide. Lepidopteran pesticide Plethora has a broad spectrum and has a phytotonic effect on the crop. Inhibits chitin formation and has an impact on the nervous system of insects by preventing sodium ions from entering nerve cells. As a result, the pesticide hinders moulting and paralyses insects.",
                discount: "130",
                manufacture_company:"PLETHORA - Fertilizers",
                product_name:"PLETHORA INSECTICIDE",
                product_unique_id:"2f8cbf08-05c3-4350-bb20-3b4d1393158ba",
                product_weight:"200 ml",
                source:"../../assets/images/Insecticide/ins2.jpg"
            },
            {
                actual_price:"1700",
                application: "A wide range of fungal infections and illnesses can be controlled using Custodia Fungicide. Custodia Fungicide has excellent curative and preventative qualities, allowing for flexibility and a wide treatment window. Due to its dual mode of action, it is effective at several phases of fungus development. Custodia Fungicide has a good effect on the physiological function of the crop when used since it increases yield and quality of the produce, which brings in a higher price.\\n\\nCustodia Fungicide Technical Content: Azoxystrobin 11% + Tebuconazole 18.3% w/w SC\\n\\nChili, onions, potatoes, tomatoes, grapes, wheat, and apples are the target crops.\\n\\nPowdery mildew and dieback, fruit rot, purple blotch, sheath blight, yellow rust, early and late blight, downy and powdery mildew, apple scab, and pre-mature leaf fall disease are the insects and pests that are targeted.dosage of 1 ml per litre of water.",
                benifits:"Custodia is a Broad spectrum fungicide for the control of many fungal pathogens & diseases. Custodia has very good preventive & curative properties which provides flexibility & broad window of application. It has a dual mode of action, hence it works at multiple stages of fungal development.",
                category: "BIO INSECTICIDES",
                description:"A wide range of fungal infections and illnesses can be controlled using Custodia Fungicide. Custodia Fungicide has excellent curative and preventative qualities, allowing for flexibility and a wide treatment window. Due to its dual mode of action, it is effective at several phases of fungus development. Custodia Fungicide has a good effect on the physiological function of the crop when used since it increases yield and quality of the produce, which brings in a higher price.",
                discount: "340",
                manufacture_company:"ADAMA Agricultural Solutions UK Ltd",
                product_name:"CUSTODIA FUNGICIDE",
                product_unique_id:"59a6e214-1031-420c-887a-0bac1bac422f8",
                product_weight:"500 ml",
                source:"../../assets/images/Insecticide/ins3.avif"
            },
            {
                actual_price:"560",
                application: "Technical Content: Bifenthrin 9.4% SC and Diafenthiuron 47% Target Plants: Cotton and Chilies Thrips, whiteflies, aphids, and leafhoppers are the pests that are being targeted. 250ml/acre, or 1.25–1.5ml/liter of waterannel gated, is the dosage.",
                benifits:"Takaf is a special dual-mode of action combination product.  Takaf interferes with sodium channel gating to block mitochondrial ATP synthase, paralysing the pest while also having an impact on the central and peripheral nervous systems.",
                category: "BIO INSECTICIDES",
                description:"Takaf Adama interferes with sodium channel gating to paralyse the insect by inhibiting mitochondrial ATP synthase while also having an impact on the central and peripheral nervous systems.",
                discount: "60",
                manufacture_company:"ADAMA Agricultural Solutions UK Ltd",
                product_name:"TAKAF INSECTICIDE",
                product_unique_id:"dc4fd5gcf-efb1-48f0-bf03-832199f55ea5",
                product_weight:"300 ml",
                source:"../../assets/images/Insecticide/ins4.jpg"
            },
           ]
       ));
        };

// ------------------Bio fungicides-----------------
const bio_fungicides_details = JSON.parse(localStorage.getItem("bio_fungicides_details"));
if(!bio_fungicides_details){

   localStorage.setItem("bio_fungicides_details", JSON.stringify(
       [
        {
            actual_price:"1044",
            application:"2 mL/litre and 400ml/acre",
           benifits:"Agil is used for selective weed control in many broadleaf crops such as sugar beet, oilseed rape, soybeans, sunflower, other field crops, vegetables, fruit trees, vineyards and forestry and best result is achieved when sprayed at the 2-4 leaf stage.\\nAgil Herbicide is a systemic herbicide, which is quickly absorbed by the leaves and translocated from the foliage to the growing points of the leaves and roots of the sprayed weeds.\\nRainfall 1 hour after application will not affect the product activity. Optimal activity is achieved when applied early and weeds are actively growing.\\nAgil Herbicide is safe for beneficial insects and mammals and is environmentally friendly.",
            category: "BIO FUNGICIDES",
            description:"Agil Herbicide is a herbicide of the aryloxy phenoxy propionates family. It is used for the post-emergence control of a wide range of annual and perennial grasses.",
            discount: "209",
            manufacture_company:"Adama - Fertilizers",
            product_name:"AGIL HERBICID",
            product_unique_id:"89e60418-9hbd7-4c43-b3cc-2f839b6cef7d",
            product_weight:"400 ml",
            source:"../../assets/images/fungicides/fun1.jpg"
        },
        {
            actual_price:"1286",
            application: "Blackgram, Redgram, Pigeonpea, Chickpea, Groundnut, Soybean, Rice, Chipotle, Tomato, Cauliflower, Cabbage, Broccoli, and Kale are some examples of crops.\\n\\nHelicoverpa, Spodoptera, Fall armyworm, Cut Worm, Pod Borers, DBM, Stem Borers, Bollworms, and Leaf Roller are several insects and diseases.\\n\\n2ml per litre of water is the dosage.",
            benifits:"Plethora acts as a chitin synthesis inhibitor and also affects the insect nervous system by inhibiting sodium ions entry into nerve cells hence, the insecticide hampers moulting & also paralyses the insect. It has phytotonic effect on the crop.",
            category: "BIO FUNGICIDES",
            description:"Innovative product with a dual mode of action is Plethora Insecticide. Lepidopteran pesticide Plethora has a broad spectrum and has a phytotonic effect on the crop. Inhibits chitin formation and has an impact on the nervous system of insects by preventing sodium ions from entering nerve cells. As a result, the pesticide hinders moulting and paralyses insects.",
            discount: "130",
            manufacture_company:"PLETHORA - Fertilizers",
            product_name:"PLETHORA INSECTICIDE",
            product_unique_id:"2f8cbf08-05c3-4350-bb20-3b4d139g315ba",
            product_weight:"200 ml",
            source:"../../assets/images/fungicides/fun2.avif"
        },
        {
            actual_price:"1700",
            application: "A wide range of fungal infections and illnesses can be controlled using Custodia Fungicide. Custodia Fungicide has excellent curative and preventative qualities, allowing for flexibility and a wide treatment window. Due to its dual mode of action, it is effective at several phases of fungus development. Custodia Fungicide has a good effect on the physiological function of the crop when used since it increases yield and quality of the produce, which brings in a higher price.\\n\\nCustodia Fungicide Technical Content: Azoxystrobin 11% + Tebuconazole 18.3% w/w SC\\n\\nChili, onions, potatoes, tomatoes, grapes, wheat, and apples are the target crops.\\n\\nPowdery mildew and dieback, fruit rot, purple blotch, sheath blight, yellow rust, early and late blight, downy and powdery mildew, apple scab, and pre-mature leaf fall disease are the insects and pests that are targeted.dosage of 1 ml per litre of water.",
            benifits:"Custodia is a Broad spectrum fungicide for the control of many fungal pathogens & diseases. Custodia has very good preventive & curative properties which provides flexibility & broad window of application. It has a dual mode of action, hence it works at multiple stages of fungal development.",
            category: "BIO FUNGICIDES",
            description:"A wide range of fungal infections and illnesses can be controlled using Custodia Fungicide. Custodia Fungicide has excellent curative and preventative qualities, allowing for flexibility and a wide treatment window. Due to its dual mode of action, it is effective at several phases of fungus development. Custodia Fungicide has a good effect on the physiological function of the crop when used since it increases yield and quality of the produce, which brings in a higher price.",
            discount: "340",
            manufacture_company:"ADAMA Agricultural Solutions UK Ltd",
            product_name:"CUSTODIA FUNGICIDE",
            product_unique_id:"59a6e214-1031-420c-887a-04bac1bac42f8",
            product_weight:"500 ml",
            source:"../../assets/images/fungicides/fun3.avif"
        },
        {
            actual_price:"560",
            application: "Technical Content: Bifenthrin 9.4% SC and Diafenthiuron 47% Target Plants: Cotton and Chilies Thrips, whiteflies, aphids, and leafhoppers are the pests that are being targeted. 250ml/acre, or 1.25–1.5ml/liter of waterannel gated, is the dosage.",
            benifits:"Takaf is a special dual-mode of action combination product.  Takaf interferes with sodium channel gating to block mitochondrial ATP synthase, paralysing the pest while also having an impact on the central and peripheral nervous systems.",
            category: "BIO FUNGICIDES",
            description:"Takaf Adama interferes with sodium channel gating to paralyse the insect by inhibiting mitochondrial ATP synthase while also having an impact on the central and peripheral nervous systems.",
            discount: "60",
            manufacture_company:"ADAMA Agricultural Solutions UK Ltd",
            product_name:"TAKAF INSECTICIDE",
            product_unique_id:"dc4fd5cf-efb1-48f0-bf03-832199fr55ea5",
            product_weight:"300 ml",
            source:"../../assets/images/fungicides/fun4.avif"
        },
       ]
   ));
    };


// ---------bio nematicides----------------------
const bio_nematicides_details = JSON.parse(localStorage.getItem("bio_nematicides_details"));
 if(!bio_nematicides_details){

    localStorage.setItem("bio_nematicides_details", JSON.stringify(
        [
            {
                actual_price:"1300",
                application: " 1.0 to 2.0 ml per litre of water for foliar\n500 to 700 ml of soil or drip per acre, applied twice over a period of 20 to 30 days.\nAlso produces positive outcomes for nursery, seed, and root treatments during transplantation.",
               benifits:"Plants contain silicon, which boosts their overall defences.\nincreased ability of plants to withstand abiotic conditions such high winds, dryness, excessive salinity, etc.\nMoreover, silicon supports plant defences against biotic stressors like bacterial, fungal, and insect attacks.\nSilicon lessens the toxicity of excess metals in the P, Mn, Al, and alkalis and aids plant uptake of additional micronutrients from the alkaline/calcareous soils.",
                category: "BIO NEMATICIDES",
                description:"Dow has for the first time made 100% silicon available to plants in the form of \"\"ortho-silicic acid\"\" with the introduction of NUTRIBUILDTM Silicon OSA 3%.\nThe silicon micronutrient boosts photosynthesis, which improves crop health overall. It also helps manage numerous types of stress, including pest attacks, water shortages, lodging, salinity, metal toxicity, etc." ,
                discount: "180",
                manufacture_company:"Dow chemical",
                product_name:"DOW NUTRIBUILD - SILICON OSA 3%",
                product_unique_id:"bb730660-a90d-49ee-b22a-6fa415e564790",
                product_weight:"500 ml",
                source:"../../assets/images/Nematicides/nem1.jpg"
            },
            {
                actual_price:"800",
                application: "1 kg/ha to 2.5 kg/ha of drip\nbefore flowering and fruiting, two to three treatments during the growing stage\nCrops include fruits (such as grapes, pomegranates, citrus, and bananas) as well as vegetables (such as chillies, tomatoes, onions, and brinjal) (cotton, rice, sugarcane, soybean, and others)\nFor soil pH levels up to 7, use Fe EDTA, while for soil pH levels above 7, use Fe EDDHA." ,
                benifits:"Food production and the growth of crops both require iron.\nIt contributes to the synthesis of chlorophyll.\nMany enzymes involved in the transfer of energy, nitrogen reduction and fixation, and the synthesis of lignin are also composed of iron.",
                category: "BIO NEMATICIDES",
                description:"The main symptom of iron deficiency is the yellowing of young leaves because of low quantities of chlorophyll.\nLeaves that are severely deficient in Fe turn entirely yellow or virtually white before dying and turning brown.\nThe majority of iron deficits arise in calcareous (high pH) soils. Furthermore, especially on soils with low levels of accessible Fe, the cool and wet weather exacerbates Fe deficits.\nLand that is poorly aerated or heavily compacted hinders plants' ability to absorb Fe.\nHigh quantities of phosphorus, manganese, and zinc that are readily available in the soil have a negative impact on fee absorption.",
                discount: "180",
                manufacture_company:"Dow chemical ",
                product_name:"DOW NUTRIBUILD Fe EDTA 12%E" ,
                product_unique_id:"24d58d81-6f91-4000-hb9e1-b18187612785",
                product_weight:"500 gms",
                source:"../../assets/images/Nematicides/nem2.jpg"
           },
            {
                actual_price:"1200",
                application: "1 kg/ha to 2.5 kg/ha of drip\nbefore flowering and fruiting, two to three treatments during the growing stage\nCrops include fruits (such as grapes, pomegranates, citrus, and bananas) as well as vegetables (such as chillies, tomatoes, onions, and brinjal) (cotton, rice, sugarcane, soybean, and others)\nFor soil pH levels up to 7, use Fe EDTA, while for soil pH levels above 7, use Fe EDDHA.",
                benifits:"Food production and the growth of crops both require iron.\nIt contributes to the synthesis of chlorophyll.\nMany enzymes involved in the transfer of energy, nitrogen reduction and fixation, and the synthesis of lignin are also composed of iron.",
                category:"BIO NEMATICIDES" ,
                description:"Dow has for the first time made 100% silicon available to plants in the form of \"\"ortho-silicic acid\"\" with the introduction of NUTRIBUILDTM Silicon OSA 3%.\nThe silicon micronutrient boosts photosynthesis, which improves crop health overall. It also helps manage numerous types of stress, including pest attacks, water shortages, lodging, salinity, metal toxicity, etc.",
                discount: "300",
                manufacture_company:"Dow chemical" ,
                product_name:"DOW NUTRIBUILD - SILICON OSA 3%",
                product_unique_id:"3435e3df-f46d-48bf-8b445-b4c7fd7d3220",
                product_weight:"500 gm",
                source:"../../assets/images/Nematicides/nem3.avif"
            },

        ]));
 };


//  ---------------Bio Vircides--------------------
const bio_vircides_details = JSON.parse(localStorage.getItem("bio_vircides_details"));
 if(!bio_vircides_details){

    localStorage.setItem("bio_vircides_details", JSON.stringify(
        [
            {
                actual_price:"1300",
                application: " 1.0 to 2.0 ml per litre of water for foliar\n500 to 700 ml of soil or drip per acre, applied twice over a period of 20 to 30 days.\nAlso produces positive outcomes for nursery, seed, and root treatments during transplantation.",
               benifits:"Plants contain silicon, which boosts their overall defences.\nincreased ability of plants to withstand abiotic conditions such high winds, dryness, excessive salinity, etc.\nMoreover, silicon supports plant defences against biotic stressors like bacterial, fungal, and insect attacks.\nSilicon lessens the toxicity of excess metals in the P, Mn, Al, and alkalis and aids plant uptake of additional micronutrients from the alkaline/calcareous soils.",
                category: "BIO VIRCIDES",
                description:"Dow has for the first time made 100% silicon available to plants in the form of \"\"ortho-silicic acid\"\" with the introduction of NUTRIBUILDTM Silicon OSA 3%.\nThe silicon micronutrient boosts photosynthesis, which improves crop health overall. It also helps manage numerous types of stress, including pest attacks, water shortages, lodging, salinity, metal toxicity, etc." ,
                discount: "180",
                manufacture_company:"Dow chemical",
                product_name:"DOW NUTRIBUILD - SILICON OSA 3%",
                product_unique_id:"bb730660-a904d-49ee-b22a-6a415e564790",
                product_weight:"500 ml",
                source:"../../assets/images/Viricides/vir1.jpg"
            },
            {
                actual_price:"800",
                application: "1 kg/ha to 2.5 kg/ha of drip\nbefore flowering and fruiting, two to three treatments during the growing stage\nCrops include fruits (such as grapes, pomegranates, citrus, and bananas) as well as vegetables (such as chillies, tomatoes, onions, and brinjal) (cotton, rice, sugarcane, soybean, and others)\nFor soil pH levels up to 7, use Fe EDTA, while for soil pH levels above 7, use Fe EDDHA." ,
                benifits:"Food production and the growth of crops both require iron.\nIt contributes to the synthesis of chlorophyll.\nMany enzymes involved in the transfer of energy, nitrogen reduction and fixation, and the synthesis of lignin are also composed of iron.",
                category: "BIO VIRCIDES",
                description:"The main symptom of iron deficiency is the yellowing of young leaves because of low quantities of chlorophyll.\nLeaves that are severely deficient in Fe turn entirely yellow or virtually white before dying and turning brown.\nThe majority of iron deficits arise in calcareous (high pH) soils. Furthermore, especially on soils with low levels of accessible Fe, the cool and wet weather exacerbates Fe deficits.\nLand that is poorly aerated or heavily compacted hinders plants' ability to absorb Fe.\nHigh quantities of phosphorus, manganese, and zinc that are readily available in the soil have a negative impact on fee absorption.",
                discount: "180",
                manufacture_company:"Dow chemical ",
                product_name:"DOW NUTRIBUILD Fe EDTA 12%E" ,
                product_unique_id:"24d58d81-6f91-400g0-b9e1-b18187612785",
                product_weight:"500 gms",
                source:"../../assets/images/Viricides/vir2.jpg"
           },
            {
                actual_price:"1200",
                application: "1 kg/ha to 2.5 kg/ha of drip\nbefore flowering and fruiting, two to three treatments during the growing stage\nCrops include fruits (such as grapes, pomegranates, citrus, and bananas) as well as vegetables (such as chillies, tomatoes, onions, and brinjal) (cotton, rice, sugarcane, soybean, and others)\nFor soil pH levels up to 7, use Fe EDTA, while for soil pH levels above 7, use Fe EDDHA.",
                benifits:"Food production and the growth of crops both require iron.\nIt contributes to the synthesis of chlorophyll.\nMany enzymes involved in the transfer of energy, nitrogen reduction and fixation, and the synthesis of lignin are also composed of iron.",
                category:"BIO VIRCIDES" ,
                description:"Dow has for the first time made 100% silicon available to plants in the form of \"\"ortho-silicic acid\"\" with the introduction of NUTRIBUILDTM Silicon OSA 3%.\nThe silicon micronutrient boosts photosynthesis, which improves crop health overall. It also helps manage numerous types of stress, including pest attacks, water shortages, lodging, salinity, metal toxicity, etc.",
                discount: "300",
                manufacture_company:"Dow chemical" ,
                product_name:"DOW NUTRIBUILD - SILICON OSA 3%",
                product_unique_id:"3438e3df-f46d-48bf-8b44-b4c7fhd7d3220",
                product_weight:"500 gm",
                source:"../../assets/images/Viricides/vir3.avif"
            },

        ]));
 };


//  -------------------- Major nurients---------------
const major_nurients_details = JSON.parse(localStorage.getItem("major_nurients_details"));
 if(!major_nurients_details){

    localStorage.setItem("major_nurients_details", JSON.stringify(
        [
            {
                actual_price:"1300",
                application: " 1.0 to 2.0 ml per litre of water for foliar\n500 to 700 ml of soil or drip per acre, applied twice over a period of 20 to 30 days.\nAlso produces positive outcomes for nursery, seed, and root treatments during transplantation.",
               benifits:"Plants contain silicon, which boosts their overall defences.\nincreased ability of plants to withstand abiotic conditions such high winds, dryness, excessive salinity, etc.\nMoreover, silicon supports plant defences against biotic stressors like bacterial, fungal, and insect attacks.\nSilicon lessens the toxicity of excess metals in the P, Mn, Al, and alkalis and aids plant uptake of additional micronutrients from the alkaline/calcareous soils.",
                category: "MAJOR NUTRIENTS",
                description:"Dow has for the first time made 100% silicon available to plants in the form of \"\"ortho-silicic acid\"\" with the introduction of NUTRIBUILDTM Silicon OSA 3%.\nThe silicon micronutrient boosts photosynthesis, which improves crop health overall. It also helps manage numerous types of stress, including pest attacks, water shortages, lodging, salinity, metal toxicity, etc." ,
                discount: "180",
                manufacture_company:"Dow chemical",
                product_name:"DOW NUTRIBUILD - SILICON OSA 3%",
                product_unique_id:"bb730660-a90d-49ee-b22a-6a4y15e564790",
                product_weight:"500 ml",
                source:"../../assets/images/Major nutrients/maj1.webp"
            },
            {
                actual_price:"800",
                application: "1 kg/ha to 2.5 kg/ha of drip\nbefore flowering and fruiting, two to three treatments during the growing stage\nCrops include fruits (such as grapes, pomegranates, citrus, and bananas) as well as vegetables (such as chillies, tomatoes, onions, and brinjal) (cotton, rice, sugarcane, soybean, and others)\nFor soil pH levels up to 7, use Fe EDTA, while for soil pH levels above 7, use Fe EDDHA." ,
                benifits:"Food production and the growth of crops both require iron.\nIt contributes to the synthesis of chlorophyll.\nMany enzymes involved in the transfer of energy, nitrogen reduction and fixation, and the synthesis of lignin are also composed of iron.",
                category: "MAJOR NUTRIENTS",
                description:"The main symptom of iron deficiency is the yellowing of young leaves because of low quantities of chlorophyll.\nLeaves that are severely deficient in Fe turn entirely yellow or virtually white before dying and turning brown.\nThe majority of iron deficits arise in calcareous (high pH) soils. Furthermore, especially on soils with low levels of accessible Fe, the cool and wet weather exacerbates Fe deficits.\nLand that is poorly aerated or heavily compacted hinders plants' ability to absorb Fe.\nHigh quantities of phosphorus, manganese, and zinc that are readily available in the soil have a negative impact on fee absorption.",
                discount: "180",
                manufacture_company:"Dow chemical ",
                product_name:"DOW NUTRIBUILD Fe EDTA 12%E" ,
                product_unique_id:"24d58d81-6f91-4000-b9e1-b18e187612785",
                product_weight:"500 gms",
                source:"../../assets/images/Major nutrients/maj2.jpg"
           },
            {
                actual_price:"1200",
                application: "1 kg/ha to 2.5 kg/ha of drip\nbefore flowering and fruiting, two to three treatments during the growing stage\nCrops include fruits (such as grapes, pomegranates, citrus, and bananas) as well as vegetables (such as chillies, tomatoes, onions, and brinjal) (cotton, rice, sugarcane, soybean, and others)\nFor soil pH levels up to 7, use Fe EDTA, while for soil pH levels above 7, use Fe EDDHA.",
                benifits:"Food production and the growth of crops both require iron.\nIt contributes to the synthesis of chlorophyll.\nMany enzymes involved in the transfer of energy, nitrogen reduction and fixation, and the synthesis of lignin are also composed of iron.",
                category:"MAJOR NUTRIENTS" ,
                description:"Dow has for the first time made 100% silicon available to plants in the form of \"\"ortho-silicic acid\"\" with the introduction of NUTRIBUILDTM Silicon OSA 3%.\nThe silicon micronutrient boosts photosynthesis, which improves crop health overall. It also helps manage numerous types of stress, including pest attacks, water shortages, lodging, salinity, metal toxicity, etc.",
                discount: "300",
                manufacture_company:"Dow chemical" ,
                product_name:"DOW NUTRIBUILD - SILICON OSA 3%",
                product_unique_id:"3438e3df-f46d-48bf-8b44-b4c7fd79d3220",
                product_weight:"500 gm",
                source:"../../assets/images/Major nutrients/maj3.avif"
            },

        ]));
 };


//  -------------Secondary nutrients------------
const secondary_nutrients_details = JSON.parse(localStorage.getItem("secondary_nutrients_details"));
 if(!secondary_nutrients_details){

    localStorage.setItem("secondary_nutrients_details", JSON.stringify(
        [
            {
                actual_price:"1300",
                application: " 1.0 to 2.0 ml per litre of water for foliar\n500 to 700 ml of soil or drip per acre, applied twice over a period of 20 to 30 days.\nAlso produces positive outcomes for nursery, seed, and root treatments during transplantation.",
               benifits:"Plants contain silicon, which boosts their overall defences.\nincreased ability of plants to withstand abiotic conditions such high winds, dryness, excessive salinity, etc.\nMoreover, silicon supports plant defences against biotic stressors like bacterial, fungal, and insect attacks.\nSilicon lessens the toxicity of excess metals in the P, Mn, Al, and alkalis and aids plant uptake of additional micronutrients from the alkaline/calcareous soils.",
                category: "SECONDARY NUTRIENTS",
                description:"Dow has for the first time made 100% silicon available to plants in the form of \"\"ortho-silicic acid\"\" with the introduction of NUTRIBUILDTM Silicon OSA 3%.\nThe silicon micronutrient boosts photosynthesis, which improves crop health overall. It also helps manage numerous types of stress, including pest attacks, water shortages, lodging, salinity, metal toxicity, etc." ,
                discount: "180",
                manufacture_company:"Dow chemical",
                product_name:"DOW NUTRIBUILD - SILICON OSA 3%",
                product_unique_id:"bb730660-a90d-49ee-b22a-6a3415e564790",
                product_weight:"500 ml",
                source:"../../assets/images/secondary nurients/sec1.jpg"
            },
            {
                actual_price:"800",
                application: "1 kg/ha to 2.5 kg/ha of drip\nbefore flowering and fruiting, two to three treatments during the growing stage\nCrops include fruits (such as grapes, pomegranates, citrus, and bananas) as well as vegetables (such as chillies, tomatoes, onions, and brinjal) (cotton, rice, sugarcane, soybean, and others)\nFor soil pH levels up to 7, use Fe EDTA, while for soil pH levels above 7, use Fe EDDHA." ,
                benifits:"Food production and the growth of crops both require iron.\nIt contributes to the synthesis of chlorophyll.\nMany enzymes involved in the transfer of energy, nitrogen reduction and fixation, and the synthesis of lignin are also composed of iron.",
                category: "SECONDARY NUTRIENTS",
                description:"The main symptom of iron deficiency is the yellowing of young leaves because of low quantities of chlorophyll.\nLeaves that are severely deficient in Fe turn entirely yellow or virtually white before dying and turning brown.\nThe majority of iron deficits arise in calcareous (high pH) soils. Furthermore, especially on soils with low levels of accessible Fe, the cool and wet weather exacerbates Fe deficits.\nLand that is poorly aerated or heavily compacted hinders plants' ability to absorb Fe.\nHigh quantities of phosphorus, manganese, and zinc that are readily available in the soil have a negative impact on fee absorption.",
                discount: "180",
                manufacture_company:"Dow chemical ",
                product_name:"DOW NUTRIBUILD Fe EDTA 12%E" ,
                product_unique_id:"24d58d81-6f91-4000-b9e1-b181879612785",
                product_weight:"500 gms",
                source:"../../assets/images/secondary nurients/sec2.avif"
           },
            {
                actual_price:"1200",
                application: "1 kg/ha to 2.5 kg/ha of drip\nbefore flowering and fruiting, two to three treatments during the growing stage\nCrops include fruits (such as grapes, pomegranates, citrus, and bananas) as well as vegetables (such as chillies, tomatoes, onions, and brinjal) (cotton, rice, sugarcane, soybean, and others)\nFor soil pH levels up to 7, use Fe EDTA, while for soil pH levels above 7, use Fe EDDHA.",
                benifits:"Food production and the growth of crops both require iron.\nIt contributes to the synthesis of chlorophyll.\nMany enzymes involved in the transfer of energy, nitrogen reduction and fixation, and the synthesis of lignin are also composed of iron.",
                category:"SECONDARY NUTRIENTS" ,
                description:"Dow has for the first time made 100% silicon available to plants in the form of \"\"ortho-silicic acid\"\" with the introduction of NUTRIBUILDTM Silicon OSA 3%.\nThe silicon micronutrient boosts photosynthesis, which improves crop health overall. It also helps manage numerous types of stress, including pest attacks, water shortages, lodging, salinity, metal toxicity, etc.",
                discount: "300",
                manufacture_company:"Dow chemical" ,
                product_name:"DOW NUTRIBUILD - SILICON OSA 3%",
                product_unique_id:"3438e3df-f46d-48bf-8b44-b4c7fdk7d3220",
                product_weight:"500 gm",
                source:"../../assets/images/secondary nurients/sec3.avif"
            },

        ]));
 };


//  ------------------Growth Promoters----------------
const growth_promoters_details = JSON.parse(localStorage.getItem("growth_promoters_details"));
 if(!growth_promoters_details){

    localStorage.setItem("growth_promoters_details", JSON.stringify(
        [
            {
                actual_price:"1300",
                application: " 1.0 to 2.0 ml per litre of water for foliar\n500 to 700 ml of soil or drip per acre, applied twice over a period of 20 to 30 days.\nAlso produces positive outcomes for nursery, seed, and root treatments during transplantation.",
               benifits:"Plants contain silicon, which boosts their overall defences.\nincreased ability of plants to withstand abiotic conditions such high winds, dryness, excessive salinity, etc.\nMoreover, silicon supports plant defences against biotic stressors like bacterial, fungal, and insect attacks.\nSilicon lessens the toxicity of excess metals in the P, Mn, Al, and alkalis and aids plant uptake of additional micronutrients from the alkaline/calcareous soils.",
                category: "GROWTH PROMOTERS",
                description:"Dow has for the first time made 100% silicon available to plants in the form of \"\"ortho-silicic acid\"\" with the introduction of NUTRIBUILDTM Silicon OSA 3%.\nThe silicon micronutrient boosts photosynthesis, which improves crop health overall. It also helps manage numerous types of stress, including pest attacks, water shortages, lodging, salinity, metal toxicity, etc." ,
                discount: "180",
                manufacture_company:"Dow chemical",
                product_name:"DOW NUTRIBUILD - SILICON OSA 3%",
                product_unique_id:"bb730660-a90d-49ee-b22a-6a415e5r64790",
                product_weight:"500 ml",
                source:"../../assets/images/promoters/pro1.avif"
            },
            {
                actual_price:"800",
                application: "1 kg/ha to 2.5 kg/ha of drip\nbefore flowering and fruiting, two to three treatments during the growing stage\nCrops include fruits (such as grapes, pomegranates, citrus, and bananas) as well as vegetables (such as chillies, tomatoes, onions, and brinjal) (cotton, rice, sugarcane, soybean, and others)\nFor soil pH levels up to 7, use Fe EDTA, while for soil pH levels above 7, use Fe EDDHA." ,
                benifits:"Food production and the growth of crops both require iron.\nIt contributes to the synthesis of chlorophyll.\nMany enzymes involved in the transfer of energy, nitrogen reduction and fixation, and the synthesis of lignin are also composed of iron.",
                category: "GROWTH PROMOTERS",
                description:"The main symptom of iron deficiency is the yellowing of young leaves because of low quantities of chlorophyll.\nLeaves that are severely deficient in Fe turn entirely yellow or virtually white before dying and turning brown.\nThe majority of iron deficits arise in calcareous (high pH) soils. Furthermore, especially on soils with low levels of accessible Fe, the cool and wet weather exacerbates Fe deficits.\nLand that is poorly aerated or heavily compacted hinders plants' ability to absorb Fe.\nHigh quantities of phosphorus, manganese, and zinc that are readily available in the soil have a negative impact on fee absorption.",
                discount: "180",
                manufacture_company:"Dow chemical ",
                product_name:"DOW NUTRIBUILD Fe EDTA 12%E" ,
                product_unique_id:"24d58d81-6f91-4000-b9e1-b1818761j2785",
                product_weight:"500 gms",
                source:"../../assets/images/promoters/pro2.avif"
           },
            {
                actual_price:"1200",
                application: "1 kg/ha to 2.5 kg/ha of drip\nbefore flowering and fruiting, two to three treatments during the growing stage\nCrops include fruits (such as grapes, pomegranates, citrus, and bananas) as well as vegetables (such as chillies, tomatoes, onions, and brinjal) (cotton, rice, sugarcane, soybean, and others)\nFor soil pH levels up to 7, use Fe EDTA, while for soil pH levels above 7, use Fe EDDHA.",
                benifits:"Food production and the growth of crops both require iron.\nIt contributes to the synthesis of chlorophyll.\nMany enzymes involved in the transfer of energy, nitrogen reduction and fixation, and the synthesis of lignin are also composed of iron.",
                category:"GROWTH PROMOTERS" ,
                description:"Dow has for the first time made 100% silicon available to plants in the form of \"\"ortho-silicic acid\"\" with the introduction of NUTRIBUILDTM Silicon OSA 3%.\nThe silicon micronutrient boosts photosynthesis, which improves crop health overall. It also helps manage numerous types of stress, including pest attacks, water shortages, lodging, salinity, metal toxicity, etc.",
                discount: "300",
                manufacture_company:"Dow chemical" ,
                product_name:"DOW NUTRIBUILD - SILICON OSA 3%",
                product_unique_id:"3438e3df-f46d-48bf-8b44-b4c7fd7dk3220",
                product_weight:"500 gm",
                source:"../../assets/images/promoters/pro3.avif"
            },

        ]));
 };

//  ------------Growth retardancs------------------
const growth_retardants_details = JSON.parse(localStorage.getItem("growth_retardants_details"));
 if(!growth_retardants_details){

    localStorage.setItem("growth_retardants_details", JSON.stringify(
        [
            {
                actual_price:"1300",
                application: " 1.0 to 2.0 ml per litre of water for foliar\n500 to 700 ml of soil or drip per acre, applied twice over a period of 20 to 30 days.\nAlso produces positive outcomes for nursery, seed, and root treatments during transplantation.",
               benifits:"Plants contain silicon, which boosts their overall defences.\nincreased ability of plants to withstand abiotic conditions such high winds, dryness, excessive salinity, etc.\nMoreover, silicon supports plant defences against biotic stressors like bacterial, fungal, and insect attacks.\nSilicon lessens the toxicity of excess metals in the P, Mn, Al, and alkalis and aids plant uptake of additional micronutrients from the alkaline/calcareous soils.",
                category: "GROWTH RETARDANTS",
                description:"Dow has for the first time made 100% silicon available to plants in the form of \"\"ortho-silicic acid\"\" with the introduction of NUTRIBUILDTM Silicon OSA 3%.\nThe silicon micronutrient boosts photosynthesis, which improves crop health overall. It also helps manage numerous types of stress, including pest attacks, water shortages, lodging, salinity, metal toxicity, etc." ,
                discount: "180",
                manufacture_company:"Dow chemical",
                product_name:"DOW NUTRIBUILD - SILICON OSA 3%",
                product_unique_id:"bb730660-a90d-49ee-b22a-6a415e56e4790",
                product_weight:"500 ml",
                source:"../../assets/images/Retardants/ret1.jpg"
            },
            {
                actual_price:"800",
                application: "1 kg/ha to 2.5 kg/ha of drip\nbefore flowering and fruiting, two to three treatments during the growing stage\nCrops include fruits (such as grapes, pomegranates, citrus, and bananas) as well as vegetables (such as chillies, tomatoes, onions, and brinjal) (cotton, rice, sugarcane, soybean, and others)\nFor soil pH levels up to 7, use Fe EDTA, while for soil pH levels above 7, use Fe EDDHA." ,
                benifits:"Food production and the growth of crops both require iron.\nIt contributes to the synthesis of chlorophyll.\nMany enzymes involved in the transfer of energy, nitrogen reduction and fixation, and the synthesis of lignin are also composed of iron.",
                category: "GROWTH RETARDANTS",
                description:"The main symptom of iron deficiency is the yellowing of young leaves because of low quantities of chlorophyll.\nLeaves that are severely deficient in Fe turn entirely yellow or virtually white before dying and turning brown.\nThe majority of iron deficits arise in calcareous (high pH) soils. Furthermore, especially on soils with low levels of accessible Fe, the cool and wet weather exacerbates Fe deficits.\nLand that is poorly aerated or heavily compacted hinders plants' ability to absorb Fe.\nHigh quantities of phosphorus, manganese, and zinc that are readily available in the soil have a negative impact on fee absorption.",
                discount: "180",
                manufacture_company:"Dow chemical ",
                product_name:"DOW NUTRIBUILD Fe EDTA 12%E" ,
                product_unique_id:"24d58d81-6f91-4000-b9e1-b181876123785",
                product_weight:"500 gms",
                source:"../../assets/images/Retardants/ret2.jpg"
           },
            {
                actual_price:"1200",
                application: "1 kg/ha to 2.5 kg/ha of drip\nbefore flowering and fruiting, two to three treatments during the growing stage\nCrops include fruits (such as grapes, pomegranates, citrus, and bananas) as well as vegetables (such as chillies, tomatoes, onions, and brinjal) (cotton, rice, sugarcane, soybean, and others)\nFor soil pH levels up to 7, use Fe EDTA, while for soil pH levels above 7, use Fe EDDHA.",
                benifits:"Food production and the growth of crops both require iron.\nIt contributes to the synthesis of chlorophyll.\nMany enzymes involved in the transfer of energy, nitrogen reduction and fixation, and the synthesis of lignin are also composed of iron.",
                category:"GROWTH RETARDANTS" ,
                description:"Dow has for the first time made 100% silicon available to plants in the form of \"\"ortho-silicic acid\"\" with the introduction of NUTRIBUILDTM Silicon OSA 3%.\nThe silicon micronutrient boosts photosynthesis, which improves crop health overall. It also helps manage numerous types of stress, including pest attacks, water shortages, lodging, salinity, metal toxicity, etc.",
                discount: "300",
                manufacture_company:"Dow chemical" ,
                product_name:"DOW NUTRIBUILD - SILICON OSA 3%",
                product_unique_id:"3438e3df-f46d-48bf-8b44-b4c7fd75d3220",
                product_weight:"500 gm",
                source:"../../assets/images/Retardants/ret4.jpg"
            },

        ]));
 };

//  -----------Organic Fertilizers-------------------------
const organic_fertilizer_details = JSON.parse(localStorage.getItem("organic_fertilizer_details"));
 if(!organic_fertilizer_details){

    localStorage.setItem("organic_fertilizer_details", JSON.stringify(
        [
            {
                actual_price:"1300",
                application: " 1.0 to 2.0 ml per litre of water for foliar\n500 to 700 ml of soil or drip per acre, applied twice over a period of 20 to 30 days.\nAlso produces positive outcomes for nursery, seed, and root treatments during transplantation.",
               benifits:"Plants contain silicon, which boosts their overall defences.\nincreased ability of plants to withstand abiotic conditions such high winds, dryness, excessive salinity, etc.\nMoreover, silicon supports plant defences against biotic stressors like bacterial, fungal, and insect attacks.\nSilicon lessens the toxicity of excess metals in the P, Mn, Al, and alkalis and aids plant uptake of additional micronutrients from the alkaline/calcareous soils.",
                category: "ORGANIC FERTILIZERS",
                description:"Dow has for the first time made 100% silicon available to plants in the form of \"\"ortho-silicic acid\"\" with the introduction of NUTRIBUILDTM Silicon OSA 3%.\nThe silicon micronutrient boosts photosynthesis, which improves crop health overall. It also helps manage numerous types of stress, including pest attacks, water shortages, lodging, salinity, metal toxicity, etc." ,
                discount: "180",
                manufacture_company:"Dow chemical",
                product_name:"DOW NUTRIBUILD - SILICON OSA 3%",
                product_unique_id:"bb730660-a90d-49ee-b22a-6a41g5e564790",
                product_weight:"500 ml",
                source:"../../assets/images/organic/org1.avif"
            },
            {
                actual_price:"800",
                application: "1 kg/ha to 2.5 kg/ha of drip\nbefore flowering and fruiting, two to three treatments during the growing stage\nCrops include fruits (such as grapes, pomegranates, citrus, and bananas) as well as vegetables (such as chillies, tomatoes, onions, and brinjal) (cotton, rice, sugarcane, soybean, and others)\nFor soil pH levels up to 7, use Fe EDTA, while for soil pH levels above 7, use Fe EDDHA." ,
                benifits:"Food production and the growth of crops both require iron.\nIt contributes to the synthesis of chlorophyll.\nMany enzymes involved in the transfer of energy, nitrogen reduction and fixation, and the synthesis of lignin are also composed of iron.",
                category: "ORGANIC FERTILIZERS",
                description:"The main symptom of iron deficiency is the yellowing of young leaves because of low quantities of chlorophyll.\nLeaves that are severely deficient in Fe turn entirely yellow or virtually white before dying and turning brown.\nThe majority of iron deficits arise in calcareous (high pH) soils. Furthermore, especially on soils with low levels of accessible Fe, the cool and wet weather exacerbates Fe deficits.\nLand that is poorly aerated or heavily compacted hinders plants' ability to absorb Fe.\nHigh quantities of phosphorus, manganese, and zinc that are readily available in the soil have a negative impact on fee absorption.",
                discount: "180",
                manufacture_company:"Dow chemical ",
                product_name:"DOW NUTRIBUILD Fe EDTA 12%E" ,
                product_unique_id:"24d58d81-6f91-4000-b9e1-b618187612785",
                product_weight:"500 gms",
                source:"../../assets/images/organic/org2.avif"
           },
            {
                actual_price:"1200",
                application: "1 kg/ha to 2.5 kg/ha of drip\nbefore flowering and fruiting, two to three treatments during the growing stage\nCrops include fruits (such as grapes, pomegranates, citrus, and bananas) as well as vegetables (such as chillies, tomatoes, onions, and brinjal) (cotton, rice, sugarcane, soybean, and others)\nFor soil pH levels up to 7, use Fe EDTA, while for soil pH levels above 7, use Fe EDDHA.",
                benifits:"Food production and the growth of crops both require iron.\nIt contributes to the synthesis of chlorophyll.\nMany enzymes involved in the transfer of energy, nitrogen reduction and fixation, and the synthesis of lignin are also composed of iron.",
                category:"ORGANIC FERTILIZERS" ,
                description:"Dow has for the first time made 100% silicon available to plants in the form of \"\"ortho-silicic acid\"\" with the introduction of NUTRIBUILDTM Silicon OSA 3%.\nThe silicon micronutrient boosts photosynthesis, which improves crop health overall. It also helps manage numerous types of stress, including pest attacks, water shortages, lodging, salinity, metal toxicity, etc.",
                discount: "300",
                manufacture_company:"Dow chemical" ,
                product_name:"DOW NUTRIBUILD - SILICON OSA 3%",
                product_unique_id:"3438e3df-f46d-48bf-8b44-b74c7fd7d3220",
                product_weight:"500 gm",
                source:"../../assets/images/organic/org3.avif"
            },

        ]));
 };

//  ------------------------------Bio Fertilizers-----------------
const bio_fertilizers_details = JSON.parse(localStorage.getItem("bio_fertilizers_details"));
 if(!bio_fertilizers_details){

    localStorage.setItem("bio_fertilizers_details", JSON.stringify(
        [
            {
                actual_price:"1300",
                application: " 1.0 to 2.0 ml per litre of water for foliar\n500 to 700 ml of soil or drip per acre, applied twice over a period of 20 to 30 days.\nAlso produces positive outcomes for nursery, seed, and root treatments during transplantation.",
               benifits:"Plants contain silicon, which boosts their overall defences.\nincreased ability of plants to withstand abiotic conditions such high winds, dryness, excessive salinity, etc.\nMoreover, silicon supports plant defences against biotic stressors like bacterial, fungal, and insect attacks.\nSilicon lessens the toxicity of excess metals in the P, Mn, Al, and alkalis and aids plant uptake of additional micronutrients from the alkaline/calcareous soils.",
                category: "BIO FERTILIZERS",
                description:"Dow has for the first time made 100% silicon available to plants in the form of \"\"ortho-silicic acid\"\" with the introduction of NUTRIBUILDTM Silicon OSA 3%.\nThe silicon micronutrient boosts photosynthesis, which improves crop health overall. It also helps manage numerous types of stress, including pest attacks, water shortages, lodging, salinity, metal toxicity, etc." ,
                discount: "180",
                manufacture_company:"Dow chemical",
                product_name:"DOW NUTRIBUILD - SILICON OSA 3%",
                product_unique_id:"bb730660-a90d-49ee-b22a-6a415e5647990",
                product_weight:"500 ml",
                source:"../../assets/images/Bio Fertilizers/bio1.jpg"
            },
            {
                actual_price:"800",
                application: "1 kg/ha to 2.5 kg/ha of drip\nbefore flowering and fruiting, two to three treatments during the growing stage\nCrops include fruits (such as grapes, pomegranates, citrus, and bananas) as well as vegetables (such as chillies, tomatoes, onions, and brinjal) (cotton, rice, sugarcane, soybean, and others)\nFor soil pH levels up to 7, use Fe EDTA, while for soil pH levels above 7, use Fe EDDHA." ,
                benifits:"Food production and the growth of crops both require iron.\nIt contributes to the synthesis of chlorophyll.\nMany enzymes involved in the transfer of energy, nitrogen reduction and fixation, and the synthesis of lignin are also composed of iron.",
                category: "BIO FERTILIZERS",
                description:"The main symptom of iron deficiency is the yellowing of young leaves because of low quantities of chlorophyll.\nLeaves that are severely deficient in Fe turn entirely yellow or virtually white before dying and turning brown.\nThe majority of iron deficits arise in calcareous (high pH) soils. Furthermore, especially on soils with low levels of accessible Fe, the cool and wet weather exacerbates Fe deficits.\nLand that is poorly aerated or heavily compacted hinders plants' ability to absorb Fe.\nHigh quantities of phosphorus, manganese, and zinc that are readily available in the soil have a negative impact on fee absorption.",
                discount: "180",
                manufacture_company:"Dow chemical ",
                product_name:"DOW NUTRIBUILD Fe EDTA 12%E" ,
                product_unique_id:"24d58d81-6f91-4000-b9e1-b181877612785",
                product_weight:"500 gms",
                source:"../../assets/images/Bio Fertilizers/bio2.avif"
           },
            {
                actual_price:"1200",
                application: "1 kg/ha to 2.5 kg/ha of drip\nbefore flowering and fruiting, two to three treatments during the growing stage\nCrops include fruits (such as grapes, pomegranates, citrus, and bananas) as well as vegetables (such as chillies, tomatoes, onions, and brinjal) (cotton, rice, sugarcane, soybean, and others)\nFor soil pH levels up to 7, use Fe EDTA, while for soil pH levels above 7, use Fe EDDHA.",
                benifits:"Food production and the growth of crops both require iron.\nIt contributes to the synthesis of chlorophyll.\nMany enzymes involved in the transfer of energy, nitrogen reduction and fixation, and the synthesis of lignin are also composed of iron.",
                category:"BIO FERTILIZERS" ,
                description:"Dow has for the first time made 100% silicon available to plants in the form of \"\"ortho-silicic acid\"\" with the introduction of NUTRIBUILDTM Silicon OSA 3%.\nThe silicon micronutrient boosts photosynthesis, which improves crop health overall. It also helps manage numerous types of stress, including pest attacks, water shortages, lodging, salinity, metal toxicity, etc.",
                discount: "300",
                manufacture_company:"Dow chemical" ,
                product_name:"DOW NUTRIBUILD - SILICON OSA 3%",
                product_unique_id:"3438e3df-f46d-48bf-8b44-b4c7fhd7d3220",
                product_weight:"500 gm",
                source:"../../assets/images/Bio Fertilizers/bio3.jpg"
            },

        ]));
 };

//  -----------------Anti Stressing Agents-----------------
const anti_stressing_agents_details = JSON.parse(localStorage.getItem("anti_stressing_agents_details"));
 if(!anti_stressing_agents_details){

    localStorage.setItem("anti_stressing_agents_details", JSON.stringify(
        [
            {
                actual_price:"1300",
                application: " 1.0 to 2.0 ml per litre of water for foliar\n500 to 700 ml of soil or drip per acre, applied twice over a period of 20 to 30 days.\nAlso produces positive outcomes for nursery, seed, and root treatments during transplantation.",
               benifits:"Plants contain silicon, which boosts their overall defences.\nincreased ability of plants to withstand abiotic conditions such high winds, dryness, excessive salinity, etc.\nMoreover, silicon supports plant defences against biotic stressors like bacterial, fungal, and insect attacks.\nSilicon lessens the toxicity of excess metals in the P, Mn, Al, and alkalis and aids plant uptake of additional micronutrients from the alkaline/calcareous soils.",
                category: "ANTI STRESSING AGENTS",
                description:"Dow has for the first time made 100% silicon available to plants in the form of \"\"ortho-silicic acid\"\" with the introduction of NUTRIBUILDTM Silicon OSA 3%.\nThe silicon micronutrient boosts photosynthesis, which improves crop health overall. It also helps manage numerous types of stress, including pest attacks, water shortages, lodging, salinity, metal toxicity, etc." ,
                discount: "180",
                manufacture_company:"Dow chemical",
                product_name:"DOW NUTRIBUILD - SILICON OSA 3%",
                product_unique_id:"bb730660-a90d-49ee-b22a-6a415e56d4790",
                product_weight:"500 ml",
                source:"../../assets/images/anti_stressing/ast1.jpg"
            },
            {
                actual_price:"800",
                application: "1 kg/ha to 2.5 kg/ha of drip\nbefore flowering and fruiting, two to three treatments during the growing stage\nCrops include fruits (such as grapes, pomegranates, citrus, and bananas) as well as vegetables (such as chillies, tomatoes, onions, and brinjal) (cotton, rice, sugarcane, soybean, and others)\nFor soil pH levels up to 7, use Fe EDTA, while for soil pH levels above 7, use Fe EDDHA." ,
                benifits:"Food production and the growth of crops both require iron.\nIt contributes to the synthesis of chlorophyll.\nMany enzymes involved in the transfer of energy, nitrogen reduction and fixation, and the synthesis of lignin are also composed of iron.",
                category: "ANTI STRESSING AGENTS",
                description:"The main symptom of iron deficiency is the yellowing of young leaves because of low quantities of chlorophyll.\nLeaves that are severely deficient in Fe turn entirely yellow or virtually white before dying and turning brown.\nThe majority of iron deficits arise in calcareous (high pH) soils. Furthermore, especially on soils with low levels of accessible Fe, the cool and wet weather exacerbates Fe deficits.\nLand that is poorly aerated or heavily compacted hinders plants' ability to absorb Fe.\nHigh quantities of phosphorus, manganese, and zinc that are readily available in the soil have a negative impact on fee absorption.",
                discount: "180",
                manufacture_company:"Dow chemical ",
                product_name:"DOW NUTRIBUILD Fe EDTA 12%E" ,
                product_unique_id:"24d58d81-6f91-4000-b9e1-b181787612785",
                product_weight:"500 gms",
                source:"../../assets/images/anti_stressing/ast2.jpg"
           },
            {
                actual_price:"1200",
                application: "1 kg/ha to 2.5 kg/ha of drip\nbefore flowering and fruiting, two to three treatments during the growing stage\nCrops include fruits (such as grapes, pomegranates, citrus, and bananas) as well as vegetables (such as chillies, tomatoes, onions, and brinjal) (cotton, rice, sugarcane, soybean, and others)\nFor soil pH levels up to 7, use Fe EDTA, while for soil pH levels above 7, use Fe EDDHA.",
                benifits:"Food production and the growth of crops both require iron.\nIt contributes to the synthesis of chlorophyll.\nMany enzymes involved in the transfer of energy, nitrogen reduction and fixation, and the synthesis of lignin are also composed of iron.",
                category:"ANTI STRESSING AGENTS" ,
                description:"Dow has for the first time made 100% silicon available to plants in the form of \"\"ortho-silicic acid\"\" with the introduction of NUTRIBUILDTM Silicon OSA 3%.\nThe silicon micronutrient boosts photosynthesis, which improves crop health overall. It also helps manage numerous types of stress, including pest attacks, water shortages, lodging, salinity, metal toxicity, etc.",
                discount: "300",
                manufacture_company:"Dow chemical" ,
                product_name:"DOW NUTRIBUILD - SILICON OSA 3%",
                product_unique_id:"3438e3df-f46d-48bf-8b44-b4c7fd7d3h220",
                product_weight:"500 gm",
                source:"../../assets/images/anti_stressing/ast3.jpg"
            },

        ]));
 };


//  --------------------Micro Nutrients------------------
const micro_nutrients_details = JSON.parse(localStorage.getItem("micro_nutrients_details"));
 if(!micro_nutrients_details){

    localStorage.setItem("micro_nutrients_details", JSON.stringify(
        [
            {
                actual_price:"1300",
                application: " 1.0 to 2.0 ml per litre of water for foliar\n500 to 700 ml of soil or drip per acre, applied twice over a period of 20 to 30 days.\nAlso produces positive outcomes for nursery, seed, and root treatments during transplantation.",
               benifits:"Plants contain silicon, which boosts their overall defences.\nincreased ability of plants to withstand abiotic conditions such high winds, dryness, excessive salinity, etc.\nMoreover, silicon supports plant defences against biotic stressors like bacterial, fungal, and insect attacks.\nSilicon lessens the toxicity of excess metals in the P, Mn, Al, and alkalis and aids plant uptake of additional micronutrients from the alkaline/calcareous soils.",
                category: "MICRO NUTRIENTS",
                description:"Dow has for the first time made 100% silicon available to plants in the form of \"\"ortho-silicic acid\"\" with the introduction of NUTRIBUILDTM Silicon OSA 3%.\nThe silicon micronutrient boosts photosynthesis, which improves crop health overall. It also helps manage numerous types of stress, including pest attacks, water shortages, lodging, salinity, metal toxicity, etc." ,
                discount: "180",
                manufacture_company:"Dow chemical",
                product_name:"DOW NUTRIBUILD - SILICON OSA 3%",
                product_unique_id:"bb730660-a90d-49ee-b22a-6a4154e564790",
                product_weight:"500 ml",
                source:"../../assets/images/micro_nutrients/mic1.jpg"
            },
            {
                actual_price:"800",
                application: "1 kg/ha to 2.5 kg/ha of drip\nbefore flowering and fruiting, two to three treatments during the growing stage\nCrops include fruits (such as grapes, pomegranates, citrus, and bananas) as well as vegetables (such as chillies, tomatoes, onions, and brinjal) (cotton, rice, sugarcane, soybean, and others)\nFor soil pH levels up to 7, use Fe EDTA, while for soil pH levels above 7, use Fe EDDHA." ,
                benifits:"Food production and the growth of crops both require iron.\nIt contributes to the synthesis of chlorophyll.\nMany enzymes involved in the transfer of energy, nitrogen reduction and fixation, and the synthesis of lignin are also composed of iron.",
                category: "MICRO NUTRIENTS",
                description:"The main symptom of iron deficiency is the yellowing of young leaves because of low quantities of chlorophyll.\nLeaves that are severely deficient in Fe turn entirely yellow or virtually white before dying and turning brown.\nThe majority of iron deficits arise in calcareous (high pH) soils. Furthermore, especially on soils with low levels of accessible Fe, the cool and wet weather exacerbates Fe deficits.\nLand that is poorly aerated or heavily compacted hinders plants' ability to absorb Fe.\nHigh quantities of phosphorus, manganese, and zinc that are readily available in the soil have a negative impact on fee absorption.",
                discount: "180",
                manufacture_company:"Dow chemical ",
                product_name:"DOW NUTRIBUILD Fe EDTA 12%E" ,
                product_unique_id:"24d58d81-6f91-4000-b9e1-b181876172785",
                product_weight:"500 gms",
                source:"../../assets/images/micro_nutrients/mic2.jpg"
           },
            {
                actual_price:"1200",
                application: "1 kg/ha to 2.5 kg/ha of drip\nbefore flowering and fruiting, two to three treatments during the growing stage\nCrops include fruits (such as grapes, pomegranates, citrus, and bananas) as well as vegetables (such as chillies, tomatoes, onions, and brinjal) (cotton, rice, sugarcane, soybean, and others)\nFor soil pH levels up to 7, use Fe EDTA, while for soil pH levels above 7, use Fe EDDHA.",
                benifits:"Food production and the growth of crops both require iron.\nIt contributes to the synthesis of chlorophyll.\nMany enzymes involved in the transfer of energy, nitrogen reduction and fixation, and the synthesis of lignin are also composed of iron.",
                category:"MICRO NUTRIENTS" ,
                description:"Dow has for the first time made 100% silicon available to plants in the form of \"\"ortho-silicic acid\"\" with the introduction of NUTRIBUILDTM Silicon OSA 3%.\nThe silicon micronutrient boosts photosynthesis, which improves crop health overall. It also helps manage numerous types of stress, including pest attacks, water shortages, lodging, salinity, metal toxicity, etc.",
                discount: "300",
                manufacture_company:"Dow chemical" ,
                product_name:"DOW NUTRIBUILD - SILICON OSA 3%",
                product_unique_id:"3438e3df-f46d-48bf-8b44-b4c7jfd7d3220",
                product_weight:"500 gm",
                source:"../../assets/images/micro_nutrients/mic3.jpg"
            },

        ]));
 };

    // -------------- add to cart items --------------
    const addToCartItem = JSON.parse(localStorage.getItem("addToCartItem"));
    if(!addToCartItem){
    
       localStorage.setItem("addToCartItem", JSON.stringify(
        [
            {
                cart_id: "3438e3df-f46d-48bf-8b44-b4c7jfd7d3220",
                userUniqueId: "9629223357"
            },
            {
                cart_id: "24d58d81-6f91-4000-b9e1-b181876172785",
                userUniqueId: "9629223357"
            },
            
            {
                cart_id: "bb730660-a90d-49ee-b22a-6a4154e564790",
                userUniqueId: "9629223357"
            }
            
        ]));
    };
    
    // ----wishlist items --------------------------------
    const wishlisstItem = JSON.parse(localStorage.getItem("wishlisstItem"));
    if(!wishlisstItem){
    
       localStorage.setItem("wishlisstItem", JSON.stringify(
        [
            {
                product_id: "3438e3df-f46d-48bf-8b44-b4c7jfd7d3220",
                userUniqueId: "9629223357"
            },
            {
                product_id: "bb730660-a90d-49ee-b22a-6a4154e564790",
                userUniqueId: "9629223357"
            },
            {
                product_id: "24d58d81-6f91-4000-b9e1-b181876172785",
                userUniqueId: "9629223357"
            }
        ]));
    };
// user order details-------------
const addtoCartDeliveryProduct = JSON.parse(localStorage.getItem("addtoCartDeliveryProduct"));
    if(!addtoCartDeliveryProduct){
    
       localStorage.setItem("addtoCartDeliveryProduct", JSON.stringify(
        [
            {
                ProductDiscount: "110",
                address: "1/38 kudi street thirunedungulam, trichy -620015",
                deliveryDate: "08/04/2023",
                deliveryPlace: "home",
                deliveryStatus: "true",
                email: "rboomibalan461@gmail.com",
                firstName: "booabaln",
                lastName: "R",
                orderDate: "01/04/2023",
                orderStatus: "Cancelled",
                orderUniqueId: "f68mi12ic",
                paymentMethod: "",
                phoneNumber: "9629223356",
                proQuantity: "1",
                productActualPrice: "980",
                productCurrentPrice: "870",
          
                productImage: "../../assets/images/dhanuka/dhan1.jpg",
                productName: "SEMPRA HERBICIDE",
                timeString: "19:45:30",
                userUniqueId: "9629223357",
                zipCode: "620015"
            },
            {
                ProductDiscount: "You Save: 110",
                address: "4/95 sivan kovil street , melvakam, chennai-600015",
                deliveryDate: "10/04/2023",
                deliveryPlace: "home",
                deliveryStatus: "true",
                email: "rboomibalan459@gmail.com",
                firstName: "booabalan",
                lastName: "R",
                orderDate: "01/04/2023",
                orderStatus: "Processing",
                orderUniqueId: "f69686501",
                paymentMethod: "",
                phoneNumber: "9629223357",
                proQuantity: "1",
                productActualPrice: "1200",
                productCurrentPrice: "800",
             
                productImage: "../../assets/images/dhanuka/dhan3.avif",
                productName: "DHANUKA KASU-B FUNGICIDE" ,
             
                timeString: "19:45:30",
                userUniqueId: "9629223357",
                zipCode: "620015"
            }
        ]
       ));
    };

    // user signup details------------------
    const user_list = JSON.parse(localStorage.getItem("user_list"));
    if(!user_list){
    
       localStorage.setItem("user_list", JSON.stringify(
        [
          {
            city: "Tirunedungulam",
            confirmpassword: "Amazon99@",
            date_birth: "2023-03-25",
            district: "Trichy",
            email: "rb@gmail.com",
            full_name: "Boobalan",
            gender: "male",
            mobile: "9629223357",
            password: "Amazon99@",
            state: "Tamil Nadu",
            street: "kudi atreet",
            unique_id: "f70d8b96-2771-40dc-914a-ee568e7f0094"
          }
        ]
       ));
    
    };
    
