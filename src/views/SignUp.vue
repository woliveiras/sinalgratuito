<template>
    <h3>Criação de conta</h3>
    <input type="text" name="displayName" placeholder="Seu primeiro nome" v-model="displayName" />
    <input type="email" name="Email" placeholder="Email" v-model="email" />
    <input type="password" name="password" placeholder="Senha" v-model="password" />
    <button @click="signup">Registrar</button>
    <p>Já possui conta?</p>
    <router-link to="/login">Voltar ao login</router-link>
</template>

<script>
export default {
    name: 'SignUp',
    data() {
        return {
            displayName: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async signup() {
            await this.$store.dispatch('signup', {
                email: this.email,
                password: this.password,
                displayName: this.displayName
            })
            this.$router.replace('/')
        }
    }
}
</script>
