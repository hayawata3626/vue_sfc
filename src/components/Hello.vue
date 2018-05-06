<template lang="pug">
  .list
    p.list_item Hello {{name}}
</template>

<style lang="scss" scoped>
  .list {
    color: #323232;
    font-weight: 700;
    &_item {
      display: flex;
    }
  }
</style>

<script lang="ts">
  import Vue from "vue";

  export default Vue.extend({
    data() {
      return {
        name: 'Vue.js!!!!'
      }
    }
  })
</script>