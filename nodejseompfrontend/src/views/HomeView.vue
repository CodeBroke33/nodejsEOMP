<template>
  <div class="homepage bg-black bg-image">
    <h1 class="home text-black margin-top wavy-text">WELCOME<br>TO<br></h1>
    <div class="img-wrapper">
      <img class="img-fluid rounded-circle wavy-image" type="image" src="https://i.ibb.co/0M1KHF7/2-removebg-preview.png" alt="logo">
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

/* Add animation */
.wavy-text {
  animation: wave 2s infinite alternate;
}

.wavy-image {
  animation: wave 2s infinite alternate-reverse;
}

@keyframes wave {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(50px); 
  }
}

@media (max-width: 768px) {
  .homepage h1 {
    font-size: 3rem;
  }
}
</style>