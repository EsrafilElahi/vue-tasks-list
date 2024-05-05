<template>
  <div class="filter-nav-div">
    <FilterNav :activeFilterNav="activeFilterNav" :setActiveFilterNav="setActiveFilterNav" />
  </div>

  <div v-if="tasks.length" class="box-items">
    <div v-for="task in filterTasks" :key="task.id">
      <TaskItem :task="task" @refetchAllData="handleRefetchData" />
    </div>
  </div>
</template>

<script>
import TaskItem from '../components/TaskItem.vue';
import FilterNav from '../components/FilterNav.vue';
import axios from 'axios';


export default {
  name: "HomePage",
  components: { TaskItem, FilterNav },

  data() {
    return {
      tasks: [],
      activeFilterNav: "all"
    }
  },

  methods: {
    handleRefetchData() {
      axios.get('http://localhost:5000/tasks').then(data => {
        return this.tasks = data.data
      })
    },
    setActiveFilterNav(newNav) {
      this.activeFilterNav = newNav
    }
  },

  mounted() {
    this.handleRefetchData()
  },

  computed: {
    filterTasks() {
      if (this.activeFilterNav === 'done') {
        return this.tasks.filter(task => task.complete)
      } else if (this.activeFilterNav === 'not-done') {
        return this.tasks.filter(task => !task.complete)
      } else {
        return this.tasks
      }
    }
  }

}
</script>

<style scoped>
.filter-nav-div {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-inline: auto;
  margin-bottom: 2rem;
  margin-top: 4rem;
}

.box-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>