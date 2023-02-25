<!-- This example requires Tailwind CSS v2.0+ -->
<script setup lang="ts">
const props = defineProps<{
  partners: PartnerOptions;
}>();
</script>

<template>
  <div class="bg-[#111724]">
    <div class="mx-auto max-w-7xl sm:py-24 lg:py-16">
      <div class="md:flex">
        <h2
          class="max-w-md md:mr-8 lg:mr-4 text-center flex items-center text-3xl lg:font-bold tracking-tight text-white lg:w-72 lg:text-left lg:col-span-1 h-20 border-r-2 border-[#80bd01] px-4 sm:px-6 lg:px-4"
        >
          Our Partners
        </h2>
        <div class="w-full m-auto lg:col-span-4">
          <div class="-mt-4 -ml-8 flex overflow-hidden lg:-ml-4">
            <div class="moving flex">
              <div
                v-for="partner in props.partners"
                class="my-4 ml-8 flex flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0"
              >
                <a target="_blank" :href="partner.href">
                  <nuxt-img
                    class="h-24"
                    :src="`/img/partners/${partner.image_url}.png`"
                    :alt="partner.name"
                    :key="partner.name"
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.moving {
  transform: translateX(100%);
  animation: scrolling 15s linear infinite;
}
.moving:hover {
  animation-play-state: paused;
}

@keyframes scrolling {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(-100%);
  }
}
</style>
