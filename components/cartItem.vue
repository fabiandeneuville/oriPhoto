<template>
    
    <div class="cart__item">
        <div class="cart__item__image">
            <img v-bind:src="imageUrl" alt="">
        </div>
        <p class="cart__item__name"> {{ name }} </p>
        <p class="cart__item__selected">{{ selected }}</p>
        <p class="cart__item__price"> {{ price }} €</p>
        <label class="cart__item__label" for="quantity"> Quantité : 
            <input v-model="newQuantity" v-on:change="updateProductQuantity" class="cart__item__input" type="number" min="1" max="5">
        </label>
        <p class="cart__item__error-message">{{ errorMessage }}</p>
        <button v-on:click="removeFromCart" class="cart__item__remove"><fa icon="trash"/></button>
    </div>

</template>

<script>

export default {
    name:'cartItem',
    data(){
        return {
            newQuantity : `${this.quantity}`,
            errorMessage : ''
        }
    },
    props : [
        'id',
        'name',
        'description',
        'quantity',
        'imageUrl',
        'price',
        'selected'
    ],
    methods : {
        removeFromCart() {
            let product = {
                id: this.id,
                price: this.price,
                quantity: this.quantity,
                selected: this.selected
            }
            this.$store.commit('removeFromCart', product)
        },
        updateProductQuantity(){

            let quantity = parseInt(this.newQuantity);
            if(quantity < 1 || quantity > 5){
                this.errorMessage = "Quantité non valide. "
                this.newQuantity = `${this.quantity}`
            } else {
                this.errorMessage = ""
                let product = {
                    id: this.id,
                    price: this.price,
                    quantity: parseInt(this.newQuantity),
                    selected: this.selected
                }
                this.$store.commit('updateProductQuantity', product)        
            }
        }
    }
}

</script>