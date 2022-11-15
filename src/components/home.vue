<template>
    <div>
        <t-aside></t-aside>
        <router-view></router-view>
    </div>
</template>
<script>
import TAside from './Aside.vue'
export default {
    components:{
        TAside
    }
}
</script>