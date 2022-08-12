<template>
    
    <div class="notFound">
        <page-header></page-header>
        <h1 class="notFound__heading">404</h1>
        <p class="notFound__text">La page que vous recherchez n'existe pas.</p>
        <NuxtLink to='/' class="notFound__link">Voir nos appareils</NuxtLink>
        <page-footer></page-footer>
    </div>

</template>


<script>

import pageHeader from '../components/pageHeader.vue'
import pageFooter from '../components/pageFooter.vue'

export default {
    name: 'notFound',
    components: { pageHeader, pageFooter}
}

</script>
