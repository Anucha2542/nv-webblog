<template>
    <div class="bg">.
        <h1>User Login</h1>
        <form v-on:submit.prevent="onLogin">
            <p>Username: <input type="text" v-model="email" /></p>
            <p>Password: <input type="password" v-model="password" /></p>
            <p><button type="submit">Login</button></p>
            <div class="error" v-if="error">{{error}}</div>
        </form>
        <!-- แถบล่าง -->
 <div class="blog-load-finished">--- zombie book ---</div>
    </div>
</template>
<script>
import AuthenService from '@/services/AuthenService'

export default {
    data () {
        return {
            email: '',
            password: '',
            error: null
        }
    },
    methods: {
        async onLogin () {
            try {
                const response = await AuthenService.login({
                    email: this.email,
                    password: this.password
                })

                this.$store.dispatch('setToken', response.data.token)
                this.$store.dispatch('setUser', response.data.user)
                this.$router.push({
                    name: 'users'
                })

                console.log(response)
            } catch (error) {
                console.log(error)
                this.error = error.response.data.error
                this.email = ''
                this.password = ''
            }
        }
    }
}
</script>
<style scoped>
    .error {
        color:red;
    }
    /*แถบล่าง*/
.blog-load-finished {
  padding: 4px;
  text-align: center;
  background: black;
  color: white;
}
.bg{
    background-color:skyblue;
}
</style>