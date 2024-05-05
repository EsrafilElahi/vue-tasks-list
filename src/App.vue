<template>
  <div class="container">
    <div class="box-items">
      <div class="item">
        <h4>title</h4>
        <div class="actions">
          <span class="material-icons tick">delete</span>
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
  width: 100%;
  height: 100%;
  padding: 5rem 0;
}

.box-items {
  max-width: 25rem;
  width: 100%;
  margin-inline: auto;
  padding: 1.3rem .8rem;
  /* border: 1px solid red; */
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  border-left: 10px solid red;
  box-shadow: 1rem;
  border-radius: .3rem;
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
