<template>
    
    <div class="orderBlock">

        <cart-content></cart-content>

        <order-form></order-form>

    </div>

</template>

<script>
import cartContent from './cartContent.vue'
import OrderForm from './orderForm.vue'

export default {
  components: { cartContent, OrderForm },
    name: 'orderBlock'
}

</script>