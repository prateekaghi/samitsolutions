import { defineRule } from "vee-validate";

import * as rules from "@vee-validate/rules";

export default defineNuxtPlugin((nuxtApp) => {
  Object.keys(rules)
    .filter((k) => k !== "default")
    .filter((j) => j !== "__esModule")
    .forEach((rule) => {
      defineRule(rule, rules[rule]);
      // console.log(rule);
    });
});
