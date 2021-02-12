<template>
    <v-app>
        <v-app-bar app color="primary" dark>
            <v-app-bar-title>{{ owner }} Action Dashboard</v-app-bar-title>
        </v-app-bar>

        <v-main>
            <ActionDashboard />
        </v-main>
    </v-app>
</template>

<script>
import ActionDashboard from "./components/actiondashboard.vue";
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
    components: {
        ActionDashboard,
    },
    data: () => ({
        owner: "PlaceholderTitleForOwner",
    }),
};
</script>
