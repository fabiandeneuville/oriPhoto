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
    name: 'confirmationPage'
}

</script>