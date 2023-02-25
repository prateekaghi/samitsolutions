<script setup>
import { Icon } from "@steeze-ui/vue-icon";
import { Circle } from "@steeze-ui/feather-icons";
</script>

<template>
  <div class="border rounded-lg shadow-lg w-full my-0">
    <div class="lg:mx-10 h-1/2 relative">
      <h2 class="text-[#14141C] absolute top-20 lg:text-6xl">Our Services</h2>
      <div class="border-t-2 mt-5 absolute top-32 border-[#80bd01] w-24"></div>
    </div>
    <div class="carousel relative w-full h-1/2">
      <div class="carousel_item mx-2 py-2 h-full grid grid-cols-3 gap-3">
        <div
          class="flex hover:bg-[#80bd01] hover:text-white items-center justify-center lg:text-2xl"
        >
          <NuxtLink class="hover:text-black" to="/services/disaster-recovery"
            >Disaster Recovery</NuxtLink
          >
        </div>
        <div class="border">Consulting</div>
        <div class="border">Hosting & CLoud</div>
      </div>
      <div class="carousel_item h-full bg-red-400 hidden">item2</div>
      <div
        class="carousel_nav w-full text-center py-5 absolute bottom-0 left-0"
      >
        <Icon
          :src="Circle"
          fill="#80bd01"
          class="h-5 w-5 mx-2 inline-block cursor-pointer"
          aria-hidden="true"
        />
        <Icon
          :src="Circle"
          fill="#80bd01"
          class="h-5 w-5 mx-2 inline-block cursor-pointer"
          aria-hidden="true"
        />
      </div>
    </div>
  </div>
</template>
