<template>
  <div class="bg-black">
      <div class="row">
          <div class="col">
              <input type="text" placeholder="Search product by name" class="form-control">
          </div>
          <div class="col">
              <button class="btn btn-success">Sorting by price</button>
          </div>
      </div>
      <div class="row" v-if="products">
          <Card v-for="product in products" :key="product.prodID" class="bg-black">
              <template #cardHeader>
                  <img :src="product.prodUrl" alt="product-image" class="card-image bg-black" />
              </template>
              <template #cardBody>
                  <div class="bg-white">
                      <h3 class="product-info text-black">{{ product.prodName }}</h3>
                  <p class="product-info text-black">Category: {{ product.Category }}</p>
                  <p class="product-info text-black">Amount: R {{ product.amount }}</p>
                  <router-link :to="{ name: 'product', params: { id: product.prodID } }">View More</router-link>

                  </div>
               
              </template>
          </Card>
      </div>
      <div class="row" v-else>
          <p class="lead">Loading</p>
      </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
export default {
  name: 'ProductsView',
  components: {
      Card
  },
  computed: {
      products() {
          return this.$store.state.products;
      }
  },
  mounted() {
      this.$store.dispatch('fetchProducts');
  }
}
</script>

<style scoped>
h1 {
font-family: 'Jacques Francois Shadow', cursive;
font-size: 5rem;
}

.card-image {
  max-width: 100%;
  height: auto;
  display: block;
}

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

#cardBody{
  background-color: white
}
</style>