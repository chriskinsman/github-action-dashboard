<template>
    <v-container :fluid="true">
        <v-data-table
            :headers="headers"
            :items="runs"
            item-key="name"
            class="elevation-1"
            :search="search"
            :custom-filter="filterOnlyCapsText"
            :disable-pagination="true"
            :hide-default-footer="true"
            :loading="loading"
            loading-text="Loading runs..."
            sort-by="createdAt"
            :sort-desc="true"
        >
            <template v-slot:top>
                <v-text-field v-model="search" label="Search" class="mx-4"></v-text-field>
            </template>
            <template v-slot:item.workflow="{ item }">
                <a :href="`https://github.com/${item.owner}/${item.repo}/actions?query=workflow%3A${item.workflow}`">{{ item.workflow }}</a>
            </template>
            <template v-slot:item.message="{ item }">
                <a :href="`https://github.com/${item.owner}/${item.repo}/actions/runs/${item.runId}`">{{ item.message }}</a>
            </template>
            <template v-slot:item.sha="{ item }">
                <a :href="`https://github.com/${item.owner}/${item.repo}/commit/${item.sha}`">{{ item.sha.substr(0, 8) }}</a>
            </template>

            <template v-slot:item.status="{ item }">
                <v-chip :color="getColor(item.status)">
                    {{ item.status }}
                </v-chip>
            </template>
            <template v-slot:item.actions="{ item }">
                <v-icon small @click="refreshRun(item)"> mdi-refresh </v-icon>
            </template>
        </v-data-table>
    </v-container>
</template>

<script>
import axios from "axios";

export default {
    mounted() {
        this.getData();
        this.refreshId = setInterval(this.getData, 1000 * 60);
    },
    beforeUnmount() {
        if (this.refreshId) {
            clearInterval(this.refreshId);
            this.refreshId = null;
        }
    },
    data() {
        return {
            search: "",
            runs: [],
            loading: false,
            refreshId: null,
        };
    },
    computed: {
        headers() {
            return [
                { text: "Repository", align: "start", value: "repo" },
                { text: "Workflow", value: "workflow" },
                { text: "Branch", value: "branch" },
                { text: "Status", value: "status" },
                { text: "Commit", value: "sha" },
                { text: "Message", value: "message" },
                { text: "Committer", value: "committer" },
                { text: "Started", value: "createdAt" },
                { text: "", value: "actions", sortable: false },
            ];
        },
    },
    methods: {
        getData() {
            this.loading = true;
            axios
                .get("/api/initialData")
                .then((result) => {
                    this.runs = result.data;
                })
                .catch((err) => {
                    console.error(err);
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        refreshRun(run) {
            // This
            run.status = "Refreshing";
            this.loading = true;
            // Get all new runs for workflow_id
            axios
                .get(`/api/runs/${run.owner}/${run.repo}/${run.workflowId}`)
                .then((result) => {
                    this.runs = result.data;
                })
                .catch((err) => {
                    console.error(err);
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        filterOnlyCapsText(value, search) {
            return value != null && search != null && typeof value === "string" && value.toString().indexOf(search) !== -1;
        },
        getColor(status) {
            switch (status) {
                case "success":
                    return "green";

                case "failure":
                    return "red";

                case "in_progress":
                    return "yellow";

                default:
                    return "transparent";
            }
        },
    },
};
</script>

<style lang="scss">
.v-data-table-header th {
    white-space: nowrap;
}
</style>