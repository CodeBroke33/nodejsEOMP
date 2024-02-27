<template>
  <div class="page-wrap">
    <h1>Products</h1>

    <div class="grid-wrap">
      <ProductList :products="products" />
    </div>
  </div>
</template>
  
<script>
import ProductList from '@/components/ProductList.vue';
import { products } from '../temp-data';

export default {
  name: "ProductsPage",
  components: {
    ProductList
  },
  data() {
    return {
      products,
    };
  },
};
</script>
  
<style scooped>

  .product-item img {
    height: 300px;
    width: 300px;
  }

  .product-item button {
    width: 100%;
  }
  
  .product-image {
    flex: 1;
    height: 100px;
    max-width: 100px;
  }

</style>
  