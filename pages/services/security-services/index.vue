<script setup>
import ServicesOffered from "../../../components/nav/layout/Ui/Services/SecurityServices/ServicesOffered.vue";
const crumbs = [
  { name: "Services", href: "/services", current: false },
  {
    name: "Security Services",
    href: "/services/security-services",
    current: true,
  },
];
</script>
<template>
  <div>
    <div class="mx-36">
      <div class="mb-9 mt-24">
        <NavLayoutUiCommonBreadcrumbs
          :pages="crumbs"
        ></NavLayoutUiCommonBreadcrumbs>
      </div>
    </div>
    <NavLayoutUiServicesSecurityIntro></NavLayoutUiServicesSecurityIntro>

    <div class="mx-36">
      <NavLayoutUiServicesSecurityContent
        id="about"
      ></NavLayoutUiServicesSecurityContent>
      <ServicesOffered id="services"></ServicesOffered>
      <LazyNavLayoutUiServicesSecurityServicesContact></LazyNavLayoutUiServicesSecurityServicesContact>
    </div>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
