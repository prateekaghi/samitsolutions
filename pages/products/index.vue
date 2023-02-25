<script setup>
const crumbs = [{ name: "Products", href: "/products", current: true }];
</script>
<template>
  <div class="mx-36">
    <div class="mb-9 mt-24">
      <NavLayoutUiCommonBreadcrumbs
        :pages="crumbs"
      ></NavLayoutUiCommonBreadcrumbs>
    </div>
    <NavLayoutUiProductsPage></NavLayoutUiProductsPage>
  </div>
</template>
