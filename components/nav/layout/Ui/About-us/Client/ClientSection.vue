<script setup lang="ts">
let data = [
  {
    heading: "Somahlution",
    content: {
      type: "paragraph",
      data: [
        {
          details:
            "Somahlution is a privately-held development-stage life science company focused on advancing the science of organ and surgical conduit transplantation. Its administrative headquarters is located in Fargo, North Dakota. Sam IT Solutions is responsible for managing their private cloud infrastructure, including Microsoft SharePoint, Microsoft Exchange, ActiveDirectory/Domain Controller, and also, their PCs, Networking and IT security.",
          link: "",
        },
      ],
    },
  },
  {
    heading: "Global Pharma Analytics",
    content: {
      type: "paragraph",
      data: [
        {
          details:
            "Global Pharma Analytics (GPA) is a cGMP contract analytical chemistry laboratory. GPA provides a wide range of professional services to support pharmaceutical, nutritional and specialty chemical companies. GPA is based in Jupiter, FL. Sam IT Solutions manages E-mail and collaboration platforms for GPA’s servers and PCs, including backup and disaster recovery.",
          link: "",
        },
      ],
    },
  },
  {
    heading: "Social and Health Insurance, St. Maarten",
    content: {
      type: "paragraph",
      data: [
        {
          details:
            "The Social and Health insurance agency of the Dutch Antilles on the island of St. Maarten, relies on Sam IT Solutions to provide off-site secure backup and disaster recovery, and other professional IT services to help develop its private cloud IT infrastructure for optimal delivery of services to its stakeholders. Sam IT Solutions is also engaged in a project to renovate its website to integrate it with the customer service portal.",
          link: "",
        },
      ],
    },
  },
  {
    heading: "Patagonia Health",
    content: {
      type: "paragraph",
      data: [
        {
          details:
            "Patagonia Health is an innovative company, based in Cary, NC, providing electronic medical records (EMR) software to its clients using a cloud based delivery model. Sam IT Solutions is responsible for planning and managing Patagonia Health’s private and secure, HIPAA and PCI compliant cloud infrastructure. In addition Sam IT Solutions manages the Firewall and IT security for Patagonia Health’s infrastructure.",
          link: "",
        },
      ],
    },
  },
];
</script>

<template>
  <div>
    <h1 class="text-5xl text-[#14141C] font-serif font-light mb-10">Clients</h1>
    <div class="mb-10 lg:mb-32" v-for="content in data">
      <h1
        class="text-[#14141c] my-5 text-xl lg:text-4xl font-serif font-normal w-fit px-2 mx-auto border-r-4 rounded-sm border-[#80bd02]"
      >
        {{ content.heading }}
      </h1>
      <p
        v-for="data in content.content.data"
        class="m-auto my-5 text-[#7a7a7a] text-sm"
      >
        {{ data.details }}
      </p>
    </div>
    <NavLayoutUiAboutUsClientClientsList></NavLayoutUiAboutUsClientClientsList>
  </div>
</template>
