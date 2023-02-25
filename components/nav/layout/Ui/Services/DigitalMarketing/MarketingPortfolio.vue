<script setup>
import portfoliodata from "~/assets/data/marketingPortfolioData.json";
let data = reactive(portfoliodata);
const show = (content) => {
  content.show = true;
};
const hide = (content) => {
  content.show = false;
};
</script>

<template>
  <div class="text-4xl font-semibold font-serif text-center p-4">
    SAM IT’s Creative Portfolio
  </div>
  <div
    class="font-semibold w-[575px] border-t-2 rounded-sm border-[#80BD01] m-auto text-[#81BE40] font-serif text-center"
  ></div>
  <p class="text-[#7a7a7a] my-5 mx-36">
    With experience in multiple industries including Biotechnology, Healthcare,
    Food & Beverages, Technology, Finance, Manufacturing, Oil & Gas, etc., our
    creative team understands your needs and deliver sophisticated solutions
  </p>
  <div class="flex flex-row flex-wrap gap-8 mb-5 justify-center">
    <div v-for="content in data">
      <div
        @mouseenter="show(content)"
        @mouseleave="hide(content)"
        class="container relative w-[360px] h-[360px] mt-5"
      >
        <nuxt-img :src="content.imageUrl" />
        <div
          class="overlay w-0 h-full duration-500 ease-in-out absolute bottom-0 left-0 bg-[#80bd01] text-2xl mt-5 text-center text-white font-semibold"
        >
          <div
            v-if="true"
            :class="content.show ? 'visible' : 'invisible'"
            class="flex flex-col"
          >
            <p class="h-24 w-72">{{ content.heading }}</p>
            <a
              :href="content.link"
              target="_blank"
              class="ml-10 w-28 h-10 hover:drop-shadow-2xl rounded-md my-5 text-sm bg-white text-black px-4 py-2"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container:hover .overlay {
  width: 100%;
}
</style>
