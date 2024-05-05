<template>
  <div class="container">
    <div class="box-items">
      <TaskItem title="task 1" />
      <TaskItem title="task 2" />
    </div>
  </div>
</template>

<script>
import TaskItem from './components/TaskItem.vue';

export default {
  name: 'App',
  components: { TaskItem }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html body {
  width: 100vw;
  height: 100vh;
}

#app {
  width: 100%;
  height: 100%;
}

.container {
  width: 100%;
  height: 100%;
  padding: 5rem 0;
}

.box-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
</style>
