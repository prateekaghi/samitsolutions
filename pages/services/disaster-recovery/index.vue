<script setup>
const crumbs = [
  { name: "Services", href: "/services", current: false },
  {
    name: "Disaster Planning & Recovery",
    href: "/services/disaster-recovery",
    current: true,
  },
];

const data = {
  section: "Disaster Recovery",
  content: [
    {
      heading: "",
      paragraph: [
        "Will Your Business Stay Up-and-Running if IT Disaster Happens? SAM IT can ensure your asset safety by creating and managing your backups, hosting your website and applications and storing your database system.",
      ],
    },
    {
      heading: "",
      paragraph: ["We Can Provide You With:"],
      list: [
        "Basic disaster training",
        "A custom disaster manual for your business",
        "A site map with port, phone, and PC’s descriptions",
      ],
    },
    {
      heading: "",
      paragraph: [
        "Prepare Your Business for Power and Internet Outage",
        "Planning for an Internet outage and setting up protocols and procedures for business continuity ",
        "Planning for and implementing a UPS for 15-min brown and blackouts",
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
    <div class="flex">
      <NavLayoutUiServicesProgress /><NavLayoutUiServicesCarousel />
    </div>
    <NavLayoutUiCommonIntro :data="data"></NavLayoutUiCommonIntro>
  </div>
</template>
