<script setup>
const crumbs = [
  { name: "Services", href: "/services", current: false },
  {
    name: "IT Consulting & Relocation Services",
    href: "/services/it-consulting-relocation-services",
    current: true,
  },
];

const data = {
  section: "IT Consulting & Relocation Services",
  content: [
    {
      heading: "IT Infrastructure Planning",
      paragraph: [
        "Starting a new business or setting up a new site can be challenging. At SAM IT Solutions, we pride ourselves on taking the burden of planning and implementing your IT infrastructure away, allowing you to focus on the other key aspects of running your business. Our IT infrastructure planning solution is comprehensive and covers planning for network drops, wireless access points, network and physical security, servers and authentication of users.",
      ],
    },
    {
      heading: "Technology Deployment Services",
      paragraph: [
        "Let our trained technical staff be your reliable feet on the street for rapid technology deployment across the country. Our trained technical staff can help you deploy technology solutions, including Networking, Wireless Solutions, Data Center, POS, Servers, Desktops, Printers, PBX Systems, and more. Our trained project managers will ensure we execute your projects on schedule, keeping you up-to-date on any deviations along the way.",
      ],
    },
    {
      heading: "VoIP Business Telephone Systems/Telecom/Fax",
      paragraph: [
        "A Landline phone system is costly to maintain and may not give you all the flexibility you need. To use VoIP technology, you only need an Internet connection, sound card, speakers, microphone, and low-cost software. With VoIP phone technology we can help you cut the cost of your phone system, while adding many useful features. We can help you integrate your phone system with other applications like e-mail or customer database, so next time you get a call from a customer, your computer system can have all the information ready. Also, with VoIP you can set up a conference room, with your entire team having a conversation in real time. You can also call abroad anywhere, get contact lists, login to your VoIP account remotely and much more!",
      ],
    },
    {
      heading: "IT Relocation Services",
      paragraph: [
        "Moving to a new location involves moving your entire computer system and cabling. Re-organizing the entire IT network at a new location can be quite a challenge. SAM IT can help. We are able to re-install your hardware safely and efficiently. We can also migrate your email, websites, and applications.",
      ],
      list: [
        "Planning and reviewing the data and voice drops.",
        "Coordinating with the low-voltage contractor and vendors for appropriate number of ports and their location.",
        "IT closet/Server room planning – includes Patch Panel specifications, demarc connections for voice/data.",
        "Identifying primary and secondary/backup vendor for Internet.",
        "Coordinating with Internet vendor for install.",
        "Identifying phone vendor and helping select the PBX and phone system for the new location.",
        "Ordering the equipment to arrive in time.",
        "Ensuring configuration of the equipment to work with PBX.",
        "Helping set-up PBX/call routing based on business rules.",
        "Recommend and help procure IT equipment.",
      ],
    },
  ],
};
</script>
<template>
  <div class="mx-36">
    <div class="mb-9 mt-24">
      <NavLayoutUiCommonBreadcrumbs
        :pages="crumbs"
      ></NavLayoutUiCommonBreadcrumbs>
    </div>
    <NavLayoutUiServicesProgress></NavLayoutUiServicesProgress>
    <NavLayoutUiCommonIntro :data="data"></NavLayoutUiCommonIntro>
  </div>
</template>
