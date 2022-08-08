<template>
    
    <div class="footer">

        <NuxtLink to="/">
            <img class="footer__logo" src="../assets/logos/logo_transparent_banner.png" alt="Logo de l'entreprise OriPhoto">
        </NuxtLink>

        <p class="footer__text">Site e-commerce fictif réalisé à partir du projet 5 du parcours Développeur Web d'<a v-bind:href="schoolUrl" target="blank">OPENCLASSROOMS</a></p>

        <p class="footer__text">Fabian DENEUVILLE - <span>{{ getYear }}</span></p>

        <p class="footer__text">Voir mon <a v-bind:href="portfolioUrl" target="blank">PORTFOLIO</a></p>

    </div>

</template>

<script>

export default {
    name: 'pageFooter',
    data(){
        return {
            'schoolUrl' : 'https://openclassrooms.com/fr/paths/556-developpeur-web',
            'portfolioUrl' : 'https://fabian-deneuville.com'
        }
    },
    computed : {
        getYear(){
            const date = new Date();
            const currentYear = date.getFullYear();
            return currentYear
        }
    }
}

</script>