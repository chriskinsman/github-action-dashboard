import Actions from "../../actions";

import { runs as _runs, repos, workflows } from "./mock_data";

afterEach(() => {
  jest.restoreAllMocks();
  jest.useRealTimers();
});

test("Actions - Start", () => {
  jest.useFakeTimers();
  const gitHub = require("../../github");
  const actions = new Actions(gitHub);
  const refreshRuns = jest
    .spyOn(actions, "refreshRuns")
    .mockImplementation(() => {});

  actions.start();
  expect(refreshRuns.mock.calls.length).toBe(1);

  jest.advanceTimersByTime(1000 * 60 * 16);
  expect(refreshRuns.mock.calls.length).toBe(2);
});

test("Actions - getMostRecentRuns Empty", async () => {
  jest.mock("../../github");
  const GitHub = require("../../github");
  const listWorkflowRuns = jest.fn(async () => {
    return [];
  });
  GitHub.mockImplementation(() => {
    return {
      listWorkflowRuns: listWorkflowRuns,
    };
  });

  const gitHub = new GitHub();
  const actions = new Actions(gitHub, null, 7);
  const runs = await actions.getMostRecentRuns(
    "ChrisKinsman",
    "github-action-dashboard",
    ""
  );

  expect(runs).toBeTruthy();
  expect(runs).toHaveLength(0);
  expect(listWorkflowRuns.mock.calls).toHaveLength(1);
});

test("Actions - getMostRecentRuns Error", async () => {
  jest.mock("../../github");
  const GitHub = require("../../github");
  const listWorkflowRuns = jest.fn(async () => {
    throw new Error("Foo");
  });
  GitHub.mockImplementation(() => {
    return {
      listWorkflowRuns,
    };
  });

  const gitHub = new GitHub();
  const actions = new Actions(gitHub, null, 7);

  const runs = await actions.getMostRecentRuns(
    "ChrisKinsman",
    "github-action-dashboard",
    ""
  );

  expect(runs).toBeTruthy();
  expect(runs).toHaveLength(0);
});

test("Actions - getMostRecentRuns With Data", async () => {
  jest.mock("../../github");
  const GitHub = require("../../github");
  const listWorkflowRuns = jest.fn(async () => {
    const mockRuns = [..._runs];
    return mockRuns;
  });
  const getUsage = jest.fn(async () => {
    return { run_duration_ms: 10000 };
  });
  GitHub.mockImplementation(() => {
    return {
      listWorkflowRuns,
      getUsage,
    };
  });

  const gitHub = new GitHub();

  // Long lookback for our test data
  const actions = new Actions(gitHub, null, 600);
  const runs = await actions.getMostRecentRuns(
    "ChrisKinsman",
    "github-action-dashboard",
    ""
  );
  console.dir(runs);
  expect(runs).toBeTruthy();
  expect(runs.length > 0).toBeTruthy();
});

test("Actions - getInitialData", async () => {
  const gitHub = require("../../github");
  const actions = new Actions(gitHub);
  const refreshRuns = jest
    .spyOn(actions, "refreshRuns")
    .mockImplementation(() => {});

  actions.getInitialData();
  expect(refreshRuns.mock.calls.length).toBe(1);
});

test("Actions - refreshWorkflow", async () => {
  const gitHub = require("../../github");
  const actions = new Actions(gitHub);
  const getMostRecentRuns = jest
    .spyOn(actions, "getMostRecentRuns")
    .mockImplementation(async () => {
      return [];
    });
  const mergeRuns = jest.spyOn(actions, "mergeRuns").mockImplementation(() => {
    return;
  });

  await actions.refreshWorkflow();

  expect(getMostRecentRuns.mock.calls.length).toBe(1);
  expect(mergeRuns.mock.calls.length).toBe(1);
});

test("Actions - mergeRuns", () => {
  const mockRuns = [..._runs];
  const gitHub = require("../../github");
  const RunStatus = require("../../runstatus");
  const runStatus = new RunStatus();
  const updatedRun = jest
    .spyOn(runStatus, "updatedRun")
    .mockImplementation(() => {
      return;
    });

  const actions = new Actions(gitHub, runStatus);

  actions.mergeRuns(mockRuns);

  expect(updatedRun.mock.calls).toHaveLength(mockRuns.length);
});

test("Actions - refreshRuns", async () => {
  jest.mock("../../github");
  const GitHub = require("../../github");
  const listRepos = jest.fn(async () => {
    return [...repos];
  });
  const listWorkflowsForRepo = jest.fn(async () => {
    return [...workflows];
  });
  const listWorkflowRuns = jest.fn(async () => {
    return [..._runs];
  });

  GitHub.mockImplementation(() => {
    return {
      listRepos,
      listWorkflowsForRepo,
      listWorkflowRuns,
    };
  });

  const gitHub = new GitHub();

  const actions = new Actions(gitHub);
  await actions.refreshRuns();

  expect(listRepos.mock.calls).toHaveLength(1);
  expect(listWorkflowsForRepo.mock.calls).toHaveLength(1);
  expect(listWorkflowRuns.mock.calls.length > 0).toBeTruthy();
});

test("Actions - refreshRuns Error", async () => {
  // Setup
  jest.mock("../../github");
  const GitHub = require("../../github");
  const listRepos = jest.fn(async () => {
    throw new Error("foo");
  });
  const listWorkflowsForRepo = jest.fn(async () => {
    return [...workflows];
  });
  const listWorkflowRuns = jest.fn(async () => {
    return [..._runs];
  });

  GitHub.mockImplementation(() => {
    return {
      listRepos,
      listWorkflowsForRepo,
      listWorkflowRuns,
    };
  });

  const gitHub = new GitHub();
  const actions = new Actions(gitHub);

  // Test
  await actions.refreshRuns();

  // Assertions
  expect(listRepos.mock.calls).toHaveLength(1);
  expect(listWorkflowsForRepo.mock.calls).toHaveLength(0);
  expect(listWorkflowRuns.mock.calls).toHaveLength(0);
});
