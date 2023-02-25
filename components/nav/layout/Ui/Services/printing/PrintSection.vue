<script setup lang="ts">
let data = [
  {
    heading: "",
    content: {
      type: "paragraph",
      data: "Though digital advertising is most definitely the future, print marketing still plays a vital role in establishing your business’s identity. It gives your audience tangible materials, like business cards, to help form their impression.",
    },
  },
  {
    heading: "",
    content: {
      type: "list",
      data: "It increases brand awareness.",
    },
  },
  {
    heading: "",
    content: {
      type: "list",
      data: "It reaches audiences that may have not been otherwise reached through online marketing.",
    },
  },
  {
    heading: "",
    content: {
      type: "list",
      data: "Print marketing has a higher ROI than digital marketing.",
    },
  },
  {
    heading: "",
    content: {
      type: "list",
      data: "It can form lasting impressions on those who may hold onto pieces of printed marketing.",
    },
  },
  {
    heading: "",
    content: {
      type: "paragraph",
      data: "We specialize in five main categories of print marketing: business cards, coupons, menus, logos, and banners. With personalized branding, quality content, and expert design, you can be confident that your business is putting its best foot forward.",
    },
  },
  {
    heading: "HOW IT WORKS",
    content: {
      type: "orderlist",
      data: [
        "After you place your order, our team of experts will get in touch with you.",
        "We will create a simple, professional, and optimized design unique to your brand identity.",
        "You will get to review the design and request any changes if you wish to do so.",
        "After the design has been approved, you will receive your order within 7-10 business days.",
      ],
    },
  },
];
</script>

<template>
  <div>
    <h1 class="text-[#81BE40] font-semibold text-5xl w-fit m-auto font-serif">
      Premium Printing Services
    </h1>
    <div class="mt-5" v-for="content in data">
      <h1
        class="text-2xl text-[#333] mb-5 font-medium font-serif"
        v-if="content.heading"
      >
        {{ content.heading }}
      </h1>
      <p
        v-if="content.content.type === 'paragraph'"
        class="text-[#7a7a7a] text-lg font-serif mb-5"
      >
        {{ content.content.data }}
      </p>
      <ul v-if="content.content.type === 'list'">
        <li class="ml-5 list-disc text-[#7a7a7a] text-lg font-serif mb-5">
          {{ content.content.data }}
        </li>
      </ul>
      <div v-if="content.content.type === 'orderlist'">
        <ol>
          <li
            v-for="list in content.content.data"
            class="ml-5 list-decimal text-[#7a7a7a] text-lg font-serif mb-5"
          >
            {{ list }}
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>
