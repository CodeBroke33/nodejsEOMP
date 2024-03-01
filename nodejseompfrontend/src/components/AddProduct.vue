<template>
    <div>  
      <div>{{ addProductModel }}</div>
  
      <form @submit.prevent="register">
        <label for="prodID">Product ID:</label>
        <input v-model="payload.prodID" type="text" id="prodID" />
  
        <label for="prodName">Product Name:</label>
        <input v-model="payload.prodName" type="text" id="prodName" />
  
        <label for="quantity">Quantity:</label>
        <input v-model="payload.quantity" type="text" id="quantity" />
  
        <label for="amount">Amount:</label>
        <input v-model="payload.amount" type="text" id="amount" />
  
        <label for="category">Category:</label>
        <input v-model="payload.category" type="text" id="category" />
  
        <label for="prodUrl">Product URL:</label>
        <input v-model="payload.prodUrl" type="text" id="prodUrl" />
  
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    props: ['addProductModel'],
    data() {
      return {
        payload: {
          prodID: '',
          prodName: '',
          quantity: '',
          amount: '',
          category: '',
          prodUrl: ''
        }
      };
    },
    methods: {
      register() {
        this.$store.dispatch('addProduct', this.payload);
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  