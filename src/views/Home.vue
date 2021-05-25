<template>
  <div class="home-page">
    <CreateTodo @create-todo="onSubmitClicked"/>
    <div v-if="loading" class="loading">
      Loading....
    </div>
    <TodoList v-else-if="todoList && todoList.length" :todos="todoList" @refresh="fetchTodos" />
    <div v-else>
      Список пуст((
    </div>
  
   <!-- <pre>
    {{todos}}
    </pre> -->
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue';
import CreateTodo from '@/components/CreateTodo.vue';
import { fetchTodos } from '@/service/dataService';
export default {
  name: 'Home',
  components: {
    TodoList,
    CreateTodo,
  },
  data: () => ({
    todoList: [],
    loading: false,
  }),
  mounted() {
    this.fetchTodos();
  },
  methods:{
    async fetchTodos() {
      try{
        this.loading = true;
        this.todoList = await fetchTodos();
        /*const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos?_limit=5',
        );
        this.todoList = await response.json();*/
      } catch (exception) {
        
      } finally{
        this.loading = false;
      }
    },

    onRemoveClicked(id) {
      this.todoList = this.todoList.filter((todo) => todo.id !== id);
    },

    onSubmitClicked(newTodo) {
        this.todoList.unshift(newTodo);
    },


  },


};
</script>
