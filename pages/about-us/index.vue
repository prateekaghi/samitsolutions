<script setup lang="ts">
import team from "~/assets/data/leadershipData.json";
import Milestones from "~~/components/nav/layout/Ui/About-us/Milestones.vue";
import Overview from "../../components/nav/layout/Ui/About-us/Overview.vue";
let options = [
  { name: "Company Overview", href: "#overview", current: false },
  { name: "Who We Are", href: "#who-we-are", current: false },
  { name: "Company Milestones", href: "#milestone", current: false },
  { name: "Why SAM IT Solutions", href: "#whyUs", current: false },
  { name: "Leadership", href: "#leadership", current: false },
];

const crumbs = [{ name: "About Us", href: "/about-us", current: true }];
</script>
<template>
  <div class="mx-2 lg:mx-36">
    <div class="mb-9 mt-24">
      <NavLayoutUiCommonBreadcrumbs
        :pages="crumbs"
      ></NavLayoutUiCommonBreadcrumbs>
    </div>
    <NavLayoutUiAboutUsPageTabs :tabs="options"></NavLayoutUiAboutUsPageTabs>
    <Overview id="overview"></Overview>
    <NavLayoutUiAboutUsWhoWeAre id="who-we-are"></NavLayoutUiAboutUsWhoWeAre>

    <Milestones id="milestone"></Milestones>
    <NavLayoutUiAboutUsFundamentalPrinciples
      id="whyUs"
    ></NavLayoutUiAboutUsFundamentalPrinciples>

    <NavLayoutUiAboutUsLeadership
      id="leadership"
      :people="team"
    ></NavLayoutUiAboutUsLeadership>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
