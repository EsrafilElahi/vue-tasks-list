<template>
  <div v-if="tasks.length" class="box-items">
    <div v-for="task in tasks" :key="task.id">
      <TaskItem :task="task" @refetchAllData="handleRefetchData" />
    </div>
  </div>
</template>

<script>
import TaskItem from '../components/TaskItem.vue';
import axios from 'axios'

export default {
  name: "HomePage",
  components: { TaskItem },

  data() {
    return {
      tasks: []
    }
  },

  methods: {
    handleRefetchData() {
      axios.get('http://localhost:5000/tasks').then(data => {
        return this.tasks = data.data
      })
    }
  },

  mounted() {
    this.handleRefetchData()
  }

}
</script>

<style scoped>
.box-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>