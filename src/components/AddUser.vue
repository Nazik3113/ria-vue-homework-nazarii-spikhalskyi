<template>
  <div>
    <Error v-if="getErrorStatus" v-bind:errorMessage="getErrorMessage" />
    <form>
      <div class="row g-3">
        <div class="col-sm-5">
          <input
              type="text"
              class="form-control"
              placeholder="Your Name"
              v-model="name"
              v-on:input="validateName"
          >
        </div>
        <div class="col-sm-5">
          <input
              type="text"
              class="form-control"
              placeholder="Your Email"
              v-model="email"
              v-on:input="validateEmail"
          >
        </div>
        <div class="col-sm">
          <input
              type="text"
              class="form-control"
              placeholder="Your Age"
              v-model="age"
              v-on:input="validateAge"
          >
        </div>
      </div>
      <br>
      <div class="col">
        <button type="submit" :class="addUserClass" @click.prevent="addUserWithValidation({name: name.trim(), email: email.trim(), age})">Add User</button>
      </div>
    </form>
  </div>

</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import {validateName, validateEmail, validateAge} from '../validateFunctions';
import Error from "@/components/Error";
export default {
  name: "AddUser",
  data() {
    return {
      name: '',
      email: '',
      age: '',
      addUserClass: 'btn btn-primary',
    }
  },
  computed: mapGetters(['getErrorStatus', 'getErrorMessage']),
  components: {Error},
  methods: {
    ...mapActions(['addUser', 'setError', 'unsetError']),
    validateName() {
      return validateName(this.name, this.addUserClass, this.setError, this.unsetError);
    },
    validateEmail() {
      return validateEmail(this.email, this.addUserClass, this.setError, this.unsetError);
    },
    validateAge() {
      return validateAge(this.age, this.addUserClass, this.setError, this.unsetError);
    },
    addUserWithValidation(user) {
      if (this.name.trim().length === 0 || this.email.trim().length === 0 || this.age === '') {
        this.setError('Make sure every input is filled');
        this.addUserClass = `${this.addUserClass} disabled`;
        setTimeout(() => {
          this.unsetError();
          this.addUserClass = 'btn btn-primary';
        }, 2000)
        return;
      }
      if (this.validateName() && this.validateEmail() && this.validateAge()) {
        this.addUser(user);
        this.name = this.email = this.age = '';
      }
    }
  }
}
</script>

<style scoped>

</style>