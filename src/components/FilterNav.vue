<template>
  <nav class="filter-nav">
    <button @click="setActiveFilterNav('all')" :class="{ active: activeFilterNav === 'all' }">all</button>
    <button @click="setActiveFilterNav('done')" :class="{ active: activeFilterNav === 'done' }">done</button>
    <button @click="setActiveFilterNav('not-done')" :class="{ active: activeFilterNav === 'not-done' }">not done</button>
  </nav>
</template>

<script>
export default {
  props: ['activeFilterNav', 'setActiveFilterNav']
}
</script>

<style scoped>
.filter-nav button {
  background: none;
  border: none;
  outline: none;
  color: #bbb;
  font-size: 15px;
  text-transform: uppercase;
  margin-right: 1.5rem;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
}

.filter-nav button.active {
  color: #3b3b3b;
}
</style>