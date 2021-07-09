<!--
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2021-07-05 22:45:01
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-06 09:51:45
-->
<template>
    <div class="header">
        <div>
            <img src="@/assets/images/logo.png" alt="">
        </div>
        <header-search></header-search>
        <header-cart></header-cart>
        <div class="login">
            <span v-if="!user">
                你好，请<router-link to="/login">登陆</router-link> 免费
                <router-link to="/">注册</router-link>
            </span>
            <span v-else>
                {{}}
            </span>
        </div>

    </div>
</template>

<script>
    import HeaderSearch from "./HeaderSearch"
    import HeaderCart from "./HeaderCart"
    export default {
        name:"Header",
        data() {
            return {
                
            }
        },
        components:{
            HeaderSearch,
            HeaderCart
        }
    }
</script>

<style scoped>
  .header {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    font-size: 20px;
    margin: 10px 10px;
  }
    
    img {
        width: 80px;
        height: 50px;
        vertical-align: middle;
    }
    .login {
        margin-top: 10px;
        height: 40px;
        line-height: 40px;
    }

</style>