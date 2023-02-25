<script setup lang="ts">
import { Icon } from "@steeze-ui/vue-icon";
import { Calendar } from "@steeze-ui/feather-icons";
const qc = await queryContent("blogs").find();
</script>
<template>
  <!-- <div class="blog-image">
    <div class="relative mx-auto max-w-7xl">
      <div class="text-left">
        <h3
          class="lg:text-6xl font-serif font-light tracking-tight text-[#14141C] sm:text-4xl"
        >
          Our Blog
        </h3>
        <div class="border-t-2 mt-5 border-[#80bd01] w-28"></div>
      </div>
      <div
        class="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3"
      >
        <ContentList path="blogs" v-slot="{ list }">
          <div
            v-for="article in list.slice(-4, -1)"
            :key="article._path"
            class="h-[430px] w-[400px]"
          >
            <div class="relative h-[214px] w-[369px] rounded-lg mx-auto">
              <img
                class="absolute rounded-t-lg h-full w-full"
                :src="`${article.img}`"
              />
            </div>
            <div class="h-[290px] w-[369px] mx-auto">
              <div class="h-14 mx-2 mt-5">
                <a
                  :href="article._path"
                  class="text-2xl font-serif text-[#041230]"
                >
                  {{ article.title }}</a
                >
              </div>
              <div class="text-[#555] mt-2 mx-2 text-xs flex items-center">
                <Icon
                  :src="Calendar"
                  class="flex-shrink-0 mr-2 h-5 w-5 text-[#555]"
                  aria-hidden="true"
                />
                <div>{{ article.date }}</div>
              </div>
              <div class="text-[#555] mx-2 h-20 line-clamp-1">
                {{ article.description }}
              </div>
              <footer class="pt-6">
                <a
                  :href="article._path"
                  class="h-[40px] w-[121px] text-white rounded-md inline-flex items-center border border-transparent bg-black px-5 text-sm font-medium shadow-sm hover:bg-[#80bd02] hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Read More
                </a>
              </footer>
            </div>
          </div>
        </ContentList>
      </div>
    </div>
  </div> -->
  <div>
    <div class="blog_image">
      <div class="mx-2">
        <h3
          class="text-4xl my-5 lg:text-6xl font-serif font-light tracking-tight text-[#14141C] sm:text-4xl"
        >
          Our Blog
        </h3>
        <div class="border-t-2 mt-5 border-[#80bd01] w-28"></div>
      </div>
      <div class="md:flex xl:space-x-20 md:overflow-scroll">
        <ContentList path="blogs" v-slot="{ list }">
          <div
            v-for="article in list.slice(-4, -1)"
            :key="article._path"
            class="mx-2 my-5"
          >
            <div class="lg:w-80 xl:w-96">
              <nuxt-img class="rounded-t-lg" :src="`${article.img}`" />

              <div class="bg-white opacity-80">
                <div class="">
                  <a
                    :href="article._path"
                    class="text-lg lg:text-2xl font-serif text-[#041230]"
                  >
                    {{ article.title }}</a
                  >
                </div>
                <div class="flex text-sm">
                  <Icon
                    :src="Calendar"
                    class="flex-shrink-0 mr-2 h-5 w-5 text-[#555]"
                    aria-hidden="true"
                  />
                  <div>{{ article.date }}</div>
                </div>
                <div class="text-sm">
                  {{ article.description }}
                </div>
                <footer class="py-2">
                  <a
                    :href="article._path"
                    class="text-white rounded-md inline-flex items-center border border-transparent bg-black px-5 text-sm font-medium shadow-sm hover:bg-[#80bd02] hover:text-white h-10"
                  >
                    Read More
                  </a>
                </footer>
              </div>
            </div>
          </div>
        </ContentList>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blog_image {
  background: linear-gradient(
      rgba(248, 254, 255, 0.6),
      rgba(248, 254, 255, 0.6)
    ),
    url(@/public/img/homePage/BlogsBackground.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
