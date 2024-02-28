<template>
  <!-- Tomorrows work -->
  <div class="adminpage bg-black">
    <h1 class="admin text-white">Admin</h1>
    <!-- User products -->
    <div class="col">
      <h2 class="admin fs-1 text-white">Users</h2>
      <div class="row">
        <div class="col"><button class="subadmin fs-5 btn text-black bg-light">Sort Users</button></div>
        <div class="col"><button class="subadmin fs-5 btn text-black bg-light">Add New User</button></div>
      </div>
      <table class="table table-black table-striped-columns">
        <thead class="bg-black">
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
                <button class="btn w-50 btn-primary">Edit</button>
                <button class="btn w-50 btn-danger">Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Table Products -->
    <div class="col">
      <h2 class="admin fs-1 text-white"> Products</h2>
      <div class="row">
        <div class="col"><button class="subadmin fs-5 btn text-black bg-light">Sort Product</button></div>
        <div class="col"><button class="subadmin fs-5 btn text-black bg-light">Add New Products ...</button></div>
      </div>
      <table class="table table-black table-striped-columns">
        <thead>
          <tr>
            <th>IMAGE</th>
            <th>BRAND</th>
            <th>QUANITY</th>
            <th>PRICE</th>
            <th>CATEORGY</th>
            <th>ACTION</th>

          </tr>
        </thead>
        <tbody class="" v-if="products">
          <tr v-for="product in products" :key="product.prodID">
            <td><img :src="product.prodUrl" style="height: 100px;" /></td>
            <td>{{ product.prodName }}</td>
            <td>{{ product.quantity }}</td>
            <td>R {{ product.amount }}</td>
            <td>{{ product.Category }}</td>
            <td>
              <div class="row">
                <button class="btn w-50 btn-primary">Edit</button>
                <button class="btn w-50 btn-danger">Delete</button>
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
  name: "ProductDetailPage",
  computed: {
    products() {
      return this.$store.state.products;
    },
    users() {
      return this.$store.state.users
    },
  },
  mounted() {
    this.$store.dispatch('fetchProducts');
    this.$store.dispatch('fetchUsers')
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jacques+Francois+Shadow&display=swap');

.adminpage {
  overflow-x: hidden;
}

.product-item img {
  height: 100px;
  width: 100px;
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

.product-item button {
  width: 100%;
}

.product-image img {
  height: 100px;
  width: 100px;
}
</style>
