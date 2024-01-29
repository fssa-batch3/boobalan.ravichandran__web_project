const dhanukaDetails =
  JSON.parse(localStorage.getItem("dhanuka_details")) || [];
const uplDetails = JSON.parse(localStorage.getItem("upl_details")) || [];
const dowAgroScienceDetails =
  JSON.parse(localStorage.getItem("dow_agro_science_details")) || [];
const tata_rallis_details =
  JSON.parse(localStorage.getItem("tata_rallis_details")) || [];
const adama_details = JSON.parse(localStorage.getItem("adama_details")) || [];
const bayer_details = JSON.parse(localStorage.getItem("bayer_details")) || [];
const aries_agro_details =
  JSON.parse(localStorage.getItem("aries_agro_details")) || [];
const barrix_details = JSON.parse(localStorage.getItem("barrix_details")) || [];
const indofil_details =
  JSON.parse(localStorage.getItem("indofil_details")) || [];
const rinuja_details = JSON.parse(localStorage.getItem("rinuja_details")) || [];
const bio_insecticides_details =
  JSON.parse(localStorage.getItem("bio_insecticides_details")) || [];
const bio_fungicides_details =
  JSON.parse(localStorage.getItem("bio_fungicides_details")) || [];
const bio_nematicides_details =
  JSON.parse(localStorage.getItem("bio_nematicides_details")) || [];
const bio_vircides_details =
  JSON.parse(localStorage.getItem("bio_vircides_details")) || [];
const major_nurients_details =
  JSON.parse(localStorage.getItem("major_nurients_details")) || [];
const secondary_nutrients_details =
  JSON.parse(localStorage.getItem("secondary_nutrients_details")) || [];
const growth_promoters_details =
  JSON.parse(localStorage.getItem("growth_promoters_details")) || [];
const growth_retardants_details =
  JSON.parse(localStorage.getItem("growth_retardants_details")) || [];
const organic_fertilizer_details =
  JSON.parse(localStorage.getItem("organic_fertilizer_details")) || [];
const bio_fertilizers_details =
  JSON.parse(localStorage.getItem("bio_fertilizers_details")) || [];
const anti_stressing_agents_details =
  JSON.parse(localStorage.getItem("anti_stressing_agents_details")) || [];
const micro_nutrients_details =
  JSON.parse(localStorage.getItem("micro_nutrients_details")) || [];

const allProductsDetails = dhanukaDetails.concat(
  uplDetails,
  dowAgroScienceDetails,
  tata_rallis_details,
  adama_details,
  bayer_details,
  aries_agro_details,
  barrix_details,
  indofil_details,
  rinuja_details,
  bio_insecticides_details,
  bio_fungicides_details,
  bio_nematicides_details,
  bio_vircides_details,
  major_nurients_details,
  secondary_nutrients_details,
  growth_promoters_details,
  growth_retardants_details,
  organic_fertilizer_details,
  bio_fertilizers_details,
  anti_stressing_agents_details,
  micro_nutrients_details
);
