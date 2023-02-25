<script setup>
const crumbs = [
  { name: "Services", href: "/services", current: false },
  {
    name: "ITSM Implementation",
    href: "/services/itsm-implementation",
    current: true,
  },
];
const data = {
  section: "ITSM Implementation",
  content: [
    {
      heading: "Maximize Returns from Service Now Implementation",
      paragraph: [
        "SAM IT has experience in ITSM, GRC & Security Ops domains using ServiceNow. We help customers with their ServiceNow implementation, workflow setup and support. Our agile methodology of ServiceNow implementation offers great flexibility to changing requirements.",
      ],
    },
    {
      heading: "Our ServiceNow Offering",
      paragraph: [],
      list: [
        "ITSM , GRC & Security Consulting",
        "CMDB Configuration",
        "ServiceNow Implementation",
        "ServiceNow Testing",
        "ServiceNow Training",
        "ServiceNow Administration",
        "Process Automation",
        "ServiceNow Integration",
      ],
    },
    {
      heading:
        "On demand ServiceNow expert for Full Service Life-cycle Management",
      paragraph: [],
      list: [
        "ServiceNow subject matter experts who are familiar with ITSM, GRC, and Security available for consulting services.",
        "Fully managed ServiceNow administrative assistance for your Service Desk.",
      ],
    },
  ],
};
</script>
<template>
  <div>
    <div class="mx-36">
      <div class="mb-9 mt-24">
        <NavLayoutUiCommonBreadcrumbs
          :pages="crumbs"
        ></NavLayoutUiCommonBreadcrumbs>
      </div>
    </div>
    <div class="mx-36">
      <NavLayoutUiServicesProgress></NavLayoutUiServicesProgress>
      <NavLayoutUiCommonIntro :data="data"></NavLayoutUiCommonIntro>
    </div>
  </div>
</template>
