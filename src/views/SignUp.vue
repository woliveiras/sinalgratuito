<template>
    <h3>Criação de conta</h3>
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
            email: '',
            password: ''
        }
    },
    methods: {
        signUp() {
            firebase.auth().createUserWithEmailAndPassword(
                this.email, this.password
            ).then(
                user => { 
                    this.$router.replace('Home'),
                    console.log(user)
                },
                err => { console.log(err.message) }
            )
        }
    }
}
</script>
