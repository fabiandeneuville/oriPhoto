<template>
    
    <div class="product__page">

        <loader v-if="loading"></loader>

        <page-header></page-header>

        <h1 class="product__page__heading">Présentation de l'appareil </h1>
        
        <product-details
        v-bind:id="product.id"
        v-bind:name="product.name"
        v-bind:description="product.description"
        v-bind:price="product.price/100"
        v-bind:imageUrl="product.imageUrl"
        v-bind:lenses="product.lenses"
        >
        </product-details>

        <page-footer></page-footer>

    </div>

</template>

<script>
import Loader from '../components/loader.vue'

import PageFooter from '../components/pageFooter.vue'
import pageHeader from '../components/pageHeader.vue'
import ProductDetails from '../components/productDetails.vue'

export default {
  components: { pageHeader, PageFooter, ProductDetails, Loader },
    name:'productPage',
    data(){
        return {
            product : {
                id: '',
                name: '',
                description : '',
                price : 0,
                imageUrl : '',
                lenses : [],  
            },
            loading: true
        }
    },
    head(){
        return {
            htmlAttrs: {
                lang: 'fr'
            },
            title : `${this.name} - oriPhoto`,
            meta : [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    hid: 'description',
                    name: 'description',
                    content: this.description
                }
            ]
        }
    },

    // async fetch(){
    //     this.product = await fetch(`https://api.orinoco.stevenoyer.fr/api/cameras/${this.$route.query.id}`)
    //     .then(response =>  response.json())
    // }

    created(){
       this.$axios.get(`https://api.orinoco.stevenoyer.fr/api/cameras/${this.$route.query.id}`)
       .then(response => {
        this.product = response.data
        this.loading = false
       })
       .catch(() => {
        this.$router.push('/notFound')
        this.loading = false
        })
    }
}

</script>