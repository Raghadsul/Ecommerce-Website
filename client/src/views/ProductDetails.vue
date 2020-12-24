<template>
    <div class="has-background-white-bis pt-3 pb-5"> 
        <div class="container"> 
            <!-- Path -->
            <div class="pb-2">
                <small> <a href="/"> Home </a> > <a href="/furniture"> Furniture </a> > <a a v-bind:href="'/furniture/'+ product.id"> {{product.name}} </a></small>
            </div>

            <!-- Product Detials -->
            <div class="is-flex"> 
                <div class="w-box"> 
                    <img src="@/assets/chair.png" width="350" height="70"/>
                </div>
                <div class="info-box px-6"> 
                    <div class="pb-2 has-text-weight-semibold border-bottom"> 
                        <p id="name-size"> {{product.name}} </p>   
                        <p>  SAR {{product.price}}</p>
                    </div>  
                    <div class="pt-3"> 
                        <b-field class="quantity-box" label="Description">
                            <p> {{product.desc}} </p>
                        </b-field>
                        <b-field class="quantity-box" label="Color">
                            <div class="is-flex"> 
                                <div class="color-box mr-2" style="background-color: pink"> 
                                </div>
                                <div class="color-box mr-2" style="background-color: black"> 
                                </div>
                                <div class="color-box mr-2" style="background-color: white"> 
                                </div>
                            </div>
                        </b-field>
                        <b-field class="quantity-box" label="Quantity">
                            <b-numberinput size="is-small" min=1 max=5>  </b-numberinput>
                        </b-field>
                    </div>
                </div>
                <div class="w-box">
                    <div class="box"> 
                        <div class="m-4"> 
                            <a class="button is-primary is-block my-2" href="#"> <strong>Add to Cart</strong> </a>
                            <a class="button is-dark is-block my-2" href="/cart"><strong> Buy Now </strong></a>
                            <img src="@/assets/payment_methods.png"/>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Similar Products -->
            <h1 id="name-size" class="pt-6 pb-3"> YOU MAY ALSO LIKE</h1>
            <div class="is-flex"> 
                <img class="mr-3" src="@/assets/chair.png" width="200" height="40"/>
                <img class="mr-3" src="@/assets/chair.png" width="200" height="40"/>
                <img class="mr-3" src="@/assets/chair.png" width="200" height="40"/>
                <img class="mr-3" src="@/assets/chair.png" width="200" height="40"/>
                <img class="mr-3" src="@/assets/chair.png" width="200" height="40"/>
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
    name: 'ProductDetails',
    props: ['id'],
    data() {
        return {product:undefined}
    },
    mounted(){
        Vue.axios.get(`http://127.0.0.1:8000/api/products/${this.id}`)
        .then((res) => {
            this.product = res.data;
            console.log(res);
        })
    }
}
</script>

<style scoped lang="scss">
#name-size { 
    font-size: 23px;
}
.w-box { 
    width: 30%;
}
.info-box { 
    width: 50%;
}
.border-bottom { 
    border-bottom: 1px solid #E5E1E0;
}
// .border { 
//     border: 1px solid #E5E1E0;
//     background-color: white;
// }
.quantity-box {
    width: 30%;
}
.color-box{
    width: 30px;
    height: 30px;
    background-color: white;
    -moz-border-radius: 50px;
    -webkit-border-radius: 50px;
    border-radius: 50px;
}
</style>

