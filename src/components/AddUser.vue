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
      if (this.name.trim().length === 0) return false;
      for (let letter of this.name.trim().split('')) {
        if (letter.toUpperCase() === letter.toLowerCase() && letter !== ' ') {
          this.setError('Name should not contain numbers or symbols');
          this.addUserClass = `${this.addUserClass} disabled`;
          return false;
        }
      }
      if (this.name.length > 20) {
        this.setError('Name length should be less than 20');
        this.addUserClass = `${this.addUserClass} disabled`;
        return false;
      } else {
        this.unsetError();
        this.addUserClass = 'btn btn-primary';
        return true;
      }
    },
    validateEmail() {
      if (this.email.trim().length === 0) return false;
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(String(this.email).toLowerCase())) {
        this.unsetError();
        this.addUserClass = 'btn btn-primary';
        return true;
      } else {
        this.setError('Email is not valid');
        this.addUserClass = `${this.addUserClass} disabled`;
        return false;
      }
    },
    validateAge() {
      if (this.age.trim().length === 0) return false;
      if (+this.age > 150) {
        this.setError('Age should be less than 150');
        this.addUserClass = `${this.addUserClass} disabled`;
        return false;
      }
      let res = true;
      for (let number of this.age.split('')) {
        if (!Number.isNaN(+this.age) && number !== '.') {
          this.unsetError();
          this.addUserClass = 'btn btn-primary';
          res = true;
        } else {
          this.setError('Age should not contain nothing except numbers');
          this.addUserClass = `${this.addUserClass} disabled`;
          res = false;
        }
      }
      return res;
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