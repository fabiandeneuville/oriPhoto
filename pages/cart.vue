<template>
    
    <div class="cart__page">

        <page-header></page-header>

        <order-block></order-block>

        <page-footer></page-footer>

    </div>

</template>

<script>

import PageFooter from '../components/pageFooter.vue'
import pageHeader from '../components/pageHeader.vue'
import OrderBlock from '../components/orderBlock.vue'

export default {

  components: { pageHeader, PageFooter, OrderBlock },
    name: 'cartPage'

}

</script>
