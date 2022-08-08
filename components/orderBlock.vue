<template>
    
    <div class="orderBlock">

        <cart-content v-if="cartHasContent"></cart-content>

        <order-form v-if="cartHasContent"></order-form>

        <empty-cart v-if="!cartHasContent"></empty-cart>

    </div>

</template>

<script>
import cartContent from './cartContent.vue'
import EmptyCart from './emptyCart.vue';
import OrderForm from './orderForm.vue'

export default {
  components: { cartContent, OrderForm, EmptyCart },
    name: 'orderBlock',
    computed : {
        cartHasContent(){
            if(this.$store.state.cart.length !== 0){
                return true;
            } else {
                return false;
            }
        }
    }
}

</script>