<script setup lang="ts">
const submit = () => {};
const schema = {
  FirstName: "required",
  Email: "required|email",
};

let enteredEmail = ref("");
let firstName = ref("");
</script>

<template>
  <h1 class="text-5xl text-[#14141C] font-serif font-light">Contact</h1>
  <div class="flex">
    <div class="w-[468px] bg-[#e9eff3] my-5 rounded h-[862px] p-5">
      <h1 class="text-2xl font-normal font-serif mt-10">
        Get In Touch With Us
      </h1>

      <VForm
        class="mt-4 text-white sm:max-w-md lg:mt-0"
        @submit="submit"
        :validation-schema="schema"
        v-slot="{ errors }"
      >
        <div class="flex box-border flex-col my-8">
          <label class="text-[#777777] font-sans"
            >FirstName<span class="text-red-600 inline-block">*</span></label
          >
          <VField
            v-model="firstName"
            class="h-9 min-w-full appearance-none border border-[#424c5f] text-base text-black placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-indigo-500 sm:max-w-xs"
            placeholder="YourFirstName"
            name="FirstName"
          />

          <span v-if="errors" class="relative text-red-700">
            {{ errors.FirstName }}
          </span>
        </div>
        <div class="flex box-border flex-col my-8">
          <label class="text-[#777777] font-sans"
            >FirstName<span class="text-red-600 inline-block">*</span></label
          >
          <VField
            v-model="firstName"
            class="h-9 min-w-full appearance-none border border-[#424c5f] text-base text-black placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-indigo-500 sm:max-w-xs"
            placeholder="YourFirstName"
            name="FirstName"
          />

          <span v-if="errors" class="relative text-red-700">
            {{ errors.FirstName }}
          </span>
        </div>
        <div class="flex box-border flex-col my-8">
          <label class="text-[#777777] font-sans"
            >FirstName<span class="text-red-600 inline-block">*</span></label
          >
          <VField
            v-model="firstName"
            class="h-9 min-w-full appearance-none border border-[#424c5f] text-base text-black placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-indigo-500 sm:max-w-xs"
            placeholder="YourFirstName"
            name="FirstName"
          />

          <span v-if="errors" class="relative text-red-700">
            {{ errors.FirstName }}
          </span>
        </div>
        <div class="flex box-border flex-col my-8">
          <label class="text-[#777777] font-sans"
            >FirstName<span class="text-red-600 inline-block">*</span></label
          >
          <VField
            v-model="firstName"
            class="h-9 min-w-full appearance-none border border-[#424c5f] text-base text-black placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-indigo-500 sm:max-w-xs"
            placeholder="YourFirstName"
            name="FirstName"
          />

          <span v-if="errors" class="relative text-red-700">
            {{ errors.FirstName }}
          </span>
        </div>
        <div class="flex box-border flex-col my-8">
          <label class="text-[#777777] font-sans"
            >FirstName<span class="text-red-600 inline-block">*</span></label
          >
          <VField
            v-model="firstName"
            class="h-9 min-w-full appearance-none border border-[#424c5f] text-base text-black placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-indigo-500 sm:max-w-xs"
            placeholder="YourFirstName"
            name="FirstName"
          />

          <span v-if="errors" class="relative text-red-700">
            {{ errors.FirstName }}
          </span>
        </div>
        <div class="flex box-border flex-col my-8">
          <label class="text-[#777777] font-sans"
            >asd<span class="text-red-600 inline-block">*</span></label
          >
          <VField
            type="textarea"
            v-model="firstName"
            class="h-9 min-w-full appearance-none border border-[#424c5f] text-base text-black placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-indigo-500 sm:max-w-xs"
            placeholder="YourFirstName"
            name="FirstName"
          />

          <span v-if="errors" class="relative text-red-700">
            {{ errors.FirstName }}
          </span>
        </div>

        <div class="mt-3 sm:mt-0 sm:flex-shrink-0">
          <button
            @click="submit"
            type="submit"
            class="flex w-auto items-center border border-transparent bg-[#80bd02] py-2 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Contact Us
          </button>
        </div>
      </VForm>
    </div>
    <div class="relative">
      <div class="w-[611px] m-5 h-[212px]">
        <div class="bg-[#121422]">
          <h1 class="text-white text-2xl font-serif absolute top-8 left-14">
            RTP Office
          </h1>
          <div id="card_header" class="h-16 bg-[#80bd01]"></div>
        </div>
        <div class="bg-black text-[#999999] text-sm p-8">
          <h1 class="mb-2">2511 NC-54 Ste. 201, Durham, NC 27713</h1>
          <h1 class="mb-2">Phone: +1 919-800-0044</h1>
          <h1 class="mb-2">Fax: +1 919-695-0089</h1>
          <h1 class="mb-2">
            Email:<span class="text-[#80bd02]"> info@samitsolutions.com</span>
          </h1>
        </div>
      </div>
      <div class="w-[611px] m-5 pt-5 h-[630px]">
        <GMap
          api-key="AIzaSyAsECJ6K7y_6zq84n59H3yFEfbOkOcFCJc"
          style="width: 100%; height: 100%"
          :zoom="15"
        ></GMap>
      </div>
    </div>
  </div>
</template>

<style scoped>
#card_header {
  clip-path: polygon(89% 0, 100% 0, 100% 100%, 89% 100%);
}
#card_header:hover {
  clip-path: polygon(85% 0, 100% 0, 100% 100%, 89% 100%);
}
</style>
