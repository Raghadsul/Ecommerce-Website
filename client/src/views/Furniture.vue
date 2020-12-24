<template>
    <div class="has-background-white-bis pt-3 pb-5"> 
        <div class="container"> 
            <div class="is-flex"> 

                <!-- Categoris -->
                <div class="w-box pt-5 mr-2 pr-5"> 
                    <div class="box"> 
                        <h1 class="border-bottom"> Categories </h1>
                        <a> <small> Chairs (5)</small> </a> <br/>
                        <a> <small> Beds (5)</small> </a> <br/>
                        <a> <small> Tables (5)</small> </a> <br/>
                        <a> <small> Sofas (5)</small> </a> <br/>
                    </div>
                </div>

                <!-- Collection  -->
                <div class="w-collection"> 
                    <div class="pb-2">
                        <small> <a href="/"> Home </a> > <a href="/furniture"> Furniture </a> </small>
                    </div>
                    <div class="columns is-multiline">
                        <div id="product" class="column is-3" v-for="product in list" v-bind:key="product.id"> 
                            <a v-bind:href="'/furniture/'+ product.id"><img src="../assets/chair.png"/> </a>
                            <small> {{product.name}} </small> <br/>
                            <small class="has-text-weight-semibold"> SAR {{product.price}} </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {
    name: 'Furniture',
    data() {
        return {list:undefined}
    },
    mounted(){
        Vue.axios.get('http://127.0.0.1:8000/api/products')
        .then((res) => {
            this.list = res.data;
            console.log(res);
        })
    }
}
</script>

<style scoped lang="scss">
.w-box { 
    width: 25%;
}
.w-collection {
    width: 75%;
}
.border-bottom {
    border-bottom: 1px solid #E5E1E0;
}
</style>

