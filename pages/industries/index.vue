<script setup>
const crumbs = [{ name: "Industries", href: "/industries", current: true }];
</script>
<template>
  <div class="mx-36">
    <div class="mb-9 mt-24">
      <NavLayoutUiCommonBreadcrumbs
        :pages="crumbs"
      ></NavLayoutUiCommonBreadcrumbs>
    </div>
    <NavLayoutUiIndustriesSection></NavLayoutUiIndustriesSection>
  </div>
</template>
