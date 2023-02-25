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

    <ContentList path="product" v-slot="{ list }">
      <div class="my-10" v-for="product in list" :key="product._path">
        <ContentRenderer
          class="prose-img:max-w-xs prose-img:my-5 prose-p:my-5 prose-p:text-[#777] prose-p:text-sm prose-headings:text-[#777] prose-headings:text-4xl prose-ul:text-[#777] prose-h2:text-[#777] prose-ul:list-inside prose-ul:list-disc prose-ul:my-5 prose-ol:m-5 prose-ol:list-decimal prose-ol:text-[#777] prose-ol:text-sm prose-a:text-[#0d6efd] prose-headings:my-5 prose-h6:text-2xl prose-h6:text-black prose-h1:text-[#80bd01]"
          :value="product"
        ></ContentRenderer>
      </div>
    </ContentList>
  </div>
</template>
