<template>
  <div class="homepage bg-black bg-image">
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
  background-image: url('https://i.ibb.co/MPfYxHn/WATER-H2-O-2.jpg'), linear-gradient(to top, rgba(0,0,0,0.8), rgba(255,255,255,0));
  background-size: cover;
  /* You can also use other background properties such as size, position, repeat, etc. */
  background-size: cover;
  background-position: center;
  height: auto;
  position: relative;
  height: 100vh;
  background-image: linear-gradient(to top, rgba(0,0,0,0.8), rgba(255,255,255,0));
  /* This will create a linear gradient that goes from black (0,0,0) with 80% opacity at the bottom to transparent white (255,255,255) at the top */

}

.homepage {
  padding: 8%;
}

.homepage h1 {
  font-size: 7rem; /* Initial font size */
}

@media (max-width: 768px) {
  .homepage h1 bg {
    font-size: 3rem; /* Adjust font size for smaller screens */
  }
}
</style>
