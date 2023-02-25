<script setup>
const crumbs = [
  { name: "Services", href: "/services", current: false },
  {
    name: "IT Support Solutions",
    href: "/services/it-consulting-relocation-services",
    current: true,
  },
];
const data = {
  section: "IT Support Solutions",
  content: [
    {
      heading: "IT Helpdesk & Support",
      paragraph: [
        "Outsource your IT helpdesk and support function to the experts at SAM IT Solutions so you can focus on your core business activities. We can provide remote and on-site IT helpdesk 24 hours a day, 365 days a year, or for a traditional business week, 8 hours a day, 5 days a week, 52 weeks a year to match the needs of your business and its customer base.",
      ],
      list: [
        "24/7 Helpdesk Support",
        "Online Ticketing System",
        "Service Level Agreements",
        "Wifi Support",
        "VOIP Solutions",
        "HIPAA Compliant Support",
        "Backup and Data Recovery",
      ],
    },
    {
      heading: "PC & Server Management",
      paragraph: [
        "SAM IT Solutions can monitor your PCs, Servers, and Network for any security vulnerabilities, virus attacks, unauthorized access attempts and operating system updates. Our proactive management of your IT assets will help you reduce downtime and stay productive. Protecting your assets with SAM IT Solutions creates more time for you to focus on winning business. PC and Server Management Support Includes:",
      ],
      list: [
        "Local and International Hosting",
        "24/7 Support",
        "HIPAA Compliant Support",
        "Turnkey Projects (EMR/ERP Implementations, AD Environment Configuration,etc.)",
        "Data Replication",
        "Disaster Recovery Planning",
      ],
    },
    {
      heading: "Network Security & Firewall Management",
      paragraph: [
        "In the age of technology, network security is perhaps the greatest challenge businesses of all sizes face. At SAM IT Solutions, we can help you keep intruders out by proactive management of your firewall and network security devices. Our engineers are experts in managing devices from leading providers such as Fortigate, Cisco, Netgear, and Sonicwall. Let us keep your network secure – be safe, not sorry! SAM IT Solutions is the ultimate line of defense against cyber-attack.",
      ],
      list: [
        "Penetration Testing",
        "Live Security Management",
        "Quarterly Security Reviews",
        "Project Based Implementations (VPN setup and maintenance, White Hat Hacking for Penetration Testing, etc.)",
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
