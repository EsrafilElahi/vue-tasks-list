<template>
  <div class="item" :class="{ complete: task.complete }">
    <h4>{{ task.title }}</h4>

    <div class="actions">
      <span class="material-icons" @click="handleDeleteTask">delete</span>

      <router-link :to="{ name: 'EditTask', params: { id: task.id } }">
        <span class="material-icons">edit</span>
      </router-link>

      <span class="material-icons tick" @click="handleCompleteTask">done</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['task'],

  data() {
    return {
      backendUrl: `http://localhost:5000/tasks/${this.task.id}`
    }
  },

  methods: {
    handleCompleteTask() {
      axios.patch(this.backendUrl, { complete: !this.task.complete })
        .then(res => {
          if (res.status === 200) {
            this.$emit('refetchAllData')
          }
        })
        .catch(err => console.log(err))
    },

    handleDeleteTask() {
      axios.delete(this.backendUrl)
        .then(res => {
          if (res.status === 200) {
            this.$emit('refetchAllData')
          }
        })
    }
  }
}
</script>

<style scoped>
.item {
  max-width: 25rem;
  width: 100%;
  margin-inline: auto;
  padding: 1.3rem .8rem;
  border: 1px solid rgba(235, 232, 232, 0.774);
  box-shadow: 1px 2px 3px rgba(119, 117, 117, 0.493);
  border-left: 10px solid red;
  box-shadow: 1rem;
  border-radius: .3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.actions {
  display: flex;
  gap: .7rem;
}

.actions span {
  cursor: pointer;
}


.material-icons {
  font-size: 25px;
  margin-left: 10px;
  font-weight: bold;
  cursor: pointer;
  color: #bbb;
}

.material-icons:hover {
  color: #777;
}

.complete {
  border-left: 10px solid green;
}

.complete .tick {
  color: green !important;
}
</style>