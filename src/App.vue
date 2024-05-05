<template>
  <div class="container">
    <div class="box-items">
      <div class="item">
        <h4>title</h4>
        <div class="actions">
          <span>delete</span>
          <span>edit</span>
          <span>complete</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html body {
  width: 100vw;
  height: 100vh;
}

#app {
  width: 100%;
  height: 100%;
}

.container {
  padding: .8rem .5rem;
  border: 1px solid red;
  border-radius: .3rem;
  max-width: 25rem;
  width: 100%;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.actions {
  display: flex;
  gap: .7rem;
}
</style>
