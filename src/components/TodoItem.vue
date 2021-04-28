<template>
    <li>
          <span :class="{ done: todo.completed}">
              <input type="checkbox" @change="todo.completed = !todo.completed" />
              {{todo.title}}
          </span>
          <button @click="$emit('remove-todo', todo.id)" class="rm">x</button>
        </li>
</template>

<script >
export default {
    name: 'TodoItem',
    props: {
        todo: {
            type: Object,
            required: true,
        }
    },
}
</script>

<style lang="scss" scoped>
    li {
 border-radius: 12px;
 border: 1px solid #ccc;
 display: flex;
 justify-content: space-between;
 padding: 12px 22px;
 margin-bottom: 1rem;
}

.rm {
 background: red;
 color: #fff;
 border-radius: 50%;
 font-weight: bold;
}

input {
 margin-right: 1rem;
}

.done {
 text-decoration: line-through;
}

</style>