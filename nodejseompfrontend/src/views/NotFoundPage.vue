<template>
  <div class="not-found-page">
    <h1>404: Products Not Found</h1>
    <div class="spinner-container">
      <div class="spinner"></div>
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
.not-found-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.spinner-container {
  margin-top: 2rem; 
}

.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top: 4px solid #333;
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
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.product-button:hover {
  background-color: blue;
}
</style>
