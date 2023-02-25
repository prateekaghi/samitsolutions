<script setup>
let data = [
  {
    year: "2021",
    achivement:
      "Cybersecurity Team obtained CISSP certifications and completed SmartCity/SmartParks IoT projects",
  },
  {
    year: "2020",
    achivement: "Expanded Software Design & Development Services and Team",
  },
  { year: "2019", achivement: "Moved to a self-owned building in RTP" },
  { year: "2018", achivement: "Expanded Cloud Infrastructure to India" },
  {
    year: "2017",
    achivement: "Acquired Microsoft Gold Partnership Competency",
  },
  { year: "2016", achivement: "Became Microsoft Cloud Service Advisor" },
  {
    year: "2014",
    achivement: "Added Software Development Services to Portfolio",
  },
  { year: "2013", achivement: "Became Google Business Partner/Reseller" },
  { year: "2012", achivement: "Launched Cloud Infrastructure Services" },
  { year: "2011", achivement: "Morphed into a Managed IT Services Company" },
  {
    year: "2009",
    achivement:
      "Incorporated in NC to provide Analytics and Energy Modeling Solutions",
  },
];
</script>

<template>
  <!-- <div class="hidden lg:block">
    <h1 class="font-light text-[#424242] font-serif text-5xl">
      Company Milestones
    </h1>
    <div class="border-t-4 my-6 rounded border-[#80bd01] w-24"></div>
    <div
      class="grid h-20 grid-cols-3 sm:grid-cols-2 divide-x-4 divide-[#d6d6d6]"
    >
      <div class="relative">
        <div
          class="triangle absolute -right-[22px] -top-1 bg-[#d6d6d6] border-[#d6d6d6] w-10 h-5"
        ></div>
      </div>
      <div></div>
    </div>
    <div v-for="(entry, index) in data">
      <div
        :key="entry.year"
        v-if="index % 2 === 0"
        class="grid h-40 grid-cols-3 sm:grid-cols-2 divide-x-4 divide-[#d6d6d6]"
      >
        <div class="relative">
          <div class="flex justify-end">
            <h6
              class="top-4 absolute mr-10 text-[#d6d6d6] font-bold text-sm lg:text-2xl"
            >
              {{ entry.year }}
            </h6>
          </div>
          <div
            class="absolute -right-6 bg-[#80bd01] rounded-full border-[#d6d6d6] border-4 w-10 h-10 top-4"
          ></div>
        </div>
        <div class="">
          <div class="mx-5 relative">
            <h6
              id="speech-bubble"
              class="text-xs sm:text-sm lg:text-2xl absolute top-4 text-[#80bd01] font-bold mx-5 px-2"
            >
              {{ entry.achivement }}
            </h6>
          </div>
        </div>
      </div>
      <div
        :key="entry.year"
        v-if="index % 2 !== 0"
        class="grid h-40 grid-cols-3 sm:grid-cols-2 divide-x-4 divide-[#d6d6d6]"
      >
        <div class="relative">
          <div class="mx-5 relative">
            <h6
              id="speech-bubble-left"
              class="text-2xl absolute top-4 text-[#80bd01] font-bold mx-5 px-2"
            >
              {{ entry.achivement }}
            </h6>
          </div>
          <div
            class="absolute -right-6 bg-[#80bd01] rounded-full border-[#d6d6d6] border-4 w-10 h-10 top-4"
          ></div>
        </div>
        <div class="">
          <div class="flex">
            <h6 class="top-4 ml-10 text-[#d6d6d6] font-bold text-2xl">
              {{ entry.year }}
            </h6>
          </div>
        </div>
      </div>
    </div>
    <div
      class="grid h-20 grid-cols-3 sm:grid-cols-2 divide-x-4 divide-[#d6d6d6]"
    >
      <div class="relative">
        <div
          class="circle absolute -right-[22px] bottom-0 bg-[#d6d6d6] border-[#d6d6d6] w-10 h-10"
        ></div>
      </div>
      <div></div>
    </div>
  </div> -->
  <div class="">
    <h1 class="font-light text-[#424242] font-serif text-5xl">
      Company Milestones
    </h1>
    <div class="border-t-4 my-6 rounded border-[#80bd01] w-24"></div>
    <div
      class="grid h-20 grid-cols-3 sm:grid-cols-2 divide-x-4 divide-[#d6d6d6]"
    >
      <div class="relative">
        <div
          class="triangle absolute -right-[22px] -top-1 bg-[#d6d6d6] border-[#d6d6d6] w-10 h-5"
        ></div>
      </div>
      <div></div>
    </div>
    <div v-for="(entry, index) in data">
      <div
        :key="entry.year"
        class="grid h-40 grid-cols-3 sm:grid-cols-2 divide-x-4 divide-[#d6d6d6]"
      >
        <div class="relative">
          <div class="flex justify-end">
            <h6
              class="top-4 absolute mr-10 text-[#d6d6d6] font-bold text-sm lg:text-2xl"
            >
              {{ entry.year }}
            </h6>
          </div>
          <div
            class="absolute -right-6 bg-[#80bd01] rounded-full border-[#d6d6d6] border-4 w-10 h-10 top-4"
          ></div>
        </div>
        <div class="">
          <div class="mx-5 relative">
            <h6
              id="speech-bubble"
              class="text-xs sm:text-sm md:text-base xl:text-2xl absolute top-4 text-[#80bd01] font-bold mx-5 px-2"
            >
              {{ entry.achivement }}
            </h6>
          </div>
        </div>
      </div>
    </div>
    <div
      class="grid h-20 grid-cols-3 sm:grid-cols-2 divide-x-4 divide-[#d6d6d6]"
    >
      <div class="relative">
        <div
          class="circle absolute -right-[22px] bottom-0 bg-[#d6d6d6] border-[#d6d6d6] w-10 h-10"
        ></div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<style scoped>
#speech-bubble {
  box-shadow: 1px 1px 0 2px #d6d6d6;
  padding: 10px;
  border-left: 4px solid #80bd01;
  background: white;
  position: absolute;
  left: 10px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 10px;
}
#speech-bubble:before {
  content: "";
  position: absolute;

  border-top: 13px solid transparent;
  border-right: 26px solid #80bd01;
  border-bottom: 13px solid transparent;
  margin: 0px 0 0 -36px;
}
#speech-bubble-left {
  box-shadow: 1px 1px 0 2px #d6d6d6;
  padding: 10px;
  border-right: 4px solid #80bd01;
  background: white;

  position: absolute;
  left: 10px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 10px;
}
#speech-bubble-left:before {
  content: "";
  position: absolute;

  border-top: 13px solid transparent;
  border-left: 26px solid #80bd01;
  border-bottom: 13px solid transparent;
  margin: 0px 0 0 475px;
}

.triangle {
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
.circle {
  clip-path: circle(50% at 50% 50%);
}
</style>
