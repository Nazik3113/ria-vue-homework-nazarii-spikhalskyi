<template>
  <div class="alert alert-danger" role="alert">
    {{errorMessage}}
  </div>
</template>

<script>
export default {
  name: "Error",
  props: ['errorMessage']
}
</script>

<style scoped>

</style>