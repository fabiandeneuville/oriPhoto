<template>
    
    <div>
        <page-header></page-header>
        <confirmation-message></confirmation-message>
        <page-footer></page-footer>
    </div>

</template>

<script>
import ConfirmationMessage from '../components/confirmationMessage.vue'
import pageFooter from '../components/pageFooter.vue'
import PageHeader from '../components/pageHeader.vue'

export default {
  components: { pageFooter, PageHeader, ConfirmationMessage },
    name: 'confirmationPage',
    head : {
      htmlAttrs: {
        lang: 'fr'
      },
      title : 'Commande validée - oriPhoto',
      meta : [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Votre commande a été validée.'
        }
      ]
    }
}

</script>