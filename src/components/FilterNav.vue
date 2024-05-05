<template>
  <nav class="filter-nav">
    <button>all</button>
    <button>done</button>
    <button>not done</button>
  </nav>
</template>

<script>
export default {

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
  color: #555;
}
</style>