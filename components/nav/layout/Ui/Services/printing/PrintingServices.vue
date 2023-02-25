<script setup>
import { Icon } from "@steeze-ui/vue-icon";
import { MinusSquare, PlusSquare } from "@steeze-ui/feather-icons";
let data = reactive({});
let show = (data, content) => {
  data.forEach((e) => {
    e.show = false;
  });
  content.show = true;
};
let hide = (content) => {
  data.value.forEach((e) => {
    e.show = false;
  });
  content.show = false;
};

onMounted(() => {
  data.value = [
    {
      mainHeading: "BUSINESS CARDS",
      ImageUrl: "/img/services/businesscards1.jpg",
      data: [
        {
          Heading: "Completely Unique",
          data: "Our team of designers and marketing experts work hard to create a business card that fully captures your brand’s unique brand identity, thus creating completely unique designs that are exclusive to your brand.",
          show: false,
        },
        {
          Heading: "Fully Customizable",
          data: "Every aspect of your design can be customized and tweaked to your exact specifications, so that you can be proud of the design that represents your business and yourself.",
          show: false,
        },
        {
          Heading: "High Quality Material ",
          data: "We only print your design on the highest quality paper, so that it lasts long on your desk or in your customer’s wallet. It won’t wither or wrinkle like some business cards on thinner paper may do.",
          show: false,
        },
        {
          Heading: "Professional Appearance",
          data: "Design isn’t easy, but our team of professionals can ensure that your business card will look professional and clean, without losing the personality of your brand. It’s important to put your best foot forward.",
          show: false,
        },
        {
          Heading: "Digital Integration ",
          data: "If you choose to do so, we can even add a QR code to your business card, so that your clients can scan it to lead them to your website, your facebook page, your online menu, or more!",
          show: false,
        },
        {
          Heading: "Brand Consistency  ",
          data: "If you choose to use SAM IT Solutions for multiple of your marketing needs, we can ensure brand consistency between your business cards and your brand’s other marketing materials, like the website or ads.",
          show: false,
        },
      ],
    },
    {
      mainHeading: "COUPONS",
      ImageUrl: "/img/services/Coupons.jpg",
      data: [
        {
          Heading: "Thorough and Clear ",
          data: "For coupons, phrasing and wording is an incredibly meticulous task, but our team of experts can work with you to ensure thoroughness and clarity in your message.",
          show: false,
        },
        {
          Heading: "Exclusive and Personalized",
          data: "Like all of our marketing tools, your coupons can be fully customized to your exact specifications and will be expertly crafted exactly to fit your unique brand- identity, thus making for unique and creative designs.",
          show: false,
        },
        {
          Heading: "Smart Assimilation",
          data: "We can allow for scannable features or unique digital footprints, so that your coupons can be better tracked, when they are in circulation.",
          show: false,
        },
        {
          Heading: "Digital Consistency",
          data: "If you want to have both print and digital versions of your coupons, we can create both in unison ensuring that they are consistent and clean, regardless of their platform.",
          show: false,
        },
        {
          Heading: "Superior Material",
          data: "We print your coupons on high quality paper that represent you and your brand with the class and professionalism that suits your brand.",
          show: false,
        },
        {
          Heading: "Promotion Optimization",
          data: "If you are using SAM IT Solutions for multiple of your marketing needs and are choosing to have a promotion, we can optimize this by adding consistent advertisements on your website, in your social media posts, and elsewhere.",
          show: false,
        },
      ],
    },
    {
      mainHeading: "MENUS",
      ImageUrl: "/img/services/Menu.jpg",
      data: [
        {
          Heading: "Persuasive Content",
          data: "A menu should not only list the items, but also make them sound as appetizing as possible, so we can write descriptive content that truly paints a picture of the food, if you do not already have content.",
          show: false,
        },
        {
          Heading: "Style Variety",
          data: "here are a few different styles of printed menus, from single pages and flyers to tri-folds and booklets, but we provide you with the options and work with you to determine and decide what will work best for your brand.",
          show: false,
        },
        {
          Heading: "Touch-less Option",
          data: "Touch-less menus are becoming more and more popular, and whether you want to add a QR code to your printed menus or replace your menu altogether with a digital version, we can work with you to create the best design for print and digital.",
          show: false,
        },
        {
          Heading: "Menu Uniformity",
          data: "Whether you need multiple menus or want both a printed and digital version, we can ensure that the menus we create will look uniform and consistent, representing your brand clearly and cleanly.",
          show: false,
        },
        {
          Heading: "Expert Design",
          data: "Our team has ample experience in creating menus and will account for your design preferences as well, creating a design that represents your brand to the exact specifications you desire.",
          show: false,
        },
        {
          Heading: "Personality",
          data: "With expertise in both professionalism and personality, we can balance the two to give you a menu of professional quality and appearance, without losing your brand’s personality.",
          show: false,
        },
      ],
    },
    {
      mainHeading: "LOGOS",
      ImageUrl: "/img/services/Logos.jpg",
      data: [
        {
          Heading: "Complete Integration",
          data: "If you are using SAM IT Solutions for multiple of your marketing needs, we can put your logo on everything and ensure that it is completely adaptable to all of the other platforms and materials that we create.",
          show: false,
        },
        {
          Heading: "Creative and Unique",
          data: "Your logo is often the first thing that a potential client sees about you, so it is important to put a lot of care into it. We can make creative and unique designs that help your business stand out from the competition.",
          show: false,
        },
        {
          Heading: "Tailor- Made",
          data: "Your logo will be tailor- made to your exact specifications, so you can be confident in presenting yourself exactly as you wish to. We can even provide you with multiple drafts to choose from, so you can customize every aspect of it.",
          show: false,
        },
        {
          Heading: "Charming",
          data: "A picture is worth a thousand words and a logo is worth your brand, so we work hard to capture the exact likeness and charm of your brand and represent who your brand is through your logo.",
          show: false,
        },
        {
          Heading: "Masterful Work",
          data: "Balancing professional with fun and simple with complex is not an easy feat, but our team of experts can strike that perfect balance to bring your vision to life in a way that is practical and usable.",
          show: false,
        },
        {
          Heading: "Options",
          data: "With multiple areas of expertise in style, we can provide you with options to choose from, varying in color, style, impression, and anything else.",
          show: false,
        },
      ],
    },
    {
      mainHeading: "BANNERS",
      ImageUrl: "/img/services/Banners.jpg",
      data: [
        {
          Heading: "Range of Types",
          data: "Banners can be used for many purposes and displayed in many ways, but we provide a vast range of types so you can choose what works best for your brand’s unique purposes.",
          show: false,
        },
        {
          Heading: "Photo- Ready",
          data: "Making a display piece like a banner requires an extra amount of attention. Not only must it be informative, but it also has to be aesthetic and beautiful. We can strike that balance and create a banner you will be proud to take photos with.",
          show: false,
        },
        {
          Heading: "Perfectly Original",
          data: "Your banner will be originally created for your brand to encompass your unique brand personality, giving you a banner like none other.",
          show: false,
        },
        {
          Heading: "Individualized",
          data: "You can add your input to any aspect of your banner, making sure that it is customized to your specific wants and represents your brand as perfectly as possible.",
          show: false,
        },
        {
          Heading: "Efficient",
          data: "We work with you to get your design planned, created, finalized, approved, and printed as efficiently as possible without sacrificing on the quality of work that we produce for your brand.",
          show: false,
        },
        {
          Heading: "Excellent Material",
          data: "We print our banners on high- quality material that can withstand wear, time, the weather, and even some staining, to ensure that your banner stays as beautiful as the day it was delivered.",
          show: false,
        },
      ],
    },
  ];
});

const steps = [
  { name: "Step 1", href: "#", status: "complete" },
  { name: "Step 2", href: "#", status: "current" },
  { name: "Step 3", href: "#", status: "upcoming" },
  { name: "Step 4", href: "#", status: "upcoming" },
];
</script>

<template>
  <div class="border-b-2 mb-5 border-[#81BE40]">
    <div
      v-for="data in data.value"
      class="grid grid-cols-2 my-5 border-t-2 border-[#81BE40]"
    >
      <div class="relative p-2.5 h-[397px]">
        <div>
          <nuxt-img :src="data.ImageUrl" />
        </div>
        <a class="prev" onclick="plusSlides(-1)">❮</a>
        <a class="next" onclick="plusSlides(1)">❯</a>
        <div style="text-align: center">
          <span class="dot" onclick="currentSlide(1)"></span>
          <span class="dot" onclick="currentSlide(2)"></span>
        </div>
      </div>
      <div class="p-2.5 [#81BE40] h-[397px]">
        <h1 class="text-2xl font-serif mb-4 text-[#81BE40]">
          {{ data.mainHeading }}
        </h1>
        <div v-for="content in data.data">
          <div class="flex mb-2 text-lg font-medium">
            <Icon
              @click="hide(content)"
              v-if="content.show"
              :src="MinusSquare"
              class="ml-1 mr-1 flex-shrink-0 self-center h-5 w-5 text-[#81BE40]"
              aria-hidden="true"
            /><Icon
              v-else
              @click="show(data.data, content)"
              :src="PlusSquare"
              class="ml-1 mr-1 flex-shrink-0 self-center h-5 w-5 text-[#81BE40]"
              aria-hidden="true"
            />{{ content.Heading }}
          </div>
          <div v-if="content.show" class="animate-fade ml-10 mb-5 -z-10">
            {{ content.data }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}
.dot {
  cursor: pointer;
  height: 10px;
  width: 10px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}
</style>
