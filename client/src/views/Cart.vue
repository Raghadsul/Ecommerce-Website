<template>
    <div class="has-background-white-bis pt-3 pb-5"> 
        <div class="container"> 
            <!-- Path -->
            <div class="pb-3">
                <small> <a href="/"> Home </a> > <a href="/cart"> Cart </a> </small>
            </div>
            <div class="is-flex"> 
                <div class="w-selections mr-6">
                    <h1 class="border-bottom"> YOUR SELECTIONS</h1>
                    <div class="border-bottom"> 
                        <div class="is-flex my-2">
                            <img src="@/assets/chair.png" width="20%"/>
                            <div class="pl-6"> 
                                <p id="name-size"> Chair </p>
                                <p class="has-text-weight-semibold"> SAR 1,000</p>
                                <p> <small> White chair with 20cm, 120cm ...</small> </p>
                                <p> <small> <spna class="has-text-weight-semibold"> Color: </spna> Black </small> </p>
                                <p> <small> <spna class="has-text-weight-semibold"> Quantity: </spna> 2 </small> </p>
                                <p class="pt-2"> <a href="#"> Edit </a> | <a href="#"> Remove </a> </p>
                            </div>
                        </div>
                    </div>
                    <div class="border-bottom"> 
                        <div class="is-flex my-2">
                            <img src="@/assets/chair.png" width="20%"/>
                            <div class="pl-6"> 
                                <p id="name-size"> Chair </p>
                                <p class="has-text-weight-semibold"> SAR 1,000</p>
                                <p> <small> White chair with 20cm, 120cm ...</small> </p>
                                <p> <small> <spna class="has-text-weight-semibold"> Color: </spna> Black </small> </p>
                                <p> <small> <spna class="has-text-weight-semibold"> Quantity: </spna> 2 </small> </p>
                                <p class="pt-2"> <a href="#"> Edit </a> | <a href="#"> Remove </a> </p>
                            </div>
                        </div>
                    </div>
                    <div class="border-bottom"> 
                        <div class="is-flex my-2">
                            <img src="@/assets/chair.png" width="20%"/>
                            <div class="pl-6"> 
                                <p id="name-size"> Chair </p>
                                <p class="has-text-weight-semibold"> SAR 1,000</p>
                                <p> <small> White chair with 20cm, 120cm ...</small> </p>
                                <p> <small> <spna class="has-text-weight-semibold"> Color: </spna> Black </small> </p>
                                <p> <small> <spna class="has-text-weight-semibold"> Quantity: </spna> 2 </small> </p>
                                <p class="pt-2"> <a href="#"> Edit </a> | <a href="#"> Remove </a> </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-payment-method"> 
                    <div class="box"> 
                        <h1 class="border-bottom pb-2"> ORDER INFORMATION</h1>
                        <div class="border-bottom py-2"> 
                            <small> Subtotal: <span class="has-text-weight-semibold"> 2,000 SAR</span></small> <br/>
                            <small> Shipping: <span class="has-text-weight-semibold"> 0 SAR</span></small> <br/>
                            <small> Estimated Tax: <span class="has-text-weight-semibold"> 0 SAR</span></small>
                        </div>
                        <p class="py-2"> Estimated Total: <large> <span class="has-text-weight-semibold"> 2,000 SAR</span> </large> </p>
                        <a class="button is-dark is-block mt-1" href="#"> <strong>Checkout</strong> </a>
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
    name: 'Cart',
}
</script>

<style scoped lang="scss">
#size { 
    font-size: 18px;
}
.w-selections {
    width: 70%;
}
.w-payment-method {
    width: 30%;
}
.border-bottom {
    border-bottom: 1px solid #E5E1E0;
}
</style>

