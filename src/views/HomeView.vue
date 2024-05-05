<template>
  <div>
    <TaskItem title="task 1" />
  </div>
</template>

<script>
import TaskItem from '../components/TaskItem.vue'

export default {
  name: "HomePage",
  components: { TaskItem }

}
</script>

<style scoped></style>