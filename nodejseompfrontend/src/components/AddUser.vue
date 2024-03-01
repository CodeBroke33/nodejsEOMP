<template>
    <div>
      <div>{{ addUserModel }}</div>
  
      <form @submit.prevent="register">
        <label for="firstName">First Name:</label>
        <input v-model="payload.firstName" type="text" id="firstName" />
  
        <label for="lastName">Last Name:</label>
        <input v-model="payload.lastName" type="text" id="lastName" />
  
        <label for="userAge">Age:</label>
        <input v-model="payload.userAge" type="number" id="userAge" />
  
        <label for="gender">Gender:</label>
        <input v-model="payload.gender" type="text" id="gender" />
  
        <label for="emailAdd">Email:</label>
        <input v-model="payload.emailAdd" type="email" id="emailAdd" />
  
        <label for="userPass">Password:</label>
        <input v-model="payload.userPass" type="password" id="userPass" />
    
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    props: ['addUserModel'],
    data() {
      return {
        payload: {
          firstName: '',
          lastName: '',
          userAge: '',
          gender: '',
          emailAdd: '',
          userPass: '',
        }
      };
    },
    methods: {
      register() {
        this.$store.dispatch('addUser', this.payload);
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  