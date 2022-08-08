<template>
    
    <div class="cart__content">
        
        <div class="cart__content__heading">
            <h2>Votre panier</h2>
            <p>{{ getCartQuantity }} {{ article }}</p>
        </div>

        




    </div>

</template>

<script>

export default {
    name: 'cartContent',
    computed : {
        article(){
            if(this.$store.state.cartTotalQuantity <= 1){
                return 'Article'
            } else {
                return 'Articles'
            }
        },
        getCartQuantity(){
            return this.$store.state.cartTotalQuantity
        }
    }
}

</script>