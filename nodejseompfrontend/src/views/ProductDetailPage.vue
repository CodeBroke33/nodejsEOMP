<template>
  <div v-if="product">
      <div class="img-wrap 100vh">
        <img :src="product.imageName" />
      </div>
      <div class="product-details">
        <h1>{{ product.name }}</h1>
        <h3 class="price">{{ product.price }}</h3>
        <button class="add-to-cart">Add to cart</button>
      </div>
  </div>
  <div v-else>
    <NotFoundPage />
  </div>
</template>

<script>
import { products } from '../temp-data';
import NotFoundPage from './NotFoundPage.vue';

export default {
  name: "ProductDetailPage",
  data() {
    return {
      product: products.find(product => product.id === this.$route.params.productId),
    }
  },
  components: {
    NotFoundPage
  },
}
</script>

<style>
  /* .img-wrap {
    margin-top: 32px;
    text-align: center;
  }
  
  .img-wrap img {
    width: 400px;
  }

  .product-details {
    padding: 16px;
    position: relative;
  } */
  
</style>