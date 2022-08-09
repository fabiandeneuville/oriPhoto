<template>
    
    <form v-on:input="checkFormValidity" class="order__form">

        <h2 class="order__form__heading">Finaliser votre commande</h2>

        <div class="order__form__question">
            <label for="firstname">Prénom :</label>
            <input v-model="firstName" v-on:input="checkFirstNameInput" type="text" name="firstname" id="firstname" placeholder="Jean" spellcheck="false">
            <span class="error">{{ firstNameErrorText }}</span>
        </div>

        <div class="order__form__question">
            <label for="name">Nom :</label>
            <input v-model="name" v-on:input="checkNameInput" type="text" name="name" id="name" placeholder="Martin" spellcheck="false">
            <span class="error">{{ nameErrorText }}</span>
        </div>

        <div class="order__form__question">
            <label for="address">Adresse :</label>
            <input v-model="address" v-on:input="checkAddressInput" type="text" name="address" id="address" placeholder="10 rue Montgallet" spellcheck="false">
            <span class="error">{{ addressErrorText }}</span>
        </div>

        <div class="order__form__question">
            <label for="city">Ville :</label>
            <input v-model="city" v-on:input="checkCityInput" type="text" name="city" id="city" placeholder="75012 Paris" spellcheck="false">
            <span class="error">{{ cityErrorText }}</span>
        </div>

        <div class="order__form__question">
            <label for="email">Email :</label>
            <input v-model="email" v-on:input="checkEmailInput" type="text" name="email" id="email" placeholder="jean-martin@email.com" spellcheck="false">
            <span class="error">{{ emailErrorText }}</span>
        </div>

        <button v-on:click="sendForm" v-if="formIsValid" class="submit-btn">Valider</button>
        <div v-if="!formIsValid" class="submit-btn disabled">Valider</div>

    </form>

</template>

<script>

export default {
    name: 'orderForm',
    data(){
        return {

            firstName: '',
            firstNameIsValid : false,
            name : '',
            nameIsValid : false,
            address : '',
            addressIsValid : false,
            city : '',
            cityIsValid : false,
            email : '',
            emailIsValid : false,
            formIsValid : false,

            nameRegexp : /^[A-Z][A-Za-z\é\è\ê\- ']+$/i,
            emailRegexp : /^[a-z0-9.-_]+[@]{1}[a-z0-9.-_]+[.]{1}[a-z]{2,10}$/i,
            addressRegexp : /^[a-z0-9 'éèôöîïûùü-]{2,50}$/i,
            cityRegexp : /^[0-9]{5}[-a-zéèôöîïûùü ']{2,50}$/i,

            firstNameErrorText : '',
            nameErrorText : '',
            addressErrorText : '',
            cityErrorText : '',
            emailErrorText : ''

        }
    }, 
    methods : {

        checkFirstNameInput(){
            if(this.nameRegexp.test(this.firstName)){
                this.firstNameErrorText = "";
                this.firstNameIsValid = true;
            } else {
                this.firstNameErrorText = "Vous ne pouvez utiliser que des lettres, espaces, - et ' ";
                this.firstNameIsValid = false;
            }
        },

        checkNameInput(){
            if(this.nameRegexp.test(this.name)){
                this.nameErrorText = "";
                this.nameIsValid = true;
            } else {
                this.nameErrorText = "Vous ne pouvez utiliser que des lettres, espaces, - et ' ";
                this.nameIsValid = false;
            }
        },

        checkAddressInput(){
            if(this.addressRegexp.test(this.address)){
                this.addressErrorText = "";
                this.addressIsValid = true;
            } else {
                this.addressErrorText = "Vous ne pouvez utiliser que des chiffres, lettres, espaces, - et ' ";
                this.addressIsValid = false;
            }
        },

        checkCityInput(){
            if(this.cityRegexp.test(this.city)){
                this.cityErrorText = "";
                this.cityIsValid = true;
            } else {
                this.cityErrorText = "Veuillez respecter le format CODE POSTAL (5 CHIFFRES) suivi du nom de la VILLE. Exemple : 75012 Paris";
                this.cityIsValid = false;
            }
        },

        checkEmailInput(){
            if(this.emailRegexp.test(this.email)){
                this.emailErrorText = "";
                this.emailIsValid = true;
            } else {
                this.emailErrorText = "Veuillez saisir une adresse email valide";
                this.emailIsValid = false;
            }
        }, 

        checkFormValidity(){
            if(this.nameIsValid && this.firstNameIsValid && this.cityIsValid && this.addressIsValid && this.emailIsValid){
                this.formIsValid = true;
            } else {
                this.formIsValid = false;
            }
        },

        sendForm(e){

            e.preventDefault()

            let products = [];

            let contact = {
                firstName : this.firstName,
                lastName : this.name,
                address : this.address,
                city : this.city,
                email : this.email
            }

            this.$axios.post('https://api.orinoco.stevenoyer.fr/api/cameras/order', {
                contact,
                products
            })
            .then((response) => {
                this.$store.commit('clearCart')
                this.$store.commit('setOrderId', response.data.orderId)
                this.$router.push('/confirmation')
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
}

</script>