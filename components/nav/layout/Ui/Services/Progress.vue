<script setup>
let project = ref(null);
let satisfaction = ref(null);
let rating = ref(null);
let years = ref(null);
onMounted(() => {
  const updateProjectCount = () => {
    const projectTarget = +project.value.attributes["data-target"].value;
    let projectCount = +project.value.innerText;

    if (projectCount < projectTarget) {
      project.value.innerText = projectCount + 10;
      projectCount += 10;
      setTimeout(() => {
        updateProjectCount();
      }, 1);
    } else {
      project.value.innerText = projectTarget;
    }
  };
  const updateSatifactionCount = () => {
    const satisactionTarget =
      +satisfaction.value.attributes["data-target"].value;
    let satisfactionCount = +satisfaction.value.innerText;
    if (satisfactionCount < satisactionTarget) {
      satisfaction.value.innerText = satisfactionCount + 1;
      satisfactionCount += 1;
      setTimeout(() => {
        updateSatifactionCount();
      }, 5);
    }
  };
  const updateRatingCount = () => {
    const ratingTarget = +rating.value.attributes["data-target"].value;
    let ratingCount = +rating.value.innerText;

    if (ratingCount < ratingTarget) {
      rating.value.innerText = ratingCount + 1;
      ratingCount += 1;
      setTimeout(() => {
        updateRatingCount();
      }, 150);
    } else {
      rating.value.innerText = ratingTarget;
    }
  };
  const updateYearsCount = () => {
    const yearsTarget = +years.value.attributes["data-target"].value;
    let yearsCount = +years.value.innerText;

    if (yearsCount < yearsTarget) {
      years.value.innerText = yearsCount + 1;
      yearsCount += 1;
      setTimeout(() => {
        updateYearsCount();
      }, 20);
    } else {
      years.value.innerText = yearsTarget;
    }
  };

  updateYearsCount();
  updateRatingCount();
  updateProjectCount();
  updateSatifactionCount();
});
</script>

<template>
  <div class="h-[461px] w-[438px] flex flex-col items-center">
    <div class="flex">
      <div
        ref="project"
        data-target="1200"
        class="text-5xl font-serif text-[#80bd01] font-medium mt-5"
      >
        0
      </div>
      <div class="text-5xl font-serif text-[#80bd01] font-medium mt-5">+</div>
    </div>
    <p class="text-[#666565] mt-2">Projects Completed</p>
    <div class="flex">
      <div
        ref="satisfaction"
        data-target="100"
        class="text-5xl font-serif text-[#80bd01] font-medium mt-5"
      >
        0
      </div>
      <div class="text-5xl font-serif text-[#80bd01] font-medium mt-5">%</div>
    </div>
    <p class="text-[#666565] mt-2">Customer Satisfaction</p>
    <div class="flex">
      <div
        ref="years"
        data-target="34"
        class="text-5xl font-serif text-[#80bd01] font-medium mt-5"
      >
        0
      </div>
      <div class="text-5xl font-serif text-[#80bd01] font-medium mt-5">+</div>
    </div>
    <p class="text-[#666565] mt-2">Years Of Experience</p>
    <div class="flex">
      <div
        ref="rating"
        data-target="5"
        class="text-5xl font-serif text-[#80bd01] font-medium mt-5"
      >
        0
      </div>
    </div>
    <p class="text-[#666565] mt-2">Star Rating</p>
  </div>
</template>
