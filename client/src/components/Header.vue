<template>
    <div>
        <div class="nv-navbar">
            
            <ul class="nav">
<<<<<<< HEAD
                <li><img src="@/assets/logo2.jpg" width="150px" id="logo" class = "logo"/></li>
                <li><router-link :to="{name: 'books'}" >Books</router-link></li>
=======
                <li><router-link :to="{name: 'products'}" >Products</router-link></li>
>>>>>>> 7ea7ba0f51101fce867be387072c14e56448c079
                <li><router-link :to="{name: 'users'}" >Users</router-link></li>
                <li><router-link :to="{name: 'login'}" >Login</router-link></li>
                
            </ul>
            <ul class="nav">
            <li><a v-on:click.prevent="logout" href="#">Logout</a></li>
            </ul>
            <div class="clearfix"></div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        logout () {
            this.$store.dispatch('setToken', null)
            this.$store.dispatch('setUser', null)
            this.$router.push({
                name: 'login'
            })
        }
    }
}
</script>
<style scoped>
    .logo {
        float:left;
    }
    .nv-navbar {
        background-color:black;
        width: 100%;
        padding:10px 0px 10px 0px;
    }
    .nv-navbar .nav {
        list-style: none;
        margin:0;
        padding:0;
        float:left;
    }
    .nv-navbar .nav li {
        float:left;
    }
    .nv-navbar .nav li a {
        padding: 10px;
        text-decoration: none;
        border-radius: 5px;
        color:white;
        font-weight: bold;
    }
    .nv-navbar .nav li a:hover {
        padding: 10px;
        text-decoration: none;
        color:darkslategrey;
    }
    .nv-navbar .nav li a.router-link-active {
        border-radius: 5px;
        background-color:gray;
        color:darkslategrey;
    }
    .clearfix {
        clear: left;
    }
</style>