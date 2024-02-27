<template>
  <div class="homepage bg-black bg-image" @click="createRipple">
    <h1 class="home text-black margin-top">WELCOME<br>TO<br></h1>
    <img class="img-fluid rounded-circle" type="image" src="https://i.ibb.co/0M1KHF7/2-removebg-preview.png" alt="logo">
    <transition-group name="ripple">
      <span v-for="(ripple, index) in ripples" :key="index" class="ripple"></span>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      ripples: [],
    };
  },
  methods: {
    createRipple(event) {
      const rect = event.target.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = event.clientX - rect.left - size / 2;
      const y = event.clientY - rect.top - size / 2;

      this.ripples.push({ x, y });
    },
  },
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

.ripple {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  transform: scale(0);
}

.ripple-enter-active {
  animation: rippleEffect 0.6s linear;
}

@keyframes rippleEffect {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
</style>