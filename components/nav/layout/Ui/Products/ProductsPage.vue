<script setup>
import products from "~~/assets/data/productsData.json";

</script>

<template>
  <div class="my-20" v-for="product in products">
    <h1 class="text-3xl border-b-2 border-[#80bd02] w-max pb-2">
      {{ product.mainheading }}
    </h1>

    <img class="py-5 max-w-xs" :src="product.productImage" />
    <p
      v-if="product.productIntro"
      v-for="heading in product.productIntro"
      class="font-sans text-[#7a7a7a] text-sm my-5"
    >
      {{ heading }}
    </p>

    <div v-for="(value, propertyName) in product.content">
      <h1 class="text-2xl text-[#14141c] my-5">{{ propertyName }}</h1>

      <div v-if="value.type === 'paragraph'">
        <div v-for="data in value.data">
          <p
            v-if="data.type === 'paragraph'"
            class="font-sans text-[#7a7a7a] text-sm my-5"
          >
            {{ data.text
            }}<span class="font-bold" v-if="data.highlight">
            {{data.highlight}}
        </span><a
              v-if="data.link"
              class="text-[#0d6efd] mx-1"
              :href="data.link"
              target="_blank"
              >{{ data.link }}</a
            >
          </p>
          <ul
            class="font-sans text-[#7a7a7a] text-sm"
            v-if="data.type === 'list'"
          >
            <li class="mx-5 list-disc leading-8" v-for="list in data.text">
              {{ list }}
            </li>
          </ul>
        </div>
      </div>
      <div v-if="value.type === 'orderedlist'">
        <div v-for="data in value.data">
          <p
            v-if="data.type === 'paragraph'"
            class="font-sans text-[#7a7a7a] text-sm my-5"
          >
            {{ data.text
            }}<p v-if="data.highlight">
            {{data.highlight}}
        </p>
            ><a
              v-if="data.link"
              class="text-[#0d6efd] mx-1"
              :href="data.link"
              target="_blank"
              >{{ data.link }}</a
            >
          </p>
          <div
            class="font-sans text-[#7a7a7a] text-sm"
            v-if="data.type === 'list'"
          >
            <ol
              class="mt-5 font-semibold"
              v-for="(value, propertyName) in data.text"
            >
              {{
                propertyName
              }}
              <li class="font-normal mx-5 list-disc" v-for="v in value">
                {{ v }}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <div class="m-5" v-if="product.productImage2">
      <img :src="product.productImage2" />
    </div>
    <div class="m-5" v-if="product.freetrial">
      <a class="text-[#0d6efd] mx-1" target="_blank" :href="product.freetrial"
        >Free 30 Days Trial</a
      >
    </div>
  </div>
</template>
