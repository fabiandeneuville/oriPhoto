<template>
    
    <div class="empty__cart">
        <h1 class="empty__cart__heading">Votre panier est vide !</h1>
        <NuxtLink to="/" class="empty__cart__link">Voir notre catalogue</NuxtLink>
    </div>

</template>


<script>

export default {
    name: 'emptyCart'
}

</script>