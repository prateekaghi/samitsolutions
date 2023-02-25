<script setup lang="ts"></script>

<template>
  <div class="bg-[#111724]">
    <div class="md:flex mx-auto max-w-7xl py-8 sm:py-24 lg:py-16">
      <div class="text-center lg:flex">
        <h2
          class="font-sans text-3xl font-light tracking-tight text-white lg:max-w-xl lg:text-left lg:col-span-1 lg:border-r-2 border-[#80bd01] px-4 sm:px-1 lg:px-4"
        >
          Our Services
          <hr class="w-full border-[#80bd01] md:hidden" />
        </h2>
        <h1 class="mx-2 font-sans leading-8 text-lg text-[#C9C9C9]">
          Remote and onsite IT helpdesk
        </h1>
      </div>

      <div class="flex">
        <div class="text-typing">
          <p
            class="text-xl pl-5 font-bold leading-8 tracking-tight text-[#EFEFEF]"
          >
            24 hours a day, 7 days a week!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-typing p {
  white-space: nowrap;
  overflow: hidden;
  animation: typing 10s steps(30, end) infinite, blink 0.7s infinite;
}
@keyframes typing {
  0% {
    width: 0%;
  }
  50% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
}
@keyframes blink {
  0%,
  100% {
    border-right: 2px solid transparent;
  }
  50% {
    border-right: 2px solid #80bd02;
  }
}
</style>
