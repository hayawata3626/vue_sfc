<template lang="pug">
  .list
    p.list_item {{name}}
</template>

<style lang="scss">
.list {
   color: #323232;
   font-weight: 700;
   &_item {
     display: flex;
   }
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