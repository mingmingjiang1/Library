<!--
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2021-07-05 22:04:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-05 23:36:19
-->
<template>
    <div class="headersearch">
        <input type="search" v-model="keywords">
        <button @click="search">
            
        </button>
    </div>
</template>

<script>
    export default {
        name:"HeaderSearch",
        data() {
            return {
                keywords:''
            }
        },
        methods:{
            search() {
                if(this.keywords !== this.$route.query.wd) {
                    this.$router.push({
                        path:"/search",
                        query:{
                            wd:this.keywords
                        }
                    })
                }
            }
        }
    }
</script>


<style scoped>
    .headersearch {
        flex: 1;
        text-align: center;
        margin-top: 10px;
    }

    button::after {
        font-family: 'icomoon';
        content: '\e986';
    }

    button {
        height: 40px;
        width: 40px;
    }

    input {
        height: 40px;
        width: 90%;
        border: 1px solid;
        border-radius: 5px;
        outline: none;
    }
</style>