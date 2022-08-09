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
      htmlAttrs: {
        lang: 'fr'
      },
      title : 'Accueil - oriPhoto',
      meta : [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Le spécialiste de la vente d\'appareils photo vintage remis à neuf'
        },
        { hid: 'og-title', property: 'og:title', content: 'oriPhoto' },
        { hid: 'og-desc', property: 'og:description', content: 'Le spécialiste de la vente d\'appareils photo vintage remis à neuf' },
        { hid: 'og-image', property: 'og:image', content: 'https://user-images.githubusercontent.com/94392055/183776093-dc7d3ef8-8692-4b3c-aa31-9d381320971d.png' },
        { hid: 'og-url', property: 'og:url', content: 'https://oriphoto.herokuapp.com/' }
      ]
    }
}

</script>