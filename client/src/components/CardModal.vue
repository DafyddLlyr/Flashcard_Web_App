<template lang="html">
  <div id="background">
    <div id="card-front">
      <h2>Front</h2>
    </div>
    <div class="card-back">
      <h2>Back</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card-modal'
}
</script>

<style lang="css" scoped>

#background {
  background-color: rgba(0, 0, 0, 0.8);
  width: 100vw;
  height: 100vh;
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
}

</style>
