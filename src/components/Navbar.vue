<template>
  <nav class="main-nav">
    <router-link :to="{ name: 'Home' }">Tasks</router-link> |
    <router-link :to="{ name: 'AddTask' }">Add New Task</router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent'
}
</script>

<style scoped>
.main-nav {
  text-align: center;
  margin: 40px auto;
}

.main-nav a {
  display: inline-block;
  text-decoration: none;
  margin: 0 10px;
  color: rgb(82, 146, 146);
  font-size: 25px;
}

a.router-link-active {
  border-bottom: 3px solid rgb(52, 3, 87);
  padding-bottom: 4px;
  color: darkslateblue;
}
</style>