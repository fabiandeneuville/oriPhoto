<template>
    
    <div class="products">

        <h2 class="products__heading">Nos appareils en stock</h2>

        <p v-if="$fetchState.pending">Loading ....</p>

        <p v-else-if="$fetchState.error">Error while fetching products</p>

        <ul v-else class="products__list">

            <li class="products__list__item" v-bind:key="index" v-for="(product, index) in products">

                <product-card
                v-bind:name="product.name"
                v-bind:id="product._id"
                v-bind:description="product.description"
                v-bind:price="product.price / 100"
                v-bind:imageUrl="product.imageUrl"
                >
                </product-card>

            </li>

        </ul>

    </div>

</template>

<script>
import productCard from './productCard.vue'

export default {
  components: { productCard },
    name: 'productsList',

    data(){
        return {
            products : []
        }
    },

    async fetch(){

        this.products = await fetch('https://api.orinoco.stevenoyer.fr/api/cameras')
        .then(response => response.json())

    }
}

</script>