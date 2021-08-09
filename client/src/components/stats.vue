<template>
    <v-layout mx-0 align-center justify-space-between fill-height>
        <v-card
            elevation="2"
            color="grey lighten-3"
            outlined
            class="flex-grow-1 mr-5">
            <v-list-item three-line>
            <v-list-item-content class="text-center">
                <v-list-item-title class="text-h2 mb-1">
                {{ stats.repos_total }}
                </v-list-item-title>
                <v-list-item-subtitle class="text-uppercase">Total Repos</v-list-item-subtitle>
            </v-list-item-content>
            </v-list-item>
        </v-card>
        <v-card
            elevation="2"
            color="grey lighten-3"
            outlined
            class="flex-grow-1 ma-5">
            <v-list-item three-line>
            <v-list-item-content class="text-center">
                <v-list-item-title class="text-h2 mb-1">
                {{ stats.repos_with_workflows_total }}
                </v-list-item-title>
                <v-list-item-subtitle class="text-uppercase">Repos with Workflows</v-list-item-subtitle>
            </v-list-item-content>
            </v-list-item>
        </v-card>
        <v-card
            elevation="2"
            color="grey lighten-3"
            outlined
            class="flex-grow-1 ml-5">
            <v-list-item three-line>
            <v-list-item-content class="text-center">
                <v-list-item-title class="text-h2 mb-1">
                {{ stats.workflows_total }}
                </v-list-item-title>
                <v-list-item-subtitle class="text-uppercase">Total Workflows</v-list-item-subtitle>
            </v-list-item-content>
            </v-list-item>
        </v-card>
    </v-layout>
</template>

<script>


export default {
    name: 'Stats',
    props: ['stats'],
}
</script>

<style lang="scss">

</style>