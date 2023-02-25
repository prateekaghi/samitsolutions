<script setup>
const crumbs = [
  { name: "Services", href: "/services", current: false },
  {
    name: "Web Design",
    href: "/services/it-consulting-relocation-services",
    current: true,
  },
];
const data = {
  section: "Web Design",
  content: [
    {
      heading: "A Commitment to Intelligence, Excellence, and Diligence",
      paragraph: [
        "The success of your business rests on your ability to effectively communicate what you do and how you do it. A strong web presence, centered on a dynamic website, is perhaps the most effective strategy of marketing communications, but most business owners have neither the time nor the resources and training to build a site worthy of their business and the clients they serve. At SAM IT Solutions, we provide first-class web design services with an elite team of professional designers, highly-skilled programmers, and experienced managers, led by Dr. Samudra Vijay, an industry leader in the field of information technology solutions. Our success is the result of industry intelligence coupled with a hunger for client satisfaction. Sam IT Solutions follows a time-tested set of design and optimization principles focused on creating global awareness for the products and services of our diverse group of clients. The needs of our clients, who range from physician specialists to product development firms, demand that we stay on the absolute cutting edge of web technology and provide site designs that allow for a dynamic, ever-changing business culture. We bring value to our clients month after month, as we build sites that we continuously enhance to better convey our clients’ products and services for the clients they seek to reach. In short, our services to our clients adapt as their needs continue to evolve. Our world-class design and programming team utilizes multiple fields of expertise to consistently deliver the highest level of client satisfaction:",
      ],
      list: [
        "Professional, elegant, and eye-catching site layout and design",
        "Value-added business solutions",
        "Graphic design software, including Flash Mx, 3D Studio, Adobe Photoshop and Dreamweaver",
        "Technology platforms, including .NET, ASP, JSP, and XML",
        "Database technology, including SQL Server, Oracle, and MySQL",
        "Programming languages, including C, C++, and .NET",
      ],
    },
    {
      paragraph: [
        "While we strive for a very high wow-factor with our initial site design, Sam IT really proves its value over the long run of the client relationship. Our ongoing support is available six days per week, in order to meet our clients’ needs efficiently and effectively.",
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
