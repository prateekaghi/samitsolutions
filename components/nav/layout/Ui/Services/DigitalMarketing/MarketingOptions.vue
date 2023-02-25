<script setup>
import { Icon } from "@steeze-ui/vue-icon";
import { XSquare } from "@steeze-ui/feather-icons";
import optionsData from "~/assets/data/marketingOptionsData.json";
let data = reactive(optionsData);

const show = (content) => {
  content.show = true;
};
const hide = (content) => {
  content.show = false;
};
</script>

<template>
  <div class="text-4xl font-semibold font-serif text-center p-4">
    Dive into Digital Marketing armed with Expertise!
  </div>
  <div
    class="font-semibold w-[575px] border-t-2 rounded-sm border-[#80BD01] m-auto text-[#81BE40] font-serif text-center"
  ></div>
  <div class="flex flex-row flex-wrap gap-8 mb-5 justify-center">
    <div v-for="content in data">
      <div @click="show(content)" class="w-[360px] h-[428px] mt-5">
        <nuxt-img :src="content.imageUrl" class="h-[360px] w-[360px]" />
        <div class="text-2xl mt-5 text-center text-[#80bd01] font-semibold">
          {{ content.heading }}
        </div>
      </div>
      <div v-if="content.show">
        <div
          aria-labelledby="modal-title"
          aria-modal="true"
          class="relative z-10"
          role="dialog"
        >
          <div
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          ></div>
          <div class="fixed inset-0 z-10 overflow-y-auto">
            <div
              class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
            >
              <div
                class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 md:max-w-2xl"
              >
                <div class="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                  <button
                    @click="hide(content)"
                    class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    type="button"
                  >
                    <Icon
                      :src="XSquare"
                      aria-hidden="true"
                      class="mr-4 flex-shrink-0 self-center h-5 w-5 text-[#80bd01]"
                    />
                  </button>
                </div>
                <div class="sm:flex sm:items-start">
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <div class="mt-2">
                      <p
                        v-for="data in content.content"
                        class="text-base text-center font-serif text-[#333333] my-10"
                      >
                        {{ data }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
