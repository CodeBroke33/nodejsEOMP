<template>
    <div>
      <div>{{ updateProductModel }}</div>
  
      <form @submit.prevent="updateProduct">
        <label for="prodID">Product ID:</label>
        <input v-model="payload.prodID" type="text" id="prodID" disabled />
  
        <label for="prodName">Product Name:</label>
        <input v-model="payload.prodName" type="text" id="prodName" />
  
        <label for="quantity">Quantity:</label>
        <input v-model="payload.quantity" type="text" id="quantity" />
  
        <label for="amount">Amount:</label>
        <input v-model="payload.amount" type="text" id="amount" />
  
        <label for="Category">Category:</label>
        <input v-model="payload.Category" type="text" id="Category" />
  
        <label for="prodUrl">Product URL:</label>
        <input v-model="payload.prodUrl" type="text" id="prodUrl" />
  
        <button type="submit">Update</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    props: ['updateProductModel', 'product'],
    data() {
      return {
        payload: {
          prodID: '',
          prodName: '',
          quantity: '',
          amount: '',
          Category: '',
          prodUrl: ''
        }
      };
    },
    mounted() {
      this.updateFormData();
    },
    methods: {
      updateFormData() {
        this.payload = { ...this.product };
      },
      updateProduct() {
        this.$store.dispatch('updateProduct', this.payload);
        this.$emit('update', this.payload);
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  