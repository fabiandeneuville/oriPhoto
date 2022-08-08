<template>
    
    <div class="cart__content">
        
        <div class="cart__content__heading">
            <h2>Votre panier</h2>
            <p>{{ getCartQuantity }} {{ article }}</p>
        </div>

        <ul class="cart__content__list">
            <li v-bind:key="index" v-for="(item, index) in getCart" class="cart__content__list__item">
                <cart-item
                v-bind:id='item.id'
                v-bind:name='item.name'
                v-bind:description='item.description'
                v-bind:imageUrl='item.imageUrl'
                v-bind:price="item.price"
                v-bind:selected='item.selected'
                v-bind:quantity='item.quantity'
                >
                </cart-item>
            </li>
        </ul>


        <button v-on:click="clearCart" class="cart__content__clear">Vider le panier</button>

        <p class="cart__content__total__price">TOTAL : {{ getCartTotalPrice }} €</p>
    </div>

</template>

<script>
import cartItem from './cartItem.vue'

export default {
  components: { cartItem },
    name: 'cartContent',
    computed : {
        article(){
            if(this.$store.state.cartTotalQuantity <= 1){
                return 'Article'
            } else {
                return 'Articles'
            }
        },
        getCart(){
            return this.$store.state.cart
        },
        getCartQuantity(){
            return this.$store.state.cartTotalQuantity
        },
        getCartTotalPrice(){
            return this.$store.state.cartTotalPrice
        }
    },
    methods : {
        clearCart(){
            this.$store.commit('clearCart')
        }
    }
}

</script>