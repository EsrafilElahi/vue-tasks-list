<template>
  <div class="item">
    <h4>{{ title }}</h4>
    <div class="actions">
      <span class="material-icons tick">delete</span>
      <span>edit</span>
      <span>complete</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title']
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
</style>