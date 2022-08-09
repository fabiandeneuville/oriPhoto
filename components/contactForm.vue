<template>
    
    <div class="contact">

        <modale-box
        v-if="showModale"
        v-bind:message="modaleMessage"
        v-on:closeModale="closeModale"
        >
        </modale-box>

        <h1 class="contact__heading">Nous contacter</h1>

        <p class="contact__text">Vous n'avez pas trouvé l'appareil photo vintage de vos rêves ou souhaitez simplement nous poser une question ?</p>

        <p class="contact__text">Renseignez ces quelques champs. Nous vous repondrons dès que possible.</p>

        <form class="contact__form">

            <div class="contact__form__block">
                <label class="contact__form__block__label" for="name">Nom</label>
                <input v-on:input="checkNameInput" v-model="name" class="contact__form__block__input" type="text" name="name" id="name" placeholder="Martin" spellcheck="false">
                <span class="contact__form__block__error name-error">{{ nameError }}</span>
            </div>

            <div class="contact__form__block">
                <label class="contact__form__block__label" for="firstname">Prénom</label>
                <input v-on:input="checkFirstNameInput" v-model="firstName" class="contact__form__block__input" type="text" name="firstname" id="firstname" placeholder="Jean" spellcheck="false">
                <span class="contact__form__block__error firstname-error">{{ firstNameError }}</span>
            </div>

            <div class="contact__form__block">
                <label class="contact__form__block__label" for="phone">Téléphone (facultatif)</label>
                <input v-on:input="checkPhoneInput" v-model="phone" class="contact__form__block__input" type="text" name="phone" id="phone" placeholder="06 66 66 66 66" spellcheck="false">
                <span class="contact__form__block__error phone-error">{{ phoneError }}</span>
            </div>

            <div class="contact__form__block">
                <label class="contact__form__block__label" for="name">Email</label>
                <input v-on:input="checkEmailInput" v-model="email" class="contact__form__block__input" type="email" name="email" id="email" placeholder="jean-martin@email.com" spellcheck="false">
                <span class="contact__form__block__error email-error">{{ emailError}}</span>
            </div>

            <div class="contact__form__block">
                <label class="contact__form__block__label" for="message">Votre message</label>
                <textarea v-model="message" class="contact__form__block__textarea" name="message" id="message" spellcheck="false" placeholder="Votre message ...."></textarea>
            </div>
            
            <button v-if="formIsValid" v-on:click="sendForm" class="submit-btn">Envoyer</button>
            <div v-if="!formIsValid" class="submit-btn disabled">Envoyer</div>

        </form>

    </div>

</template>

<script>

import modaleBox from '../components/modale.vue'

export default {
    name: 'contactForm',
    components: { modaleBox },
    computed : {
        formIsValid(){
            if(this.nameIsValid && this.firstNameIsValid && this.phoneIsValid && this.emailIsValid){
                return true;
            } else {
                return false;
            }
        }
    },
    data(){
        return {

            name : '',
            nameIsValid : false,
            firstName : '',
            firstNameIsValid : false,
            phone : '',
            phoneIsValid : true,
            name : '',
            nameIsValid : false,
            email : '',
            emailIsValid : false,
            message : '',

            nameError : '',
            firstNameError : '',
            phoneError : '',
            emailError : '',
            
            nameRegexp : /^[a-zéèôöîïûùü' -]{2,50}$/i,
            emailRegexp : /^[a-z0-9.-_]+[@]{1}[a-z0-9.-_]+[.]{1}[a-z]{2,10}$/gi,
            phoneRegexp : /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/,

            modaleMessage: 'Message envoyé !',

            showModale : false,
        }
    },
    methods : {
        checkFirstNameInput(){
            if(this.nameRegexp.test(this.firstName)){
                this.firstNameError = "";
                this.firstNameIsValid = true;
            } else {
                this.firstNameError = "Saisie invalide !";
                this.firstNameIsValid = false;
            }
        },

        checkNameInput(){
            if(this.nameRegexp.test(this.name)){
                this.nameError = "";
                this.nameIsValid = true;
            } else {
                this.nameError = "Saisie invalide !";
                this.nameIsValid = false;
            }
        },

        checkEmailInput(){
            if(this.emailRegexp.test(this.email)){
                this.emailError = "";
                this.emailIsValid = true;
            } else {
                this.emailError = "Saisie invalide !";
                this.emailIsValid = false;
            }
        }, 

        checkPhoneInput(){
            if(this.phoneRegexp.test(this.phone) || this.phone === ''){
                this.phoneError = "";
                this.phoneIsValid = true;
            } else {
                this.phoneError = "Saisie invalide !";
                this.phoneIsValid = false;
            }
        }, 

        sendForm(e){

            e.preventDefault()
            this.name = ''
            this.firstName = ''
            this.phone = ''
            this.email = ''
            this.message = ''
            this.showModale = true
        },

        closeModale(){
            this.showModale = false
            this.$router.push('/')
        }
    }
}

</script>