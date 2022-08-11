<template>
    
    <NuxtLink v-bind:to="`product/?id=${id}`" class="product__card">

        <div class="product__card__image">

            <img v-bind:src="imageUrl" v-bind:alt="`Photo de l'appareil ${name}`">

        </div>

        <h3 class="product__card__title">{{ name }}</h3>

        <p class="product__card__description">{{ description }}</p>
        
        <p class="product__card__price">{{ price }} €</p>

    </NuxtLink>

</template>

<script>

export default {
    name : 'productCard',
    props : [
        'name',
        'description',
        'price',
        'imageUrl',
        'id'
    ],
}

</script>