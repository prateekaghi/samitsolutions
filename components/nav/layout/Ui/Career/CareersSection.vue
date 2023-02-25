<script setup lang="ts">
let data = [
  {
    heading: "About Sam IT Solutions",
    content: {
      type: "paragraph",
      data: [
        {
          details:
            "Sam IT Solutions is a professional information technology consulting and engineering firm. We have been delivering high-value IT solutions to healthcare practices and other businesses for over 5 years. Professional, timely service and excellence in design and delivery of highly reliable networking solutions have distinguished Sam IT Solutions as a leader in our field. At Sam IT Solutions, we provide IT support, business process analysis, first-class web design, software design, and hosting solutions. We comprised of an elite team of professional designers, highly-skilled programmers, and experienced managers. Our success is the result of industry intelligence coupled with a hunger for client satisfaction.",
          link: "",
        },
      ],
    },
  },
  {
    heading: "SAM IT Solutions Offers:",
    content: {
      type: "list",
      data: [
        "Competitive salary and benefits",
        "Challenging positions with opportunities for career growth",
        "Headquarters in Cary, North Carolina",
      ],
    },
  },
  {
    heading: "",
    content: {
      type: "paragraph",
      data: [
        {
          details:
            "SAM IT Solutions provides equal employment opportunities to all employees and applicants for employment without regard to race, color, religion, gender, sexual orientation, national origin, age, disability, marital status, amnesty or status as a covered veteran in accordance with applicable federal, state and local laws.",
          link: "",
        },
      ],
    },
  },
  {
    heading: "",
    content: {
      type: "paragraph",
      data: [
        {
          details: "Please email your resume to:",
          link: "careers@samitsolutions.com",
        },
      ],
    },
  },
];
</script>

<template>
  <h1 class="text-5xl text-[#14141C] font-serif font-light mb-10">Careers</h1>
  <div class="mb-32">
    <h3
      class="lg:text-4xl tracking-tight text-[#474747] font-serif font-normal sm:text-4xl"
    >
      IT Jobs
    </h3>
    <div class="border-t-2 my-5 border-[#80bd01] w-12"></div>
    <div class="mb-5 text-[#7a7a7a]" v-for="content in data">
      <h2 class="mt-5 mb-2 font-bold text-lg">
        {{ content.heading }}
      </h2>
      <div v-if="content.content.type === 'paragraph'">
        <p v-for="data in content.content.data" class="text-sm">
          {{ data.details }}
          <span class="text-[#0d6efd]" v-if="data.link"
            ><a href="mailto:data.link">{{ data.link }}</a></span
          >
        </p>
      </div>
      <div class="mb-5" v-if="content.content.type === 'list'">
        <ul v-for="data in content.content.data">
          <li class="list-disc ml-5 text-sm">{{ data }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
