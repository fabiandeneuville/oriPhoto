<template>
    
     <div class="product__details">

            <modale-box
            v-if="showModale"
            v-bind:message="modaleMessage"
            v-on:closeModale="closeModale"
            >
            </modale-box>

            <div class="product__details__description">

                <div class="product__details__description__image">
                    <img v-bind:src="imageUrl" v-bind:alt="`Photo de l'appareil ${name}`">
                </div>

                <h1 class="product__details__description__title">{{ name }}</h1>

                <p class="product__details__description__text">{{ description }}</p>
            </div>


            <div class="product__details__options">
                <p class="product__details__options__price">{{ price }} €</p>
                <form class="product__details__options__form">
                    <label class="product__details__options__form__label" for="lenses">Objectif : </label>

                    <select v-model="selected" class="product__details__options__form__input" name="lenses" id="lenses">
                        <option disabled value="">-- Choisissez --</option>
                        <option v-bind:key="index" v-for="(option, index) in lenses" v-bind:value="lenses[index]">{{ lenses[index] }}</option>

                    </select>

                    <label class="product__details__options__form__label" for="quantity">Quantité :</label>
                    <input v-model="quantity" class="product__details__options__form__input" type="number" min="1" max="5" value="1" name="quantity" id="quantity" required>
                    <button v-on:click="addToCart" class="product__details__options__form__button" title="Ajouter au panier"><fa icon="cart-arrow-down"/></button>
                </form>
            </div>

    </div>

</template>

<script>

import modaleBox from '../components/modale.vue'

export default {
    name: 'productDetails',
    components : { modaleBox },
    data(){
        return {
            modaleMessage: '',
            quantity: '1',
            selected: '',
            showModale : false
        }
    },
    props : [
        'name',
        'description',
        'price',
        'imageUrl',
        'lenses',
        'id'
    ],
    methods : {
        addToCart(e){

            e.preventDefault()
            let quantityPicked = parseInt(this.quantity, 10)
            if(quantityPicked < 1 || quantityPicked > 5 || this.selected === ''){
                this.modaleMessage = "Veuillez indiquer une quantité comprise entre 1 et 5 et sélectionner un objectif"
                this.showModale = true
            } else {
                let product = {
                    id : this.id,
                    name : this.name,
                    quantity : quantityPicked,
                    selected : this.selected,
                    price : this.price,
                    imageUrl : this.imageUrl
                }
                this.$store.commit('addToCart', product)
                this.modaleMessage = "Ajouté au panier"
                this.showModale = true
                
            }
        }, 
        closeModale(){
            this.showModale = false
        }
    }
}

</script>