<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import TAside from './components/Aside.vue'
export default {
  name: 'App',
  components:{
    TAside
  }
}
</script>
