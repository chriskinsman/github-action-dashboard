const WebHooks = require("../../webhooks");

const axios = require("axios").default;
const { Webhooks: OctoWebhooks } = require("@octokit/webhooks");

const mockData = require("./mock_data");

test("WebHooks - Init Disabled", () => {
  const webHooks = new WebHooks(8080, null, 8081, "/", null, null, null);

  expect(webHooks._enabled).toBeFalsy();
});

test(`WebHooks - Init Default`, () => {
  const webHooks = new WebHooks(8080, "XXXXX", 8081, "/", null, null, null);

  expect(webHooks._sitePort).toBe(8080);
  expect(webHooks._webhookPort).toBe(8081);
  expect(webHooks._defaultPath).toBe("/");
  expect(webHooks._path).toBe("/");
  expect(webHooks._secret).toBe("XXXXX");
  expect(webHooks._enabled).toBeTruthy();
});

test(`WebHooks - Init Same Port`, () => {
  // Setup
  jest.mock("express");
  const Express = require("express");
  const use = jest.fn(() => {});

  Express.mockImplementation(() => {
    return {
      use,
    };
  });

  const express = new Express();

  const webHooks = new WebHooks(
    8080,
    "XXXXX",
    8080,
    "/webhook",
    null,
    null,
    express
  );

  expect(webHooks._sitePort).toBe(8080);
  expect(webHooks._webhookPort).toBe(8080);
  expect(webHooks._defaultPath).toBe("/webhook");
  expect(webHooks._path).toBe("/webhook");
  expect(webHooks._secret).toBe("XXXXX");
  expect(webHooks._enabled).toBeTruthy();

  webHooks.start();
  expect(use.mock.calls.length).toBe(1);
  webHooks.stop();
});

test(`WebHooks - Init Same Port bad path`, () => {
  expect(() => {
    const webHooks = new WebHooks(8080, "XXXX", 8080, "/", null, null, null);
  }).toThrow();
});

describe(`WebHooks - HTTP Tests`, () => {
  let webHooks;
  let octoWebhooks;
  let workflowRun;
  const secret = "XXXXXXX";
  const webHookPort = 8081;

  beforeEach(() => {
    octoWebhooks = new OctoWebhooks({ secret: secret });
    webHooks = new WebHooks(8080, secret, webHookPort, "/", null, null, null);
    workflowRun = jest
      .spyOn(webHooks, "workflowRun")
      .mockImplementation(() => {});
    webHooks.start();
  });

  afterEach(() => {
    webHooks.stop();
    jest.restoreAllMocks();
  });

  test(`Ping`, async () => {
    const response = await axios.get(`http://localhost:${webHookPort}/ping`);
    expect(response.status).toBe(200);
  });

  test(`Workflow_Run Message`, async () => {
    const sig = await octoWebhooks.sign(mockData.webHooks[0].payload);

    const response = await axios.post(
      `http://localhost:${webHookPort}/`,
      mockData.webHooks[0].payload,
      {
        headers: {
          "X-GitHub-Event": mockData.webHooks[0].name,
          "X-GitHub-Delivery": mockData.webHooks[0].id,
          "X-Hub-Signature-256": sig,
          "Content-Type": "application/json",
        },
      }
    );
    expect(response.status).toBe(200);
    expect(workflowRun.mock.calls.length).toBe(1);
  });
});

test(`WebHooks - workflowRun Completed No Usage`, async () => {
  jest.mock("../../github");
  const GitHub = require("../../github");
  const getUsage = jest.fn(async () => {
    return null;
  });

  GitHub.mockImplementation(() => {
    return {
      getUsage,
    };
  });

  jest.mock("../../actions");
  const Actions = require("../../actions");
  const mergeRuns = jest.fn(() => {});

  Actions.mockImplementation(() => {
    return {
      mergeRuns,
    };
  });

  const gitHub = new GitHub();
  const actions = new Actions(gitHub);
  webHooks = new WebHooks(
    8080,
    "XXXX",
    8080,
    "/webhook",
    gitHub,
    actions,
    null
  );

  await webHooks.workflowRun(mockData.webHooks[0]);

  expect(getUsage.mock.calls.length).toBe(1);
  expect(mergeRuns.mock.calls.length).toBe(1);
});

test(`WebHooks - workflowRun Completed Usage`, async () => {
  const durationMs = 1234;
  jest.mock("../../github");
  const GitHub = require("../../github");
  const getUsage = jest.fn(async () => {
    return { run_duration_ms: durationMs };
  });

  GitHub.mockImplementation(() => {
    return {
      getUsage,
    };
  });

  jest.mock("../../actions");
  const Actions = require("../../actions");
  const mergeRuns = jest.fn(() => {});

  Actions.mockImplementation(() => {
    return {
      mergeRuns,
    };
  });

  const gitHub = new GitHub();
  const actions = new Actions(gitHub);
  webHooks = new WebHooks(
    8080,
    "XXXX",
    8080,
    "/webhook",
    gitHub,
    actions,
    null
  );

  await webHooks.workflowRun(mockData.webHooks[0]);

  expect(getUsage.mock.calls.length).toBe(1);
  expect(mergeRuns.mock.calls.length).toBe(1);
  expect(mergeRuns.mock.calls[0][0][0].durationMs).toBe(durationMs);
});

test(`WebHooks - workflowRun Pending`, async () => {
  jest.mock("../../github");
  const GitHub = require("../../github");
  const getUsage = jest.fn(async () => {
    return null;
  });

  GitHub.mockImplementation(() => {
    return {
      getUsage,
    };
  });

  jest.mock("../../actions");
  const Actions = require("../../actions");
  const mergeRuns = jest.fn(() => {});

  Actions.mockImplementation(() => {
    return {
      mergeRuns,
    };
  });

  const gitHub = new GitHub();
  const actions = new Actions(gitHub);
  webHooks = new WebHooks(
    8080,
    "XXXX",
    8080,
    "/webhook",
    gitHub,
    actions,
    null
  );

  const pending = { ...mockData.webHooks[0] };
  pending.payload.workflow_run.status = "pending";
  await webHooks.workflowRun(pending);

  expect(getUsage.mock.calls.length).toBe(0);
  expect(mergeRuns.mock.calls.length).toBe(1);
});
