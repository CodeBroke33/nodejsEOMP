<template>
  <div class="not-found-page bg-black">
    <h1 class="hey text-white">404:<br><br>Products Not Found</h1>
    <div class="spinner-container">
      <div class="spinner m-5"></div>
    </div>
    <button @click="goProducts" class="product-button">Back to Products</button>
  </div>
</template>

<script>
export default {
  name: "NotFoundProductPage",
  methods: {
    goProducts() {
      this.$router.push({ name: 'products' });
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jacques+Francois+Shadow&display=swap');
.not-found-page {
  overflow-y: hidden !important;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: hidden !important;
}

.hey {
  font-family: 'Jacques Francois Shadow', cursive;
  font-size: 5rem;
}
.spinner-container {
  margin-top: 0.2rem; 
}

.spinner {
  border: 4px solid rgb(160, 175, 193);
  border-radius: 50%;
  border-top: 4px solid #45609b;
  width: 3rem;
  height: 3rem;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.product-button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #597fe7;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: Righteous;
}

.product-button:hover {
  background-color: rgb(74, 154, 203);
}
</style>
