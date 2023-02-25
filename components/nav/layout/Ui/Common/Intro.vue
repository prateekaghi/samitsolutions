<script setup lang="ts">
import { Icon } from "@steeze-ui/vue-icon";
import { ArrowUpCircle } from "@steeze-ui/feather-icons";
let scrollToTop = () => {
  scrollTo(0, 0);
};
const props = defineProps<{
  data: {
    heading: string;
    section: string;
    content: any;
  };
}>();
console.log(props);
</script>
<template>
  <div class="flex">
    <div class="w-[727px]">
      <div class="my-5" v-for="data in props.data.content">
        <h1 class="text-[#424242] text-4xl">{{ data.heading }}</h1>
        <div
          v-if="data.heading"
          class="border-t-4 rounded my-5 border-[#80bd01] w-24"
        ></div>
        <p
          v-for="para in data.paragraph"
          class="mt-5 text-sm text-[#7a7a7a] leading-7"
        >
          {{ para }}
        </p>
        <ul v-if="data.list" class="bg-[#f2f2f2] py-5">
          <li
            v-for="listitem in data.list"
            class="text-[#7a7a7a] text-sm list-disc list-inside py-2 px-5"
          >
            {{ listitem }}
          </li>
        </ul>
      </div>
    </div>
    <div class="my-5 flex flex-col w-5/12">
      <div class="text-[#424242] text-4xl text-right">
        {{ props.data.section }}
      </div>
      <div class="border-t-4 rounded my-5 border-[#80bd01] self-end w-24"></div>
      <div @click="scrollToTop" class="flex justify-end cursor-pointer">
        <h1 class="text-[#999999] px-2 my-auto text-xs">TO TOP</h1>
        <Icon
          :src="ArrowUpCircle"
          class="mr-4 flex-shrink-0 self-center h-5 w-5 text-[#80bd01]"
          aria-hidden="true"
        />
      </div>
    </div>
  </div>
</template>
