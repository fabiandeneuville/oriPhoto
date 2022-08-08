<template>
    
     <div class="product__details">

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
                <p class="product__details__options__confirmation-message">{{ message }}</p>
            </div>

    </div>

</template>

<script>

export default {
    name: 'productDetails',
    data(){
        return {
            message: '',
            quantity: '',
            selected: ''
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
        addToCart(){
            
        }
    }
}

</script>