<template><input v-model="name" /> {{ name }}</template>

<script>
export default {
  name: "Component",
  data() {
    return {
      name: "",
    };
  },
};
</script>
