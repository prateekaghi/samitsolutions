<script setup>
import people from "~/assets/data/teamData.json";
let partners = [
  {
    name: "Altaro",
    href: "https://www.altaro.com/vm-backup/",
    image_url: "Altaro",
  },
  {
    name: "Carbonite",
    href: "http://partners.carbonite.com/samitsolutions",
    image_url: "Carbonite",
  },
  {
    name: "Celito",
    href: "https://celito.net/",
    image_url: "Celito",
  },
  {
    name: "Defiant",
    href: "https://defiant-networks.com/",
    image_url: "Defiant",
  },
  {
    name: "Gsuite",
    href: "https://workspace.google.com/",
    image_url: "Gsuite",
  },
  {
    name: "Microsoft",
    href: "https://www.microsoft.com/en-us/",
    image_url: "Microsoft",
  },
  {
    name: "Sharefile",
    href: "https://www.sharefile.com/pricing",
    image_url: "Sharefile",
  },
  {
    name: "Vonage",
    href: "https://www.vonage.com/communications-apis/",
    image_url: "Vonage",
  },
  {
    name: "Webroot",
    href: "https://www.webroot.com/us/en/home/products/av",
    image_url: "Webroot",
  },
];
</script>
<template>
  <NavLayoutUiHomePageMainContainer />
  <NavLayoutUiHomePageCompanyInfo />
  <NavLayoutUiHomePageTypedText />
  <NavLayoutUiHomePageWhyUs />
  <NavLayoutUiHomePagePartners :partners="partners" />
  <NavLayoutUiHomePageConsultationBox />
  <NavLayoutUiHomePageTeamSection :people="people" />
  <NavLayoutUiHomePageBlogSection />
</template>
