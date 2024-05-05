<template>
  <div>
    <router-link :to="{ name: 'Home' }">Tasks</router-link> |
    <router-link :to="{ name: 'AddTask' }">Add New Task</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped></style>