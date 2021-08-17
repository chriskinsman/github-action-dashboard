<template>
    <v-app>
        <v-app-bar app color="primary" dark>
            <v-app-bar-title>{{ owner }} Action Dashboard</v-app-bar-title>
            <v-spacer></v-spacer>
            <v-icon @click="logout" v-if="logoutButton" color="white">mdi-logout</v-icon>
        </v-app-bar>

        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>
import axios from "axios";

export default {
    name: "App",
    mounted() {
        this.getOwner();
    },
    updated() {
        this.getOwner();
    },
    methods: {
        logout: () => {
            let logout = () => {
                axios.get("/api/logout")
                    .then((response) => {
                        console.log("Logged out"+response)
                        window.location.reload()
                    })
                    .catch((errors) => {
                        console.log("Cannot logout "+errors)
                    })
            }
            logout()
        },
        getOwner() {
            axios
                .get("/api/owner")
                .then((result) => {
                    console.log("Setting owner to " + result.data);
                    this.owner = result.data;
                    // Statuscode 210 is a regular 200 code but authenticated (required by logout button)
                    if (result.status === 210) {
                        this.logoutButton = true;
                    }
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    },
    data: () => ({
        owner: "login to",
        logoutButton: false
    }),
};
</script>
