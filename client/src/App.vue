<template>
    <v-app>
        <v-app-bar app color="primary" dark>
            <v-app-bar-title>{{ owner }} Action Dashboard</v-app-bar-title>
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
        axios
            .get("/api/owner")
            .then((result) => {
                console.log("Setting owner to " + result.data);
                this.owner = result.data;
            })
            .catch((err) => {
                console.error(err);
            });
    },
    data: () => ({
        owner: "PlaceholderTitleForOwner",
    }),
};
</script>
