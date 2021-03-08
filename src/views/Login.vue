<template>
    <div>
        <h3>Login</h3>
        <input type="email" name="Email" placeholder="Email" v-model="email" />
        <input type="password" name="password" placeholder="Senha" v-model="password" />
        <button @click="login">Login</button>
        <p>Você ainda não possui uma conta?</p>
        <router-link to="/registrar">Criar uma conta</router-link>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: "login",
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login() {
            firebase.auth().signInWithEmailAndPassword(
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
