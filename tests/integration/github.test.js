const { TestWatcher } = require("jest");
const GitHub = require("../../github");

// Requires environment variables to be set to run tests
// In local environment this is set out of band via wallaby.conf.js
// In GitHub environment this is set via GitHub secrets

const {
  LOOKBACK_DAYS = 7,
  GITHUB_APPID,
  GITHUB_APP_CLIENTID,
  GITHUB_APP_CLIENTSECRET,
  GITHUB_APP_INSTALLATIONID,
  GITHUB_APP_WEBHOOK_PORT = 8081,
  GITHUB_APP_WEBHOOK_SECRET,
  GITHUB_ORG,
  GITHUB_USERNAME,
} = process.env;

// Handles newlines \n in private key
const GITHUB_APP_PRIVATEKEY = Buffer.from(
  process.env.GITHUB_APP_PRIVATEKEY || "",
  "base64"
).toString("utf-8");

test("GitHub - Environment", () => {
  expect(GITHUB_APP_PRIVATEKEY).toBeTruthy();
  expect(GITHUB_APPID).toBeTruthy();
  expect(GITHUB_APP_CLIENTID).toBeTruthy();
  expect(GITHUB_APP_CLIENTSECRET).toBeTruthy();
  expect(GITHUB_APP_INSTALLATIONID).toBeTruthy();
  expect(GITHUB_USERNAME).toBeTruthy();
});

test("GitHub - listRepos", async () => {
  const gitHub = new GitHub(
    GITHUB_ORG,
    GITHUB_USERNAME,
    GITHUB_APPID,
    GITHUB_APP_PRIVATEKEY,
    GITHUB_APP_CLIENTID,
    GITHUB_APP_CLIENTSECRET,
    GITHUB_APP_INSTALLATIONID
  );

  const repos = await gitHub.listRepos();

  expect(repos).toBeTruthy();
  expect(repos.length > 1).toBeTruthy();
});

test("GitHub - listRepos - Error", async () => {
  const gitHub = new GitHub(
    "XYZ",
    GITHUB_USERNAME,
    GITHUB_APPID,
    GITHUB_APP_PRIVATEKEY,
    GITHUB_APP_CLIENTID,
    GITHUB_APP_CLIENTSECRET,
    GITHUB_APP_INSTALLATIONID
  );

  const repos = await gitHub.listRepos();

  expect(repos).toBeTruthy();
  expect(repos).toHaveLength(0);
});

test("GitHub - listWorkflowsForRepo", async () => {
  const gitHub = new GitHub(
    GITHUB_ORG,
    GITHUB_USERNAME,
    GITHUB_APPID,
    GITHUB_APP_PRIVATEKEY,
    GITHUB_APP_CLIENTID,
    GITHUB_APP_CLIENTSECRET,
    GITHUB_APP_INSTALLATIONID
  );

  const workflows = await gitHub.listWorkflowsForRepo(
    "github-action-dashboard",
    "chriskinsman"
  );

  expect(workflows).toBeTruthy();
  expect(workflows.length > 0).toBeTruthy();
});

test("GitHub - listWorkflowsForRepo Error", async () => {
  const gitHub = new GitHub(
    GITHUB_ORG,
    GITHUB_USERNAME,
    GITHUB_APPID,
    GITHUB_APP_PRIVATEKEY,
    GITHUB_APP_CLIENTID,
    GITHUB_APP_CLIENTSECRET,
    GITHUB_APP_INSTALLATIONID
  );

  const workflows = await gitHub.listWorkflowsForRepo(
    "github-action-dashboard-missing",
    "chriskinsman"
  );

  expect(workflows).toBeTruthy();
  expect(workflows).toHaveLength(0);
});

test("GitHub - listWorkflowRuns", async () => {
  const gitHub = new GitHub(
    GITHUB_ORG,
    GITHUB_USERNAME,
    GITHUB_APPID,
    GITHUB_APP_PRIVATEKEY,
    GITHUB_APP_CLIENTID,
    GITHUB_APP_CLIENTSECRET,
    GITHUB_APP_INSTALLATIONID
  );

  const runs = await gitHub.listWorkflowRuns(
    "chriskinsman",
    "github-action-dashboard",
    "5777275"
  );

  expect(runs).toBeTruthy();
  expect(runs.length > 0).toBeTruthy();
});

test("GitHub - listWorkflowRuns Error", async () => {
  const gitHub = new GitHub(
    GITHUB_ORG,
    GITHUB_USERNAME,
    GITHUB_APPID,
    GITHUB_APP_PRIVATEKEY,
    GITHUB_APP_CLIENTID,
    GITHUB_APP_CLIENTSECRET,
    GITHUB_APP_INSTALLATIONID
  );

  const runs = await gitHub.listWorkflowRuns(
    "chriskinsman",
    "github-action-dashboard",
    "23"
  );

  expect(runs).toBeFalsy();
});

test("GitHub - getUsage", async () => {
  const gitHub = new GitHub(
    GITHUB_ORG,
    GITHUB_USERNAME,
    GITHUB_APPID,
    GITHUB_APP_PRIVATEKEY,
    GITHUB_APP_CLIENTID,
    GITHUB_APP_CLIENTSECRET,
    GITHUB_APP_INSTALLATIONID
  );

  const usage = await gitHub.getUsage(
    "chriskinsman",
    "github-action-dashboard",
    "5777275",
    "1511883909"
  );

  expect(usage).toBeTruthy();
  expect(usage.run_duration_ms).toBeTruthy();
});

test("GitHub - getUsage Error", async () => {
  const gitHub = new GitHub(
    GITHUB_ORG,
    GITHUB_USERNAME,
    GITHUB_APPID,
    GITHUB_APP_PRIVATEKEY,
    GITHUB_APP_CLIENTID,
    GITHUB_APP_CLIENTSECRET,
    GITHUB_APP_INSTALLATIONID
  );

  const usage = await gitHub.getUsage(
    "chriskinsman",
    "github-action-dashboard",
    "5777275",
    "12"
  );

  expect(usage).toBeFalsy();
});
