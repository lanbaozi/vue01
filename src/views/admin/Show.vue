<template>
    <div>
        <h2>后台首页</h2>
        <!-- <router-link to="/admin/user">用户</router-link> -->
        <router-link :to="{name:'user'}">用户</router-link>
        <router-view/>
    </div>
</template>