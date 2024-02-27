<template>
    <div class="container-fluid bg-dark">  
      <h1 class="text-center">Admin</h1>
      <div class="row">
        <div class="col"><button class="btn btn-primary">Sort Users</button></div>
        <div class="col"><button class="btn btn-success">Add New Product</button></div>
      </div>
  
      <!-- User products -->
      <div class="col">
        <h2>User Products</h2>
        <table class="table">
          <thead>
            <tr>
              <th>User ID</th>
              <th>First name</th>
              <th>Last name</th>
              <th>User age</th>
              <th>Gender</th>
              <th>Email address</th>
              <th>User role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody v-if="users">
            <tr v-for="user in users" :key="user.userID">
              <td>{{ user.userID }}</td>
              <td>{{ user.firstName }}</td>
              <td>{{ user.lastName }}</td>
              <td>{{ user.userAge }}</td>
              <td>{{ user.Gender }}</td>
              <td>{{ user.emailAdd }}</td>
              <td>{{ user.userRole }}</td>
              <td>
                <div class="row">
                  <button class="btn btn-primary">Edit</button>
                  <button class="btn btn-danger">Delete</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <!-- Table Products -->
      <div class="col">
        <h2>Table Products</h2>
        <table class="table">
          <thead>
            <tr>
              <th>BRAND</th>
              <th>SPECIFICATIONS</th>
              <th>AMOUNT</th>
              <th>PRICE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody v-if="products">   
            <tr v-for="product in products" :key="product.id">
              <td class="product-image"><img :src="product.imageName" /></td>
              <td>{{ product.name }}</td>
              <td>
                <div v-if="!product.showFullDescription">
                  {{ product.description.slice(0, 50) }}
                  <span @click="toggleDescription(product)">... (click to expand)</span>
                </div>
                <div v-else>
                  {{ product.description }}
                </div>
              </td>
              <td>{{ product.price }}</td>
              <td>
                <div class="row">
                  <button class="btn btn-primary">Edit</button>
                  <button class="btn btn-danger">Delete</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { usersData } from '../users-temp-data';
  import { products } from '../temp-data';
  
  export default {
    name: "ProductDetailPage",
    setup() {
      const users = ref(usersData.users);
      const productsData = ref(products);
  
      const toggleDescription = (product) => {
        product.showFullDescription = !product.showFullDescription;
      };
  
      productsData.value.forEach(product => {
        product.showFullDescription = false;
      });
  
      return {
        users,
        products: productsData,
        toggleDescription,
      };
    },
  };
  </script>
  
  
  <style scoped>
  .product-item img {
    height: 100px;
    width: 100px;
  }
  
  .product-item button {
    width: 100%;
  }
  
  .product-image img {
    height: 100px;  
    width: 100px; 
  }
  
  </style>
  