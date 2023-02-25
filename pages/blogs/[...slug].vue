<script setup>
const route = useRoute();
const currentpage = {
  name: route.params.slug[0],
  href: route.fullPath,
};
const crumbs = [
  { name: "Blogs", href: "/blogs", current: false },
  { name: currentpage.name, href: currentpage.href, current: true },
];
</script>

<template>
  <div>
    <div class="mx-36">
      <div class="mb-9 mt-24">
        <NavLayoutUiCommonBreadcrumbs
          :pages="crumbs"
        ></NavLayoutUiCommonBreadcrumbs>
      </div>
      <main class="">
        <ContentDoc v-slot="{ doc }">
          <div class="text-5xl text-[#14141c]">{{ doc.title }}</div>
          <p>
            In
            <nuxt-link
              to="/blogs"
              class="border-b-2 text-[#316397] border-[#316397]"
              >Blog</nuxt-link
            >
          </p>
          <nuxt-img class="my-5" :src="`${doc.img}`" />
          <div class="my-5">
            <h1 class="text-center font-bold my-5 text-2xl text-[#7BAE02]">
              {{ doc.title }}
            </h1>

            <ContentRenderer
              class="prose-p:my-5 prose-p:text-[#777] prose-p:text-sm prose-headings:text-[#777] prose-headings:text-2xl prose-ul:text-[#777] prose-ul:text-lg prose-ul:my-5 prose-ol:m-5 prose-ol:list-decimal prose-ol:text-[#777] prose-ol:text-md prose-a:text-[#80bd01]"
              :value="doc"
            >
            </ContentRenderer>
          </div>
        </ContentDoc>
      </main>
    </div>
  </div>
</template>
