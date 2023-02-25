<script setup>
let points = [
  "Hands-on Experience",
  "100% Customer Satisfaction",
  "Most dedicated and passionate team",
  "Over 1292 projects completed",
];
</script>

<template>
  <div
    class="relative overflow-hidden bg-[url('@/public/img/homePage/background2.jpg')] bg-cover"
  >
    <div class="absolute opacity-90 h-full w-full bg-[#f7fdfe]"></div>
    <div class="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
      <div
        class="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8"
      >
        <div>
          <h3
            class="mt-2 text-4xl lg:text-6xl font-light font-serif leading-8 text-gray-900"
          >
            Why choose us?
          </h3>
          <div
            class="border-t-2 mt-2 lg:mt-8 rounded border-[#80bd01] w-28"
          ></div>
          <div
            class="text-sm lg:top-36 lg:w-[500px] lg:h-12 mt-8 lg:mt-0 text-[#666666]"
          >
            <p class="text-[#666666] my-5">
              At SAM IT Solutions, we base our business on four fundamental
              principles, all centered on you and your needs.
            </p>
            We:
            <ul
              class="list-disc ml-5 leading-6 lg:w-[440px] text-[#777777] lg:leading-8"
            >
              <li class="">
                Deploy world class infrastructure for you to perform at your
                full potential
              </li>
              <li class="">
                Provide around the clock quality customer service
              </li>
              <li class="">Ensure value for money</li>
              <li class="">Are up to date with newest technology</li>
            </ul>
            <div class="text-sm my-2 lg:my-5 text-[#0D6EFD]">
              <NuxtLink to="/about-us">Read more...</NuxtLink>
            </div>
            <nuxt-img
              class="w-1/2 md:w-1/3"
              src="/img/homePage/Certificate.jpg"
            />
          </div>
        </div>
        <div
          class="bg-white md:w-7/12 lg:w-3/4 mx-auto shadow-lg lg:col-start-2 lg:row-start-1"
        >
          <div class="mx-auto text-base lg:max-w-none">
            <div
              class="h-96 lg:h-5/6 lg:w-11/12 2xl:h-[560px] 2xl:w-[500px] m-auto"
            >
              <div class="h-1/2">
                <div
                  class="bg-white relative border-8 border-[#5d5d5e] top-4 lg:top-1 w-5/6 h-4/5 mx-auto"
                >
                  <div class="">
                    <h1 class="text-lg leading-5 m-4 font-serif">
                      Total IT <br />Solutions
                    </h1>
                    <div class="flex my-5 py-2 justify-around items-center">
                      <h1 class="text-3xl lg:text-7xl">34+</h1>
                      <h3
                        class="text-lg w-min leading-5 text-[#80BD01] font-serif"
                      >
                        YEARS OF EXPERIENCE
                      </h3>
                    </div>
                  </div>
                  <div class="">
                    <div class="backdrop">
                      <div class="">
                        <nuxt-img
                          class="mx-auto"
                          src="/img/homePage/stars.svg"
                        />
                        <div class="text-white text-xs font-serif">
                          <h1 class="w-min text-base -mt-1 mx-auto">5</h1>
                          <p class="w-min -mt-2 mx-auto">Star</p>
                          <p class="w-min -mt-1 mx-auto">Rating</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="h-1/2">
                <div v-for="point in points" :key="point" class="flex m-4">
                  <nuxt-img
                    class="border-2 border-[#80bd01] w-4 h-4 lg:w-8 lg:h-8 mr-2 lg:p-1"
                    src="/img/homePage/checked.svg"
                  />

                  <div class="text-lg leading-4">{{ point }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.backdrop {
  position: absolute;
  background-color: #326397;
  top: -5%;
  width: 27%;
  height: 65%;
  right: 10%;
  clip-path: polygon(0 0, 100% 0%, 100% 100%, 50% 85%, 0 100%);
}
.div-row {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
}

.slanted-div {
  width: 20%;
  height: 6rem;
  top: 0px;
  right: 1.8rem;
  background-color: #326397;
  position: relative;
}

.slanted-div::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: -15px;
  left: 0;
  background-color: #326397;
  clip-path: polygon(100% 0, 100% 100%, 50% 88%, 0 100%, 0 0);
}
</style>
