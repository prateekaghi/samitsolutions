<script setup lang="ts">
const props = defineProps<{
  people: Array<TeamOptions>;
}>();
</script>

<template>
  <div>
    <h1 class="text-[#424242] text-5xl font-serif font-light">Leadership</h1>
    <div
      class="border-t-4 mt-2 mb-4 lg:my-5 rounded border-[#80bd01] w-24"
    ></div>
    <div
      class="grid md:grid-cols-2 xl:grid-cols-3 bg-[#f1f1f1] px-1 py-2 gap-8"
    >
      <div class="lg:h-[685px] lg:w-[360px]" v-for="member in people">
        <nuxt-img
          class="bg-cover w-full h-2/3 lg:h-[533px] bg-center"
          :src="`/img/team/${member.imageUrl}.jpg`"
          :key="member.name"
        />

        <div class="lg:h-[152px] uppercase bg-white text-center p-8">
          <h1 class="text-2xl font-serif font-bold text-[#14141C]">
            {{ member.name }}
          </h1>
          <h3 class="text-sm font-sans text-[#a39e9e]">{{ member.role }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>
