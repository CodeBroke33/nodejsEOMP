<template>
  <div class="adminpage">
    <div class="col">
      <h2 class="admin">User CRUD</h2>
      <div class="row">
        <!-- <div class="col">
          <button class="subadmin btn btn-light">Add User</button>
        </div> -->
      </div>
      <table class="table table-striped-columns">
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
            <td>{{ user.gender }}</td>
            <td>{{ user.emailAdd }}</td>
            <td>{{ user.userRole }}</td>
            <td>
              <div class="row">
                <button class="btn btn-primary w-50">Edit</button>
                <button class="btn btn-danger w-50">Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="col">
      <h2 class="admin">Product CRUD</h2>
      <div class="row">
        <!-- <div class="col">
          <button class="subadmin btn btn-light">Add Product</button>
        </div> -->
      </div>
      <table class="table table-striped-columns">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Product Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-if="products">
          <tr v-for="product in products" :key="product.prodID">
            <td><img :src="product.prodUrl" style="height: 100px;" /></td> 
            <td>{{ product.prodName }}</td>
            <td>{{ product.Category }}</td>
            <td> R {{ product.amount }}</td>
            <td>
              <div class="row">
                <button class="btn btn-primary w-50">Edit</button>
                <button class="btn btn-danger w-50">Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.state.users;
    },
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch('fetchUsers');
    this.$store.dispatch('fetchProducts');
  },
};
</script>

<style  scoped>
  @import url('https://fonts.googleapis.com/css2?family=Jacques+Francois+Shadow&display=swap');

  .adminpage {
    overflow-x: hidden;
  }

  .admin {
    font-family: 'Jacques Francois Shadow', cursive;
    font-size: 5rem;
  }

  .subadmin {
    font-family: 'Jacques Francois Shadow', cursive;
    font-size: 5rem;
    border-radius: 20px;
  }
</style>
