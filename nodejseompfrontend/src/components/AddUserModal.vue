<template>
  <div class="modal fade" :id="addUserModel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Add User</h1>
          <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div>
            <label for="firstName">First Name:</label>
            <input v-model="userData.firstName" type="text" id="firstName">
          </div>
          <div>
            <label for="lastName">Last Name:</label>
            <input v-model="userData.lastName" type="text" id="lastName">
          </div>
          <div>
            <label for="userAge">User Age:</label>
            <input v-model="userData.userAge" type="number" id="userAge">
          </div>
          <div>
            <label for="gender">Gender:</label>
            <select v-model="userData.gender" id="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label for="emailAdd">Email Address:</label>
            <input v-model="userData.emailAdd" type="email" id="emailAdd">
          </div>
          <div>
            <label for="userRole">User Role:</label>
            <input v-model="userData.userRole" type="text" id="userRole">
          </div>

          <button type="button" class="btn btn-primary" @click="saveUser">Save User</button>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['AddUserModal'],
  data() {
    return {
      userData: {
        userID: null,
        firstName: '',
        lastName: '',
        userAge: null,
        gender: 'male',
        emailAdd: '',
        userRole: '',
        userPass: '', 
        userProfile: null
      }
    };
  },
  methods: {
    saveUser() {
      this.$emit('close');
    },
    closeModal() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
</style>
