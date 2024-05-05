<template>
  <div>
    <TaskItem title="task 1" />
  </div>
</template>

<script>
import TaskItem from '../components/TaskItem.vue';
import axios from 'axios'

export default {
  name: "HomePage",
  components: { TaskItem },

  mounted() {
    axios.get('http://localhost:5000/tasks').then(data => console.log(data))
  }

}
</script>

<style scoped></style>