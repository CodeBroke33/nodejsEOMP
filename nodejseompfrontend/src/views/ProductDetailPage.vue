<template>
  <div class="row">
    <div class="col">
      <div v-if="product" class="row">
        <div class="col-md-6">
          <div class="img-wrap 100vh">
            <img :src="product.imageName" />
          </div>
          <div class="product-details">
            <h1>{{ product.name }}</h1>
          </div>
        </div>
        <div class="col-md-6 mt-5">
          <h3 class="text-center mb-5">{{ product.title }}</h3>
          <p class="text-center">{{ product.description }}</p>
          <h3 class="price">{{ product.price }}</h3>
          <div class="container mt-3">
            <button class="btn btn-primary" @click="goback"><i class="bi bi-arrow-left"></i>Go back</button>
          </div>
        </div>
      </div>
      <div v-else>
        <NotFoundProductPage />
      </div>
    </div>
  </div>
</template>

<script>
import { products } from '../temp-data';
import NotFoundProductPage from './NotFoundPage.vue';

export default {
  name: "ProductDetailPage",
  data() {
    return {
      product: products.find(product => product.id === this.$route.params.productId),
    }
  },
  methods: {
    goback() {
      this.$router.push({ name: 'products' });
    }
  },
  components: {
    NotFoundProductPage
  },
}
</script>

<style>
  .img-wrap {
    margin-top: 2rem;
    text-align: center;
  }
  
  .img-wrap img {
    width: 400px;
  }

  .product-details {
    padding: 1rem;
    position: relative;
  } 
</style>
