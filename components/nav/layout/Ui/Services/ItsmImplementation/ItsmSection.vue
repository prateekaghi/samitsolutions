<script setup>
import { Icon } from "@steeze-ui/vue-icon";
import { ArrowUpCircle } from "@steeze-ui/feather-icons";
let scrollToTop = () => {
  scrollTo(0, 0);
};
</script>
<template>
  <div class="flex">
    <div class="h-[923px] w-[727px]">
      <div class="my-5">
        <h1 class="text-[#424242] text-4xl">
          Maximize Returns from Service Now Implementation
        </h1>
        <div class="border-t-4 rounded my-5 border-[#80bd01] w-24"></div>
        <p class="mt-5 text-sm text-[#7a7a7a] leading-7">
          SAM IT has experience in ITSM, GRC & Security Ops domains using
          ServiceNow. We help customers with their ServiceNow implementation,
          workflow setup and support. Our agile methodology of ServiceNow
          implementation offers great flexibility to changing requirements.
        </p>
      </div>
      <div class="my-5">
        <h1 class="text-[#424242] text-4xl">Our ServiceNow Offering</h1>
        <div class="border-t-4 rounded my-5 border-[#80bd01] w-24"></div>
        <ul
          class="mt-5 list-disc list-inside px-2 bg-[#f0f0f0] text-sm text-[#7a7a7a] leading-7"
        >
          <li class="py-1">ITSM , GRC & Security Consulting</li>
          <li class="py-1">CMDB Configuration</li>
          <li class="py-1">ServiceNow Implementation</li>
          <li class="py-1">ServiceNow Testing</li>
          <li class="py-1">ServiceNow Training</li>
          <li class="py-1">ServiceNow Administration</li>
          <li class="py-1">Process Automation</li>
          <li class="py-1">ServiceNow Integration</li>
        </ul>
      </div>
      <div class="my-5">
        <h1 class="text-[#424242] text-4xl">
          On demand ServiceNow expert for Full Service Life-cycle Management
        </h1>
        <div class="border-t-4 rounded my-5 border-[#80bd01] w-24"></div>
        <ul
          class="mt-5 list-disc list-inside px-2 bg-[#f0f0f0] text-sm text-[#7a7a7a] leading-7"
        >
          <li class="py-1">
            ServiceNow subject matter experts who are familiar with ITSM, GRC,
            and Security available for consulting services.
          </li>
          <li class="py-1">
            Fully managed ServiceNow administrative assistance for your Service
            Desk.
          </li>
        </ul>
      </div>
    </div>
    <div class="my-5 flex flex-col">
      <div class="text-[#424242] text-4xl">ITSM Implementation</div>
      <div class="border-t-4 rounded my-5 border-[#80bd01] w-24"></div>
      <div @click="scrollToTop" class="flex justify-end cursor-pointer">
        <h1 class="text-[#999999] px-2 my-auto text-xs">TO TOP</h1>
        <Icon
          :src="ArrowUpCircle"
          class="mr-4 flex-shrink-0 self-center h-5 w-5 text-[#80bd01]"
          aria-hidden="true"
        />
      </div>
    </div>
  </div>
</template>
