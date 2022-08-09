<template>
    
    <div>

        <page-header></page-header>

        <contact-form></contact-form>

        <page-footer></page-footer>

    </div>

</template>

<script>
import ContactForm from '../components/contactForm.vue'
import PageFooter from '../components/pageFooter.vue'
import pageHeader from '../components/pageHeader.vue'

export default {
  components: { pageHeader, PageFooter, ContactForm },
    name:'contactPage',
    head : {
      title : 'Contact - oriPhoto',
      meta : [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Vous souhaitez nous poser une question ou vous renseigner sur notre stock ? Contactez-nous.'
        }
      ]
    }
}

</script>