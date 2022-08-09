<template>
    
    <div class="product__page">

        <loader v-if="loading"></loader>

        <page-header></page-header>

        <h1 class="product__page__heading">Présentation de l'appareil {{ name }}</h1>
        
        <product-details
        v-bind:id="id"
        v-bind:name="name"
        v-bind:description="description"
        v-bind:price="price"
        v-bind:imageUrl="imageUrl"
        v-bind:lenses="lenses"
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
            id: '',
            name: '',
            description : '',
            price : 0,
            imageUrl : '',
            lenses : [],
            loading : true
        }
    },
    head(){
        return {
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
    created(){

        this.products = fetch(`https://api.orinoco.stevenoyer.fr/api/cameras/${this.$route.query.id}`)
        .then((response) => response.json())
        .then((data) => {
            this.loading = false;
            this.id = data._id;
            this.name = data.name;
            this.description = data.description;
            this.price = data.price / 100;
            this.imageUrl = data.imageUrl;
            this.lenses = data.lenses
        })

    }
}

</script>