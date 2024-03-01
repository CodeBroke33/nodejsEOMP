<template>
    <div class="container">
      <div class="row">
        <h2 class="display">Login</h2>
        <form @submit.prevent="loginUser">
          <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" v-model="username" id="username" required>
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" v-model="password" id="password" required>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: "",
        password: "",
      };
    },
    methods: {
      loginUser() {
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  