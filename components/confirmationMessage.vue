<template>
    
    <div class="confirmation">
        <h1 class="confirmation__heading" >Commande validée !</h1>
        <p class="confirmation__text" >Nous vous remercions pour votre commande. Voici la référence à conserver : </p>
        <p class="confirmation__text orderId">{{ getOrderId }}</p>
    </div>

</template>

<script>

export default {
    name: 'confirmationMessage',
    computed : {
        getOrderId(){
            return this.$store.state.orderId
        }
    }
}

</script>