<template>
  <div class="">
    <div class="main_container">
      <div>
        <h4
          class="text-2xl pt-5 lg:w-[419px] font-serif text-white lg:text-5xl font-medium"
        >
          Achieve More <br />
          with IT
        </h4>
        <div
          class="border-t-4 rounded my-2 lg:my-5 border-[#80bd01] w-24"
        ></div>
        <h2
          class="lg:w-[419px] font-serif brightness-200 mb-2 lg:mb-5 text-white text-xl lg:h-36"
        >
          We work with our clients worldwide to maximize productivity,
          efficiency & security. Headquartered in Research Triangle Park (RTP),
          North Carolina.
        </h2>
        <h1
          class="lg:w-[419px] text-lg font-serif mb-2 lg:mb-5 text-white relative"
        >
          Integrity, transparency, and commitment are at the core of our
          business practices.
        </h1>
        <NuxtLink
          to="/about-us"
          type="button"
          class="items-center rounded-md border border-[#508617] bg-[#81BE41] px-4 py-2 text-base font-medium text-[#041230] shadow-sm hover:text-white hover:bg-[#508617]"
        >
          About Us
        </NuxtLink>
      </div>
      <div class="py-5">
        <img class="my-5 rounded-2xl" src="/microsoft.jpg" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.main_container {
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(27, 24, 24, 0.6)),
    url(@/public/img/homePage/image1.jpg);
  padding-left: 5%;
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(27, 24, 24, 0.6)),
      url(@/public/img/homePage/image1.jpg);
    height: 488px;
    color: white;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
}
</style>
