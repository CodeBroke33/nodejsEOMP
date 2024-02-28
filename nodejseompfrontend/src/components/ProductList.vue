<template>
    <div>
      <div class="grid-wrap">
        <div class="product-item" v-for="product in products" :key="product.prodID">
          <img :src="product.prodUrl" alt="Product Image" />
          <div class="card bg-gradient">
            <h3 class="product-info text-black">{{ product.prodName }}</h3>
            <p class="product-info text-black">Category: {{ product.Category }}</p>
            <p class="product-info text-black">Amount: R {{ product.amount }}</p>
            <router-link :to="'/products/' + product.prodID">
              <button class="text-white bg-black">View Details</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  
  export default {
    name: "ProductList",
    computed: {
      ...mapState({
        products: 'products',
      }),
    },
    methods: {
      ...mapActions(['fetchProducts']),
    },
    mounted() {
      this.fetchProducts();
    },
  };
  </script>
  
  <style scoped>
  .grid-wrap {
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
    flex-wrap: wrap;
    margin-top: 1rem;
    margin-left: 9%;
  }
  
  button {
    width: 200px;
    height: 50px;
    border-radius: 20px;
  }
  </style>
  