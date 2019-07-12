<template lang="html">
  <div id="background">
    <div id="card-container">
      <div class="card front">
        <h2>Front</h2>
      </div>
      <!-- <div class="card back">
        <h2>Back</h2>
      </div> -->
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
  background-color: rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: 100vh;
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-container {
  perspective: 1000px;
}

.card {
  background-color: white;
  width: 40vw;
  height: 80vh;
  border-radius: 20px;
}

</style>
