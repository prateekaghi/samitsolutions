<script setup>
const qc = await queryContent("blogs").find();
console.log(qc);
const crumbs = [{ name: "Blogs", href: "/blogs", current: true }];
</script>
<template>
  <div class="mx-36">
    <div class="mb-9 mt-24">
      <NavLayoutUiCommonBreadcrumbs
        :pages="crumbs"
      ></NavLayoutUiCommonBreadcrumbs>
    </div>
    <div class="flex">
      <div class="w-[820px]">
        <ContentList path="blogs" v-slot="{ list }">
          <div
            v-for="article in list"
            :key="article._path"
            class="h-[747px] my-20 border drop-shadow-lg w-[820px]"
          >
            <div class="h-[461px]"><img :src="article.img" /></div>
            <div class="h-[286px] px-20 pt-10">
              <p>In <a>Blog</a></p>
              <nuxt-link
                prefetch
                :href="article._path"
                class="text-3xl text-[#14141c] font-serif"
                >{{ article.title }}
              </nuxt-link>
              <p class="text-sm text-[#666666] leading-6 my-4">
                {{ article.description }}
              </p>
              <nuxt-link
                :href="article._path"
                class="bg-[#081225] py-1 px-2 text-sm rounded-sm text-white hover:bg-[#80bd01]"
              >
                Read More
              </nuxt-link>
            </div>
          </div>
        </ContentList>
      </div>
      <div class="my-20 mx-5">
        <h1 class="text-xl text-[#14141c] font-serif">Recent Posts</h1>
        <div class="w-12 border-t-2 mb-5 border-[#80bd01]"></div>
        <ContentRenderer :value="qc">
          <h1 v-for="value in qc">
            <NuxtLink
              :to="value._path"
              class="text-sm text-[#777777] hover:text-[#80bd01]"
              >{{ value.title }}</NuxtLink
            >
          </h1>
        </ContentRenderer>
        <h1 class="text-xl text-[#14141c] font-serif mt-5">
          Need Support Now?
        </h1>
        <div class="w-12 border-t-2 mb-5 border-[#80bd01]"></div>
        <p class="text-sm">
          <NuxtLink class="text-[#80bd01]"> CLICK HERE </NuxtLink> to enter a
          ticket through our support portal for existing clients or call us
          directly at 919.800.0044 for 24/7 support
        </p>
      </div>
    </div>
  </div>
</template>
