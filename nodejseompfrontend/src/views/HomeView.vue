<template>
  <div class="homepage bg-black bg-image">
    <h1 class="home text-black margin-top">WELCOME<br>TO<br></h1>
    <div class="img-wrapper">
      <img class="img-fluid rounded-circle" type="image" src="https://i.ibb.co/0M1KHF7/2-removebg-preview.png" alt="logo">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jacques+Francois+Shadow&display=swap');

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.img-wrapper {
  position: relative;
  display: inline-block;
}

h1 {
  font-family: 'Jacques Francois Shadow', cursive;
  font-size: 5rem;
}

.bg-image {
  background-image: url('https://i.ibb.co/MPfYxHn/WATER-H2-O-2.jpg');
  background-size: cover;
  background-position: center;
  height: auto;
}

.homepage {
  padding: 8%;
}

@media (max-width: 768px) {
  .homepage h1 {
    font-size: 3rem;
  }
}
</style>