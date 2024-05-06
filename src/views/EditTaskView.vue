<template>
  <form @submit.prevent="handleEditSubmit">
    <label>Title:</label>

    <input type="text" v-model="title" required />

    <label>Description:</label>

    <textarea v-model="description" required></textarea>

    <button>Edit Task</button>
  </form>
</template>
  
<script>
import axios from 'axios';

export default {
  name: "EditTask",

  data() {
    return {
      title: '',
      description: '',
      backendUrl: `http://localhost:5000/tasks/${this.$route.params.id}`
    }
  },

  mounted() {
    axios.get(this.backendUrl)
      .then(res => {
        if (res.status === 200) {
          this.title = res.data.title
          this.description = res.data.description
        } else {
          console.log('an error eccured!')
        }
      })
      .catch(err => console.log(err))
  },

  methods: {
    handleEditSubmit() {
      const newTask = {
        title: this.title,
        description: this.description
      }

      axios.patch(this.backendUrl, newTask)
        .then(res => {
          if (res.status === 200) {
            this.$router.push({ name: 'Home' })
          }
        })
        .catch(err => console.log(err))
    }
  }

}
</script>
  

<style scoped>
form {
  max-width: 40rem;
  background-color: white;
  padding: 1.2rem;
  margin-top: 1.2rem;
  border-radius: .7rem;
  margin-inline: auto;
}

label {
  display: block;
  color: #bbb;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 1.2rem 0 .5rem 0;
}

input {
  padding: .6rem;
  font-size: 17px;
  border: 2px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}

textarea {
  padding: .7rem;
  border: 2px solid #ddd;
  width: 100%;
  height: 100px;
  box-sizing: border-box;
}

form button {
  display: block;
  margin: 1.2rem auto 0;
  background-color: green;
  color: white;
  padding: .7rem;
  border: 0;
  border-radius: .7rem;
  font-size: 15px;
  cursor: pointer;
}
</style>