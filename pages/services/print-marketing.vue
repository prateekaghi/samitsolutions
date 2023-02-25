<script setup>
const crumbs = [
  { name: "Services", href: "/services", current: false },
  { name: "Print Marketing", href: "/services/print-marketing", current: true },
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
      <NavLayoutUiServicesPrintingPrintSection></NavLayoutUiServicesPrintingPrintSection>
      <NavLayoutUiServicesPrintingServices></NavLayoutUiServicesPrintingServices>
    </div>
    <NavLayoutUiServicesPrintingContactUs></NavLayoutUiServicesPrintingContactUs>
  </div>
</template>
