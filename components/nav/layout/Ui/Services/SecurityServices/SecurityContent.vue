<script setup>
import data from "~/assets/data/Services/SecurityServicesData.json";
</script>

<template>
  <div class="mt-10">
    <div v-for="content in data" :key="content.heading">
      <h1 class="text-5xl text-[#424242] font-serif">{{ content.heading }}</h1>
      <div class="border-t-4 my-5 rounded border-[#80bd01] w-28"></div>
      <p
        v-for="paragraph in content.paragraph"
        class="text-base text-[#1b1b1b] pb-5"
      >
        {{ paragraph }}
      </p>
    </div>
  </div>
</template>
