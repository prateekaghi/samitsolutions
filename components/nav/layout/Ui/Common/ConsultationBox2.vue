<script setup lang="ts">
const props = defineProps<{
  buttonText: string;
  mainText: string;
  color: string;
}>();
console.log(props);
</script>

<template>
  <div :class="color" class="md:flex h-20 lg:h-40 justify-around text-white">
    <div class="m-auto">
      <h1 class="text-lg md:text-xl text-center lg:text-4xl lg:font-bold">
        {{ props.mainText }}
      </h1>
    </div>
    <div class="flex items-center justify-center lg:m-auto">
      <NuxtLink
        class="px-5 py-2 rounded-md my-2 text-sm lg:font-semiboldrounded-lg hover:bg-[#80bd02] hover:text-white bg-white text-black"
        to="/contact"
        >{{ props.buttonText }}</NuxtLink
      >
    </div>
  </div>
</template>
