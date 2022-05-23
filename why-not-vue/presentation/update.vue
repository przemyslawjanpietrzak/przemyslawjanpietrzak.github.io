<template>
  <div>{{ data }}</div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "Component",
  actions: {
    increase() {
      this.data++;
    },
  },
  watch: {
    data(new, old) {},
    'some.nested.key'(newValue) {}
  },
};
</script>
