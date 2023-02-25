<script setup lang="ts">
let data = [
  {
    heading: "",
    content: {
      type: "list",
      data: [
        {
          details: [
            "Nuron Biotech, PA",
            "Optimus Urgent Care, Greensboro, NC",
            "New Century Ophthalmology, Oxford, NC",
            "Wake Spine and Pain, Raleigh, NC",
            "Wake ENT, Cary, NC",
            "Cary Pulmonary and Sleep Clinic, Cary, NC",
            "Midwest Sleep Medicine Consultants, Cincinnati, OH",
            "Cognitive Psychiatry of Chapel Hill, Chapel Hill, NC",
            "ZafeSoft, Inc. CA",
            "Carolina Vascular Wellness, PLLC, Cary, NC",
          ],
          link: "",
        },
      ],
    },
  },
];
</script>

<template>
  <h1
    class="text-2xl lg:text-5xl text-[#14141C] font-serif font-light mb-2 lg:mb-10"
  >
    More Clients
  </h1>
  <div v-for="details in data" class="mb-10 lg:mb-32 lg:w-11/12 bg-[#f2f2f2]">
    <div v-for="detailss in details.content.data">
      <ul v-for="detail in detailss">
        <li
          class="text-[#7a7a7a] p-0.5 lg:p-1 text-sm mx-5 list-disc"
          v-for="list in detail"
        >
          {{ list }}
        </li>
      </ul>
    </div>
  </div>
</template>
