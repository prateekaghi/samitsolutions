<script setup lang="ts">
const props = defineProps<{
  people: TeamOptions;
}>();
</script>
<template>
  <div class="">
    <div class="mx-auto">
      <div class="lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
        <div
          class="space-y-2 lg:space-y-5 py-12 px-4 sm:px-6 lg:px-8 lg:py-24 sm:space-y-4"
        >
          <h2 class="text-4xl font-serif font-light">
            Meet the <br class="hidden lg:block" />
            Team
          </h2>
          <div class="border-t-2 border-[#80bd01] w-20"></div>
          <p class="text-sm font-sans text-[#777777]">
            Our management team brings its collective experience to help take
            your business to the next level.
          </p>
          <NuxtLink
            to="/contact-us"
            class="inline-flex items-center rounded-md border border-transparent bg-[#80bd01] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Contact Us
          </NuxtLink>
        </div>
        <div
          class="bg-[#00001c] py-12 px-4 sm:px-6 lg:px-8 lg:py-24 lg:col-span-2"
        >
          <ul
            role="list"
            class="space-y-12 sm:-mt-8 sm:space-y-0 lg:gap-x-8 lg:space-y-0"
          >
            <li
              v-for="person in props.people"
              :key="person.name"
              class="sm:py-8"
            >
              <div
                class="space-y-4 sm:grid sm:grid-cols-3 bg-[#181e2b] sm:items-start sm:gap-6 sm:space-y-0"
              >
                <div class="aspect-w-2 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                  <nuxt-img
                    class="rounded-lg lg:object-cover shadow-lg"
                    :src="`/img/team/${person.imageUrl}.jpg`"
                    alt=""
                  />
                </div>
                <div class="sm:col-span-2 lg:p-7">
                  <div class="space-y-4 text-white">
                    <div class="space-y-1 text-xl font-medium leading-6">
                      <h3>{{ person.name }}</h3>
                      <p class="text-sm">{{ person.role }}</p>
                    </div>
                    <div class="text-base xl:text-lg">
                      <p class="">{{ person.bio }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
