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
export default {
    name: "Login",
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async login() {
            await this.$store.dispatch('login', {
                email: this.email,
                password: this.password
            })
            this.$router.replace('/')
        }
    }
}
</script>
