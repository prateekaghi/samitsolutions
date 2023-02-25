<script setup lang="ts">
import { Icon } from "@steeze-ui/vue-icon";
import { ChevronRight } from "@steeze-ui/feather-icons";
const props = defineProps<{
  pages: Array<BreadCrumbOptions>;
}>();
</script>

<template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol role="list" class="flex items-center space-x-4">
      <li>
        <div class="flex items-center">
          <NuxtLink
            to="/"
            class="ml-2 text-sm font-semibold text-gray-500 hover:text-[#80bd02]"
            >Home</NuxtLink
          >
        </div>
      </li>
      <li v-for="page in props.pages" :key="page.name">
        <div class="flex items-center">
          <Icon
            :src="ChevronRight"
            class="flex-shrink-0 self-center h-6 w-6 text-[#dddddd]"
            aria-hidden="true"
          />
          <NuxtLink
            :to="page.href"
            :class="page.current ? '' : 'hover:text-[#80bd02]'"
            class="capitalize ml-1 text-sm font-normal text-[#666666] hover:text-gray-700"
            >{{ page.name }}</NuxtLink
          >
        </div>
      </li>
    </ol>
  </nav>
  <div class="border-t-[6px] mt-5 mb-2 rounded border-[#EEEEEE] w-36"></div>
  <div class="border-t-[6px] rounded border-[#EEEEEE] w-16"></div>
</template>
