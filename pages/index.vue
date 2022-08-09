<template>

  <div>

    <page-header></page-header>

    <banner></banner>

    <products-list></products-list>

    <page-footer></page-footer>

  </div>
    

</template>

<script>

import PageHeader from '../components/pageHeader.vue'
import productsList from '../components/productsList.vue'
import banner from '../components/banner.vue'
import PageFooter from '../components/pageFooter.vue'

export default {

  components: { productsList, PageHeader , PageFooter, banner},
    name : 'homePage',
    head : {
      title : 'Accueil - oriPhoto',
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