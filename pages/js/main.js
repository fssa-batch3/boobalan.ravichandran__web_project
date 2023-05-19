
const categoryTypes =  JSON.parse(localStorage.getItem("category"));
if(!categoryTypes){
  localStorage.setItem(
    "category",
    JSON.stringify([
      {
        category_id: "SU4rzrVQK1",
        category_name: "DHANUKA",
        category_type: "BRANDS",
        category_status : true
      },
      {
        category_id: "SU4rzrVQK2",
        category_name: "DOW AGRO SCIENCE",
        category_type: "BRANDS",
        category_status : true
      },
      {
        category_id: "SU4rzrVQK4",
        category_name: "TATA RALLIS",
        category_type: "BRANDS",
        category_status : true
      },
      {
        category_id: "SU4rzrVQK5",
        category_name: "ADAMA",
        category_type: "BRANDS",
        category_status : true,
       
      },
      {
        category_id: "SU4rzrVQK6",
        category_name: "BAYER",
        category_type: "BRANDS",
        category_status : true
      },
      {
        category_id: "SU4rzrVQK7",
        category_name: "ARIES AGRO",
        category_type: "BRANDS",
        category_status : true
      },
      {
        category_id: "SU4rzrVQK8",
        category_name: "BARRIX",
        category_type: "BRANDS",
        category_status : true
      },
      {
        category_id: "SU4rzrVQK9",
        category_name: "INDOFIL",
        category_type: "BRANDS",
        category_status : true
      },
      {
        category_id: "SU4rzrVQ10",
        category_name: "RINUJA",
        category_type: "BRANDS",
        category_status : true
      },
      {
        category_id: "SU4rzrVQ11",
        category_name: "BIO INSECTICIDES",
        category_type: "CROP PRODUCTION",
        category_status : true
      },
      {
        category_id: "SU4rzrVQ12",
        category_name: "BIO FUNGICIDES",
        category_type: "CROP PRODUCTION",
        category_status : true
      },
      {
        category_id: "SU4rzrVQ13",
        category_name: "BIO NEMATICIDES",
        category_type: "CROP PRODUCTION",
        category_status : true
      },
      {
        category_id: "SU4rzrVQ14",
        category_name: "BIO VIRCIDES",
        category_type: "CROP PRODUCTION",
        category_status : true
      },
      {
        category_id: "SU4rzrVQ15",
        category_name: "MAJOR NUTRIENTS",
        category_type: "CROP NUTRITION",
        category_status : true
      },
      {
        category_id: "SU4rzrVQ17",
        category_name: "SECONDARY NUTRIENTS",
        category_type: "CROP NUTRITION",
        category_status : true
      },
      {
        category_id: "SU4rzrVQ18",
        category_name: "GROWTH PROMOTERS",
        category_type: "CROP NUTRITION",
        category_status : true
      },
      {
        category_id: "SU4rzrVQ19",
        category_name: "GROWTH RETARDANTS",
        category_type: "CROP NUTRITION",
        category_status : true
      },
      {
        category_id: "SU4rzrVQ20",
        category_name: "ORGANIC FERTILIZERS",
        category_type: "CROP NUTRITION",
        category_status : true
      },
      {
        category_id: "SU4rzrVQ21",
        category_name: "BIO FERTILIZERS",
        category_type: "CROP NUTRITION",
        category_status : true
      },
      {
        category_id: "SU4rzrVQ22",
        category_name: "ANTI STRESSING AGENTS",
        category_type: "CROP NUTRITION",
        category_status : true
      },
      {
        category_id: "SU4rzrVQ23",
        category_name: "MICRO NUTRIENTS",
        category_type: "CROP NUTRITION",
        category_status : true
      }
      
    ]));
}


const products = JSON.parse(localStorage.getItem("products"));

if (!products) {
  localStorage.setItem(
    "products",
    JSON.stringify([
      {
        actual_price: "980",
        application:
          "Wheat, sugarcane, maize, and barley are crops.\n\nMODE OF ACTION: Acetolactate synthase (ALS), the first enzyme in the biosynthesis pathway of the crucial branched chain amino acid, is inhibited by Sempra since it belongs to the sulfonylurea group of herbicides. Weeds die (are killed) when ALS is inhibited because the plant becomes starved for these amino acids. Sempra has no effect on grass family agricultural plants like maize, sugarcane, etc. since these plants contain powerful mixed function oxidases that break down the herbicide molecule into acid metabolite forms.\n\n36g/acre is the dosage.",
        benifits:
          "Effectiveness at Low Dose: At 36 gm/acre, Sempra effectively controls Cyperus rotundus. Moreover, it provides soil residual action and manages weeds that emerge late. Its dosage is small when compared to conventional herbicides.\n\nDuring 24 hours of application, Sempra verifies Cyperus rotundus' nutrient uptake, resulting in a good, healthy crop.\nSempra has no negative effects on the sugarcane and maize crops.\n\nHigh Soil Residual Action: Sempra suppresses newly sprouting Cyperus rotundus because of its strong soil residual effect.\n\nReduced Weeding Costs: Sempra frees users from having to repeatedly weed by hand, which reduces the expense of manually applying herbicides.\nIncreased Yield: Sempra increases yield, which increases profits.",
          category_id: "SU4rzrVQK1",
        description:
          "Dhanuka Agritech Ltd.'s Sempra Herbicide is the first herbicide to be made available in India for the purpose of effectively controlling Cyperus rotundus.\nIt is a post-emergence herbicide that is systemic, selective, and has a WDG formulation for the efficient management of Cyperus rotundus from nuts in Sugarcane and Maize crop.\nSempra Herbicide travels through the Xylem and Phloem in both directions, demonstrating its potent systemic activity.",
        discount: "110",
        manufacture_company: "Dhanuka Agritech Ltd",
        product_name: "SEMPRA HERBICIDE",
        product_unique_id: "edd30055-e3ab-4515-817f-aa0624d7fc3e",
        product_weight: "500 gm",
        source: "../../assets/images/dhanuka/dhan1.jpg",
      },
      {
        actual_price: "750",
        application:
          "It works as a broad-spectrum fungicide with a protective effect. When exposed to air, the product becomes fungitoxic. It is changed into an isothiocyanate, which renders sulphahydral (SH) groups in fungal enzymes inactive. Sometimes, mancozeb and fungal enzymes interchange metals, which disrupts the operation of the fungal enzymes.\n\nDOSAGE: 600–800 grammes per acre.",
        benifits:
          " Phycomycetes, advanced fungus, and other groups of fungi that infect various crops are controlled by a broad range fungicide thanks to its multisite activity.\nused in various crops for seed treatments, nursery drenching, and foliar sprays.\nIt can be used frequently for a number of years without running the risk of developing resistance.\nThe ideal fungicide to use in conjunction with systemic fungicides to stop or postpone the emergence of resistance.\nIn addition to preventing illness, it also gives crops tiny amounts of manganese and zinc, which maintains plants healthy and green.\nIt is quite safe from environmental hazards and natural adversaries. Thus, a component of integrated disease management.\nBecause it offers stronger crop protection and nutritional advantages over other fungicides, resulting in higher yields and better quality, it is less expensive in the long term than those other fungicides.",
          category_id: "SU4rzrVQK1",
        description:
          " A contact fungicide of the dithiocarbamate group, Dhanuka M-45 Fungicide (Mancozeb 75% WP) prevents the growth of fungi and the transmission of illnesses. It decreases the enzyme activity in fungus, which in turn decreases energy generation and ultimately causes fungus death.",
        discount: "150",
        manufacture_company: "Dhanuka Agritech Ltd",
        product_name: "DHANUKA M45 FUNGICIDE",
        product_unique_id: "79c04fef-0b90-4750-a944-f9d3401e7308",
        product_weight: "300 gm",
        source: "../../assets/images/dhanuka/dhan2.avif",
      },
      {
        actual_price: "450",
        application:
          "First spray at the initiation of infection. Second spray 8-10 days after or as and when required.",
        benifits:
          " This broad-spectrum fungicide has both curative and preventative effects. This chemical exhibits translocation action and is highly systemic. With the exception of particularly alkaline products, most fungicides and insecticides are compatible with it.",
          category_id: "SU4rzrVQK1",
        description:
          " Systemic fungicide and bactericide, Kasu-B also kills bacteria. It quickly and efficiently translocates into the plants and suppresses the infections as a result of its antibacterial systemic activity.\nBoth the prevention and treatment of diseases are possible with Kasu-B.\nMost fungicides and insecticides are compatible with Kasu-B, with the exception of extremely alkaline compounds.\nKasu-B poses no threat to crops, people, animals, parasitoids, or predators.",
        discount: "60",
        manufacture_company: "Dhanuka Agritech Ltd",
        product_name: "DHANUKA KASU-B FUNGICIDE",
        product_unique_id: "a17aebfa-de85-4c43-b1e0-f60b4ba11d68",
        product_weight: "250 ml",
        source: "../../assets/images/dhanuka/dhan3.avif",
      },
      {
        actual_price: "1200",
        application:
          "  This broad-spectrum fungicide has both curative and preventative effects. This chemical exhibits translocation action and is highly systemic. With the exception of particularly alkaline products, most fungicides and insecticides are compatible with it. Use 400 ml of Markar Insecticide to 2 litres of water for an effective termite control method for crops. Spread this mixture across a one acre area after combining it with 20 to 25 kg of sand. Following its application, use mild irrigation (sugar cane crop).",
        benifits:
          "Markar is a world-renowned, new generation, the broad-spectrum insecticide of Pyrethroid ester group.Markar is an effective termiticide as well as insecticide controlling a wide range of insects like sucking and chewing insects in crops.Markar has contact and stomach action, controls different types of larvae, whitefly, mites and jassids very effectively.Markar has phyto-tonic effect which improves the vigour and keeps the crop healthy, thereby quality produce.",
        ccategory_id: "SU4rzrVQK1",
        description:
          "Marker (Bifenthrin 10% EC) is a world-renowned, new generation, the broad-spectrum insecticide of Pyrethroid group. Markar through its contact and stomach action controls different types of larvae, whitefly, mites and jassids very effectively. Marker has strong bonding tendency in the soil thus it persists and exhibits longer duration extraordinary control of termite.",
        discount: "160",
        manufacture_company: "Dhanuka Agritech Ltd",
        product_name: "DHANUKA MAKER INSECTICIDE",
        product_unique_id: "23217f2c-c41f-41c5-b25b-c28b28352fd6",
        product_weight: "500 ml",
        source: "../../assets/images/dhanuka/dhan4.jpg",
      },
      {
        actual_price: "1300",
        application:
          " 1.0 to 2.0 ml per litre of water for foliar 500 to 700 ml of soil or drip per acre, applied twice over a period of 20 to 30 days. Also produces positive outcomes for nursery, seed, and root treatments during transplantation.",
        benifits:
         "Plants contain silicon, which boosts their overall defences. increased ability of plants to withstand abiotic conditions such high winds, dryness, excessive salinity, etc. Moreover, silicon supports plant defences against biotic stressors like bacterial, fungal, and insect attacks. Silicon lessens the toxicity of excess metals in the P, Mn, Al, and alkalis and aids plant uptake of additional micronutrients from the alkaline/calcareous soils.",
         category_id: "SU4rzrVQK2",
        description:
          'Dow has for the first time made 100% silicon available to plants in the form of ""ortho-silicic acid"" with the introduction of NUTRIBUILDTM Silicon OSA 3%.\nThe silicon micronutrient boosts photosynthesis, which improves crop health overall. It also helps manage numerous types of stress, including pest attacks, water shortages, lodging, salinity, metal toxicity, etc.',
        discount: "180",
        manufacture_company: "Dow chemical",
        product_name: "DOW NUTRIBUILD - SILICON OSA 3%",
        product_unique_id: "bb730660-a90d-49ee-b22a-6a415e564790",
        product_weight: "500 ml",
        source: "../../assets/images/dow agro/dow1.jpg",
      },
      {
        actual_price: "800",
        application:
          "1 kg/ha to 2.5 kg/ha of drip\nbefore flowering and fruiting, two to three treatments during the growing stage\nCrops include fruits (such as grapes, pomegranates, citrus, and bananas) as well as vegetables (such as chillies, tomatoes, onions, and brinjal) (cotton, rice, sugarcane, soybean, and others)\nFor soil pH levels up to 7, use Fe EDTA, while for soil pH levels above 7, use Fe EDDHA.",
        benifits:
          "Food production and the growth of crops both require iron.\nIt contributes to the synthesis of chlorophyll.\nMany enzymes involved in the transfer of energy, nitrogen reduction and fixation, and the synthesis of lignin are also composed of iron.",
          category_id: "SU4rzrVQK2",
        description:
          "The main symptom of iron deficiency is the yellowing of young leaves because of low quantities of chlorophyll.\nLeaves that are severely deficient in Fe turn entirely yellow or virtually white before dying and turning brown.\nThe majority of iron deficits arise in calcareous (high pH) soils. Furthermore, especially on soils with low levels of accessible Fe, the cool and wet weather exacerbates Fe deficits.\nLand that is poorly aerated or heavily compacted hinders plants' ability to absorb Fe.\nHigh quantities of phosphorus, manganese, and zinc that are readily available in the soil have a negative impact on fee absorption.",
        discount: "180",
        manufacture_company: "Dow chemical ",
        product_name: "DOW NUTRIBUILD Fe EDTA 12%E",
        product_unique_id: "24d58d81-6f91-4000-b9e1-b18187612785",
        product_weight: "500 gms",
        source: "../../assets/images/dow agro/dow2.jpg",
      },
      {
        actual_price: "1200",
        application:
          "1 kg/ha to 2.5 kg/ha of drip\nbefore flowering and fruiting, two to three treatments during the growing stage\nCrops include fruits (such as grapes, pomegranates, citrus, and bananas) as well as vegetables (such as chillies, tomatoes, onions, and brinjal) (cotton, rice, sugarcane, soybean, and others)\nFor soil pH levels up to 7, use Fe EDTA, while for soil pH levels above 7, use Fe EDDHA.",
        benifits:
          "Food production and the growth of crops both require iron.\nIt contributes to the synthesis of chlorophyll.\nMany enzymes involved in the transfer of energy, nitrogen reduction and fixation, and the synthesis of lignin are also composed of iron.",
          category_id: "SU4rzrVQK2",
        description:
          'Dow has for the first time made 100% silicon available to plants in the form of ""ortho-silicic acid"" with the introduction of NUTRIBUILDTM Silicon OSA 3%.\nThe silicon micronutrient boosts photosynthesis, which improves crop health overall. It also helps manage numerous types of stress, including pest attacks, water shortages, lodging, salinity, metal toxicity, etc.',
        discount: "300",
        manufacture_company: "Dow chemical",
        product_name: "DOW NUTRIBUILD - SILICON OSA 3%",
        product_unique_id: "3438e3df-f46d-48bf-8b44-b4c7fd7d3220",
        product_weight: "500 gm",
        source: "../../assets/images/dow agro/dow3.avif",
      },
    
      {
        actual_price: "1044",
        application: "2 mL/litre and 400ml/acre",
        benifits:
          "Agil is used for selective weed control in many broadleaf crops such as sugar beet, oilseed rape, soybeans, sunflower, other field crops, vegetables, fruit trees, vineyards and forestry and best result is achieved when sprayed at the 2-4 leaf stage.\\nAgil Herbicide is a systemic herbicide, which is quickly absorbed by the leaves and translocated from the foliage to the growing points of the leaves and roots of the sprayed weeds.\\nRainfall 1 hour after application will not affect the product activity. Optimal activity is achieved when applied early and weeds are actively growing.\\nAgil Herbicide is safe for beneficial insects and mammals and is environmentally friendly.",
       ccategory_id: "SU4rzrVQK5",
        description:
          "Agil Herbicide is a herbicide of the aryloxy phenoxy propionates family. It is used for the post-emergence control of a wide range of annual and perennial grasses.",
        discount: "209",
        manufacture_company: "Adama - Fertilizers",
        product_name: "AGIL HERBICID",
        product_unique_id: "89e60418-9bd7-4c43-b3cc-2f839b6cef7d",
        product_weight: "400 ml",
        source: "../../assets/images/Adama/ada1.avif",
      },
      {
        actual_price: "1286",
        application:
          "Blackgram, Redgram, Pigeonpea, Chickpea, Groundnut, Soybean, Rice, Chipotle, Tomato, Cauliflower, Cabbage, Broccoli, and Kale are some examples of crops.\\n\\nHelicoverpa, Spodoptera, Fall armyworm, Cut Worm, Pod Borers, DBM, Stem Borers, Bollworms, and Leaf Roller are several insects and diseases.\\n\\n2ml per litre of water is the dosage.",
        benifits:
          "Plethora acts as a chitin synthesis inhibitor and also affects the insect nervous system by inhibiting sodium ions entry into nerve cells hence, the insecticide hampers moulting & also paralyses the insect. It has phytotonic effect on the crop.",
          category_id: "SU4rzrVQK5",
        description:
          "Innovative product with a dual mode of action is Plethora Insecticide. Lepidopteran pesticide Plethora has a broad spectrum and has a phytotonic effect on the crop. Inhibits chitin formation and has an impact on the nervous system of insects by preventing sodium ions from entering nerve cells. As a result, the pesticide hinders moulting and paralyses insects.",
        discount: "130",
        manufacture_company: "PLETHORA - Fertilizers",
        product_name: "PLETHORA INSECTICIDE",
        product_unique_id: "2f8cbf08-05c3-4350-bb20-3b4d139315ba",
        product_weight: "200 ml",
        source: "../../assets/images/Adama/ada2.avif",
      },
      {
        actual_price: "1700",
        application:
          "A wide range of fungal infections and illnesses can be controlled using Custodia Fungicide. Custodia Fungicide has excellent curative and preventative qualities, allowing for flexibility and a wide treatment window. Due to its dual mode of action, it is effective at several phases of fungus development. Custodia Fungicide has a good effect on the physiological function of the crop when used since it increases yield and quality of the produce, which brings in a higher price.\\n\\nCustodia Fungicide Technical Content: Azoxystrobin 11% + Tebuconazole 18.3% w/w SC\\n\\nChili, onions, potatoes, tomatoes, grapes, wheat, and apples are the target crops.\\n\\nPowdery mildew and dieback, fruit rot, purple blotch, sheath blight, yellow rust, early and late blight, downy and powdery mildew, apple scab, and pre-mature leaf fall disease are the insects and pests that are targeted.dosage of 1 ml per litre of water.",
        benifits:
          "Custodia is a Broad spectrum fungicide for the control of many fungal pathogens & diseases. Custodia has very good preventive & curative properties which provides flexibility & broad window of application. It has a dual mode of action, hence it works at multiple stages of fungal development.",
          category_id: "SU4rzrVQK5",
        description:
          "A wide range of fungal infections and illnesses can be controlled using Custodia Fungicide. Custodia Fungicide has excellent curative and preventative qualities, allowing for flexibility and a wide treatment window. Due to its dual mode of action, it is effective at several phases of fungus development. Custodia Fungicide has a good effect on the physiological function of the crop when used since it increases yield and quality of the produce, which brings in a higher price.",
        discount: "340",
        manufacture_company: "ADAMA Agricultural Solutions UK Ltd",
        product_name: "CUSTODIA FUNGICIDE",
        product_unique_id: "59a6e214-1031-420c-887a-0bac1baf42f8",
        product_weight: "500 ml",
        source: "../../assets/images/Adama/ada3.avif",
      },
      {
        actual_price: "560",
        application:
          "Technical Content: Bifenthrin 9.4% SC and Diafenthiuron 47% Target Plants: Cotton and Chilies Thrips, whiteflies, aphids, and leafhoppers are the pests that are being targeted. 250ml/acre, or 1.25–1.5ml/liter of waterannel gated, is the dosage.",
        benifits:
          "Takaf is a special dual-mode of action combination product.  Takaf interferes with sodium channel gating to block mitochondrial ATP synthase, paralysing the pest while also having an impact on the central and peripheral nervous systems.",
          category_id: "SU4rzrVQK5",
        description:
          "Takaf Adama interferes with sodium channel gating to paralyse the insect by inhibiting mitochondrial ATP synthase while also having an impact on the central and peripheral nervous systems.",
        discount: "60",
        manufacture_company: "ADAMA Agricultural Solutions UK Ltd",
        product_name: "TAKAF INSECTICIDE",
        product_unique_id: "dc4fd5cf-efb1-48f0-bf03-832199f55ea5",
        product_weight: "300 ml",
        source: "../../assets/images/Adama/ada4.avif",
      },


      {
        actual_price: "1044",
        application: "2 mL/litre and 400ml/acre",
        benifits:
          "Agil is used for selective weed control in many broadleaf crops such as sugar beet, oilseed rape, soybeans, sunflower, other field crops, vegetables, fruit trees, vineyards and forestry and best result is achieved when sprayed at the 2-4 leaf stage.\\nAgil Herbicide is a systemic herbicide, which is quickly absorbed by the leaves and translocated from the foliage to the growing points of the leaves and roots of the sprayed weeds.\\nRainfall 1 hour after application will not affect the product activity. Optimal activity is achieved when applied early and weeds are actively growing.\\nAgil Herbicide is safe for beneficial insects and mammals and is environmentally friendly.",
       category_id: "SU4rzrVQK4",
        description:
          "Agil Herbicide is a herbicide of the aryloxy phenoxy propionates family. It is used for the post-emergence control of a wide range of annual and perennial grasses.",
        discount: "209",
        manufacture_company: "Adama - Fertilizers",
        product_name: "TATA RALLIS TAFGOR INSECTICIDE, DIMETHOATE 30% EC",
        product_unique_id: "89e60418-9bd7-4c43-b33cc-2f839b6cef7d",
        product_weight: "400 ml",
        source: "../../assets/images/Tata/tata1.jpg",
      },
      {
        actual_price: "1286",
        application:
          "Blackgram, Redgram, Pigeonpea, Chickpea, Groundnut, Soybean, Rice, Chipotle, Tomato, Cauliflower, Cabbage, Broccoli, and Kale are some examples of crops.\\n\\nHelicoverpa, Spodoptera, Fall armyworm, Cut Worm, Pod Borers, DBM, Stem Borers, Bollworms, and Leaf Roller are several insects and diseases.\\n\\n2ml per litre of water is the dosage.",
        benifits:
          "Plethora acts as a chitin synthesis inhibitor and also affects the insect nervous system by inhibiting sodium ions entry into nerve cells hence, the insecticide hampers moulting & also paralyses the insect. It has phytotonic effect on the crop.",
          category_id: "SU4rzrVQK4",
        description:
          "Innovative product with a dual mode of action is Plethora Insecticide. Lepidopteran pesticide Plethora has a broad spectrum and has a phytotonic effect on the crop. Inhibits chitin formation and has an impact on the nervous system of insects by preventing sodium ions from entering nerve cells. As a result, the pesticide hinders moulting and paralyses insects.",
        discount: "130",
        manufacture_company: "PLETHORA - Fertilizers",
        product_name: "TATA METRI (METRIBUZIN 70% WP) HERBICIDE",
        product_unique_id: "2f8cbf08-05c3-4350-bb20-3b4d6139315ba",
        product_weight: "200 ml",
        source: "../../assets/images/Tata/tata2.jpg",
      },
      {
        actual_price: "1700",
        application:
          "A wide range of fungal infections and illnesses can be controlled using Custodia Fungicide. Custodia Fungicide has excellent curative and preventative qualities, allowing for flexibility and a wide treatment window. Due to its dual mode of action, it is effective at several phases of fungus development. Custodia Fungicide has a good effect on the physiological function of the crop when used since it increases yield and quality of the produce, which brings in a higher price.\\n\\nCustodia Fungicide Technical Content: Azoxystrobin 11% + Tebuconazole 18.3% w/w SC\\n\\nChili, onions, potatoes, tomatoes, grapes, wheat, and apples are the target crops.\\n\\nPowdery mildew and dieback, fruit rot, purple blotch, sheath blight, yellow rust, early and late blight, downy and powdery mildew, apple scab, and pre-mature leaf fall disease are the insects and pests that are targeted.dosage of 1 ml per litre of water.",
        benifits:
          "Custodia is a Broad spectrum fungicide for the control of many fungal pathogens & diseases. Custodia has very good preventive & curative properties which provides flexibility & broad window of application. It has a dual mode of action, hence it works at multiple stages of fungal development.",
          category_id: "SU4rzrVQK4",
        description:
          "A wide range of fungal infections and illnesses can be controlled using Custodia Fungicide. Custodia Fungicide has excellent curative and preventative qualities, allowing for flexibility and a wide treatment window. Due to its dual mode of action, it is effective at several phases of fungus development. Custodia Fungicide has a good effect on the physiological function of the crop when used since it increases yield and quality of the produce, which brings in a higher price.",
        discount: "340",
        manufacture_company: "ADAMA Agricultural Solutions UK Ltd",
        product_name: "TATAMIDA (IMIDACLOPRID 17.8% SL)",
        product_unique_id: "59a6e214-1031-42hc-887a-0baac1bac42f8",
        product_weight: "500 ml",
        source: "../../assets/images/Tata/tata3.jpg",
      },
      {
        actual_price: "560",
        application:
          "Technical Content: Bifenthrin 9.4% SC and Diafenthiuron 47% Target Plants: Cotton and Chilies Thrips, whiteflies, aphids, and leafhoppers are the pests that are being targeted. 250ml/acre, or 1.25–1.5ml/liter of waterannel gated, is the dosage.",
        benifits:
          "Takaf is a special dual-mode of action combination product.  Takaf interferes with sodium channel gating to block mitochondrial ATP synthase, paralysing the pest while also having an impact on the central and peripheral nervous systems.",
          category_id: "SU4rzrVQK4",
        description:
          "Takaf Adama interferes with sodium channel gating to paralyse the insect by inhibiting mitochondrial ATP synthase while also having an impact on the central and peripheral nervous systems.",
        discount: "60",
        manufacture_company: "ADAMA Agricultural Solutions UK Ltd",
        product_name: "SARTHAK FUNGICIDE",
        product_unique_id: "dc4fd5cf-efb1-48f0-bf03-832d199f55ea5",
        product_weight: "300 ml",
        source: "../../assets/images/Tata/tata5.jpg",
      },
   

// ------------bayer------------------------

      {
        actual_price: "1044",
        application: "2 mL/litre and 400ml/acre",
        benifits:
          "Agil is used for selective weed control in many broadleaf crops such as sugar beet, oilseed rape, soybeans, sunflower, other field crops, vegetables, fruit trees, vineyards and forestry and best result is achieved when sprayed at the 2-4 leaf stage.\\nAgil Herbicide is a systemic herbicide, which is quickly absorbed by the leaves and translocated from the foliage to the growing points of the leaves and roots of the sprayed weeds.\\nRainfall 1 hour after application will not affect the product activity. Optimal activity is achieved when applied early and weeds are actively growing.\\nAgil Herbicide is safe for beneficial insects and mammals and is environmentally friendly.",
          category_id: "SU4rzrVQK6",
        description:
          "Agil Herbicide is a herbicide of the aryloxy phenoxy propionates family. It is used for the post-emergence control of a wide range of annual and perennial grasses.",
        discount: "209",
        manufacture_company: "Bayer - Fertilizers",
        product_name: "BAYER PLANOFIX PLANT GROWTH REGULATOR",
        product_unique_id: "89e60418-9bd7-4c43-b3ccc-2f839b6cef7d",
        product_weight: "400 ml",
        source: "../../assets/images/bayer/bay1.jpg",
      },
      {
        actual_price: "1286",
        application:
          "Blackgram, Redgram, Pigeonpea, Chickpea, Groundnut, Soybean, Rice, Chipotle, Tomato, Cauliflower, Cabbage, Broccoli, and Kale are some examples of crops.\\n\\nHelicoverpa, Spodoptera, Fall armyworm, Cut Worm, Pod Borers, DBM, Stem Borers, Bollworms, and Leaf Roller are several insects and diseases.\\n\\n2ml per litre of water is the dosage.",
        benifits:
          "Plethora acts as a chitin synthesis inhibitor and also affects the insect nervous system by inhibiting sodium ions entry into nerve cells hence, the insecticide hampers moulting & also paralyses the insect. It has phytotonic effect on the crop.",
          category_id: "SU4rzrVQK6",
        description:
          "Innovative product with a dual mode of action is Plethora Insecticide. Lepidopteran pesticide Plethora has a broad spectrum and has a phytotonic effect on the crop. Inhibits chitin formation and has an impact on the nervous system of insects by preventing sodium ions from entering nerve cells. As a result, the pesticide hinders moulting and paralyses insects.",
        discount: "130",
        manufacture_company: "BAYER ANTRACOL FUNGICIDE, PROPINEB 70% WP",
        product_name: "PLETHORA INSECTICIDE",
        product_unique_id: "2f8cbf08-05c3-4350-bbc20-3b4d139315ba",
        product_weight: "200 ml",
        source: "../../assets/images/bayer/bay2.jpg",
      },
      {
        actual_price: "1700",
        application:
          "A wide range of fungal infections and illnesses can be controlled using Custodia Fungicide. Custodia Fungicide has excellent curative and preventative qualities, allowing for flexibility and a wide treatment window. Due to its dual mode of action, it is effective at several phases of fungus development. Custodia Fungicide has a good effect on the physiological function of the crop when used since it increases yield and quality of the produce, which brings in a higher price.\\n\\nCustodia Fungicide Technical Content: Azoxystrobin 11% + Tebuconazole 18.3% w/w SC\\n\\nChili, onions, potatoes, tomatoes, grapes, wheat, and apples are the target crops.\\n\\nPowdery mildew and dieback, fruit rot, purple blotch, sheath blight, yellow rust, early and late blight, downy and powdery mildew, apple scab, and pre-mature leaf fall disease are the insects and pests that are targeted.dosage of 1 ml per litre of water.",
        benifits:
          "Custodia is a Broad spectrum fungicide for the control of many fungal pathogens & diseases. Custodia has very good preventive & curative properties which provides flexibility & broad window of application. It has a dual mode of action, hence it works at multiple stages of fungal development.",
          category_id: "SU4rzrVQK6",
        description:
          "A wide range of fungal infections and illnesses can be controlled using Custodia Fungicide. Custodia Fungicide has excellent curative and preventative qualities, allowing for flexibility and a wide treatment window. Due to its dual mode of action, it is effective at several phases of fungus development. Custodia Fungicide has a good effect on the physiological function of the crop when used since it increases yield and quality of the produce, which brings in a higher price.",
        discount: "340",
        manufacture_company: "ADAMA Agricultural Solutions UK Ltd",
        product_name: "BAYER CROPSCIENCE FAME CHEMICAL INSECTICIDE",
        product_unique_id: "59a0e214-1031-420c-887a-0bacc1bac42f8",
        product_weight: "500 ml",
        source: "../../assets/images/bayer/bay3.jpg",
      },
      {
        actual_price: "560",
        application:
          "Technical Content: Bifenthrin 9.4% SC and Diafenthiuron 47% Target Plants: Cotton and Chilies Thrips, whiteflies, aphids, and leafhoppers are the pests that are being targeted. 250ml/acre, or 1.25–1.5ml/liter of waterannel gated, is the dosage.",
        benifits:
          "Takaf is a special dual-mode of action combination product.  Takaf interferes with sodium channel gating to block mitochondrial ATP synthase, paralysing the pest while also having an impact on the central and peripheral nervous systems.",
          category_id: "SU4rzrVQK6",
        description:
          "Takaf Adama interferes with sodium channel gating to paralyse the insect by inhibiting mitochondrial ATP synthase while also having an impact on the central and peripheral nervous systems.",
        discount: "60",
        manufacture_company: "ADAMA Agricultural Solutions UK Ltd",
        product_name: "TAKAF INSECTICIDE",
        product_unique_id: "dc4fd5cf-efb1-48f0-bf03-8321a99f55ea5",
        product_weight: "300 ml",
        source: "../../assets/images/bayer/bay5.jpg",
      },
   

// ----------aries agro-------------------

      {
        actual_price: "1044",
        application: "2 mL/litre and 400ml/acre",
        benifits:
          "Agil is used for selective weed control in many broadleaf crops such as sugar beet, oilseed rape, soybeans, sunflower, other field crops, vegetables, fruit trees, vineyards and forestry and best result is achieved when sprayed at the 2-4 leaf stage.\\nAgil Herbicide is a systemic herbicide, which is quickly absorbed by the leaves and translocated from the foliage to the growing points of the leaves and roots of the sprayed weeds.\\nRainfall 1 hour after application will not affect the product activity. Optimal activity is achieved when applied early and weeds are actively growing.\\nAgil Herbicide is safe for beneficial insects and mammals and is environmentally friendly.",
          category_id: "SU4rzrVQK7",
        description:
          "Agil Herbicide is a herbicide of the aryloxy phenoxy propionates family. It is used for the post-emergence control of a wide range of annual and perennial grasses.",
        discount: "209",
        manufacture_company: "Adama - Fertilizers",
        product_name: "GEOLIFE TABSIL (FA) HIGH% ORTHO SILICIC ACID EFFERVESCENT TABLETS",
        product_unique_id: "89e60418-9bd7-4c43-b3cc-2f83r9b6cef7d",
        product_weight: "400 ml",
        source: "../../assets/images/geolife/geo1.jpg",
      },
      {
        actual_price: "1286",
        application:
          "Blackgram, Redgram, Pigeonpea, Chickpea, Groundnut, Soybean, Rice, Chipotle, Tomato, Cauliflower, Cabbage, Broccoli, and Kale are some examples of crops.\\n\\nHelicoverpa, Spodoptera, Fall armyworm, Cut Worm, Pod Borers, DBM, Stem Borers, Bollworms, and Leaf Roller are several insects and diseases.\\n\\n2ml per litre of water is the dosage.",
        benifits:
          "Plethora acts as a chitin synthesis inhibitor and also affects the insect nervous system by inhibiting sodium ions entry into nerve cells hence, the insecticide hampers moulting & also paralyses the insect. It has phytotonic effect on the crop.",
          category_id: "SU4rzrVQK7",
        description:
          "Innovative product with a dual mode of action is Plethora Insecticide. Lepidopteran pesticide Plethora has a broad spectrum and has a phytotonic effect on the crop. Inhibits chitin formation and has an impact on the nervous system of insects by preventing sodium ions from entering nerve cells. As a result, the pesticide hinders moulting and paralyses insects.",
        discount: "130",
        manufacture_company: "PLETHORA - Fertilizers",
        product_name: "GEOLIFE FLOWERING KIT (NANO VIGORE + BALANCE NANO)",
        product_unique_id: "2f8cbf08-05c3-4350-bb20-3b4d13f9315ba",
        product_weight: "200 ml",
        source: "../../assets/images/geolife/geo2.jpg",
      },
      {
        actual_price: "1700",
        application:
          "A wide range of fungal infections and illnesses can be controlled using Custodia Fungicide. Custodia Fungicide has excellent curative and preventative qualities, allowing for flexibility and a wide treatment window. Due to its dual mode of action, it is effective at several phases of fungus development. Custodia Fungicide has a good effect on the physiological function of the crop when used since it increases yield and quality of the produce, which brings in a higher price.\\n\\nCustodia Fungicide Technical Content: Azoxystrobin 11% + Tebuconazole 18.3% w/w SC\\n\\nChili, onions, potatoes, tomatoes, grapes, wheat, and apples are the target crops.\\n\\nPowdery mildew and dieback, fruit rot, purple blotch, sheath blight, yellow rust, early and late blight, downy and powdery mildew, apple scab, and pre-mature leaf fall disease are the insects and pests that are targeted.dosage of 1 ml per litre of water.",
        benifits:
          "Custodia is a Broad spectrum fungicide for the control of many fungal pathogens & diseases. Custodia has very good preventive & curative properties which provides flexibility & broad window of application. It has a dual mode of action, hence it works at multiple stages of fungal development.",
          category_id: "SU4rzrVQK7",
        description:
          "A wide range of fungal infections and illnesses can be controlled using Custodia Fungicide. Custodia Fungicide has excellent curative and preventative qualities, allowing for flexibility and a wide treatment window. Due to its dual mode of action, it is effective at several phases of fungus development. Custodia Fungicide has a good effect on the physiological function of the crop when used since it increases yield and quality of the produce, which brings in a higher price.",
        discount: "340",
        manufacture_company: "ADAMA Agricultural Solutions UK Ltd",
        product_name: "GEOLIFE GROWTH KIT FOR CROPS NUTRITION & DEVELOPMENT",
        product_unique_id: "59a6e214-1031-420c-887a-0b0ac1bac42f8",
        product_weight: "500 ml",
        source: "../../assets/images/geolife/geo3.jpg",
      },
      {
        actual_price: "560",
        application:
          "Technical Content: Bifenthrin 9.4% SC and Diafenthiuron 47% Target Plants: Cotton and Chilies Thrips, whiteflies, aphids, and leafhoppers are the pests that are being targeted. 250ml/acre, or 1.25–1.5ml/liter of waterannel gated, is the dosage.",
        benifits:
          "Takaf is a special dual-mode of action combination product.  Takaf interferes with sodium channel gating to block mitochondrial ATP synthase, paralysing the pest while also having an impact on the central and peripheral nervous systems.",
          category_id: "SU4rzrVQK7",
        description:
          "Takaf Adama interferes with sodium channel gating to paralyse the insect by inhibiting mitochondrial ATP synthase while also having an impact on the central and peripheral nervous systems.",
        discount: "60",
        manufacture_company: "ADAMA Agricultural Solutions UK Ltd",
        product_name: "GEOLIFE GEOMYCIN (BIO BACTERICIDE)",
        product_unique_id: "dc4fd5cf-efb1-48f0-bf03-8321979f55ea5",
        product_weight: "300 ml",
        source: "../../assets/images/geolife/geo4.jpg",
      },
   
// --------------Barrix---------------------

      {
        actual_price: "1044",
        application: "2 mL/litre and 400ml/acre",
        benifits:
          "Agil is used for selective weed control in many broadleaf crops such as sugar beet, oilseed rape, soybeans, sunflower, other field crops, vegetables, fruit trees, vineyards and forestry and best result is achieved when sprayed at the 2-4 leaf stage.\\nAgil Herbicide is a systemic herbicide, which is quickly absorbed by the leaves and translocated from the foliage to the growing points of the leaves and roots of the sprayed weeds.\\nRainfall 1 hour after application will not affect the product activity. Optimal activity is achieved when applied early and weeds are actively growing.\\nAgil Herbicide is safe for beneficial insects and mammals and is environmentally friendly.",
          category_id: "SU4rzrVQK8",
        description:
          "Agil Herbicide is a herbicide of the aryloxy phenoxy propionates family. It is used for the post-emergence control of a wide range of annual and perennial grasses.",
        discount: "209",
        manufacture_company: "Adama - Fertilizers",
        product_name: "BARRIX CONTROL",
        product_unique_id: "89e60418-9bd7-4c43-b3cc-2fe839b6cef7d",
        product_weight: "400 ml",
        source: "../../assets/images/barrix/barrix1.jpg",
      },
      {
        actual_price: "1286",
        application:
          "Blackgram, Redgram, Pigeonpea, Chickpea, Groundnut, Soybean, Rice, Chipotle, Tomato, Cauliflower, Cabbage, Broccoli, and Kale are some examples of crops.\\n\\nHelicoverpa, Spodoptera, Fall armyworm, Cut Worm, Pod Borers, DBM, Stem Borers, Bollworms, and Leaf Roller are several insects and diseases.\\n\\n2ml per litre of water is the dosage.",
        benifits:
          "Plethora acts as a chitin synthesis inhibitor and also affects the insect nervous system by inhibiting sodium ions entry into nerve cells hence, the insecticide hampers moulting & also paralyses the insect. It has phytotonic effect on the crop.",
          category_id: "SU4rzrVQK8",
        description:
          "Innovative product with a dual mode of action is Plethora Insecticide. Lepidopteran pesticide Plethora has a broad spectrum and has a phytotonic effect on the crop. Inhibits chitin formation and has an impact on the nervous system of insects by preventing sodium ions from entering nerve cells. As a result, the pesticide hinders moulting and paralyses insects.",
        discount: "130",
        manufacture_company: "PLETHORA - Fertilizers",
        product_name: "BARRIX CATCH FRUIT FLY LURE",
        product_unique_id: "2f8cbf08-05c3-4350-bb20-3b4d2139315ba",
        product_weight: "200 ml",
        source: "../../assets/images/barrix/barrix2.jpg",
      },
      {
        actual_price: "1700",
        application:
          "A wide range of fungal infections and illnesses can be controlled using Custodia Fungicide. Custodia Fungicide has excellent curative and preventative qualities, allowing for flexibility and a wide treatment window. Due to its dual mode of action, it is effective at several phases of fungus development. Custodia Fungicide has a good effect on the physiological function of the crop when used since it increases yield and quality of the produce, which brings in a higher price.\\n\\nCustodia Fungicide Technical Content: Azoxystrobin 11% + Tebuconazole 18.3% w/w SC\\n\\nChili, onions, potatoes, tomatoes, grapes, wheat, and apples are the target crops.\\n\\nPowdery mildew and dieback, fruit rot, purple blotch, sheath blight, yellow rust, early and late blight, downy and powdery mildew, apple scab, and pre-mature leaf fall disease are the insects and pests that are targeted.dosage of 1 ml per litre of water.",
        benifits:
          "Custodia is a Broad spectrum fungicide for the control of many fungal pathogens & diseases. Custodia has very good preventive & curative properties which provides flexibility & broad window of application. It has a dual mode of action, hence it works at multiple stages of fungal development.",
          category_id: "SU4rzrVQK8",
        description:
          "A wide range of fungal infections and illnesses can be controlled using Custodia Fungicide. Custodia Fungicide has excellent curative and preventative qualities, allowing for flexibility and a wide treatment window. Due to its dual mode of action, it is effective at several phases of fungus development. Custodia Fungicide has a good effect on the physiological function of the crop when used since it increases yield and quality of the produce, which brings in a higher price.",
        discount: "340",
        manufacture_company: "ADAMA Agricultural Solutions UK Ltd",
        product_name: "BARRIX MAGIC YELLOW STICKER CHROMATIC TRAP SHEET",
        product_unique_id: "59a6e204-1031-420c-887a-0bac1bhac42f8",
        product_weight: "500 ml",
        source: "../../assets/images/barrix/barrix3.jpg",
      },
      {
        actual_price: "560",
        application:
          "Technical Content: Bifenthrin 9.4% SC and Diafenthiuron 47% Target Plants: Cotton and Chilies Thrips, whiteflies, aphids, and leafhoppers are the pests that are being targeted. 250ml/acre, or 1.25–1.5ml/liter of waterannel gated, is the dosage.",
        benifits:
          "Takaf is a special dual-mode of action combination product.  Takaf interferes with sodium channel gating to block mitochondrial ATP synthase, paralysing the pest while also having an impact on the central and peripheral nervous systems.",
          category_id: "SU4rzrVQK8",
        description:
          "Takaf Adama interferes with sodium channel gating to paralyse the insect by inhibiting mitochondrial ATP synthase while also having an impact on the central and peripheral nervous systems.",
        discount: "60",
        manufacture_company: "ADAMA Agricultural Solutions UK Ltd",
        product_name: "BARRIX MAGIC STICKER CHROMATIC TRAP BLUE SHEET",
        product_unique_id: "dc4fd5cf-efb1-48f0-bf03-832199wf55ea5",
        product_weight: "300 ml",
        source: "../../assets/images/barrix/barrix4.jpg",
      },
    
// --------------------indofil detAILS----------------------

      {
        actual_price: "1044",
        application: "2 mL/litre and 400ml/acre",
        benifits:
          "Agil is used for selective weed control in many broadleaf crops such as sugar beet, oilseed rape, soybeans, sunflower, other field crops, vegetables, fruit trees, vineyards and forestry and best result is achieved when sprayed at the 2-4 leaf stage.\\nAgil Herbicide is a systemic herbicide, which is quickly absorbed by the leaves and translocated from the foliage to the growing points of the leaves and roots of the sprayed weeds.\\nRainfall 1 hour after application will not affect the product activity. Optimal activity is achieved when applied early and weeds are actively growing.\\nAgil Herbicide is safe for beneficial insects and mammals and is environmentally friendly.",
          category_id: "SU4rzrVQK9",
        description:
          "Agil Herbicide is a herbicide of the aryloxy phenoxy propionates family. It is used for the post-emergence control of a wide range of annual and perennial grasses.",
        discount: "209",
        manufacture_company: "Adama - Fertilizers",
        product_name: "INDOFIL M45 FUNGICIDE",
        product_unique_id: "89e60418-9bd7-4c43-b3cc-2f8j39b6cef7d",
        product_weight: "400 ml",
        source: "../../assets/images/indofil/indo1.jpg",
      },
      {
        actual_price: "1286",
        application:
          "Blackgram, Redgram, Pigeonpea, Chickpea, Groundnut, Soybean, Rice, Chipotle, Tomato, Cauliflower, Cabbage, Broccoli, and Kale are some examples of crops.\\n\\nHelicoverpa, Spodoptera, Fall armyworm, Cut Worm, Pod Borers, DBM, Stem Borers, Bollworms, and Leaf Roller are several insects and diseases.\\n\\n2ml per litre of water is the dosage.",
        benifits:
          "Plethora acts as a chitin synthesis inhibitor and also affects the insect nervous system by inhibiting sodium ions entry into nerve cells hence, the insecticide hampers moulting & also paralyses the insect. It has phytotonic effect on the crop.",
          category_id: "SU4rzrVQK9",
        description:
          "Innovative product with a dual mode of action is Plethora Insecticide. Lepidopteran pesticide Plethora has a broad spectrum and has a phytotonic effect on the crop. Inhibits chitin formation and has an impact on the nervous system of insects by preventing sodium ions from entering nerve cells. As a result, the pesticide hinders moulting and paralyses insects.",
        discount: "130",
        manufacture_company: "PLETHORA - Fertilizers",
        product_name: "INDOFIL SPRINT",
        product_unique_id: "2f8cbf08-05c3-4350-bb20-3b4dr139315ba",
        product_weight: "200 ml",
        source: "../../assets/images/indofil/indo2.jpg",
      },
      {
        actual_price: "1700",
        application:
          "A wide range of fungal infections and illnesses can be controlled using Custodia Fungicide. Custodia Fungicide has excellent curative and preventative qualities, allowing for flexibility and a wide treatment window. Due to its dual mode of action, it is effective at several phases of fungus development. Custodia Fungicide has a good effect on the physiological function of the crop when used since it increases yield and quality of the produce, which brings in a higher price.\\n\\nCustodia Fungicide Technical Content: Azoxystrobin 11% + Tebuconazole 18.3% w/w SC\\n\\nChili, onions, potatoes, tomatoes, grapes, wheat, and apples are the target crops.\\n\\nPowdery mildew and dieback, fruit rot, purple blotch, sheath blight, yellow rust, early and late blight, downy and powdery mildew, apple scab, and pre-mature leaf fall disease are the insects and pests that are targeted.dosage of 1 ml per litre of water.",
        benifits:
          "Custodia is a Broad spectrum fungicide for the control of many fungal pathogens & diseases. Custodia has very good preventive & curative properties which provides flexibility & broad window of application. It has a dual mode of action, hence it works at multiple stages of fungal development.",
          category_id: "SU4rzrVQK9",
        description:
          "A wide range of fungal infections and illnesses can be controlled using Custodia Fungicide. Custodia Fungicide has excellent curative and preventative qualities, allowing for flexibility and a wide treatment window. Due to its dual mode of action, it is effective at several phases of fungus development. Custodia Fungicide has a good effect on the physiological function of the crop when used since it increases yield and quality of the produce, which brings in a higher price.",
        discount: "340",
        manufacture_company: "ADAMA Agricultural Solutions UK Ltd",
        product_name: "INDOFIL Z 78, ZINAB 75% WP, FUNGICIDE",
        product_unique_id: "59a6e214-1031-420c-887a-0bac1dba942f8",
        product_weight: "500 ml",
        source: "../../assets/images/indofil/indo3.jpg",
      },
      {
        actual_price: "560",
        application:
          "Technical Content: Bifenthrin 9.4% SC and Diafenthiuron 47% Target Plants: Cotton and Chilies Thrips, whiteflies, aphids, and leafhoppers are the pests that are being targeted. 250ml/acre, or 1.25–1.5ml/liter of waterannel gated, is the dosage.",
        benifits:
          "Takaf is a special dual-mode of action combination product.  Takaf interferes with sodium channel gating to block mitochondrial ATP synthase, paralysing the pest while also having an impact on the central and peripheral nervous systems.",
          category_id: "SU4rzrVQK9",
        description:
          "Takaf Adama interferes with sodium channel gating to paralyse the insect by inhibiting mitochondrial ATP synthase while also having an impact on the central and peripheral nervous systems.",
        discount: "60",
        manufacture_company: "ADAMA Agricultural Solutions UK Ltd",
        product_name: "MERGER FUNGICIDE",
        product_unique_id: "dc4fd5cf-efb1-48f0-bf03-8321w99f55ea5",
        product_weight: "300 ml",
        source: "../../assets/images/indofil/indo4.jpg",
      },
   
// ----------------Rinuja----------------------------------

      {
        actual_price: "1044",
        application: "2 mL/litre and 400ml/acre",
        benifits:
          "Agil is used for selective weed control in many broadleaf crops such as sugar beet, oilseed rape, soybeans, sunflower, other field crops, vegetables, fruit trees, vineyards and forestry and best result is achieved when sprayed at the 2-4 leaf stage.\\nAgil Herbicide is a systemic herbicide, which is quickly absorbed by the leaves and translocated from the foliage to the growing points of the leaves and roots of the sprayed weeds.\\nRainfall 1 hour after application will not affect the product activity. Optimal activity is achieved when applied early and weeds are actively growing.\\nAgil Herbicide is safe for beneficial insects and mammals and is environmentally friendly.",
          category_id: "SU4rzrVQ10",
        description:
          "Agil Herbicide is a herbicide of the aryloxy phenoxy propionates family. It is used for the post-emergence control of a wide range of annual and perennial grasses.",
        discount: "209",
        manufacture_company: "Adama - Fertilizers",
        product_name: "RINUJA GROWTH PLUS PLANT (GROWTH PROMOTER FOR ROSE)",
        product_unique_id: "89e60418-9bd7-4c43-b3cc-2f83e9b6cef7d",
        product_weight: "400 ml",
        source: "../../assets/images/rinuja/rinu1.jpg",
      },
      {
        actual_price: "1286",
        application:
          "Blackgram, Redgram, Pigeonpea, Chickpea, Groundnut, Soybean, Rice, Chipotle, Tomato, Cauliflower, Cabbage, Broccoli, and Kale are some examples of crops.\\n\\nHelicoverpa, Spodoptera, Fall armyworm, Cut Worm, Pod Borers, DBM, Stem Borers, Bollworms, and Leaf Roller are several insects and diseases.\\n\\n2ml per litre of water is the dosage.",
        benifits:
          "Plethora acts as a chitin synthesis inhibitor and also affects the insect nervous system by inhibiting sodium ions entry into nerve cells hence, the insecticide hampers moulting & also paralyses the insect. It has phytotonic effect on the crop.",
          category_id: "SU4rzrVQ10",
        description:
          "Innovative product with a dual mode of action is Plethora Insecticide. Lepidopteran pesticide Plethora has a broad spectrum and has a phytotonic effect on the crop. Inhibits chitin formation and has an impact on the nervous system of insects by preventing sodium ions from entering nerve cells. As a result, the pesticide hinders moulting and paralyses insects.",
        discount: "130",
        manufacture_company: "PLETHORA - Fertilizers",
        product_name: "RINUJA GROWTH PLUS (BIO FERTILIZER)",
        product_unique_id: "2f8cbf08-05c3-4350-bb20-3b4d3139315ba",
        product_weight: "200 ml",
        source: "../../assets/images/rinuja/rinu2.jpg",
      },
      {
        actual_price: "1700",
        application:
          "A wide range of fungal infections and illnesses can be controlled using Custodia Fungicide. Custodia Fungicide has excellent curative and preventative qualities, allowing for flexibility and a wide treatment window. Due to its dual mode of action, it is effective at several phases of fungus development. Custodia Fungicide has a good effect on the physiological function of the crop when used since it increases yield and quality of the produce, which brings in a higher price.\\n\\nCustodia Fungicide Technical Content: Azoxystrobin 11% + Tebuconazole 18.3% w/w SC\\n\\nChili, onions, potatoes, tomatoes, grapes, wheat, and apples are the target crops.\\n\\nPowdery mildew and dieback, fruit rot, purple blotch, sheath blight, yellow rust, early and late blight, downy and powdery mildew, apple scab, and pre-mature leaf fall disease are the insects and pests that are targeted.dosage of 1 ml per litre of water.",
        benifits:
          "Custodia is a Broad spectrum fungicide for the control of many fungal pathogens & diseases. Custodia has very good preventive & curative properties which provides flexibility & broad window of application. It has a dual mode of action, hence it works at multiple stages of fungal development.",
          category_id: "SU4rzrVQ10",
        description:
          "A wide range of fungal infections and illnesses can be controlled using Custodia Fungicide. Custodia Fungicide has excellent curative and preventative qualities, allowing for flexibility and a wide treatment window. Due to its dual mode of action, it is effective at several phases of fungus development. Custodia Fungicide has a good effect on the physiological function of the crop when used since it increases yield and quality of the produce, which brings in a higher price.",
        discount: "340",
        manufacture_company: "ADAMA Agricultural Solutions UK Ltd",
        product_name: "RINUJA ORGANIC COLD PRESSED NEEM OIL (BIO INSECTICIDE)",
        product_unique_id: "59a6e214-1031-420c-887a-0bac1bac462f8",
        product_weight: "500 ml",
        source: "../../assets/images/rinuja/rinu3.jpg",
      },
      {
        actual_price: "560",
        application:
          "Technical Content: Bifenthrin 9.4% SC and Diafenthiuron 47% Target Plants: Cotton and Chilies Thrips, whiteflies, aphids, and leafhoppers are the pests that are being targeted. 250ml/acre, or 1.25–1.5ml/liter of waterannel gated, is the dosage.",
        benifits:
          "Takaf is a special dual-mode of action combination product.  Takaf interferes with sodium channel gating to block mitochondrial ATP synthase, paralysing the pest while also having an impact on the central and peripheral nervous systems.",
          category_id: "SU4rzrVQ10",
        description:
          "Takaf Adama interferes with sodium channel gating to paralyse the insect by inhibiting mitochondrial ATP synthase while also having an impact on the central and peripheral nervous systems.",
        discount: "60",
        manufacture_company: "ADAMA Agricultural Solutions UK Ltd",
        product_name: "RINUJA PROBIOTIC (BIO FERTILIZER )",
        product_unique_id: "dc4fd5cf-efb1-48f0-bf03-8732199f55ea5",
        product_weight: "300 ml",
        source: "../../assets/images/rinuja/rinu4.jpg",
      },
// ------------------Bio Insecticides--------------------

      {
        actual_price: "1044",
        application: "2 mL/litre and 400ml/acre",
        benifits:
          "Agil is used for selective weed control in many broadleaf crops such as sugar beet, oilseed rape, soybeans, sunflower, other field crops, vegetables, fruit trees, vineyards and forestry and best result is achieved when sprayed at the 2-4 leaf stage.\\nAgil Herbicide is a systemic herbicide, which is quickly absorbed by the leaves and translocated from the foliage to the growing points of the leaves and roots of the sprayed weeds.\\nRainfall 1 hour after application will not affect the product activity. Optimal activity is achieved when applied early and weeds are actively growing.\\nAgil Herbicide is safe for beneficial insects and mammals and is environmentally friendly.",
          category_id: "SU4rzrVQ11",
        description:
          "Agil Herbicide is a herbicide of the aryloxy phenoxy propionates family. It is used for the post-emergence control of a wide range of annual and perennial grasses.",
        discount: "209",
        manufacture_company: "Adama - Fertilizers",
        product_name: "DUPONT BENEVIA INSECTICIDE, CYAZYPYR ACTIVE - 10.26% OD",
        product_unique_id: "89e60418-9bd7-4c43-b3cc-2f839b36cef7d",
        product_weight: "400 ml",
        source: "../../assets/images/Insecticide/ins1.jpg",
      },
      {
        actual_price: "1286",
        application:
          "Blackgram, Redgram, Pigeonpea, Chickpea, Groundnut, Soybean, Rice, Chipotle, Tomato, Cauliflower, Cabbage, Broccoli, and Kale are some examples of crops.\\n\\nHelicoverpa, Spodoptera, Fall armyworm, Cut Worm, Pod Borers, DBM, Stem Borers, Bollworms, and Leaf Roller are several insects and diseases.\\n\\n2ml per litre of water is the dosage.",
        benifits:
          "Plethora acts as a chitin synthesis inhibitor and also affects the insect nervous system by inhibiting sodium ions entry into nerve cells hence, the insecticide hampers moulting & also paralyses the insect. It has phytotonic effect on the crop.",
          category_id: "SU4rzrVQ11",
        description:
          "Innovative product with a dual mode of action is Plethora Insecticide. Lepidopteran pesticide Plethora has a broad spectrum and has a phytotonic effect on the crop. Inhibits chitin formation and has an impact on the nervous system of insects by preventing sodium ions from entering nerve cells. As a result, the pesticide hinders moulting and paralyses insects.",
        discount: "130",
        manufacture_company: "PLETHORA - Fertilizers",
        product_name: "FMC CORAGEN, CLORANTRANILIPROLE 18.50%",
        product_unique_id: "2f8cbf08-05c3-4350-bb20-3b4d1393158ba",
        product_weight: "200 ml",
        source: "../../assets/images/Insecticide/ins2.jpg",
      },
      {
        actual_price: "1700",
        application:
          "A wide range of fungal infections and illnesses can be controlled using Custodia Fungicide. Custodia Fungicide has excellent curative and preventative qualities, allowing for flexibility and a wide treatment window. Due to its dual mode of action, it is effective at several phases of fungus development. Custodia Fungicide has a good effect on the physiological function of the crop when used since it increases yield and quality of the produce, which brings in a higher price.\\n\\nCustodia Fungicide Technical Content: Azoxystrobin 11% + Tebuconazole 18.3% w/w SC\\n\\nChili, onions, potatoes, tomatoes, grapes, wheat, and apples are the target crops.\\n\\nPowdery mildew and dieback, fruit rot, purple blotch, sheath blight, yellow rust, early and late blight, downy and powdery mildew, apple scab, and pre-mature leaf fall disease are the insects and pests that are targeted.dosage of 1 ml per litre of water.",
        benifits:
          "Custodia is a Broad spectrum fungicide for the control of many fungal pathogens & diseases. Custodia has very good preventive & curative properties which provides flexibility & broad window of application. It has a dual mode of action, hence it works at multiple stages of fungal development.",
          category_id: "SU4rzrVQ11",
        description:
          "A wide range of fungal infections and illnesses can be controlled using Custodia Fungicide. Custodia Fungicide has excellent curative and preventative qualities, allowing for flexibility and a wide treatment window. Due to its dual mode of action, it is effective at several phases of fungus development. Custodia Fungicide has a good effect on the physiological function of the crop when used since it increases yield and quality of the produce, which brings in a higher price.",
        discount: "340",
        manufacture_company: "ADAMA Agricultural Solutions UK Ltd",
        product_name: "ALIKA INSECTICIDE",
        product_unique_id: "59a6e214-1031-420c-887a-0bac1bac422f8",
        product_weight: "500 ml",
        source: "../../assets/images/Insecticide/ins3.jpg",
      },
      {
        actual_price: "560",
        application:
          "Technical Content: Bifenthrin 9.4% SC and Diafenthiuron 47% Target Plants: Cotton and Chilies Thrips, whiteflies, aphids, and leafhoppers are the pests that are being targeted. 250ml/acre, or 1.25–1.5ml/liter of waterannel gated, is the dosage.",
        benifits:
          "Takaf is a special dual-mode of action combination product.  Takaf interferes with sodium channel gating to block mitochondrial ATP synthase, paralysing the pest while also having an impact on the central and peripheral nervous systems.",
          category_id: "SU4rzrVQ11",
        description:
          "Takaf Adama interferes with sodium channel gating to paralyse the insect by inhibiting mitochondrial ATP synthase while also having an impact on the central and peripheral nervous systems.",
        discount: "60",
        manufacture_company: "ADAMA Agricultural Solutions UK Ltd",
        product_name: "FIGHTER FIPRONIL INSECTICIDES",
        product_unique_id: "dc4fd5gcf-efb1-48f0-bf03-832199f55ea5",
        product_weight: "300 ml",
        source: "../../assets/images/Insecticide/ins4.jpg",
      },
    
// ------------------Bio fungicides-----------------

      {
        actual_price: "1044",
        application: "2 mL/litre and 400ml/acre",
        benifits:
          "Agil is used for selective weed control in many broadleaf crops such as sugar beet, oilseed rape, soybeans, sunflower, other field crops, vegetables, fruit trees, vineyards and forestry and best result is achieved when sprayed at the 2-4 leaf stage.\\nAgil Herbicide is a systemic herbicide, which is quickly absorbed by the leaves and translocated from the foliage to the growing points of the leaves and roots of the sprayed weeds.\\nRainfall 1 hour after application will not affect the product activity. Optimal activity is achieved when applied early and weeds are actively growing.\\nAgil Herbicide is safe for beneficial insects and mammals and is environmentally friendly.",
          category_id: "SU4rzrVQ12",
        description:
          "Agil Herbicide is a herbicide of the aryloxy phenoxy propionates family. It is used for the post-emergence control of a wide range of annual and perennial grasses.",
        discount: "209",
        manufacture_company: "Adama - Fertilizers",
        product_name: "POWDER SAAF FUNGICIDE",
        product_unique_id: "89e60418-9hbd7-4c43-b3cc-2f839b6cef7d",
        product_weight: "400 ml",
        source: "../../assets/images/fungicides/fun1.jpg",
      },
      {
        actual_price: "1286",
        application:
          "Blackgram, Redgram, Pigeonpea, Chickpea, Groundnut, Soybean, Rice, Chipotle, Tomato, Cauliflower, Cabbage, Broccoli, and Kale are some examples of crops.\\n\\nHelicoverpa, Spodoptera, Fall armyworm, Cut Worm, Pod Borers, DBM, Stem Borers, Bollworms, and Leaf Roller are several insects and diseases.\\n\\n2ml per litre of water is the dosage.",
        benifits:
          "Plethora acts as a chitin synthesis inhibitor and also affects the insect nervous system by inhibiting sodium ions entry into nerve cells hence, the insecticide hampers moulting & also paralyses the insect. It has phytotonic effect on the crop.",
          category_id: "SU4rzrVQ12",
        description:
          "Innovative product with a dual mode of action is Plethora Insecticide. Lepidopteran pesticide Plethora has a broad spectrum and has a phytotonic effect on the crop. Inhibits chitin formation and has an impact on the nervous system of insects by preventing sodium ions from entering nerve cells. As a result, the pesticide hinders moulting and paralyses insects.",
        discount: "130",
        manufacture_company: "PLETHORA - Fertilizers",
        product_name: "INDOFIL M-45",
        product_unique_id: "2f8cbf08-05c3-4350-bb20-3b4d139g315ba",
        product_weight: "200 ml",
        source: "../../assets/images/fungicides/fun2.jpg",
      },
      {
        actual_price: "1700",
        application:
          "A wide range of fungal infections and illnesses can be controlled using Custodia Fungicide. Custodia Fungicide has excellent curative and preventative qualities, allowing for flexibility and a wide treatment window. Due to its dual mode of action, it is effective at several phases of fungus development. Custodia Fungicide has a good effect on the physiological function of the crop when used since it increases yield and quality of the produce, which brings in a higher price.\\n\\nCustodia Fungicide Technical Content: Azoxystrobin 11% + Tebuconazole 18.3% w/w SC\\n\\nChili, onions, potatoes, tomatoes, grapes, wheat, and apples are the target crops.\\n\\nPowdery mildew and dieback, fruit rot, purple blotch, sheath blight, yellow rust, early and late blight, downy and powdery mildew, apple scab, and pre-mature leaf fall disease are the insects and pests that are targeted.dosage of 1 ml per litre of water.",
        benifits:
          "Custodia is a Broad spectrum fungicide for the control of many fungal pathogens & diseases. Custodia has very good preventive & curative properties which provides flexibility & broad window of application. It has a dual mode of action, hence it works at multiple stages of fungal development.",
          category_id: "SU4rzrVQ12",
        description:
          "A wide range of fungal infections and illnesses can be controlled using Custodia Fungicide. Custodia Fungicide has excellent curative and preventative qualities, allowing for flexibility and a wide treatment window. Due to its dual mode of action, it is effective at several phases of fungus development. Custodia Fungicide has a good effect on the physiological function of the crop when used since it increases yield and quality of the produce, which brings in a higher price.",
        discount: "340",
        manufacture_company: "ADAMA Agricultural Solutions UK Ltd",
        product_name: "RIDOMIL GOLD FUNGICIDE",
        product_unique_id: "59a6e214-1031-420c-887a-04bac1bac42f8",
        product_weight: "500 ml",
        source: "../../assets/images/fungicides/fun3.jpg",
      },
      {
        actual_price: "560",
        application:
          "Technical Content: Bifenthrin 9.4% SC and Diafenthiuron 47% Target Plants: Cotton and Chilies Thrips, whiteflies, aphids, and leafhoppers are the pests that are being targeted. 250ml/acre, or 1.25–1.5ml/liter of waterannel gated, is the dosage.",
        benifits:
          "Takaf is a special dual-mode of action combination product.  Takaf interferes with sodium channel gating to block mitochondrial ATP synthase, paralysing the pest while also having an impact on the central and peripheral nervous systems.",
          category_id: "SU4rzrVQ12",
        description:
          "Takaf Adama interferes with sodium channel gating to paralyse the insect by inhibiting mitochondrial ATP synthase while also having an impact on the central and peripheral nervous systems.",
        discount: "60",
        manufacture_company: "ADAMA Agricultural Solutions UK Ltd",
        product_name: "ANSHUL TRICOMAX (BIO FUNGICIDE TRICHODERMA VIRIDE)",
        product_unique_id: "dc4fd5cf-efb1-48f0-bf03-832199fr55ea5",
        product_weight: "300 ml",
        source: "../../assets/images/fungicides/fun4.jpg",
      },
   
// ---------bio nematicides----------------------

      {
        actual_price: "1300",
        application:
          " 1.0 to 2.0 ml per litre of water for foliar 500 to 700 ml of soil or drip per acre, applied twice over a period of 20 to 30 days. Also produces positive outcomes for nursery, seed, and root treatments during transplantation.",
        benifits:
         "Plants contain silicon, which boosts their overall defences. increased ability of plants to withstand abiotic conditions such high winds, dryness, excessive salinity, etc. Moreover, silicon supports plant defences against biotic stressors like bacterial, fungal, and insect attacks. Silicon lessens the toxicity of excess metals in the P, Mn, Al, and alkalis and aids plant uptake of additional micronutrients from the alkaline/calcareous soils.",
         category_id: "SU4rzrVQ13",
        description:
          'Dow has for the first time made 100% silicon available to plants in the form of ""ortho-silicic acid"" with the introduction of NUTRIBUILDTM Silicon OSA 3%.\nThe silicon micronutrient boosts photosynthesis, which improves crop health overall. It also helps manage numerous types of stress, including pest attacks, water shortages, lodging, salinity, metal toxicity, etc.',
        discount: "180",
        manufacture_company: "Dow chemical",
        product_name: "MULTIPLEX SAFE ROOT BIO NEMATICIDE",
        product_unique_id: "bb730660-a90d-49ee-b22a-6fa415e564790",
        product_weight: "500 ml",
        source: "../../assets/images/Nematicides/nem1.jpg",
      },
      {
        actual_price: "800",
        application:
          "1 kg/ha to 2.5 kg/ha of drip\nbefore flowering and fruiting, two to three treatments during the growing stage\nCrops include fruits (such as grapes, pomegranates, citrus, and bananas) as well as vegetables (such as chillies, tomatoes, onions, and brinjal) (cotton, rice, sugarcane, soybean, and others)\nFor soil pH levels up to 7, use Fe EDTA, while for soil pH levels above 7, use Fe EDDHA.",
        benifits:
          "Food production and the growth of crops both require iron.\nIt contributes to the synthesis of chlorophyll.\nMany enzymes involved in the transfer of energy, nitrogen reduction and fixation, and the synthesis of lignin are also composed of iron.",
          category_id: "SU4rzrVQ13",
        description:
          "The main symptom of iron deficiency is the yellowing of young leaves because of low quantities of chlorophyll.\nLeaves that are severely deficient in Fe turn entirely yellow or virtually white before dying and turning brown.\nThe majority of iron deficits arise in calcareous (high pH) soils. Furthermore, especially on soils with low levels of accessible Fe, the cool and wet weather exacerbates Fe deficits.\nLand that is poorly aerated or heavily compacted hinders plants' ability to absorb Fe.\nHigh quantities of phosphorus, manganese, and zinc that are readily available in the soil have a negative impact on fee absorption.",
        discount: "180",
        manufacture_company: "Dow chemical ",
        product_name: "AGRI NEMATODE (PAECILOMYCES LILACINUS) NEMATODE",
        product_unique_id: "24d58d81-6f91-4000-hb9e1-b18187612785",
        product_weight: "500 gms",
        source: "../../assets/images/Nematicides/nem2.jpg",
      },
      {
        actual_price: "1200",
        application:
          "1 kg/ha to 2.5 kg/ha of drip\nbefore flowering and fruiting, two to three treatments during the growing stage\nCrops include fruits (such as grapes, pomegranates, citrus, and bananas) as well as vegetables (such as chillies, tomatoes, onions, and brinjal) (cotton, rice, sugarcane, soybean, and others)\nFor soil pH levels up to 7, use Fe EDTA, while for soil pH levels above 7, use Fe EDDHA.",
        benifits:
          "Food production and the growth of crops both require iron.\nIt contributes to the synthesis of chlorophyll.\nMany enzymes involved in the transfer of energy, nitrogen reduction and fixation, and the synthesis of lignin are also composed of iron.",
          category_id: "SU4rzrVQ13",
        description:
          'Dow has for the first time made 100% silicon available to plants in the form of ""ortho-silicic acid"" with the introduction of NUTRIBUILDTM Silicon OSA 3%.\nThe silicon micronutrient boosts photosynthesis, which improves crop health overall. It also helps manage numerous types of stress, including pest attacks, water shortages, lodging, salinity, metal toxicity, etc.',
        discount: "300",
        manufacture_company: "Dow chemical",
        product_name: "ANSHUL ARMY (EPN NEMATICIDE)",
        product_unique_id: "3435e3df-f46d-48bf-8b445-b4c7fd7d3220",
        product_weight: "500 gm",
        source: "../../assets/images/Nematicides/nem3.jpg",
      },
    
//  ---------------Bio Vircides--------------------

      {
        actual_price: "1300",
        application:
          " 1.0 to 2.0 ml per litre of water for foliar 500 to 700 ml of soil or drip per acre, applied twice over a period of 20 to 30 days. Also produces positive outcomes for nursery, seed, and root treatments during transplantation.",
        benifits:
         "Plants contain silicon, which boosts their overall defences. increased ability of plants to withstand abiotic conditions such high winds, dryness, excessive salinity, etc. Moreover, silicon supports plant defences against biotic stressors like bacterial, fungal, and insect attacks. Silicon lessens the toxicity of excess metals in the P, Mn, Al, and alkalis and aids plant uptake of additional micronutrients from the alkaline/calcareous soils.",
         category_id: "SU4rzrVQ14",
        description:
          'Dow has for the first time made 100% silicon available to plants in the form of ""ortho-silicic acid"" with the introduction of NUTRIBUILDTM Silicon OSA 3%.\nThe silicon micronutrient boosts photosynthesis, which improves crop health overall. It also helps manage numerous types of stress, including pest attacks, water shortages, lodging, salinity, metal toxicity, etc.',
        discount: "180",
        manufacture_company: "Dow chemical",
        product_name: "VANPROZ V-BIND (BIO VIRICIDE)",
        product_unique_id: "bb730660-a904d-49ee-b22a-6a415e564790",
        product_weight: "500 ml",
        source: "../../assets/images/Viricides/vir1.jpg",
      },
      {
        actual_price: "800",
        application:
          "1 kg/ha to 2.5 kg/ha of drip\nbefore flowering and fruiting, two to three treatments during the growing stage\nCrops include fruits (such as grapes, pomegranates, citrus, and bananas) as well as vegetables (such as chillies, tomatoes, onions, and brinjal) (cotton, rice, sugarcane, soybean, and others)\nFor soil pH levels up to 7, use Fe EDTA, while for soil pH levels above 7, use Fe EDDHA.",
        benifits:
          "Food production and the growth of crops both require iron.\nIt contributes to the synthesis of chlorophyll.\nMany enzymes involved in the transfer of energy, nitrogen reduction and fixation, and the synthesis of lignin are also composed of iron.",
          category_id: "SU4rzrVQ14",
        description:
          "The main symptom of iron deficiency is the yellowing of young leaves because of low quantities of chlorophyll.\nLeaves that are severely deficient in Fe turn entirely yellow or virtually white before dying and turning brown.\nThe majority of iron deficits arise in calcareous (high pH) soils. Furthermore, especially on soils with low levels of accessible Fe, the cool and wet weather exacerbates Fe deficits.\nLand that is poorly aerated or heavily compacted hinders plants' ability to absorb Fe.\nHigh quantities of phosphorus, manganese, and zinc that are readily available in the soil have a negative impact on fee absorption.",
        discount: "180",
        manufacture_company: "Dow chemical ",
        product_name: "GEOLIFE NO VIRUS (BIO VIRICIDE)",
        product_unique_id: "24d58d81-6f91-400g0-b9e1-b18187612785",
        product_weight: "500 gms",
        source: "../../assets/images/Viricides/vir2.jpg",
      },
      {
        actual_price: "1200",
        application:
          "1 kg/ha to 2.5 kg/ha of drip\nbefore flowering and fruiting, two to three treatments during the growing stage\nCrops include fruits (such as grapes, pomegranates, citrus, and bananas) as well as vegetables (such as chillies, tomatoes, onions, and brinjal) (cotton, rice, sugarcane, soybean, and others)\nFor soil pH levels up to 7, use Fe EDTA, while for soil pH levels above 7, use Fe EDDHA.",
        benifits:
          "Food production and the growth of crops both require iron.\nIt contributes to the synthesis of chlorophyll.\nMany enzymes involved in the transfer of energy, nitrogen reduction and fixation, and the synthesis of lignin are also composed of iron.",
          category_id: "SU4rzrVQ14",
        description:
          'Dow has for the first time made 100% silicon available to plants in the form of ""ortho-silicic acid"" with the introduction of NUTRIBUILDTM Silicon OSA 3%.\nThe silicon micronutrient boosts photosynthesis, which improves crop health overall. It also helps manage numerous types of stress, including pest attacks, water shortages, lodging, salinity, metal toxicity, etc.',
        discount: "300",
        manufacture_company: "Dow chemical",
        product_name: "GEOLIFE NO VIRUS - CHILI SPECIAL",
        product_unique_id: "3438e3df-f46d-48bf-8b44-b4c7fhd7d3220",
        product_weight: "500 gm",
        source: "../../assets/images/Viricides/vir3.jpg",
      },
    
//  -------------------- Major nurients---------------

      {
        actual_price: "1300",
        application:
          " 1.0 to 2.0 ml per litre of water for foliar 500 to 700 ml of soil or drip per acre, applied twice over a period of 20 to 30 days. Also produces positive outcomes for nursery, seed, and root treatments during transplantation.",
        benifits:
         "Plants contain silicon, which boosts their overall defences. increased ability of plants to withstand abiotic conditions such high winds, dryness, excessive salinity, etc. Moreover, silicon supports plant defences against biotic stressors like bacterial, fungal, and insect attacks. Silicon lessens the toxicity of excess metals in the P, Mn, Al, and alkalis and aids plant uptake of additional micronutrients from the alkaline/calcareous soils.",
         category_id: "SU4rzrVQ15",
        description:
          'Dow has for the first time made 100% silicon available to plants in the form of ""ortho-silicic acid"" with the introduction of NUTRIBUILDTM Silicon OSA 3%.\nThe silicon micronutrient boosts photosynthesis, which improves crop health overall. It also helps manage numerous types of stress, including pest attacks, water shortages, lodging, salinity, metal toxicity, etc.',
        discount: "180",
        manufacture_company: "Dow chemical",
        product_name: "GEOLIFE NANO 19:19:19 FERTILIZERS",
        product_unique_id: "bb730660-a90d-49ee-b22a-6a4y15e564790",
        product_weight: "500 ml",
        source: "../../assets/images/Major nutrients/maj1.jpg",
      },
      {
        actual_price: "800",
        application:
          "1 kg/ha to 2.5 kg/ha of drip\nbefore flowering and fruiting, two to three treatments during the growing stage\nCrops include fruits (such as grapes, pomegranates, citrus, and bananas) as well as vegetables (such as chillies, tomatoes, onions, and brinjal) (cotton, rice, sugarcane, soybean, and others)\nFor soil pH levels up to 7, use Fe EDTA, while for soil pH levels above 7, use Fe EDDHA.",
        benifits:
          "Food production and the growth of crops both require iron.\nIt contributes to the synthesis of chlorophyll.\nMany enzymes involved in the transfer of energy, nitrogen reduction and fixation, and the synthesis of lignin are also composed of iron.",
          category_id: "SU4rzrVQ15",
        description:
          "The main symptom of iron deficiency is the yellowing of young leaves because of low quantities of chlorophyll.\nLeaves that are severely deficient in Fe turn entirely yellow or virtually white before dying and turning brown.\nThe majority of iron deficits arise in calcareous (high pH) soils. Furthermore, especially on soils with low levels of accessible Fe, the cool and wet weather exacerbates Fe deficits.\nLand that is poorly aerated or heavily compacted hinders plants' ability to absorb Fe.\nHigh quantities of phosphorus, manganese, and zinc that are readily available in the soil have a negative impact on fee absorption.",
        discount: "180",
        manufacture_company: "Dow chemical ",
        product_name: "SHAMROCK AL-SACH NPK FERTILIZER 00:00:50 POTASSIUM SULPHATE",
        product_unique_id: "24d58d81-6f91-4000-b9e1-b18e187612785",
        product_weight: "500 gms",
        source: "../../assets/images/Major nutrients/maj2.jpg",
      },
      {
        actual_price: "1200",
        application:
          "1 kg/ha to 2.5 kg/ha of drip\nbefore flowering and fruiting, two to three treatments during the growing stage\nCrops include fruits (such as grapes, pomegranates, citrus, and bananas) as well as vegetables (such as chillies, tomatoes, onions, and brinjal) (cotton, rice, sugarcane, soybean, and others)\nFor soil pH levels up to 7, use Fe EDTA, while for soil pH levels above 7, use Fe EDDHA.",
        benifits:
          "Food production and the growth of crops both require iron.\nIt contributes to the synthesis of chlorophyll.\nMany enzymes involved in the transfer of energy, nitrogen reduction and fixation, and the synthesis of lignin are also composed of iron.",
          category_id: "SU4rzrVQ15",
        description:
          'Dow has for the first time made 100% silicon available to plants in the form of ""ortho-silicic acid"" with the introduction of NUTRIBUILDTM Silicon OSA 3%.\nThe silicon micronutrient boosts photosynthesis, which improves crop health overall. It also helps manage numerous types of stress, including pest attacks, water shortages, lodging, salinity, metal toxicity, etc.',
        discount: "300",
        manufacture_company: "Dow chemical",
        product_name: "GALWAY G - PROM ADVANCE (PHOSPHATE FERTILIZER)",
        product_unique_id: "3438e3df-f46d-48bf-8b44-b4c7fd79d3220",
        product_weight: "5 Kg",
        source: "../../assets/images/Major nutrients/maj3.jpg",
      },
    
//  -------------Secondary nutrients------------

      {
        actual_price: "1300",
        application:
          " 1.0 to 2.0 ml per litre of water for foliar 500 to 700 ml of soil or drip per acre, applied twice over a period of 20 to 30 days. Also produces positive outcomes for nursery, seed, and root treatments during transplantation.",
        benifits:
         "Plants contain silicon, which boosts their overall defences. increased ability of plants to withstand abiotic conditions such high winds, dryness, excessive salinity, etc. Moreover, silicon supports plant defences against biotic stressors like bacterial, fungal, and insect attacks. Silicon lessens the toxicity of excess metals in the P, Mn, Al, and alkalis and aids plant uptake of additional micronutrients from the alkaline/calcareous soils.",
         category_id: "SU4rzrVQ17",
        description:
          'Dow has for the first time made 100% silicon available to plants in the form of ""ortho-silicic acid"" with the introduction of NUTRIBUILDTM Silicon OSA 3%.\nThe silicon micronutrient boosts photosynthesis, which improves crop health overall. It also helps manage numerous types of stress, including pest attacks, water shortages, lodging, salinity, metal toxicity, etc.',
        discount: "180",
        manufacture_company: "Dow chemical",
        product_name: "SHAMROCK AL SACH FERTILIZER CALCIUM NITRATE",
        product_unique_id: "bb730660-a90d-49ee-b22a-6a3415e564790",
        product_weight: "1 Kg",
        source: "../../assets/images/secondary nurients/sec1.jpg",
      },
      {
        actual_price: "800",
        application:
          "1 kg/ha to 2.5 kg/ha of drip before flowering and fruiting, two to three treatments during the growing stage Crops include fruits (such as grapes, pomegranates, citrus, and bananas) as well as vegetables (such as chillies, tomatoes, onions, and brinjal) (cotton, rice, sugarcane, soybean, and others) For soil pH levels up to 7, use Fe EDTA, while for soil pH levels above 7, use Fe EDDHA.",
        benifits:
          "Food production and the growth of crops both require iron. It contributes to the synthesis of chlorophyll. Many enzymes involved in the transfer of energy, nitrogen reduction and fixation, and the synthesis of lignin are also composed of iron.",
          category_id: "SU4rzrVQ17",
        description:
          "The main symptom of iron deficiency is the yellowing of young leaves because of low quantities of chlorophyll. Leaves that are severely deficient in Fe turn entirely yellow or virtually white before dying and turning brown. The majority of iron deficits arise in calcareous (high pH) soils. Furthermore, especially on soils with low levels of accessible Fe, the cool and wet weather exacerbates Fe deficits. Land that is poorly aerated or heavily compacted hinders plants' ability to absorb Fe. High quantities of phosphorus, manganese, and zinc that are readily available in the soil have a negative impact on fee absorption.",
        discount: "180",
        manufacture_company: "Dow chemical ",
        product_name: "MULTIPLEX MOTI MG [MAGNESIUM EDTA 6 %]",
        product_unique_id: "24d58d81-6f91-4000-b9e1-b181879612785",
        product_weight: "500 gm",
        source: "../../assets/images/secondary nurients/sec2.jpg",
      },
      {
        actual_price: "1200",
        application:
          "1 kg/ha to 2.5 kg/ha of drip\nbefore flowering and fruiting, two to three treatments during the growing stage\nCrops include fruits (such as grapes, pomegranates, citrus, and bananas) as well as vegetables (such as chillies, tomatoes, onions, and brinjal) (cotton, rice, sugarcane, soybean, and others)\nFor soil pH levels up to 7, use Fe EDTA, while for soil pH levels above 7, use Fe EDDHA.",
        benifits:
          "Food production and the growth of crops both require iron.\nIt contributes to the synthesis of chlorophyll.\nMany enzymes involved in the transfer of energy, nitrogen reduction and fixation, and the synthesis of lignin are also composed of iron.",
          category_id: "SU4rzrVQ17",
        description:
          'Dow has for the first time made 100% silicon available to plants in the form of ""ortho-silicic acid"" with the introduction of NUTRIBUILDTM Silicon OSA 3%.\nThe silicon micronutrient boosts photosynthesis, which improves crop health overall. It also helps manage numerous types of stress, including pest attacks, water shortages, lodging, salinity, metal toxicity, etc.',
        discount: "300",
        manufacture_company: "Dow chemical",
        product_name: "CALBO ANTI CRACKING AND ANTI ROTTING",
        product_unique_id: "3438e3df-f46d-48bf-8b44-b4c7fdk7d3220",
        product_weight: "500 gm",
        source: "../../assets/images/secondary nurients/sec3.jpg",
      },
    
//  ------------------Growth Promoters----------------

      {
        actual_price: "1300",
        application:
          " 1.0 to 2.0 ml per litre of water for foliar 500 to 700 ml of soil or drip per acre, applied twice over a period of 20 to 30 days. Also produces positive outcomes for nursery, seed, and root treatments during transplantation.",
        benifits:
          "Plants contain silicon, which boosts their overall defences. increased ability of plants to withstand abiotic conditions such high winds, dryness, excessive salinity, etc. Moreover, silicon supports plant defences against biotic stressors like bacterial, fungal, and insect attacks. Silicon lessens the toxicity of excess metals in the P, Mn, Al, and alkalis and aids plant uptake of additional micronutrients from the alkaline/calcareous soils.",
          category_id: "SU4rzrVQ18",
        description:
          'Dow has for the first time made 100% silicon available to plants in the form of ""ortho-silicic acid"" with the introduction of NUTRIBUILDTM Silicon OSA 3%.\nThe silicon micronutrient boosts photosynthesis, which improves crop health overall. It also helps manage numerous types of stress, including pest attacks, water shortages, lodging, salinity, metal toxicity, etc.',
        discount: "180",
        manufacture_company: "Dow chemical",
        product_name: "ALLURE GROWTH PROMOTER",
        product_unique_id: "bb730660-a90d-49ee-b22a-6a415e5r64790",
        product_weight: "500 ml",
        source: "../../assets/images/promoters/pro1.jpg",
      },
      {
        actual_price: "800",
        application:
          "1 kg/ha to 2.5 kg/ha of drip\nbefore flowering and fruiting, two to three treatments during the growing stage\nCrops include fruits (such as grapes, pomegranates, citrus, and bananas) as well as vegetables (such as chillies, tomatoes, onions, and brinjal) (cotton, rice, sugarcane, soybean, and others)\nFor soil pH levels up to 7, use Fe EDTA, while for soil pH levels above 7, use Fe EDDHA.",
        benifits:
          "Food production and the growth of crops both require iron.\nIt contributes to the synthesis of chlorophyll.\nMany enzymes involved in the transfer of energy, nitrogen reduction and fixation, and the synthesis of lignin are also composed of iron.",
          category_id: "SU4rzrVQ18",
        description:
          "The main symptom of iron deficiency is the yellowing of young leaves because of low quantities of chlorophyll.\nLeaves that are severely deficient in Fe turn entirely yellow or virtually white before dying and turning brown.\nThe majority of iron deficits arise in calcareous (high pH) soils. Furthermore, especially on soils with low levels of accessible Fe, the cool and wet weather exacerbates Fe deficits.\nLand that is poorly aerated or heavily compacted hinders plants' ability to absorb Fe.\nHigh quantities of phosphorus, manganese, and zinc that are readily available in the soil have a negative impact on fee absorption.",
        discount: "180",
        manufacture_company: "Dow chemical",
        product_name: "AMRUTH BANANA MICROBIAL CONSORTIA (BMC)",
        product_unique_id: "24d58d81-6f91-4000-b9e1-b1818761j2785",
        product_weight: "5 ltr",
        source: "../../assets/images/promoters/pro2.jpg",
      },
      {
        actual_price: "1200",
        application:
          "1 kg/ha to 2.5 kg/ha of drip\nbefore flowering and fruiting, two to three treatments during the growing stage\nCrops include fruits (such as grapes, pomegranates, citrus, and bananas) as well as vegetables (such as chillies, tomatoes, onions, and brinjal) (cotton, rice, sugarcane, soybean, and others)\nFor soil pH levels up to 7, use Fe EDTA, while for soil pH levels above 7, use Fe EDDHA.",
        benifits:
          "Food production and the growth of crops both require iron.\nIt contributes to the synthesis of chlorophyll.\nMany enzymes involved in the transfer of energy, nitrogen reduction and fixation, and the synthesis of lignin are also composed of iron.",
          category_id: "SU4rzrVQ18",
        description:
          'Dow has for the first time made 100% silicon available to plants in the form of ""ortho-silicic acid"" with the introduction of NUTRIBUILDTM Silicon OSA 3%.\nThe silicon micronutrient boosts photosynthesis, which improves crop health overall. It also helps manage numerous types of stress, including pest attacks, water shortages, lodging, salinity, metal toxicity, etc.',
        discount: "300",
        manufacture_company: "Dow chemical",
        product_name: "AMRUTH ONION GROW (GROWH PROMOTER)",
        product_unique_id: "3438e3df-f46d-48bf-8b44-b4c7fd7dk3220",
        product_weight: "500 gm",
        source: "../../assets/images/promoters/pro3.jpg",
      },
    

//  ------------Growth retardancs------------------

      {
        actual_price: "1300",
        application:
          " 1.0 to 2.0 ml per litre of water for foliar 500 to 700 ml of soil or drip per acre, applied twice over a period of 20 to 30 days. Also produces positive outcomes for nursery, seed, and root treatments during transplantation.",
        benifits:
         "Plants contain silicon, which boosts their overall defences. increased ability of plants to withstand abiotic conditions such high winds, dryness, excessive salinity, etc. Moreover, silicon supports plant defences against biotic stressors like bacterial, fungal, and insect attacks. Silicon lessens the toxicity of excess metals in the P, Mn, Al, and alkalis and aids plant uptake of additional micronutrients from the alkaline/calcareous soils.",
         category_id: "SU4rzrVQ19",
        description:
          'Dow has for the first time made 100% silicon available to plants in the form of ""ortho-silicic acid"" with the introduction of NUTRIBUILDTM Silicon OSA 3%.\nThe silicon micronutrient boosts photosynthesis, which improves crop health overall. It also helps manage numerous types of stress, including pest attacks, water shortages, lodging, salinity, metal toxicity, etc.',
        discount: "180",
        manufacture_company: "Dow chemical",
        product_name: "SYNGENTA CULTAR (PLANT GROWTH REGULATOR ) 50 ML",
        product_unique_id: "bb730660-a90d-49ee-b22a-6a415e56e4790",
        product_weight: "500 ml",
        source: "../../assets/images/Retardants/ret1.jpg",
      },
      {
        actual_price: "800",
        application:
          "1 kg/ha to 2.5 kg/ha of drip\nbefore flowering and fruiting, two to three treatments during the growing stage\nCrops include fruits (such as grapes, pomegranates, citrus, and bananas) as well as vegetables (such as chillies, tomatoes, onions, and brinjal) (cotton, rice, sugarcane, soybean, and others)\nFor soil pH levels up to 7, use Fe EDTA, while for soil pH levels above 7, use Fe EDDHA.",
        benifits:
          "Food production and the growth of crops both require iron.\nIt contributes to the synthesis of chlorophyll.\nMany enzymes involved in the transfer of energy, nitrogen reduction and fixation, and the synthesis of lignin are also composed of iron.",
          category_id: "SU4rzrVQ19",
        description:
          "The main symptom of iron deficiency is the yellowing of young leaves because of low quantities of chlorophyll.\nLeaves that are severely deficient in Fe turn entirely yellow or virtually white before dying and turning brown.\nThe majority of iron deficits arise in calcareous (high pH) soils. Furthermore, especially on soils with low levels of accessible Fe, the cool and wet weather exacerbates Fe deficits.\nLand that is poorly aerated or heavily compacted hinders plants' ability to absorb Fe.\nHigh quantities of phosphorus, manganese, and zinc that are readily available in the soil have a negative impact on fee absorption.",
        discount: "180",
        manufacture_company: "Dow chemical ",
        product_name: "LIHOCIN GROWTH REGULATOR",
        product_unique_id: "24d58d81-6f91-4000-b9e1-b181876123785",
        product_weight: "500 gms",
        source: "../../assets/images/Retardants/ret2.jpg",
      },
      {
        actual_price: "1200",
        application:
          "1 kg/ha to 2.5 kg/ha of drip\nbefore flowering and fruiting, two to three treatments during the growing stage\nCrops include fruits (such as grapes, pomegranates, citrus, and bananas) as well as vegetables (such as chillies, tomatoes, onions, and brinjal) (cotton, rice, sugarcane, soybean, and others)\nFor soil pH levels up to 7, use Fe EDTA, while for soil pH levels above 7, use Fe EDDHA.",
        benifits:
          "Food production and the growth of crops both require iron.\nIt contributes to the synthesis of chlorophyll.\nMany enzymes involved in the transfer of energy, nitrogen reduction and fixation, and the synthesis of lignin are also composed of iron.",
          category_id: "SU4rzrVQ19",
        description:
          'Dow has for the first time made 100% silicon available to plants in the form of ""ortho-silicic acid"" with the introduction of NUTRIBUILDTM Silicon OSA 3%.\nThe silicon micronutrient boosts photosynthesis, which improves crop health overall. It also helps manage numerous types of stress, including pest attacks, water shortages, lodging, salinity, metal toxicity, etc.',
        discount: "300",
        manufacture_company: "Dow chemical",
        product_name: "HIFIELD AG GIBRAX PHYTOZYME (GROWTH REGULATOR)",
        product_unique_id: "3438e3df-f46d-48bf-8b44-b4c7fd75d3220",
        product_weight: "500 gm",
        source: "../../assets/images/Retardants/ret3.jpg",
      },
   

//  -----------Organic Fertilizers-------------------------

      {
        actual_price: "1300",
        application:
          " 1.0 to 2.0 ml per litre of water for foliar 500 to 700 ml of soil or drip per acre, applied twice over a period of 20 to 30 days. Also produces positive outcomes for nursery, seed, and root treatments during transplantation.",
        benifits:
         "Plants contain silicon, which boosts their overall defences. increased ability of plants to withstand abiotic conditions such high winds, dryness, excessive salinity, etc. Moreover, silicon supports plant defences against biotic stressors like bacterial, fungal, and insect attacks. Silicon lessens the toxicity of excess metals in the P, Mn, Al, and alkalis and aids plant uptake of additional micronutrients from the alkaline/calcareous soils.",
         category_id: "SU4rzrVQ20",
        description:
          'Dow has for the first time made 100% silicon available to plants in the form of ""ortho-silicic acid"" with the introduction of NUTRIBUILDTM Silicon OSA 3%.\nThe silicon micronutrient boosts photosynthesis, which improves crop health overall. It also helps manage numerous types of stress, including pest attacks, water shortages, lodging, salinity, metal toxicity, etc.',
        discount: "180",
        manufacture_company: "Dow chemical",
        product_name: "REVITAL F 98% ORGANIC FERTILIZER",
        product_unique_id: "bb730660-a90d-49ee-b22a-6a41g5e564790",
        product_weight: "500 ml",
        source: "../../assets/images/organic/org1.jpg",
      },
      {
        actual_price: "800",
        application:
          "1 kg/ha to 2.5 kg/ha of drip\nbefore flowering and fruiting, two to three treatments during the growing stage\nCrops include fruits (such as grapes, pomegranates, citrus, and bananas) as well as vegetables (such as chillies, tomatoes, onions, and brinjal) (cotton, rice, sugarcane, soybean, and others)\nFor soil pH levels up to 7, use Fe EDTA, while for soil pH levels above 7, use Fe EDDHA.",
        benifits:
          "Food production and the growth of crops both require iron.\nIt contributes to the synthesis of chlorophyll.\nMany enzymes involved in the transfer of energy, nitrogen reduction and fixation, and the synthesis of lignin are also composed of iron.",
          category_id: "SU4rzrVQ20",
        description:
          "The main symptom of iron deficiency is the yellowing of young leaves because of low quantities of chlorophyll.\nLeaves that are severely deficient in Fe turn entirely yellow or virtually white before dying and turning brown.\nThe majority of iron deficits arise in calcareous (high pH) soils. Furthermore, especially on soils with low levels of accessible Fe, the cool and wet weather exacerbates Fe deficits.\nLand that is poorly aerated or heavily compacted hinders plants' ability to absorb Fe.\nHigh quantities of phosphorus, manganese, and zinc that are readily available in the soil have a negative impact on fee absorption.",
        discount: "180",
        manufacture_company: "Dow chemical ",
        product_name: "AMIPRO 80-100 GM (AMINO, PROTEIN)",
        product_unique_id: "24d58d81-6f91-4000-b9e1-b618187612785",
        product_weight: "500 gms",
        source: "../../assets/images/organic/org2.jpg",
      },
      {
        actual_price: "1200",
        application:
          "1 kg/ha to 2.5 kg/ha of drip\nbefore flowering and fruiting, two to three treatments during the growing stage\nCrops include fruits (such as grapes, pomegranates, citrus, and bananas) as well as vegetables (such as chillies, tomatoes, onions, and brinjal) (cotton, rice, sugarcane, soybean, and others)\nFor soil pH levels up to 7, use Fe EDTA, while for soil pH levels above 7, use Fe EDDHA.",
        benifits:
          "Food production and the growth of crops both require iron.\nIt contributes to the synthesis of chlorophyll.\nMany enzymes involved in the transfer of energy, nitrogen reduction and fixation, and the synthesis of lignin are also composed of iron.",
          category_id: "SU4rzrVQ20",
        description:
          'Dow has for the first time made 100% silicon available to plants in the form of ""ortho-silicic acid"" with the introduction of NUTRIBUILDTM Silicon OSA 3%.\nThe silicon micronutrient boosts photosynthesis, which improves crop health overall. It also helps manage numerous types of stress, including pest attacks, water shortages, lodging, salinity, metal toxicity, etc.',
        discount: "300",
        manufacture_company: "Dow chemical",
        product_name: "HIFIELD ORGANIC RETAIN GEL FERTILIZER",
        product_unique_id: "3438e3df-f46d-48bf-8b44-b74c7fd7d3220",
        product_weight: "500 gm",
        source: "../../assets/images/organic/org3.jpg",
      },
    
//  ------------------------------Bio Fertilizers-----------------

      {
        actual_price: "1300",
        application:
          " 1.0 to 2.0 ml per litre of water for foliar 500 to 700 ml of soil or drip per acre, applied twice over a period of 20 to 30 days. Also produces positive outcomes for nursery, seed, and root treatments during transplantation.",
        benifits:
         "Plants contain silicon, which boosts their overall defences. increased ability of plants to withstand abiotic conditions such high winds, dryness, excessive salinity, etc. Moreover, silicon supports plant defences against biotic stressors like bacterial, fungal, and insect attacks. Silicon lessens the toxicity of excess metals in the P, Mn, Al, and alkalis and aids plant uptake of additional micronutrients from the alkaline/calcareous soils.",
   
          category_id: "SU4rzrVQ21",
        description:
          'Dow has for the first time made 100% silicon available to plants in the form of ""ortho-silicic acid"" with the introduction of NUTRIBUILDTM Silicon OSA 3%.\nThe silicon micronutrient boosts photosynthesis, which improves crop health overall. It also helps manage numerous types of stress, including pest attacks, water shortages, lodging, salinity, metal toxicity, etc.',
        discount: "180",
        manufacture_company: "Dow chemical",
        product_name: "DR SOIL ARECA SPECIAL (LIQUID CONSORTIA)",
        product_unique_id: "bb730660-a90d-49ee-b22a-6a415e5647990",
        product_weight: "500 ml",
        source: "../../assets/images/Bio Fertilizers/bio1.jpg",
      },
      {
        actual_price: "800",
        application:
          "1 kg/ha to 2.5 kg/ha of drip\nbefore flowering and fruiting, two to three treatments during the growing stage\nCrops include fruits (such as grapes, pomegranates, citrus, and bananas) as well as vegetables (such as chillies, tomatoes, onions, and brinjal) (cotton, rice, sugarcane, soybean, and others)\nFor soil pH levels up to 7, use Fe EDTA, while for soil pH levels above 7, use Fe EDDHA.",
        benifits:
          "Food production and the growth of crops both require iron.\nIt contributes to the synthesis of chlorophyll.\nMany enzymes involved in the transfer of energy, nitrogen reduction and fixation, and the synthesis of lignin are also composed of iron.",
          category_id: "SU4rzrVQ21",
        description:
          "The main symptom of iron deficiency is the yellowing of young leaves because of low quantities of chlorophyll.\nLeaves that are severely deficient in Fe turn entirely yellow or virtually white before dying and turning brown.\nThe majority of iron deficits arise in calcareous (high pH) soils. Furthermore, especially on soils with low levels of accessible Fe, the cool and wet weather exacerbates Fe deficits.\nLand that is poorly aerated or heavily compacted hinders plants' ability to absorb Fe.\nHigh quantities of phosphorus, manganese, and zinc that are readily available in the soil have a negative impact on fee absorption.",
        discount: "180",
        manufacture_company: "Dow chemical ",
        product_name: "GEOLIFE VIGORE GOLD (BIO FERTILIZER)",
        product_unique_id: "24d58d81-6f91-4000-b9e1-b181877612785",
        product_weight: "500 gms",
        source: "../../assets/images/Bio Fertilizers/bio2.jpg",
      },
      {
        actual_price: "1200",
        application:
          "1 kg/ha to 2.5 kg/ha of drip\nbefore flowering and fruiting, two to three treatments during the growing stage\nCrops include fruits (such as grapes, pomegranates, citrus, and bananas) as well as vegetables (such as chillies, tomatoes, onions, and brinjal) (cotton, rice, sugarcane, soybean, and others)\nFor soil pH levels up to 7, use Fe EDTA, while for soil pH levels above 7, use Fe EDDHA.",
        benifits:
          "Food production and the growth of crops both require iron.\nIt contributes to the synthesis of chlorophyll.\nMany enzymes involved in the transfer of energy, nitrogen reduction and fixation, and the synthesis of lignin are also composed of iron.",
          category_id: "SU4rzrVQ21",
        description:
          'Dow has for the first time made 100% silicon available to plants in the form of ""ortho-silicic acid"" with the introduction of NUTRIBUILDTM Silicon OSA 3%.\nThe silicon micronutrient boosts photosynthesis, which improves crop health overall. It also helps manage numerous types of stress, including pest attacks, water shortages, lodging, salinity, metal toxicity, etc.',
        discount: "300",
        manufacture_company: "Dow chemical",
        product_name: "MULTIPLEX TRISHUL (VAM) BIO FERTILIZER",
        product_unique_id: "3438e3df-f46d-48bf-8b44-b4c7fhd7m3220",
        product_weight: "500 gm",
        source: "../../assets/images/Bio Fertilizers/bio3.jpg",
      },
   

//  -----------------Anti Stressing Agents-----------------

      {
        actual_price: "1300",
        application:
          " 1.0 to 2.0 ml per litre of water for foliar 500 to 700 ml of soil or drip per acre, applied twice over a period of 20 to 30 days. Also produces positive outcomes for nursery, seed, and root treatments during transplantation.",
        benifits:
         "Plants contain silicon, which boosts their overall defences. increased ability of plants to withstand abiotic conditions such high winds, dryness, excessive salinity, etc. Moreover, silicon supports plant defences against biotic stressors like bacterial, fungal, and insect attacks. Silicon lessens the toxicity of excess metals in the P, Mn, Al, and alkalis and aids plant uptake of additional micronutrients from the alkaline/calcareous soils.",
         category_id: "SU4rzrVQ22",
        description:
          'Dow has for the first time made 100% silicon available to plants in the form of ""ortho-silicic acid"" with the introduction of NUTRIBUILDTM Silicon OSA 3%.\nThe silicon micronutrient boosts photosynthesis, which improves crop health overall. It also helps manage numerous types of stress, including pest attacks, water shortages, lodging, salinity, metal toxicity, etc.',
        discount: "180",
        manufacture_company: "Dow chemical",
        product_name: "BIOVITA SEAWEED ORGANIC PLANT GROWTH REGULATOR",
        product_unique_id: "bb730660-a90d-49ee-b22a-6a415e56d4790",
        product_weight: "500 ml",
        source: "../../assets/images/anti_stressing/ast1.jpg",
      },
      {
        actual_price: "800",
        application:
          "1 kg/ha to 2.5 kg/ha of drip\nbefore flowering and fruiting, two to three treatments during the growing stage\nCrops include fruits (such as grapes, pomegranates, citrus, and bananas) as well as vegetables (such as chillies, tomatoes, onions, and brinjal) (cotton, rice, sugarcane, soybean, and others)\nFor soil pH levels up to 7, use Fe EDTA, while for soil pH levels above 7, use Fe EDDHA.",
        benifits:
          "Food production and the growth of crops both require iron.\nIt contributes to the synthesis of chlorophyll.\nMany enzymes involved in the transfer of energy, nitrogen reduction and fixation, and the synthesis of lignin are also composed of iron.",
          category_id: "SU4rzrVQ22",
        description:
          "The main symptom of iron deficiency is the yellowing of young leaves because of low quantities of chlorophyll.\nLeaves that are severely deficient in Fe turn entirely yellow or virtually white before dying and turning brown.\nThe majority of iron deficits arise in calcareous (high pH) soils. Furthermore, especially on soils with low levels of accessible Fe, the cool and wet weather exacerbates Fe deficits.\nLand that is poorly aerated or heavily compacted hinders plants' ability to absorb Fe.\nHigh quantities of phosphorus, manganese, and zinc that are readily available in the soil have a negative impact on fee absorption.",
        discount: "180",
        manufacture_company: "Dow chemical ",
        product_name: "KEEFUN TOLFENPYRAD INSECTICIDE",
        product_unique_id: "24d58d81-6f91-4000-b9e1-b181787612785",
        product_weight: "500 gms",
        source: "../../assets/images/anti_stressing/ast2.jpg",
      },
      {
        actual_price: "1200",
        application:
          "1 kg/ha to 2.5 kg/ha of drip\nbefore flowering and fruiting, two to three treatments during the growing stage\nCrops include fruits (such as grapes, pomegranates, citrus, and bananas) as well as vegetables (such as chillies, tomatoes, onions, and brinjal) (cotton, rice, sugarcane, soybean, and others)\nFor soil pH levels up to 7, use Fe EDTA, while for soil pH levels above 7, use Fe EDDHA.",
        benifits:
          "Food production and the growth of crops both require iron.\nIt contributes to the synthesis of chlorophyll.\nMany enzymes involved in the transfer of energy, nitrogen reduction and fixation, and the synthesis of lignin are also composed of iron.",
          category_id: "SU4rzrVQ22",
        description:
          'Dow has for the first time made 100% silicon available to plants in the form of ""ortho-silicic acid"" with the introduction of NUTRIBUILDTM Silicon OSA 3%.\nThe silicon micronutrient boosts photosynthesis, which improves crop health overall. It also helps manage numerous types of stress, including pest attacks, water shortages, lodging, salinity, metal toxicity, etc.',
        discount: "300",
        manufacture_company: "Dow chemical",
        product_name: "PI NOMINEE GOLD HERBICIDE",
        product_unique_id: "3438e3df-f46d-48bf-8b44-b4c7fd7d3h220",
        product_weight: "500 gm",
        source: "../../assets/images/anti_stressing/ast3.jpg",
      },
    

//  --------------------Micro Nutrients------------------

      {
        actual_price: "1300",
        application:
          " 1.0 to 2.0 ml per litre of water for foliar 500 to 700 ml of soil or drip per acre, applied twice over a period of 20 to 30 days. Also produces positive outcomes for nursery, seed, and root treatments during transplantation.",
        benifits:
         "Plants contain silicon, which boosts their overall defences. increased ability of plants to withstand abiotic conditions such high winds, dryness, excessive salinity, etc. Moreover, silicon supports plant defences against biotic stressors like bacterial, fungal, and insect attacks. Silicon lessens the toxicity of excess metals in the P, Mn, Al, and alkalis and aids plant uptake of additional micronutrients from the alkaline/calcareous soils.",
         category_id: "SU4rzrVQ23",
        description:
          'Dow has for the first time made 100% silicon available to plants in the form of ""ortho-silicic acid"" with the introduction of NUTRIBUILDTM Silicon OSA 3%.\nThe silicon micronutrient boosts photosynthesis, which improves crop health overall. It also helps manage numerous types of stress, including pest attacks, water shortages, lodging, salinity, metal toxicity, etc.',
        discount: "180",
        manufacture_company: "Dow chemical",
        product_name: "ALLBOR-BORON 20%",
        product_unique_id: "bb730660-a90d-49ee-b22a-6a4154e564790",
        product_weight: "500 ml",
        source: "../../assets/images/micro_nutrients/mic1.jpg",
      },
      {
        actual_price: "800",
        application:
          "1 kg/ha to 2.5 kg/ha of drip\nbefore flowering and fruiting, two to three treatments during the growing stage\nCrops include fruits (such as grapes, pomegranates, citrus, and bananas) as well as vegetables (such as chillies, tomatoes, onions, and brinjal) (cotton, rice, sugarcane, soybean, and others)\nFor soil pH levels up to 7, use Fe EDTA, while for soil pH levels above 7, use Fe EDDHA.",
        benifits:
          "Food production and the growth of crops both require iron.\nIt contributes to the synthesis of chlorophyll.\nMany enzymes involved in the transfer of energy, nitrogen reduction and fixation, and the synthesis of lignin are also composed of iron.",
          category_id: "SU4rzrVQ23",
        description:
          "The main symptom of iron deficiency is the yellowing of young leaves because of low quantities of chlorophyll.\nLeaves that are severely deficient in Fe turn entirely yellow or virtually white before dying and turning brown.\nThe majority of iron deficits arise in calcareous (high pH) soils. Furthermore, especially on soils with low levels of accessible Fe, the cool and wet weather exacerbates Fe deficits.\nLand that is poorly aerated or heavily compacted hinders plants' ability to absorb Fe.\nHigh quantities of phosphorus, manganese, and zinc that are readily available in the soil have a negative impact on fee absorption.",
        discount: "180",
        manufacture_company: "Dow chemical ",
        product_name: "SHAMROCK OVERSEAS AMPOXCILIN ",
        product_unique_id: "24d58d81-6f91-4000-b9e1-b181876172785",
        product_weight: "500 gms",
        source: "../../assets/images/micro_nutrients/mic2.jpg",
      },
      {
        actual_price: "1200",
        application:"1 kg/ha to 2.5 kg/ha of drip\nbefore flowering and fruiting, two to three treatments during the growing stage\nCrops include fruits (such as grapes, pomegranates, citrus, and bananas) as well as vegetables (such as chillies, tomatoes, onions, and brinjal) (cotton, rice, sugarcane, soybean, and others)\nFor soil pH levels up to 7, use Fe EDTA, while for soil pH levels above 7, use Fe EDDHA.",
        benifits:"Food production and the growth of crops both require iron.\nIt contributes to the synthesis of chlorophyll.\nMany enzymes involved in the transfer of energy, nitrogen reduction and fixation, and the synthesis of lignin are also composed of iron.",
        category_id: "SU4rzrVQ23",
        description:'Dow has for the first time made 100% silicon available to plants in the form of ""ortho-silicic acid"" with the introduction of NUTRIBUILDTM Silicon OSA 3%.\nThe silicon micronutrient boosts photosynthesis, which improves crop health overall. It also helps manage numerous types of stress, including pest attacks, water shortages, lodging, salinity, metal toxicity, etc.',
        discount: "300",
        manufacture_company: "Dow chemical",
        product_name: "POWDER IRON MICRONUTRIENTS FERTILIZER",
        product_unique_id: "3438e3df-f46d-48bf-8b44-b4c7jfd7d3220",
        product_weight: "500 gm",
        source: "../../assets/images/micro_nutrients/mic3.jpg",
      },
    ])
  );
}

// -------------- add to cart items --------------
const addToCartItem = JSON.parse(localStorage.getItem("addToCartItem"));
if (!addToCartItem) {
  localStorage.setItem(
    "addToCartItem",
    JSON.stringify([
      {
        cart_id: "3438e3df-f46d-48bf-8b44-b4c7jfd7d3220",
        userUniqueId: "9629223356",
      },
      {
        cart_id: "24d58d81-6f91-4000-b9e1-b181876172785",
        userUniqueId: "9629223356",
      },

      {
        cart_id: "bb730660-a90d-49ee-b22a-6a4154e564790",
        userUniqueId: "9629223357",
      },
    ])
  );
}

// ----wishlist items --------------------------------
const wishlisstItem = JSON.parse(localStorage.getItem("wishlisstItem"));
if (!wishlisstItem) {
  localStorage.setItem(
    "wishlisstItem",
    JSON.stringify([
      {
        product_id: "3438e3df-f46d-48bf-8b44-b4c7jfd7d3220",
        userUniqueId: "9629223356",
      },
      {
        product_id: "bb730660-a90d-49ee-b22a-6a4154e564790",
        userUniqueId: "9629223356",
      },
      {
        product_id: "24d58d81-6f91-4000-b9e1-b181876172785",
        userUniqueId: "9629223357",
      },
    ])
  );
}
// user gaved addresses
const address = JSON.parse(
  localStorage.getItem("addresses")
);
if(!address){
  localStorage.setItem("addresses",JSON.stringify([
    {
      addressId: "9629223357HcmDHqUChJ",
      city: "Tiruchirappalli",
      location: "Annavalaivu",
      mobile: "8829223356",
      pincode: "620086",
      state: "Tamil Nadu",
      street: "66,  Aravinth Street",
      title: "Work",
      userUnique: "9629223357"
    },
    {
      addressId: "9629223357ZIUBzrBO3D",
      city: "Tiruchirappalli",
      location: "Kattur",
      mobile: "9626623358",
      pincode: "620033",
      state: "Tamil Nadu",
      street: "77/315, SKRT Street",
      title: "Work",
      userUnique: "9629223357"
    },
    {
      addressId: "96292233574veAXrsuMh",
      city: "Chengalpattu",
      location: "Thiruvanmayur",
      mobile: "9629223357",
      pincode: "620016",
      state: "Tamil Nadu",
      street: "1/117, Kumarn Street",
      title: "Home",
      userUnique: "9629223357"
    },
    {
      addressId: "9629223357eXeWR4gm8Z",
      city: "Tiruchirappalli",
      location: "Annavalaivu",
      mobile: "9629223366",
      pincode: "620018",
      state: "Tamil Nadu",
      street: "1/117, K.K Street",
      title: "Home",
      userUnique: "9629223357"
    },
    {
      addressId: "9629223357KrWFebdC0p",
      city: "Cuddalore",
      location: "BHEL",
      mobile: "9629223888",
      pincode: "600015",
      state: "Tamil Nadu",
      street: "66, TKS Street",
      title: "Work",
      userUnique: "9629223357"
    }
  ]));
}
// user order details-------------
const addtoCartDeliveryProduct = JSON.parse(
  localStorage.getItem("addtoCartDeliveryProduct")
);
if (!addtoCartDeliveryProduct) {
  localStorage.setItem(
    "addtoCartDeliveryProduct",
    JSON.stringify([
      {
        ProductDiscount: "340",
        addressUniqueID: "9629223357HcmDHqUChJ",
        deliveryDate: "20/05/2023",
        deliveryStatus:"true",
        orderDate: "13/05/2023",
        orderStatus: "Delivered",
        orderUniqueId: "f73mfgaj3",
        orderedTime: "20:08:23",
        proQuantity:"1",
        productActualPrice:"1700",
        productCurrentPrice:"1360",
        productUniqueId:"59a6e214-1031-420c-887a-0b0ac1bac42f8",
        userUniqueId: "9629223357",
      },
      {
        ProductDiscount: "60",
        addressUniqueID: "9629223357ZIUBzrBO3D",
        deliveryDate:"19/05/2023",
        deliveryStatus:"true",
        orderDate: "12/05/2023",
        orderStatus: "Delivered",
        orderUniqueId: "f73ba8n5k",
        orderedTime:"19:19:12",
        proQuantity: "1",
        productActualPrice: "560",
        productCurrentPrice:"500",
        productUniqueId: "dc4fd5cf-efb1-48f0-bf03-832199fr55ea5",
        userUniqueId:"9629223357",
      },
    ])
  );
}

// user signup details------------------
const user_list = JSON.parse(localStorage.getItem("user_list"));
if (!user_list) {
  localStorage.setItem(
    "user_list",
    JSON.stringify([
      {
        city: "Tirunedungulam",
        confirmpassword: "Amazon99@",
        date_birth: "2023-03-25",
        district: "Trichy",
        email: "rb@gmail.com",
        full_name: "Boobalan",
        gender: "male",
        mobile: "9629223356",
        password: "Amazon99@",
        state: "Tamil Nadu",
        street: "kudi atreet",
        unique_id: "f70d8b96-2771-40dc-914a-ee568e7f0094",
      },
    ])
  );
}

// customers reviews...
const customersReviews = JSON.parse(localStorage.getItem("reviews"));
if (!customersReviews) {
  localStorage.setItem(
    "reviews",
    JSON.stringify([
      {
        OrderedProductUniqueId: "89e60418-9bd7-4c43-b3cc-2f839b6cef7d",
        feedback:
          "The product is of high quality as described, however the packaging is insufficient. The weight of the product is too high for the packaging and causes rips and tears in it thus damaging the product and household surroundings.",
        orderId: "f6a425jb9",
        rating: "5",
        customerName: "Vignesh SR",
      },
      {
        OrderedProductUniqueId: "edd30055-e3ab-4515-817f-aa0624d7fc3e",
        feedback:
          "The product is of high quality as described, however the packaging is insufficient. The weight of the product is too high for the packaging and causes rips and tears in it thus damaging the product and household surroundings.",
        orderId: "f6b425jb9",
        rating: "5",
        customerName: "Vignesh VV",
      },

      {
        OrderedProductUniqueId: "bb730660-a90d-49ee-b22a-6a415e564790",
        feedback:
          "Quantity is exact but packing is not good ( not as given on site )as mentioned by other customers also. Quality vice it is just a mixture of soil, sand and fertilisers so u can not make out anything just by look… product is ok in this price.",
        orderId: "f6c425jb9",
        rating: "5",
        customerName: "Irfan",
      },
      {
        OrderedProductUniqueId: "3438e3df-f46d-48bf-8b44-b4c7fd7d3220",
        feedback:
          "One application it made my grass way greener! I have to apply two to my front yard . It needed it . In two to three weeks it comes back green ! Pricy for a small bag but it works.",
        orderId: "f6d425jb9",
        rating: "4",
        customerName: "Thamim S",
      },
      {
        OrderedProductUniqueId: "2f8cbf08-05c3-4350-bb20-3b4d2139315ba",
        feedback:
          "We live in Hawaii, and the soil can get a bit tricky to manage with pre-mixed ratios fertilizers. This turns out to be particularly true with fruit trees, of which we have quite a few. These specific product fertilizers allow me to test the soil and then create a specific mix of N-P-K to amend the soil. I am getting much better results and in the long run I think it will be about the same price as ready mixed fertilizers. Takes a bit of math, as these are very concentrate, but in the long term I think this is a perfect solution.",
        orderId: "f6e425jb9",
        rating: "4",
        customerName: "Nandhakumar",
      },

      {
        OrderedProductUniqueId: "89e60418-9bd7-4c43-b3cc-2f839b6cef7d",
        feedback:
          "Compost seems to be of a good quality. It was completely dry so no weight or quantity issues. Still have to use in the garden so no comments on the results yet. Seems like genuine vermicompost without any leftover organic matters. Makes gardening quite easy.",
        orderId: "f6f425jb9",
        rating: "4",
        customerName: "Bhavatharani",
      },

      {
        OrderedProductUniqueId: "2f8cbf08-05c3-4350-bb20-3b4d2139315ba",
        feedback:
          "After using it for more than 10 days, I can see the results. Very nutritious for plants and shine looks better. Very easy to use. Recommending to all plant lovers.",
        orderId: "f6g425jb9",
        rating: "5",
        customerName: "Bhavani",
      },

      {
        OrderedProductUniqueId: "dc4fd5cf-efb1-48f0-bf03-832199wf55ea5",
        feedback:
          "This product really worked.my plants look very healthy and so many flowers came. I am very happy to buy this product",
        orderId: "f6h425jb9",
        rating: "4",
        customerName: "Dhurka",
      },

      {
        OrderedProductUniqueId: "59a6e214-1031-420c-887a-0bac1dba942f8",
        feedback:
          "Works like magic. I am using this from last 3 months and growth of my plant is mind blowing",
        orderId: "f6i425jb9",
        rating: "5",
        customerName: "Dhanush",
      },

    {
        OrderedProductUniqueId: "2f8cbf08-05c3-4350-bb20-3b4d3139315ba",
        feedback:
          "Seriously awesome after 2months usage such a good nutritious food for water plant my plant goes to nearly death it will save my Lovable plant awesome you are a beginner to grow plants it's definitely for your ❤️❤️❤️❤️❤️",
        orderId: "f6j425jb9",
        rating: "4",
        customerName: "Elayaram",
      },

      {
        OrderedProductUniqueId: "dc4fd5cf-efb1-48f0-bf03-8732199f55ea5",
        feedback:
          "Really nice as of now ,need to wait 4 atleast 2 week to see the result ,it smell like Algee while spraying,same smell when we see at the bank of river having smelling algee",
        orderId: "f6l425jb9",
        rating: "5",
        customerName: "Saranya R",
      },

      {
        OrderedProductUniqueId: "2f8cbf08-05c3-4350-bb20-3b4d1393158ba",
        feedback: "Very useful product ... Fast Delivery.. highly recommend",
        orderId: "f6m425jb9",
        rating: "4",
        customerName: "Deepika Doctor",
      },

      {
        OrderedProductUniqueId: "89e60418-9bd7-4c43-b3cc-2f839b6cef7d",
        feedback:
          "Quantity is exact but packing is not good ( not as given on site )as mentioned by other customers also. Quality vice it is just a mixture of soil, sand and fertilisers so u can not make out anything just by look… product is ok in this price",
        orderId: "f6n425jb9",
        rating: "5",
        customerName: "Ajun antoni",
      },

    ]))
    ;
}
