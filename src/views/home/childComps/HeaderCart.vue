<!--
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2021-07-05 22:35:16
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-06 09:44:42
-->
<template>
    <div class="cart">
        <a @click.prevent="handleCart">
            <span class="label label-success">购物车{{cartItemCount}}</span>
        </a>
    </div>
</template>
    
<script>
    import { mapGetters } from 'vuex'
    export default {
        name:"Cart",
        data() {
            return {
                
            }
        },
        computed:{
            ...mapGetters('cart', {
                "cartItemCount":"itemsCount"
            }),
        },
        methods:{
            handleCart() {
                this.$router.push({
                    path:"/cart",
                })
            }
        }
    }
</script>

<style scoped>
.cart {
    background-color: #ececec;
    box-shadow: #ececec;
    margin-top: 10px;
    margin-right: 10px;
    text-align: center;
    height: 40px;
    line-height: 40px;
}

</style>