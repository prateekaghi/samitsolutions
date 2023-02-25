<script setup>
const text = "We Help Your Business Soar!";
const crumbs = [
  { name: "Services", href: "/services", current: false },
  {
    name: "Digital Marketing",
    href: "/services/digital-marketing",
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
    <NavLayoutUiServicesDigitalMarketingIntro></NavLayoutUiServicesDigitalMarketingIntro>
    <div class="mx-36">
      <NavLayoutUiServicesDigitalMarketingOptions></NavLayoutUiServicesDigitalMarketingOptions>
    </div>
    <NavLayoutUiConsultationBox2
      :main-text="'We Help Your Business Soar!'"
      :button-text="'Contact Now'"
      :color="'bg-[#80bd01]'"
    ></NavLayoutUiConsultationBox2>
    <NavLayoutUiServicesDigitalMarketingPortfolio></NavLayoutUiServicesDigitalMarketingPortfolio>
    <NavLayoutUiServicesPrintingContactUs></NavLayoutUiServicesPrintingContactUs>
  </div>
</template>
