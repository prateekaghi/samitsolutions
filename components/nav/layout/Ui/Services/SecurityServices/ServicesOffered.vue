<script setup>
import data from "~/assets/data/Services/ServicesOfferedData.json";
</script>

<template>
  <div v-for="content in data" :key="content.heading">
    <div class="py-10">
      <div class="w-[1120px] h-[377px] relative bg-red-400">
        <nuxt-img class="absolute w-full h-full" :src="content.imageUrl" />
        <div class="w-[1120px] h-[377px] bg-black opacity-50"></div>
        <div class="absolute top-0 py-24 px-10">
          <h1 class="text-white text-6xl w-3/4">
            {{ content.mainHeading }}
          </h1>
          <div class="border-t-4 my-5 rounded border-[#80bd01] w-28"></div>
        </div>
      </div>
    </div>
    <div>
      <div v-for="data in content.content">
        <div v-if="data.type === 'paragraph'">
          <div class="text-3xl text-[#424242] font-serif font-light">
            {{ data.heading }}
          </div>
          <div class="border-t-4 my-5 rounded border-[#80bd01] w-24"></div>

          <p class="text-[#1b1b1b] my-5" v-for="para in data.text">
            {{ para }}
          </p>
        </div>
        <div v-if="data.type === 'list'">
          <li class="text-[#1b1b1b] my-2" v-for="list in data.text">
            {{ list }}
          </li>
        </div>
        <div v-if="data.type === 'icons'" class="grid grid-cols-5">
          <div
            v-for="(value, propertyName) in data.icons"
            class="m-5 h-36 w-52"
          >
            <div class="h-24 w-24 border-[#80bd01] border-2 rounded-full">
              <img class="p-4 mx-auto" :src="value" />
              <h1
                class="text-xl text-center min-w-max mt-5 text-[#4f4f4f] font-bold"
              >
                {{ propertyName }}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
svg:hover {
  fill: red;
}
</style>
