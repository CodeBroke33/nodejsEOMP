<template>
  <div class="adminpage bg-black">
    <div class="col">
      <h2 class="admin text-white">User</h2>
      <div class="row">
        <!-- <div class="col">
          <button class="subadmin btn btn-light">Add User</button>
        </div> -->
      </div>
      <div class="container">
<table class="table table-striped-columns rounded-3">
  <thead>
    <tr>
      <th scoped="col">User ID</th>
      <th scoped="col">First name</th>
      <th scoped="col">Last name</th>
      <th scoped="col">User age</th>
      <th scoped="col">Gender</th>
      <th scoped="col">Email address</th>
      <th scoped="col">User role</th>
      <th scoped="col">Action</th>
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
          <div class="col">
            <button class="btn btn-primary btn-block">Edit</button>
          </div>
          <div class="col">
            <button class="btn btn-danger btn-block">Delete</button>
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</table>
      </div>
    </div>

    <div class="col">
      <h2 class="admin text-white">Product</h2>
      <div class="row">
        <!-- <div class="col">
          <button class="subadmin btn btn-light">Add Product</button>
        </div> -->
      </div>
        <div class="container">
          <table class="table table-striped-columns rounded-5">
  <thead>
    <tr>
      <th scoped="col">Product ID</th>
      <th scoped="col">Product Name</th>
      <th scoped="col">Product Category</th>
      <th scoped="col">Product Amount</th>
      <th scoped="col">Action</th>
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
          <div class="col">
            <button class="btn btn-primary btn-block">Edit</button>
          </div>
          <div class="col">
            <button class="btn btn-danger btn-block">Delete</button>
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</table>
        </div>
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


  .rounded {
  border-radius: 10px !important; /* Adjust the value as needed */
}
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

  .container {
    border-radius: 1px;
    color: grey;
  }




</style>
