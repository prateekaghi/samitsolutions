<template>
  <div class="bg-white">
    <div class="py-5 lg:py-16 px-4 lg:px-8">
      <div class="mx-auto lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
        <div>
          <h3
            class="mt-2 lg:text-5xl font-light font-serif leading-8 text-gray-900 text-4xl"
          >
            We Are <br />
            SAM IT Solutions
          </h3>
          <div class="border-t-2 mt-2 border-[#80bd01] w-20"></div>
          <div class="mt-5 lg:mt-8">
            <div class="mx-auto text-base lg:max-w-none">
              <p class="text-sm font-sans text-[#666]">
                SAM IT Solutions was founded in 2009 in Morrisville, NC, and is
                currently headquartered in Durham, NC, USA, providing services
                to its clients all across the US and beyond. The company was
                born with the mission of providing secure IT services to
                businesses in an effort to help them achieve efficiency and
                organizational success.
              </p>
            </div>
            <div class="mx-auto text-sm mt-5 text-[#666]">
              <p class="mt-5 lg:mt-8">
                We are the one stop shop for Information Technology services.
                Our passion for IT is what fuels our team to provide exceptional
                solutions and drives both our and your success. Integrity,
                transparency, commitment and efficiency are at the core of our
                business practices. We strive to ensure our promise of
                high-quality services and customer satisfaction are met at all
                levels; your success is our singular focus!
              </p>
              <p class="mt-5 lg:mt-8">
                Together with my team of professionals, we have a vision: a
                vision of increased usability and security of technology. We are
                proud to be one step closer to our goal every day.
              </p>
              <p class="mt-5 lg:mt-8">
                We welcome the opportunity to work with you and help you grow.
              </p>
              <nuxt-img
                class="my-5 lg:my-10"
                src="/img/homePage/signature.jpg"
              />
              <h1 class="text-lg font-serif font-normal text-[#14141c]">
                Samudra Vijay
              </h1>
              <h3 class="text-sm text-[#666666]">Chief Executive</h3>
            </div>
          </div>
        </div>
        <div class="m-10 h-40 md:h-80">
          <div class="lg:relative lg:top-20">
            <div class="text-base lg:max-w-none">
              <figure>
                <div
                  class="h-40 md:h-80 lg:h-96 left-5 md:left-20 lg:left-0 xl:h-[560px] absolute xl:w-[500px] border-8 border-[#81be00]"
                >
                  <nuxt-img
                    class="animation relative left-5 top-5 md:left-7 md:top-7 lg:top-10 lg:left-5 h-full w-auto"
                    src="/img/homePage/server.jpeg"
                  />
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animation:hover {
  animation: shaking 1s linear;
}

@keyframes shaking {
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(-5px, -5px, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
</style>
