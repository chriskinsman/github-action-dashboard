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
                <a :href="`https://github.com/${item.owner}/${item.repo}/actions?query=workflow%3A${item.workflow}`" target="_blank">{{ item.workflow }}</a>
            </template>
            <template v-slot:item.message="{ item }">
                <a :href="`https://github.com/${item.owner}/${item.repo}/actions/runs/${item.runId}`" target="_blank">{{ item.message }}</a>
            </template>
            <template v-slot:item.sha="{ item }">
                <a :href="`https://github.com/${item.owner}/${item.repo}/commit/${item.sha}`" target="_blank">{{ item.sha.substr(0, 8) }}</a>
            </template>

            <template v-slot:item.status="{ item }">
                <v-progress-circular v-if="item.status == 'in_progress' || item.status == 'queued'"
                    indeterminate
                    color="primary">
                </v-progress-circular>
                <v-icon v-if="item.status == 'success'"
                    large
                    color="green darken-2">mdi-checkbox-marked-circle
                </v-icon>
                <v-icon v-if="item.status == 'failure'"
                    large
                    color="red darken-2">mdi-alert-circle-outline
                </v-icon>
            </template>

            <template v-slot:item.createdAt="{ item }">
                    {{ format_date(item.createdAt) }}
            </template>

            <template v-slot:item.run_duration_ms="{ item }">
                    {{ msToTime(item.run_duration_ms) }}
            </template>

            <template v-slot:item.actions="{ item }">
                <v-icon large @click="refreshRun(item)"> mdi-refresh </v-icon>
            </template>
        </v-data-table>
    </v-container>
</template>

<script>
import axios from "axios";
import moment from 'moment';
import findIndex from "lodash-es/findIndex";

export default {
    sockets: {
        updatedRun(run) {
            console.log("updatedRun runId: " + run.runId);
            const index = findIndex(this.runs, { workflowId: run.workflowId, branch: run.branch });
            if (index >= 0) {
                this.$set(this.runs, index, run);
            } else {
                this.runs.push(run);
            }
        },
    },
    mounted() {
        this.getData();
    },
    data() {
        return {
            search: "",
            runs: [],
            loading: false,
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
                { text: "Duration", value: "run_duration_ms" },
                { text: "", value: "actions", sortable: false },
            ];
        },
    },
    methods: {
        format_date(value){
            if (value) {
            return moment(String(value)).format('YYYY-MM-DD hh:mm')
            }
        },
        msToTime(duration) {
            var seconds = Math.floor((duration / 1000) % 60),
                minutes = Math.floor((duration / (1000 * 60)) % 60),
                hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

            hours = (hours < 10) ? "0" + hours : hours;
            minutes = (minutes < 10) ? "0" + minutes : minutes;
            seconds = (seconds < 10) ? "0" + seconds : seconds;

            return hours + ":" + minutes + ":" + seconds;
        },
        getData() {
            this.loading = true;
            axios
                .get("/api/initialData")
                .then((result) => {
                    console.log("getData results");
                    this.runs = result.data;
                })
                .catch((err) => {
                    console.log("getData error");
                    console.error(err);
                })
                .finally(() => {
                    console.log("getData finally");
                    this.loading = false;
                });
        },
        refreshRun(run) {
            // This
            run.status = "Refreshing";
            // Get all new runs for workflow_id
            axios.get(`/api/runs/${run.owner}/${run.repo}/${run.workflowId}`).catch((err) => {
                console.log("refreshRun", err);
            });
        },
        filterOnlyCapsText(value, search) {
            return value != null && search != null && typeof value === "string" && value.toString().indexOf(search) !== -1;
        },
    },
};
</script>

<style lang="scss">
.v-data-table-header th {
    white-space: nowrap;
}
</style>