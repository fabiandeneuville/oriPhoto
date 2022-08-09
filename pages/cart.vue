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
    name: 'cartPage',
    head : {
      title : 'Panier - oriPhoto',
      meta : [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Le spécialiste de la vente d\'appareils photo vintage remis à neuf'
        }
      ]
    }

}

</script>
