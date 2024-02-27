<template>
    <div class="admin-page">
        <div class="row">
            <div class="d-flex justify-content-evenly">
                <button>Sorting Options</button>
                <button @click="openAddProductModal">Add New Product</button>
            </div>

        </div>

        <div class="row text-center">
            <table>
                <thead>
                    <tr>
                        <th>IMAGE</th>
                        <th>SPECIFICATION</th>
                        <th>PRICE</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product.id">
                        <td><img :src="product.imageName" style="width: 300px; height: 300px;" /></td>
                        <td>{{ product.description }}</td>
                        <td>{{ product.price }}</td>
                        <td>
                            <button @click="editProduct(product)">Edit</button>
                            <button @click="deleteProduct(product.id)">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Modal for Adding a New Product -->
        <div class="modal" v-if="isAddProductModalOpen">
            <!-- Your modal content goes here -->
            <p>Modal Content for Adding New Product</p>
            <button @click="closeAddProductModal">Close Modal</button>
        </div>
    </div>
</template>
  
<script>

import { products } from '../temp-data';

export default {
    data() {
        return {
            isAddProductModalOpen: false,
            products: products,
        };
    },

    methods: {
        openAddProductModal() {
            this.isAddProductModalOpen = true;
        },
        closeAddProductModal() {
            this.isAddProductModalOpen = false;
        },
    },
};
</script>
  
<style scoped>
.row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1REM;
}


table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    border: 1px solid #ddd;
    padding: 8px;
}

th {
    background-color: #f2f2f2;
}

.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ccc;
    z-index: 1000;
    display: flex;
    flex-direction: column;
}
</style>
  