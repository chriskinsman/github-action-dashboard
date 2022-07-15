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
                <a :href="`https://${item.host}/${item.owner}/${item.repo}/actions?query=workflow%3A${item.workflow}`" target="_blank">{{ item.workflow }}</a>
            </template>
            <template v-slot:item.message="{ item }">
                <a :href="`https://${item.host}/${item.owner}/${item.repo}/actions/runs/${item.runId}`" target="_blank">{{ item.message }}</a>
            </template>
            <template v-slot:item.sha="{ item }">
                <a :href="`https://${item.host}/${item.owner}/${item.repo}/commit/${item.sha}`" target="_blank">{{ item.sha.substr(0, 8) }}</a>
            </template>

            <template v-slot:item.status="{ item }">
                <v-chip :color="getColor(item.status)">
                    {{ item.status }}
                </v-chip>
            </template>

            <template v-slot:item.createdAt="{ item }">
                <div>
                    <div>{{ item.createdAt | formattedDate }}</div>
                    <div>{{item.createdAt | formattedTime}}</div>
                </div>
            </template>

            <template v-slot:item.durationMs="{ item }">
                {{ item.durationMs | formattedDuration }}
            </template>

            <template v-slot:item.actions="{ item }">
                <v-icon small @click="refreshRun(item)"> mdi-refresh </v-icon>
            </template>
        </v-data-table>
    </v-container>
</template>

<script>
import axios from "axios";
import findIndex from "lodash-es/findIndex";
import * as dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);

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
                { text: "Started", value: "createdAt", align: "right"},
                { text: "Duration", value: "durationMs", align: "right"},
                { text: "", value: "actions", sortable: false },
            ];
        },
    },
    filters: {
        formattedDate(val) {
            if(val) {
                return dayjs(val).format("YYYY-MM-DD");
            }
            else return val;
        },
        formattedTime(val) {
            if(val) {
                return dayjs(val).format("h:mm A")
            }
        },
        formattedDuration(val) {
            if(val) {
                let format = "";
                if(val >= 3.6e+6) {
                    format = "H[h] m[m] s[s]";
                }
                else if(val >= 60000 ) {
                    format = "m[m] s[s]";
                }
                else {
                    format = "s[s]";
                }
                return dayjs.duration(val).format(format);
            }
            else return val;
        }
    },
    methods: {
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
        getColor(status) {
            switch (status) {
                case "success":
                    return "green";

                case "failure":
                    return "red";

                case "in_progress":
                case "queued":
                    return "yellow";

                default:
                    return "transparent";
            }
        },
    },
};
</script>

<style lang="scss">
.v-data-table-header { 
    th {
        white-space: nowrap;
    }

    th:nth-child(8) {
        min-width: 120px;
    }
}
</style>