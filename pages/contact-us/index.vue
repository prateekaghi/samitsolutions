<script setup>
const crumbs = [{ name: "Contact", href: "/contact", current: true }];
</script>
<template>
  <div class="mx-36">
    <div class="mb-9 mt-24">
      <NavLayoutUiCommonBreadcrumbs
        :pages="crumbs"
      ></NavLayoutUiCommonBreadcrumbs>
    </div>
    <LazyNavLayoutUiServicesSecurityServicesContact></LazyNavLayoutUiServicesSecurityServicesContact>
  </div>
</template>
