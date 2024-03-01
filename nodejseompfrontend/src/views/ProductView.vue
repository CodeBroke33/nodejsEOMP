<template>
  <div class="bg-black">
    <div class="row">
      <h1 class="display-2 text-white">Product Details</h1>
    </div>
    <div class="row">
      <div class="col-md-6">
        <!-- Image on the left -->
        <Card v-if="product">
          <template #cardHeader>
            <img :src="product.prodUrl" alt="product-image" class="card-image bg-black" />
          </template>
        </Card>
      </div>
      <div class="col-md-6">
        <Card v-if="product">
          <template #cardBody>
            <h2 class="product-title">{{ product.prodName }}</h2>
            <p class="product-info">Category: {{ product.Category }}</p>
            <p class="product-info">Amount: R {{ product.amount }}</p>
            <p class="product-description">{{ product.description }}</p>
          </template>
        </Card>

        <div class="mt-3">
          <router-link to="/products">
            <button class="btn btn-primary">Go Back</button>
            </router-link>
          <button class="btn btn-success">Purchase</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
export default {
  components: {
    Card,
  },
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  mounted() {
    this.$store.dispatch('fetchProduct', this.$route.params);
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jacques+Francois+Shadow&display=swap');

h1 {
  font-family: 'Jacques Francois Shadow', cursive;
  font-size: 5rem;
}

.card-image {
  max-width: 100%;
  height: auto;
  display: block;
}

button {
  width: 200px;
  height: 50px;
  border-radius: 20px;
}

/* Add margin-right utility class to the primary button */
.btn-primary {
  margin-right: 8px;
}
</style>
