<script setup>
import { Icon } from "@steeze-ui/vue-icon";
import { ChevronDown, Menu } from "@steeze-ui/feather-icons";

let actions = ref([]);
let showMenu = ref(false);

const show = (action) => {
  action.show = true;
};

const hide = (action) => {
  action.show = false;
};
const toggle = (action) => {
  actions.value.forEach((action) => {
    if (action.show === true) {
      action.show = false;
    }
  });
  action.show = !action.show;
};

const openMenu = () => {
  console.log(showMenu);
  showMenu.value = !showMenu.value;
};

onMounted(() => {
  actions.value = [
    {
      text: "Home",
      link: "/",
      icon: "Home",
    },
    {
      text: "About Us",
      link: "/about-us",
      icon: "MapPin",
      show: ref(false),
      menu: [
        {
          text: "Why SAM IT ?",
          link: "/about-us",
          icon: "Aperture",
        },
        {
          text: "Clients",
          link: "/about-us/clients",
          icon: "Settings",
        },
      ],
    },
    {
      text: "Services",
      link: "/services",
      icon: "Aperture",
      show: ref(false),
      menu: [
        {
          text: "Disaster Recovery",
          link: "/services/disaster-recovery",
          icon: "Aperture",
        },
        {
          text: "IT Consulting and Relocation Services",
          link: "/services/it-consulting-relocation-services",
          icon: "Aperture",
        },
        {
          text: "Hosting and Cloud",
          link: "/services/hosting-and-cloud",
          icon: "Aperture",
        },
        {
          text: "Web Design",
          link: "/services/web-design",
          icon: "Aperture",
        },
        {
          text: "IT Support Solutions",
          link: "/services/it-support-solutions",
          icon: "Aperture",
        },
        {
          text: "Software Consulting and Development",
          link: "/services/software-consulting-development",
          icon: "Aperture",
        },
        {
          text: "IT Security Services",
          link: "/services/security-services/",
          icon: "Aperture",
          show: ref(false),
          menu: [
            {
              text: "Disaster Recovery",
              link: "/services/disaster-recovery",
              icon: "Aperture",
            },
          ],
        },
        {
          text: "ITSM Implementation",
          link: "/services/itsm-implementation/",
          icon: "Aperture",
        },
        {
          text: "Digital marketing",
          link: "services/digital-marketing/",
          icon: "Aperture",
        },
        {
          text: "Print Marketing",
          link: "services/print-marketing/",
          icon: "Aperture",
        },
      ],
    },
    {
      text: "Products",
      link: "/product",
      icon: "Plus",
    },
    {
      text: "Industries",
      link: "/industries",
      icon: "Plus",
    },
    {
      text: "Blog",
      link: "/blogs",
      icon: "Plus",
    },
    {
      text: "Contact Us",
      link: "/contact-us",
      icon: "Aperture",
      show: ref(false),
      menu: [
        {
          text: "Contact Us",
          link: "/contact-us",
          icon: "Aperture",
        },
        {
          text: "Careers",
          link: "/contact-us/careers",
          icon: "Aperture",
        },
      ],
    },
  ];
});
</script>

<template>
  <nav class="bg-white shadow">
    <div class="mx-auto max-w-7xl lg:px-8">
      <div class="relative flex h-28 justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center lg:hidden">
          <button
            @click="openMenu"
            type="button"
            class="inline-flex items-center justify-center rounded-md text-gray-400"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>

            <Icon
              :src="Menu"
              class="ml-1 mr-0.5 flex-shrink-0 self-center h-8 w-8 text-white"
              aria-hidden="true"
            />
          </button>
        </div>
        <div
          class="flex flex-1 bg-[#0f0f16] lg:bg-white items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex flex-shrink-0 mx-auto items-center">
            <nuxt-img
              class="block h-10 md:h-16 w-auto lg:hidden"
              src="/img/homePage/logomobile.png"
              alt="Sam IT Solutions"
            />

            <nuxt-img
              class="hidden lg:h-10 xl:h-16 lg:block"
              src="/img/homePage/logocopy.jpg"
              alt="Sam IT Solutions"
            />
          </div>
          <div class="hidden sm:ml-6 lg:flex sm:space-x-6 xl:space-x-8">
            <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->

            <a
              exact-active-class="exact"
              active-class="active"
              :key="action.text"
              v-for="action in actions"
              @mouseenter="show(action)"
              @mouseleave="hide(action)"
              :href="action.link"
              class="inline-flex xl:text-xl items-center font-serif px-2 pt-1 font-medium text-[#383838]"
              >{{ action.text }}
              <div v-if="action.menu">
                <Icon
                  :src="ChevronDown"
                  class="ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-black"
                  aria-hidden="true"
                />
              </div>

              <div
                :class="{ hidden: action.show === false }"
                v-if="action.show && action.menu"
                class="dropdown absolute pb-5 top-28 rounded-t-md bg-[#111] py-1 w-52 shadow-lg ring-1 ring-black z-50 ring-opacity-5 focus:outline-none"
              >
                <a
                  v-for="inner_action in action.menu"
                  :href="inner_action.link"
                  class="flex items-center px-3 py-2 text-sm font-medium rounded-md"
                >
                  <span
                    @mouseenter="show(inner_action)"
                    @mouseleave="hide(inner_action)"
                    class="px-3 text-[#ccc] hover:text-white"
                    >{{ inner_action.text }}</span
                  >
                  <div
                    @mouseenter="show(inner_action)"
                    @mouseleave="hide(inner_action)"
                    v-if="inner_action.menu && inner_action.show === true"
                  >
                    hello
                  </div>
                </a>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:hidden" id="mobile-menu">
      <div class="space-y-1 bg-[#0f0f16] pt-0 pb-3">
        <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->

        <div
          v-if="showMenu"
          v-for="action in actions"
          :key="action.text"
          :href="action.link"
          class="block items-center py-2 pl-3 pr-4 text-base font-medium text-white"
        >
          <div class="flex">
            <a v-if="!action.menu" :href="action.link">{{ action.text }}</a>
            <div v-else>{{ action.text }}</div>
            <Icon
              v-if="action.menu"
              @click="toggle(action)"
              :src="ChevronDown"
              class="ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-white"
              aria-hidden="true"
            />
          </div>

          <a
            v-if="action.show"
            exact-active-class="exact"
            v-for="actionss in action.menu"
            :key="action.text"
            :href="actionss.link"
            class="grid first-of-type:mt-5 border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
            >{{ actionss.text }}</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.exact {
  color: #80bd02;
}
.dropdown {
  clip-path: polygon(0 0, 100% 0, 100% 96%, 0% 100%);
}

.container {
  padding: 20px;
  background-color: #f8f8f8;
  max-width: 200px;
}
.rectangle {
  width: 200px;
  height: 100px;
  background-color: black;
  position: relative;
}
.rectangle:after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 25px 200px;
  border-color: transparent transparent #f8f8f8 transparent;
}
</style>
