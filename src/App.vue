<template>
  <div id="app" class="d-flex justify-content-center">
    <div class="w-75 p-3">
      <h2>Інформація про користувача</h2>
      <hr>
      <AddUser/>
      <hr>
      <p class="text-lg-left">Кількість користувачів: <b>{{allUsers.length}}</b></p>
      <UserList />
    </div>
  </div>
</template>

<script>
import AddUser from "@/components/AddUser";
import UserList from "@/components/UserList";
import {mapGetters} from "vuex";
export default {
  name: 'App',
  components: {
    AddUser,
    UserList
  },
  computed: mapGetters(['allUsers']),
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
