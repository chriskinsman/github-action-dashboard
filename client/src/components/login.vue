<template>

    <v-row
        align="center"
        justify="space-around"
    >
        <v-card
        elevation="10"
        width="400px"
        class="ma-10"
        >
        <v-card-text>
        <form v-on:submit="login">    
            <input type="text" name="email" /><br>    
            <input type="password" name="password" /><br>    
            <input type="submit" value="Login" />

            <v-text-field
                label="email"
                name="email"
                required
            ></v-text-field>
            <v-text-field
                label="password"
                type="password"
                name="password"
                required
            ></v-text-field>
            <v-btn
                depressed
                color="primary"
                type="submit"
            >Login</v-btn>
        </form>  
        </v-card-text>
        </v-card>
    </v-row>
</template>

<script>
    import router from "../router"
    import axios from "axios"
    export default {
        name: "Login",
        methods: {
            login: (e) => {
                console.log(e)
                e.preventDefault()
                let email = "user@email.com"
                let password = "password"
                let login = () => {
                    let data = {
                        email: email,
                        password: password
                    }
                    axios.post("/api/login", data)
                        .then((response) => {
                            console.log("Logged in"+response)
                            router.push("/")
                        })
                        .catch((errors) => {
                            console.log("Cannot log in"+errors)
                        })
                }
                login()
            }
        }
    }
</script>