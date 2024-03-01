<template>
  <div class="products bg-black">
      <div class="row bg-black">
          <div class="col my-3">
              <input type="text" placeholder="Search product by name" class="form-control mx-1">
          </div>
          <div class="col">
              <button class="btn btn-info my-3">Sorting by price</button>
          </div>
      </div>
      <div class="row m-5 justify-content-center" v-if="products">
          <Card v-for="product in products" :key="product.prodID" class="bg-black">
              <template #cardHeader>
                  <img :src="product.prodUrl" alt="product-image" class="card-image bg-black" />
              </template>
              <template #cardBody>
                  <div class="bg-white rounded">
                      <h3 class="product-info text-black">{{ product.prodName }}</h3>
                  <p class="product-info text-black">Category: {{ product.Category }}</p>
                  <p class="product-info text-black">Amount: R {{ product.amount }}</p>
                  <router-link class="btn bg-black text-white my-1" :to="{ name: 'product', params: { id: product.prodID } }">View More</router-link>

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

.product-info {
    font-family: Righteous;
}

.product {
    overflow-x: hidden;
}

</style>