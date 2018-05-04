import Vue from 'vue';
import HelloComponent from "./components/Hello.vue";

new Vue({
  el: "#app",
  components: {
    HelloComponent,
  },
  template:`
    <HelloComponent></HelloComponent>
  `
})

