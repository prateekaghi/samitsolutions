<script setup></script>

<template>
  <div class="grid md:flex h-40 justify-evenly text-white bg-[#0f0f16]">
    <div class="m-auto">
      <h1 class="w-max pt-5 m-auto text-xl md:text-3xl">
        Take IT to the next level!
      </h1>
      <h3 class="text-[#999999] w-max m-auto text-lg">
        Read what <a class="underline text-[#80BD01]">our clients</a> have to
        say.
      </h3>
    </div>
    <div class="md:m-auto">
      <NuxtLink
        class="h-12 my-5 text-sm leading-10 rounded-md hover:bg-[#80bd02] hover:text-white bg-white w-80 text-black px-6 py-3.5"
        to="/contact"
        >SCHEDULE YOUR FREE CONSULTATION</NuxtLink
      >
    </div>
  </div>
</template>
