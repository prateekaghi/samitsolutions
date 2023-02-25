<script setup>
import { Icon } from "@steeze-ui/vue-icon";
import { ArrowUpCircle } from "@steeze-ui/feather-icons";
import industryData from "~/assets/data/industriesData.json";
let icon = "fa-solid fa-legal";
let scrollToTop = () => {
  scrollTo(0, 0);
};
</script>
<template>
  <div class="grid grid-flow-col gap-10 mr-32 mb-32">
    <div v-for="data in industryData">
      <div :key="data.heading">
        <div class="bg-[#eeeeee] m-auto h-24 w-24 rounded-full">
          <div class="flex justify-center my-auto">
            <font-awesome-icon class="mt-5 fa-3x" :icon="data.icon" />
          </div>
        </div>
        <h1
          class="text-2xl mt-5 text-center font-serif font-semibold capitalize"
        >
          {{ data.heading }}
        </h1>
      </div>
    </div>
  </div>
  <div v-for="(data, index) in industryData">
    <div :key="data.heading">
      <div v-if="index % 2 === 0" class="grid grid-flow-col grid-cols-3 my-10">
        <div>
          <h1 class="text-5xl font-normal tracking-wide">{{ data.heading }}</h1>
          <div class="border-t-4 rounded mt-5 border-[#80bd01] w-24"></div>
          <div @click="scrollToTop" class="cursor-pointer flex h-32">
            <Icon
              :src="ArrowUpCircle"
              class="mr-4 flex-shrink-0 self-center h-5 w-5 text-[#80bd01]"
              aria-hidden="true"
            />
            <h1 class="text-[#999999] self-center hover:text-[#80bd01] text-xs">
              To Top
            </h1>
          </div>
        </div>

        <div
          class="text-sm text-[#7a7a7a] col-span-2 pr-20 font-sans leading-7"
        >
          <p v-for="content in data.content" class="pb-5">{{ content }}</p>
        </div>
      </div>
      <div v-else class="grid grid-flow-col grid-cols-3 my-10">
        <div
          class="text-sm text-[#7a7a7a] col-span-2 pr-20 font-sans leading-7"
        >
          <p v-for="content in data.content" class="pb-5">{{ content }}</p>
        </div>
        <div class="flex flex-col items-end mr-20">
          <h1 class="text-5xl font-normal tracking-wide">{{ data.heading }}</h1>
          <div class="border-t-4 rounded mt-5 border-[#80bd01] w-24"></div>
          <div @click="scrollToTop" class="cursor-pointer flex h-32">
            <Icon
              :src="ArrowUpCircle"
              class="mr-4 flex-shrink-0 self-center h-5 w-5 text-[#80bd01]"
              aria-hidden="true"
            />
            <h1 class="text-[#999999] self-center hover:text-[#80bd01] text-xs">
              To Top
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
