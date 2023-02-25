<script setup>
const links = [
  {
    Label: "About",
    href: "#about",
  },
  {
    Label: "Services",
    href: "#services",
  },
  {
    Label: "Contact",
    href: "#contact",
  },
];
</script>

<template>
  <div>
    <!-- <nuxt-img
      class="my-5 mx-auto"
      src="/img/servicesSection/securityServices/logo.jpg"
    /> -->
    <div class="text-center">
      <div
        class="my-5 inline-flex px-2 border-r-2 last:border-r-0 border-[#7a7a7a] text-[#80bd01] text-xl font-semibold"
        v-for="link in links"
      >
        <a class="mx-2" :href="link.href">{{ link.Label }}</a>
      </div>
    </div>
    <div
      class="my-5 relative w-screen h-[548px] bg-no-repeat bg-cover bg-center bg-[url('/public/img/servicesSection/securityServices/background.jpg')]"
    >
      <div
        class="ml-36 flex bg-[#14151E4F] flex-col justify-center w-screen h-[548px]"
      >
        <h1 class="text-[#eee] text-6xl font-light">
          How secure is your Network?
        </h1>
        <div class="border-t-4 rounded my-5 border-[#80bd01] w-28"></div>
        <p class="text-[#ddd] text-lg">
          What you cannot see can hurt your business,
        </p>
        <p class="text-[#ddd] text-lg">
          We are here to protect your IT Infrastructures.
        </p>
      </div>
    </div>
  </div>
</template>
