<template>
    <div class="container vh-100">  
      <div class="row">
        <div class="row"><button>ADD</button></div>
        <table>
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
              <td class="d-flex justify-content-between">
                <button class="btn btn-success">Edit</button>
                <button class="btn btn-success">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  // Import usersData from the temp-data file
  import { usersData } from '../users-temp-data';
  
  export default {
    computed: {
      users: () => usersData.users,
    },
    methods: {
    },
    mounted() {
    },
  };
  </script>
  
  <style scoped>
  </style>
  