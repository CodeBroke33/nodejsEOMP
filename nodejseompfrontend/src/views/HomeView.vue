<template>
  <div class="homepage bg-black bg-image">
    <div class="overlay"></div>
    <h1 class="home text-black margin-top">WELCOME<br>TO<br></h1>
    <img class="img-fluid rounded-circle" type="image" src="https://i.ibb.co/0M1KHF7/2-removebg-preview.png" alt="logo">
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
  /* overflow: hidden; */
  /* background-image: url('https://i.ibb.co/MPfYxHn/WATER-H2-O-2.jpg'); */
  /* You can also use other background properties such as size, position, repeat, etc. */
  /* background-size: cover;
  background-position: center; */
}

/* 
.homepage{
  background-color: black;
}  */

h1 {
  font-family: 'Jacques Francois Shadow', cursive;
  font-size: 5rem;
  /* position: absolute;
  bottom: 22%;
  right: 3.5em; */
}

.bg-image {
  background-image: url('https://i.ibb.co/MPfYxHn/WATER-H2-O-2.jpg');
  /* You can also use other background properties such as size, position, repeat, etc. */
  background-size: cover;
  background-position: center;
  height: auto;
  opacity: 100%;
}

.homepage {
  padding: 8%;
}



.homepage h1 {
  font-size: 7rem;
  /* Initial font size */
}

@media (max-width: 768px) {
  .homepage h1 bg {
    font-size: 3rem;
    /* Adjust font size for smaller screens */
  }
}</style>