<script setup>
const schema = {
  Email: "required|email",
};

let enteredEmail = ref("");
const submit = () => {};
</script>

<template>
  <div
    class="border-t bg-[#1a253d] text-white h-44 py-2 lg:py-10 lg:flex lg:items-center lg:justify-evenly xl:mt-0"
  >
    <div>
      <h3 class="text-sm px-2 lg:text-base font-medium">
        Monthly Newsletter — get updates with latest topics
      </h3>
    </div>

    <VForm
      class="mt-5 lg:mt-0"
      @submit="submit"
      :validation-schema="schema"
      v-slot="{ errors }"
    >
      <div>
        <label for="email" class="block text-sm font-medium text-red-700">{{
          errors.Email
        }}</label>
        <div class="mt-1 flex rounded-md shadow-sm">
          <div class="relative flex flex-grow items-stretch focus-within:z-10">
            <VField
              v-model="enteredEmail"
              name="Email"
              id="email"
              class="block w-full lg:w-96 rounded-none rounded-l-md border-gray-300 px-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Your e-mail address *"
            />
          </div>
          <button
            type="button"
            class="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-[#80bd01] bg-[#80bd01] px-4 py-2 text-sm font-medium text-white hover:bg-[#81a434] focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          >
            <span>Subscibe</span>
          </button>
        </div>
      </div>
    </VForm>
  </div>
</template>
