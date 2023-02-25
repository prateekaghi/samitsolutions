<script setup lang="ts">
import { Icon } from "@steeze-ui/vue-icon";
import {
  Phone,
  Printer,
  AtSign,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ArrowUpCircle,
} from "@steeze-ui/feather-icons";

let scrollToTop = () => {
  scrollTo(0, 0);
};
</script>
<template>
  <footer class="bg-[#1a253d]" aria-labelledby="footer-heading">
    <div class="mx-auto max-w-7xl py-2 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div class="">
        <div class="mt-12 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-base font-medium text-white">Business Hours</h3>
              <div class="border-t-2 mt-1 lg:mt-3 border-[#80bd01] w-12"></div>
              <div class="mt-4 space-y-1 sm:space-y-4">
                <div
                  class="flex justify-between text-sm sm:text-base text-[#cccccc] border-b-2 border-dashed border-[#cccccc]"
                >
                  <p class="text-[#cccccc]">Monday-Friday</p>
                  <p class="text-[#80bd02]">24 Hours</p>
                </div>
                <div
                  class="flex justify-between text-sm sm:text-base text-gray-500 border-b-2 border-dashed border-[#cccccc]"
                >
                  <p class="text-[#cccccc]">Saturday</p>
                  <p class="text-[#80bd02]">24 Hours</p>
                </div>
                <div
                  class="flex justify-between text-sm sm:text-base text-gray-500 border-b-2 border-dashed border-[#cccccc]"
                >
                  <p class="text-[#cccccc]">Sunday</p>
                  <p class="text-[#80bd02]">24 Hours</p>
                </div>
              </div>
            </div>
            <div class="mt-12 md:mt-0">
              <h3 class="text-base font-medium text-white">Helpful Links</h3>
              <div class="border-t-2 mt-1 lg:mt-3 border-[#80bd01] w-12"></div>
              <div class="grid grid-cols-2">
                <div class="mt-4">
                  <a
                    href="#"
                    class="text-sm lg:text-base flex justify-center text-[#cccccc] hover:text-[#80bd01]"
                    >Our Services</a
                  >
                </div>

                <div class="mt-4">
                  <a
                    target="_blank"
                    href="https://na.myconnectwise.net/support/index.htm?Company=samit"
                    class="text-sm lg:text-base flex justify-center text-[#cccccc] hover:text-[#80bd01]"
                    >Support Portal</a
                  >
                </div>

                <div class="mt-4">
                  <a
                    href="#"
                    class="text-sm flex lg:text-base justify-center text-[#cccccc] hover:text-[#80bd01]"
                    >Free Consultation</a
                  >
                </div>

                <div class="mt-4">
                  <a
                    href="/privacy-policy"
                    class="text-sm flex lg:text-base justify-center text-[#cccccc] hover:text-[#80bd01]"
                    >Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="md:flex md:my-2 justify-around">
            <div>
              <div class="flex justify-center my-3">
                <nuxt-img
                  class="w-3/5 sm:w-2/3"
                  src="/img/homePage/logo2.png"
                  alt="SAM IT Solutions"
                />
              </div>
              <p class="text-sm lg:text-base text-center text-[#cccccc]">
                2511 NC-54 Ste. 201 Durham, NC 27713
              </p>
            </div>
            <div class="my-5 px-5">
              <div class="flex">
                <Icon
                  :src="Phone"
                  class="mr-4 flex-shrink-0 self-center h-5 w-5 text-[#80bd01]"
                  aria-hidden="true"
                />
                <p class="text-base text-[#cccccc]">919.800.0044</p>
              </div>
              <div class="flex">
                <Icon
                  :src="Printer"
                  class="mr-4 flex-shrink-0 self-center h-5 w-5 text-[#80bd01]"
                  aria-hidden="true"
                />
                <p class="text-base text-[#cccccc]">919.695.0089</p>
              </div>
              <div class="flex">
                <Icon
                  :src="AtSign"
                  class="mr-4 flex-shrink-0 self-center h-5 w-5 text-[#80bd01]"
                  aria-hidden="true"
                />
                <p class="text-base text-[#cccccc]">info@samitsolutions.com</p>
              </div>
            </div>
          </div>
          <div class="flex justify-center space-x-6">
            <a
              target="_blank"
              href="https://www.facebook.com/ITSolutionsNC"
              class="text-gray-400 hover:text-gray-500"
            >
              <span class="sr-only">Facebook</span>
              <Icon
                :src="Facebook"
                class="mr-4 flex-shrink-0 self-center h-6 w-6 text-[#0076b8]"
                aria-hidden="true"
              />
            </a>

            <a
              target="_blank"
              href="https://www.instagram.com/samitsolutions/"
              class="text-gray-400 hover:text-gray-500"
            >
              <span class="sr-only">Instagram</span>
              <Icon
                :src="Instagram"
                class="mr-4 flex-shrink-0 self-center h-6 w-6 text-[#f24c52]"
                aria-hidden="true"
              />
            </a>

            <a
              target="_blank"
              href="https://twitter.com/SamTsolutions"
              class="text-gray-400 hover:text-gray-500"
            >
              <span class="sr-only">Twitter</span>
              <Icon
                :src="Twitter"
                class="mr-4 flex-shrink-0 self-center h-5 w-5 text-[#50abf0]"
                aria-hidden="true"
              />
            </a>

            <a
              target="_blank"
              href="https://www.linkedin.com/company/sam-analytic-solutions-llc"
              class="text-gray-400 hover:text-gray-500"
            >
              <span class="sr-only">LinkedIn</span>
              <Icon
                :src="Linkedin"
                class="mr-4 flex-shrink-0 self-center h-5 w-5 text-[#0076b8]"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="sm:flex justify-around items-center mt-12 bg-[#000026] py-8">
      <div class="text-center">
        <h1 class="text-white text-2xl py-5">Need Support Now?</h1>
        <p class="text-sm text-[#DDDDDD] xl:text-left">
          To enter a ticket please call us directly at 919.800.0044 for 24/7
          support.
        </p>
        <p class="text-sm text-[#999999] xl:text-left">
          &copy; 2021 Sam Analytic Solutions, LCC.
        </p>
      </div>
      <div
        @click="scrollToTop"
        class="cursor-pointer flex justify-center mt-3 px-1"
      >
        <Icon
          :src="ArrowUpCircle"
          class="mr-4 flex-shrink-0 self-center h-5 w-5 text-[#80bd01]"
          aria-hidden="true"
        />
        <h1 class="text-[#999999] text-xs">TO TOP</h1>
      </div>
    </div>
  </footer>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
