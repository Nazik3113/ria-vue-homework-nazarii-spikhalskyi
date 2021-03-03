<template>
  <table class="table">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Age</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="user of allUsers">
      <th scope="row">{{user.id}}</th>
      <td>{{user.name | capitalizeName}}</td>
      <td>{{user.email}}</td>
      <td>{{user.age}}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name: "UserList",
  computed: mapGetters(['allUsers']),
  props: ['users'],
  filters: {
    capitalizeName(name) {
      const firstLetter = name.slice(0, 1);
      const restOfTheName = name.slice(1);
      return `${firstLetter.toUpperCase()}${restOfTheName}`
    }
  }
}
</script>

<style scoped>

</style>