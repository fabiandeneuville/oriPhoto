<template>
    
    <div class="product__page">

        <page-header></page-header>
        
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

import PageFooter from '../components/pageFooter.vue'
import pageHeader from '../components/pageHeader.vue'
import ProductDetails from '../components/productDetails.vue'

export default {
  components: { pageHeader, PageFooter, ProductDetails },
    name:'productPage',
    data(){
        return {
            id: '',
            name: '',
            description : '',
            price : 0,
            imageUrl : '',
            lenses : []
        }
    },
    created(){

        this.products = fetch(`https://api.orinoco.stevenoyer.fr/api/cameras/${this.$route.query.id}`)
        .then(response => response.json())
        .then((data) => {
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