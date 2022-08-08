<template>
    
    <div class="header">

        <div class="header__contact">

            <ul class="header__contact__list">

                <li class="header__contact__list__item">
                    <a v-bind:href="`tel:${phone}`"><fa icon="phone" class="icon"/>06 78 15 11 08</a>
                </li>

                <li class="header__contact__list__item">
                    <a v-bind:href="`mailto:${email}`" ><fa icon="envelope" class="icon"/>{{ email }}</a>
                </li>

            </ul>

        </div>

        <NuxtLink to="/">
            <img class="header__logo" src="../assets/logos/logo_transparent_banner.png" alt="Logo de l'entreprise OriPhoto">
        </NuxtLink>

        <nav class="header__menu">

            <ul class="header__menu__list">

                <li class="header__menu__list__item">
                    <NuxtLink to="/contact" class="header__menu__list__item__link">CONTACT</NuxtLink>
                </li>

                <li class="header__menu__list__item">
                    <NuxtLink to="/cart" class="header__menu__list__item__link">PANIER <span>({{ getCartQuantity }})</span></NuxtLink>
                </li>

            </ul>
        </nav>

    </div>

</template>

<script>

export default {
    name: 'headerBlock',
    data(){
        return {
            'phone' : '+33678151108',
            'email' : 'deneuville.fabian@live.fr'
        }
    },
    computed: {
        getCartQuantity(){
            return this.$store.state.cartTotalQuantity
        }
    }


}

</script>