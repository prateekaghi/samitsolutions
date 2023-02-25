<script setup>
const crumbs = [{ name: "Clients", href: "/about-us/clients", current: true }];
</script>
<template>
  <div>
    <div class="mx-2 lg:mx-36">
      <div class="mb-9 mt-24">
        <NavLayoutUiCommonBreadcrumbs
          :pages="crumbs"
        ></NavLayoutUiCommonBreadcrumbs>
      </div>
      <NavLayoutUiAboutUsClientSection></NavLayoutUiAboutUsClientSection>
    </div>
    <div class="mb-28">
      <NavLayoutUiCommonConsultationBox2
        buttonText="SCHEDULE YOUR FREE CONSULTATION"
        mainText="We help you leverage your KPI"
        color="bg-[#80bd01]"
      />
    </div>
  </div>
</template>
