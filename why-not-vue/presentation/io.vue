<template>
  <child @click="onEvent($event)" :input="input">{{ input }}</child>
</template>

<script>
import Child from "./Child.vue";

export default {
  name: "TodoApp",
  components: {
    Child,
  },
  emits: ["output"], // since v3, optional
  props: {
    input: {
      type: String,
      required: true,
      validate(input) {
        return true;
      },
    },
  },
  actions: {
    output() {
      this.$emit("output", 42);
    },
    onEvent(ev) {
      console.log(ev);
    },
  },
};
</script>
