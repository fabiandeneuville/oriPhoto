<template>

  <div>

    <page-header></page-header>

    <products-list></products-list>

    <page-footer></page-footer>

  </div>
    

</template>

<script>

import PageHeader from '../components/pageHeader.vue'
import productsList from '../components/productsList.vue'
import PageFooter from '../components/pageFooter.vue'

export default {

  components: { productsList, PageHeader , PageFooter},
    name: 'homePage',
    
}

</script>