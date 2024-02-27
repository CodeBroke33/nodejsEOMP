<template>
    <div>
        <div class="grid-wrap">
            <div class="product-item" v-for="product in products" :key="product.id">
                <img :src="product.imageName" />
                <h3 class ="product-info">{{ product.name }}</h3>
                <p class="product-info">{{ product.title }}</p>
                <p class="product-info">{{ product.price }}</p>
                <router-link :to="'/products/' + product.id">
                    <button class="text-white bg-black">View Details</button>
                </router-link>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductList",
        props: ['products']

    }
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
    border-radius: 50%;
    
 }
  
</style>