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
    name:'contactPage'
}

</script>