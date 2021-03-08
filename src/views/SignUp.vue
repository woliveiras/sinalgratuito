<template>
    <h3>Criação de conta</h3>
    <input type="text" name="displayName" placeholder="Seu primeiro nome" v-model="displayName" />
    <input type="email" name="Email" placeholder="Email" v-model="email" />
    <input type="password" name="password" placeholder="Senha" v-model="password" />
    <button @click="signUp">Registrar</button>
    <p>Já possui conta?</p>
    <router-link to="/login">Voltar ao login</router-link>
</template>

<script>
import firebase from 'firebase'

export default {
    data() {
        return {
            displayName: '',
            email: '',
            password: ''
        }
    },
    methods: {
        signUp() {
            firebase.auth().createUserWithEmailAndPassword(
                this.email,
                this.password
            ).then(
                userData => { 
                    userData.user.updateProfile({
                        displayName: this.displayName
                    })
                    this.$router.replace('Home')
                },
                err => { console.log(err.message) }
            )
        }
    }
}
</script>
