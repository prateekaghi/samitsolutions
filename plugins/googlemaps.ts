import { GoogleMap, Marker } from "vue3-google-map";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("GMap", GoogleMap);
  nuxtApp.vueApp.component("GMark", Marker);
});
