<template>
  <div>
    <div>Tasks: {{ count }}</div>
    <div v-if="isLoading">spinner</div>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <todo-item :task="task" />
      </li>
    </ul>
    <button @click="addTodo(todo)">add todo</button>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "TodoApp",
  components: {
    TodoItem,
  },
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    count() {
      return this.tasks.length;
    },
  },
  methods: {
    addTodo(todo) {
      this.isLoading = true;
      this.$emit("addTodo", todo);
      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
button {
  margin-top: 20px;
  padding: 6px;
  border: #41b883 1px solid;
}
</style>
