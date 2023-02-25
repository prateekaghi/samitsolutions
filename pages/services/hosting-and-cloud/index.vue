<script setup>
const crumbs = [
  { name: "Services", href: "/services", current: false },
  {
    name: "Hosting and Cloud",
    href: "/services/hosting-and-cloud",
    current: true,
  },
];
const data = {
  section: "Hosting and Cloud",
  content: [
    {
      heading: "Cloud Hosting Services and Solutions",
      paragraph: [
        "SAM IT Solutions—your hosts with the most! Our services include Virtual Private Cloud, Application Hosting, Microsoft Exchange Hosting, SharePoint Hosting and Website Hosting. You will enjoy the peace of mind that comes from knowing that all your important business information is stored safely within SAM IT Solutions’ SSAE16-compliant, PCI and HIPAA compliant data-centers.  ",
      ],
    },
    {
      heading: "Local & Cloud Backup",
      paragraph: [
        "Backup – you don’t need it, until you need it. And when you need it, you REALLY need it! Local backup is the key to rapid restoration of any critical files deleted accidentally or lost due to a hardware failure. Should disaster strike your local site, our backup solutions combine the high speed and ease of local backup, with the peace of mind that an off-site cloud backup provides.",
      ],
    },
    {
      heading: "Off-site Disaster Recovery & Planning",
      paragraph: [
        "SAM IT Solutions can ensure the safety of your priceless data assets by creating and managing your backups, hosting your website and applications and storing your database systems. Should the unthinkable occur, and you lose most or all of your data, SAM IT Solutions will have you back up and running quickly with a minimum interruption of your business. You can rest easy with a SAM IT Solutions’ Backup and Disaster Recovery plan.",
      ],
    },
    {
      heading: "Backup FAQ’s",
      paragraph: [
        "There are multiple facets to consider when selecting a backup solution, such as:",
      ],
      list: [
        "How often should the backup occur? Daily, Weekly, Monthly.",
        "What type of backup should be implemented? Full, Incremental, Differential, or Combination.",
        "What actually needs to be backed up?",
      ],
    },
    {
      heading: "",
      paragraph: [
        "Then there is the question of storage, how far back to do you want to keep your backups for? Fill out the form below and we’ll be in touch.",
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
