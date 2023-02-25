<script setup>
const crumbs = [
  { name: "Services", href: "/services", current: false },
  {
    name: "Software Development",
    href: "/services/it-consulting-relocation-services",
    current: true,
  },
];
const data = {
  section: "Software Consulting & Development",
  content: [
    {
      heading: "Custom Application Development",
      paragraph: [
        "Many times, prospective clients come to us with unique challenges that simply don’t fit with out-of-the-box solutions. If you have a problem where a cookie-cutter approach simply won’t do, we can work with you to create an efficient solution using the technology and platform best suited to getting the job done in the most proficient manner. Our on-shore and off-shore software development teams have diverse programming experience, including LAMP stack, ASP.NET, Python, RoR, PostgreSQL and non-SQL databases. In the end, SAM IT Solutions will ensure that you have a quality solution to your problem at a very competitive price.",
      ],
    },
    {
      heading: "ERP Solutions",
      paragraph: [
        "Our ERP software-development team can create integrated business management software, based on global leader in the open source ERP systems, oodo, formerly OpenERP. Our ERP software delivers competitive advantage for your business. We can create a system that can handle daily activities like inventory tracking and notifications with ease and efficiency. Our ERP software system will help you manage every aspect of your business, all in one place.",
      ],
    },
  ],
};
</script>
<template>
  <div class="mx-36">
    <div class="mb-9 mt-24">
      <LazyNavLayoutUiCommonBreadcrumbs
        :pages="crumbs"
      ></LazyNavLayoutUiCommonBreadcrumbs>
    </div>
    <NavLayoutUiServicesProgress></NavLayoutUiServicesProgress>
    <NavLayoutUiCommonIntro :data="data"></NavLayoutUiCommonIntro>
  </div>
</template>
