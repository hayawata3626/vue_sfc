<template>
  <p>Hello, {{ name }}</p>
</template>

<style scoped>
p {
   color: #323232;
   font-weight: 700;
 }
</style>

<script>
export default {
  data: function() {
    return {
      name: 'Vue.js!!!'
    }
  }
}
</script>