<template>
    <ul class="list-content">
        <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" @remove-todo="onRemovedClicked"/>
        <!-- v-for="todo in todos" :key="todo.id" -->
    </ul>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue';
export default{
    name: 'TodoList',
    props: ['todos'],
    components: {
        TodoItem,
    },
    methods: {
        onRemovedClicked(id) {
            this.$emit('remove-todo', id);
        },
    },
};
</script>

<style lang="scss">
.todo-list {
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
}
</style>