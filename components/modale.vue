<template>
    
    <div class="container">

        <div class="modale">
            <p class="modale__message">{{ message }}</p>
            <button v-on:click="closeModale" class="modale__close-btn"><fa icon="circle-xmark"/></button>
        </div>

    </div>

</template>


<script>

export default {
    name: 'modaleBox',
    props : [
        'message'
    ],
    methods : {
        closeModale(){
            this.$emit('closeModale')
        }
    }
}

</script>