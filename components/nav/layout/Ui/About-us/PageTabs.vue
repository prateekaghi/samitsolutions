<script setup lang="ts">
const props = defineProps<{
  tabs: Array<TabsOptions>;
}>();
</script>

<template>
  <div>
    <div class="md:grid grid-flow-col">
      <div
        v-for="(tab, index) in tabs"
        :key="tab.name"
        class="py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 hover:text-gray-700"
        :class="
          index % 2 === 0
            ? 'bg-[#688b8a] text-gray-200'
            : 'bg-[#a0b184] text-gray-200'
        "
      >
        <a :href="tab.href">{{ tab.name }}</a>
      </div>
    </div>
  </div>
</template>
