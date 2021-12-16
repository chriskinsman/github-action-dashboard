module.exports = {
  repos: [
    {
      name: "github-action-dashboard",
      owner: {
        login: "chriskinsman",
      },
    },
  ],
  workflows: [
    {
      id: 5777275,
      node_id: "MDg6V29ya2Zsb3c1Nzc3Mjc1",
      name: "ci",
      path: ".github/workflows/ci.yaml",
      state: "active",
      created_at: "2021-02-12T20:43:01.000Z",
      updated_at: "2021-02-12T22:21:23.000Z",
      url: "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/workflows/5777275",
      html_url:
        "https://github.com/chriskinsman/github-action-dashboard/blob/main/.github/workflows/ci.yaml",
      badge_url:
        "https://github.com/chriskinsman/github-action-dashboard/workflows/ci/badge.svg",
    },
  ],
  runs: [
    {
      id: 1511883909,
      name: "ci",
      node_id: "WFR_kwLOFCwDGs5aHYSF",
      head_branch: "main",
      head_sha: "62e3da7b6ecfb43cfff9ba03922dd45dbebd44d7",
      run_number: 89,
      event: "push",
      status: "completed",
      conclusion: "success",
      workflow_id: 5777275,
      check_suite_id: 4483441607,
      check_suite_node_id: "CS_kwDOFCwDGs8AAAABCzvjxw",
      url: "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511883909",
      html_url:
        "https://github.com/chriskinsman/github-action-dashboard/actions/runs/1511883909",
      pull_requests: [],
      created_at: "2021-11-28T04:20:51Z",
      updated_at: "2021-11-28T04:31:54Z",
      run_attempt: 1,
      run_started_at: "2021-11-28T04:20:51Z",
      jobs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511883909/jobs",
      logs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511883909/logs",
      check_suite_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/check-suites/4483441607",
      artifacts_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511883909/artifacts",
      cancel_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511883909/cancel",
      rerun_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511883909/rerun",
      previous_attempt_url: null,
      workflow_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/workflows/5777275",
      head_commit: {
        id: "62e3da7b6ecfb43cfff9ba03922dd45dbebd44d7",
        tree_id: "c2928a14a5b001f7e14ab64fdfc3888f9de5c783",
        message: "Remove debug from dockerfile",
        timestamp: "2021-11-28T04:20:46Z",
        author: { name: "Chris Kinsman", email: "chris@kinsman.net" },
        committer: { name: "Chris Kinsman", email: "chris@kinsman.net" },
      },
      repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
      head_repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
    },
    {
      id: 1511882742,
      name: "ci",
      node_id: "WFR_kwLOFCwDGs5aHX_2",
      head_branch: "main",
      head_sha: "a871b8675abe396fa4c5d697c57acfd5e63762f6",
      run_number: 88,
      event: "push",
      status: "completed",
      conclusion: "success",
      workflow_id: 5777275,
      check_suite_id: 4483439479,
      check_suite_node_id: "CS_kwDOFCwDGs8AAAABCzvbdw",
      url: "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511882742",
      html_url:
        "https://github.com/chriskinsman/github-action-dashboard/actions/runs/1511882742",
      pull_requests: [],
      created_at: "2021-11-28T04:20:05Z",
      updated_at: "2021-11-28T04:34:37Z",
      run_attempt: 1,
      run_started_at: "2021-11-28T04:20:05Z",
      jobs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511882742/jobs",
      logs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511882742/logs",
      check_suite_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/check-suites/4483439479",
      artifacts_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511882742/artifacts",
      cancel_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511882742/cancel",
      rerun_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511882742/rerun",
      previous_attempt_url: null,
      workflow_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/workflows/5777275",
      head_commit: {
        id: "a871b8675abe396fa4c5d697c57acfd5e63762f6",
        tree_id: "779499b038109d7bab763bf3dbabb1fcb7d82ff6",
        message:
          "Update packages (#16)\n" +
          "\n" +
          "* Update to node16\r\n" +
          "* update packages\r\n" +
          "* fix middleware\r\n" +
          "* Update dockerfile to python3\r\n" +
          "* Prevent routes/webhooks from loading during build",
        timestamp: "2021-11-28T04:20:03Z",
        author: {
          name: "Chris Kinsman",
          email: "chriskinsman@users.noreply.github.com",
        },
        committer: { name: "GitHub", email: "noreply@github.com" },
      },
      repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
      head_repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
    },
    {
      id: 1511879655,
      name: "ci",
      node_id: "WFR_kwLOFCwDGs5aHXPn",
      head_branch: "update-packages",
      head_sha: "ab75d2394eb310603ae63d02644fcb88d3a972ca",
      run_number: 87,
      event: "pull_request",
      status: "queued",
      conclusion: "success",
      workflow_id: 5777275,
      check_suite_id: 4483434347,
      check_suite_node_id: "CS_kwDOFCwDGs8AAAABCzvHaw",
      url: "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511879655",
      html_url:
        "https://github.com/chriskinsman/github-action-dashboard/actions/runs/1511879655",
      pull_requests: [],
      created_at: "2021-11-28T04:18:04Z",
      updated_at: "2021-11-28T04:29:15Z",
      run_attempt: 1,
      run_started_at: "2021-11-28T04:18:04Z",
      jobs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511879655/jobs",
      logs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511879655/logs",
      check_suite_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/check-suites/4483434347",
      artifacts_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511879655/artifacts",
      cancel_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511879655/cancel",
      rerun_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511879655/rerun",
      previous_attempt_url: null,
      workflow_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/workflows/5777275",
      head_commit: {
        id: "ab75d2394eb310603ae63d02644fcb88d3a972ca",
        tree_id: "779499b038109d7bab763bf3dbabb1fcb7d82ff6",
        message: "Conditionally load",
        timestamp: "2021-11-28T03:56:21Z",
        author: { name: "Chris Kinsman", email: "chris@kinsman.net" },
        committer: { name: "Chris Kinsman", email: "chris@kinsman.net" },
      },
      repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
      head_repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
    },
    {
      id: 1511843912,
      name: "ci",
      node_id: "WFR_kwLOFCwDGs5aHOhI",
      head_branch: "update-packages",
      head_sha: "ab75d2394eb310603ae63d02644fcb88d3a972ca",
      run_number: 86,
      event: "push",
      status: "completed",
      conclusion: "success",
      workflow_id: 5777275,
      check_suite_id: 4483373432,
      check_suite_node_id: "CS_kwDOFCwDGs8AAAABCzrZeA",
      url: "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511843912",
      html_url:
        "https://github.com/chriskinsman/github-action-dashboard/actions/runs/1511843912",
      pull_requests: [],
      created_at: "2021-11-28T03:56:26Z",
      updated_at: "2021-11-28T04:09:28Z",
      run_attempt: 1,
      run_started_at: "2021-11-28T03:56:26Z",
      jobs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511843912/jobs",
      logs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511843912/logs",
      check_suite_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/check-suites/4483373432",
      artifacts_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511843912/artifacts",
      cancel_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511843912/cancel",
      rerun_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511843912/rerun",
      previous_attempt_url: null,
      workflow_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/workflows/5777275",
      head_commit: {
        id: "ab75d2394eb310603ae63d02644fcb88d3a972ca",
        tree_id: "779499b038109d7bab763bf3dbabb1fcb7d82ff6",
        message: "Conditionally load",
        timestamp: "2021-11-28T03:56:21Z",
        author: { name: "Chris Kinsman", email: "chris@kinsman.net" },
        committer: { name: "Chris Kinsman", email: "chris@kinsman.net" },
      },
      repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
      head_repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
    },
    {
      id: 1511839387,
      name: "ci",
      node_id: "WFR_kwLOFCwDGs5aHNab",
      head_branch: "update-packages",
      head_sha: "984f69a9448a700689554cf64083113e17aa0984",
      run_number: 85,
      event: "push",
      status: "completed",
      conclusion: "failure",
      workflow_id: 5777275,
      check_suite_id: 4483365240,
      check_suite_node_id: "CS_kwDOFCwDGs8AAAABCzq5eA",
      url: "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511839387",
      html_url:
        "https://github.com/chriskinsman/github-action-dashboard/actions/runs/1511839387",
      pull_requests: [],
      created_at: "2021-11-28T03:52:56Z",
      updated_at: "2021-11-28T03:54:18Z",
      run_attempt: 1,
      run_started_at: "2021-11-28T03:52:56Z",
      jobs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511839387/jobs",
      logs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511839387/logs",
      check_suite_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/check-suites/4483365240",
      artifacts_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511839387/artifacts",
      cancel_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511839387/cancel",
      rerun_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511839387/rerun",
      previous_attempt_url: null,
      workflow_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/workflows/5777275",
      head_commit: {
        id: "984f69a9448a700689554cf64083113e17aa0984",
        tree_id: "7afee908ca883dfb98d77807f6802cda70600a06",
        message: "More debugging",
        timestamp: "2021-11-28T03:52:44Z",
        author: { name: "Chris Kinsman", email: "chris@kinsman.net" },
        committer: { name: "Chris Kinsman", email: "chris@kinsman.net" },
      },
      repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
      head_repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
    },
    {
      id: 1511836026,
      name: "ci",
      node_id: "WFR_kwLOFCwDGs5aHMl6",
      head_branch: "update-packages",
      head_sha: "1f3a80b423d61919354f5d56751f9b3b717e945f",
      run_number: 84,
      event: "push",
      status: "completed",
      conclusion: "failure",
      workflow_id: 5777275,
      check_suite_id: 4483359288,
      check_suite_node_id: "CS_kwDOFCwDGs8AAAABCzqiOA",
      url: "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511836026",
      html_url:
        "https://github.com/chriskinsman/github-action-dashboard/actions/runs/1511836026",
      pull_requests: [],
      created_at: "2021-11-28T03:50:11Z",
      updated_at: "2021-11-28T03:51:31Z",
      run_attempt: 1,
      run_started_at: "2021-11-28T03:50:11Z",
      jobs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511836026/jobs",
      logs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511836026/logs",
      check_suite_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/check-suites/4483359288",
      artifacts_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511836026/artifacts",
      cancel_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511836026/cancel",
      rerun_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511836026/rerun",
      previous_attempt_url: null,
      workflow_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/workflows/5777275",
      head_commit: {
        id: "1f3a80b423d61919354f5d56751f9b3b717e945f",
        tree_id: "bb1df679f43eda911ae6f64f2de725414982d9ae",
        message: "Debug build",
        timestamp: "2021-11-28T03:49:57Z",
        author: { name: "Chris Kinsman", email: "chris@kinsman.net" },
        committer: { name: "Chris Kinsman", email: "chris@kinsman.net" },
      },
      repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
      head_repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
    },
    {
      id: 1511831040,
      name: "ci",
      node_id: "WFR_kwLOFCwDGs5aHLYA",
      head_branch: "update-packages",
      head_sha: "8a7e08931c893efc6e92cf98f86cdd7323bc551c",
      run_number: 83,
      event: "push",
      status: "completed",
      conclusion: "failure",
      workflow_id: 5777275,
      check_suite_id: 4483350691,
      check_suite_node_id: "CS_kwDOFCwDGs8AAAABCzqAow",
      url: "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511831040",
      html_url:
        "https://github.com/chriskinsman/github-action-dashboard/actions/runs/1511831040",
      pull_requests: [],
      created_at: "2021-11-28T03:46:30Z",
      updated_at: "2021-11-28T03:48:02Z",
      run_attempt: 1,
      run_started_at: "2021-11-28T03:46:30Z",
      jobs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511831040/jobs",
      logs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511831040/logs",
      check_suite_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/check-suites/4483350691",
      artifacts_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511831040/artifacts",
      cancel_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511831040/cancel",
      rerun_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511831040/rerun",
      previous_attempt_url: null,
      workflow_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/workflows/5777275",
      head_commit: {
        id: "8a7e08931c893efc6e92cf98f86cdd7323bc551c",
        tree_id: "0ab88085be5f2876df66de3b212e606d726a2a6d",
        message: "Conditionally load webhooks",
        timestamp: "2021-11-28T03:46:13Z",
        author: { name: "Chris Kinsman", email: "chris@kinsman.net" },
        committer: { name: "Chris Kinsman", email: "chris@kinsman.net" },
      },
      repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
      head_repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
    },
    {
      id: 1511521089,
      name: "ci",
      node_id: "WFR_kwLOFCwDGs5aF_tB",
      head_branch: "update-packages",
      head_sha: "e8de665a95c0dd36c807bcec8c81acd8854716fb",
      run_number: 82,
      event: "push",
      status: "completed",
      conclusion: "failure",
      workflow_id: 5777275,
      check_suite_id: 4482822200,
      check_suite_node_id: "CS_kwDOFCwDGs8AAAABCzJwOA",
      url: "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511521089",
      html_url:
        "https://github.com/chriskinsman/github-action-dashboard/actions/runs/1511521089",
      pull_requests: [],
      created_at: "2021-11-28T00:44:05Z",
      updated_at: "2021-11-28T00:45:37Z",
      run_attempt: 1,
      run_started_at: "2021-11-28T00:44:05Z",
      jobs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511521089/jobs",
      logs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511521089/logs",
      check_suite_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/check-suites/4482822200",
      artifacts_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511521089/artifacts",
      cancel_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511521089/cancel",
      rerun_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511521089/rerun",
      previous_attempt_url: null,
      workflow_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/workflows/5777275",
      head_commit: {
        id: "e8de665a95c0dd36c807bcec8c81acd8854716fb",
        tree_id: "0ba7f0bcd8553d67166c1f898e99265618eedf8d",
        message: "Alter build test",
        timestamp: "2021-11-28T00:43:59Z",
        author: { name: "Chris Kinsman", email: "chris@kinsman.net" },
        committer: { name: "Chris Kinsman", email: "chris@kinsman.net" },
      },
      repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
      head_repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
    },
    {
      id: 1511513558,
      name: "ci",
      node_id: "WFR_kwLOFCwDGs5aF93W",
      head_branch: "update-packages",
      head_sha: "7e154608aaf57b651655b2d7868b721e71f1fa12",
      run_number: 81,
      event: "push",
      status: "completed",
      conclusion: "failure",
      workflow_id: 5777275,
      check_suite_id: 4482809931,
      check_suite_node_id: "CS_kwDOFCwDGs8AAAABCzJASw",
      url: "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511513558",
      html_url:
        "https://github.com/chriskinsman/github-action-dashboard/actions/runs/1511513558",
      pull_requests: [],
      created_at: "2021-11-28T00:40:34Z",
      updated_at: "2021-11-28T00:42:30Z",
      run_attempt: 1,
      run_started_at: "2021-11-28T00:40:34Z",
      jobs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511513558/jobs",
      logs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511513558/logs",
      check_suite_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/check-suites/4482809931",
      artifacts_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511513558/artifacts",
      cancel_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511513558/cancel",
      rerun_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511513558/rerun",
      previous_attempt_url: null,
      workflow_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/workflows/5777275",
      head_commit: {
        id: "7e154608aaf57b651655b2d7868b721e71f1fa12",
        tree_id: "7ed192a62ee6d8520b20e1d0ccdf2a71a6f164e6",
        message: "Prevent routes from loading during build",
        timestamp: "2021-11-28T00:40:28Z",
        author: { name: "Chris Kinsman", email: "chris@kinsman.net" },
        committer: { name: "Chris Kinsman", email: "chris@kinsman.net" },
      },
      repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
      head_repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
    },
    {
      id: 1511488356,
      name: "ci",
      node_id: "WFR_kwLOFCwDGs5aF3tk",
      head_branch: "update-packages",
      head_sha: "692f92439ca300e86c6126de2cd8fdf3589ac884",
      run_number: 80,
      event: "push",
      status: "completed",
      conclusion: "failure",
      workflow_id: 5777275,
      check_suite_id: 4482768032,
      check_suite_node_id: "CS_kwDOFCwDGs8AAAABCzGcoA",
      url: "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511488356",
      html_url:
        "https://github.com/chriskinsman/github-action-dashboard/actions/runs/1511488356",
      pull_requests: [],
      created_at: "2021-11-28T00:29:04Z",
      updated_at: "2021-11-28T00:30:35Z",
      run_attempt: 1,
      run_started_at: "2021-11-28T00:29:04Z",
      jobs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511488356/jobs",
      logs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511488356/logs",
      check_suite_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/check-suites/4482768032",
      artifacts_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511488356/artifacts",
      cancel_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511488356/cancel",
      rerun_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511488356/rerun",
      previous_attempt_url: null,
      workflow_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/workflows/5777275",
      head_commit: {
        id: "692f92439ca300e86c6126de2cd8fdf3589ac884",
        tree_id: "ceb80d1e23b4c9631c97e9d04458dffefaa800d1",
        message: "Update to python3",
        timestamp: "2021-11-28T00:28:57Z",
        author: { name: "Chris Kinsman", email: "chris@kinsman.net" },
        committer: { name: "Chris Kinsman", email: "chris@kinsman.net" },
      },
      repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
      head_repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
    },
    {
      id: 1511482134,
      name: "ci",
      node_id: "WFR_kwLOFCwDGs5aF2MW",
      head_branch: "update-packages",
      head_sha: "92ae6807abef383e549e317437f41b004037114f",
      run_number: 79,
      event: "push",
      status: "completed",
      conclusion: "failure",
      workflow_id: 5777275,
      check_suite_id: 4482757259,
      check_suite_node_id: "CS_kwDOFCwDGs8AAAABCzFyiw",
      url: "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511482134",
      html_url:
        "https://github.com/chriskinsman/github-action-dashboard/actions/runs/1511482134",
      pull_requests: [],
      created_at: "2021-11-28T00:25:55Z",
      updated_at: "2021-11-28T00:26:32Z",
      run_attempt: 1,
      run_started_at: "2021-11-28T00:25:55Z",
      jobs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511482134/jobs",
      logs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511482134/logs",
      check_suite_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/check-suites/4482757259",
      artifacts_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511482134/artifacts",
      cancel_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511482134/cancel",
      rerun_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511482134/rerun",
      previous_attempt_url: null,
      workflow_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/workflows/5777275",
      head_commit: {
        id: "92ae6807abef383e549e317437f41b004037114f",
        tree_id: "11e515a3b8b35af835fcc0b617e638d15259a9e8",
        message: "Update dotenv and socket.io",
        timestamp: "2021-11-27T22:35:25Z",
        author: { name: "Chris Kinsman", email: "chris@kinsman.net" },
        committer: { name: "Chris Kinsman", email: "chris@kinsman.net" },
      },
      repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
      head_repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
    },
    {
      id: 1511325100,
      name: "ci",
      node_id: "WFR_kwLOFCwDGs5aFP2s",
      head_branch: "update-packages",
      head_sha: "1b15db6c53898d6ec9732ab37a63d3a690f671b5",
      run_number: 78,
      event: "push",
      status: "completed",
      conclusion: "failure",
      workflow_id: 5777275,
      check_suite_id: 4482455065,
      check_suite_node_id: "CS_kwDOFCwDGs8AAAABCyzWGQ",
      url: "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511325100",
      html_url:
        "https://github.com/chriskinsman/github-action-dashboard/actions/runs/1511325100",
      pull_requests: [],
      created_at: "2021-11-27T22:14:31Z",
      updated_at: "2021-11-27T22:19:57Z",
      run_attempt: 1,
      run_started_at: "2021-11-27T22:14:31Z",
      jobs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511325100/jobs",
      logs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511325100/logs",
      check_suite_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/check-suites/4482455065",
      artifacts_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511325100/artifacts",
      cancel_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511325100/cancel",
      rerun_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1511325100/rerun",
      previous_attempt_url: null,
      workflow_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/workflows/5777275",
      head_commit: {
        id: "1b15db6c53898d6ec9732ab37a63d3a690f671b5",
        tree_id: "7d6fb7d69f2ac4f3e881d55e4216dd8f2595b75f",
        message: "Update to node16",
        timestamp: "2021-11-27T22:13:40Z",
        author: { name: "Chris Kinsman", email: "chris@kinsman.net" },
        committer: { name: "Chris Kinsman", email: "chris@kinsman.net" },
      },
      repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
      head_repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
    },
    {
      id: 1387502236,
      name: "ci",
      node_id: "WFR_kwLOFCwDGs5Ss5qc",
      head_branch: "1.5.0",
      head_sha: "a885ee3b3eced90b28ab731841be880fe1e5bb7d",
      run_number: 77,
      event: "push",
      status: "completed",
      conclusion: "success",
      workflow_id: 5777275,
      check_suite_id: 4169865540,
      check_suite_node_id: "CS_kwDOFCwDGs74ixlE",
      url: "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1387502236",
      html_url:
        "https://github.com/chriskinsman/github-action-dashboard/actions/runs/1387502236",
      pull_requests: [],
      created_at: "2021-10-26T21:08:45Z",
      updated_at: "2021-10-26T21:09:23Z",
      run_attempt: 1,
      run_started_at: "2021-10-26T21:08:45Z",
      jobs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1387502236/jobs",
      logs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1387502236/logs",
      check_suite_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/check-suites/4169865540",
      artifacts_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1387502236/artifacts",
      cancel_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1387502236/cancel",
      rerun_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1387502236/rerun",
      previous_attempt_url: null,
      workflow_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/workflows/5777275",
      head_commit: {
        id: "a885ee3b3eced90b28ab731841be880fe1e5bb7d",
        tree_id: "491e6beddf98a821bc810e8dfea091e6cd077466",
        message: "Add new LOOKBACK_DAYS variable (#15)",
        timestamp: "2021-10-26T18:57:26Z",
        author: {
          name: "Olivier Fournier",
          email: "66017789+tgdfool2@users.noreply.github.com",
        },
        committer: { name: "GitHub", email: "noreply@github.com" },
      },
      repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
      head_repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
    },
    {
      id: 1387065898,
      name: "ci",
      node_id: "WFR_kwLOFCwDGs5SrPIq",
      head_branch: "main",
      head_sha: "a885ee3b3eced90b28ab731841be880fe1e5bb7d",
      run_number: 76,
      event: "push",
      status: "completed",
      conclusion: "success",
      workflow_id: 5777275,
      check_suite_id: 4168607835,
      check_suite_node_id: "CS_kwDOFCwDGs74d-hb",
      url: "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1387065898",
      html_url:
        "https://github.com/chriskinsman/github-action-dashboard/actions/runs/1387065898",
      pull_requests: [],
      created_at: "2021-10-26T18:57:28Z",
      updated_at: "2021-10-26T19:06:59Z",
      run_attempt: 1,
      run_started_at: "2021-10-26T18:57:28Z",
      jobs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1387065898/jobs",
      logs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1387065898/logs",
      check_suite_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/check-suites/4168607835",
      artifacts_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1387065898/artifacts",
      cancel_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1387065898/cancel",
      rerun_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1387065898/rerun",
      previous_attempt_url: null,
      workflow_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/workflows/5777275",
      head_commit: {
        id: "a885ee3b3eced90b28ab731841be880fe1e5bb7d",
        tree_id: "491e6beddf98a821bc810e8dfea091e6cd077466",
        message: "Add new LOOKBACK_DAYS variable (#15)",
        timestamp: "2021-10-26T18:57:26Z",
        author: {
          name: "Olivier Fournier",
          email: "66017789+tgdfool2@users.noreply.github.com",
        },
        committer: { name: "GitHub", email: "noreply@github.com" },
      },
      repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
      head_repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
    },
    {
      id: 1385049107,
      name: "ci",
      node_id: "WFR_kwLOFCwDGs5SjiwT",
      head_branch: "feature/configurable-loopback-time",
      head_sha: "b269d377b383c42af36fd6fdc6ef007dc9704d7c",
      run_number: 75,
      event: "pull_request",
      status: "completed",
      conclusion: "success",
      workflow_id: 5777275,
      check_suite_id: 4162705348,
      check_suite_node_id: "CS_kwDOFCwDGs74HdfE",
      url: "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1385049107",
      html_url:
        "https://github.com/chriskinsman/github-action-dashboard/actions/runs/1385049107",
      pull_requests: [],
      created_at: "2021-10-26T09:46:34Z",
      updated_at: "2021-10-26T18:55:06Z",
      run_attempt: 2,
      run_started_at: "2021-10-26T18:45:57Z",
      jobs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1385049107/jobs",
      logs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1385049107/logs",
      check_suite_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/check-suites/4162705348",
      artifacts_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1385049107/artifacts",
      cancel_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1385049107/cancel",
      rerun_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1385049107/rerun",
      previous_attempt_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1385049107/attempts/1",
      workflow_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/workflows/5777275",
      head_commit: {
        id: "b269d377b383c42af36fd6fdc6ef007dc9704d7c",
        tree_id: "491e6beddf98a821bc810e8dfea091e6cd077466",
        message: "Fix merge conflict",
        timestamp: "2021-10-26T09:46:27Z",
        author: {
          name: "Olivier Fournier, B2B-CDL-CSS-CMS",
          email: "Olivier.Fournier@swisscom.com",
        },
        committer: {
          name: "Olivier Fournier, B2B-CDL-CSS-CMS",
          email: "Olivier.Fournier@swisscom.com",
        },
      },
      repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
      head_repository: {
        id: 414919534,
        node_id: "R_kgDOGLsrbg",
        name: "github-action-dashboard",
        full_name: "tgdfool2/github-action-dashboard",
        private: false,
        owner: {
          login: "tgdfool2",
          id: 66017789,
          node_id: "MDQ6VXNlcjY2MDE3Nzg5",
          avatar_url: "https://avatars.githubusercontent.com/u/66017789?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/tgdfool2",
          html_url: "https://github.com/tgdfool2",
          followers_url: "https://api.github.com/users/tgdfool2/followers",
          following_url:
            "https://api.github.com/users/tgdfool2/following{/other_user}",
          gists_url: "https://api.github.com/users/tgdfool2/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/tgdfool2/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/tgdfool2/subscriptions",
          organizations_url: "https://api.github.com/users/tgdfool2/orgs",
          repos_url: "https://api.github.com/users/tgdfool2/repos",
          events_url: "https://api.github.com/users/tgdfool2/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/tgdfool2/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/tgdfool2/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: true,
        url: "https://api.github.com/repos/tgdfool2/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/tgdfool2/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/tgdfool2/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/tgdfool2/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/tgdfool2/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/tgdfool2/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/tgdfool2/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/tgdfool2/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/tgdfool2/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/tgdfool2/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/tgdfool2/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/tgdfool2/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/tgdfool2/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/tgdfool2/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/tgdfool2/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/tgdfool2/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/tgdfool2/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/tgdfool2/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/tgdfool2/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/tgdfool2/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/tgdfool2/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/tgdfool2/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/tgdfool2/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/tgdfool2/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/tgdfool2/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/tgdfool2/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/tgdfool2/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/tgdfool2/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/tgdfool2/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/tgdfool2/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/tgdfool2/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/tgdfool2/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/tgdfool2/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/tgdfool2/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/tgdfool2/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/tgdfool2/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/tgdfool2/github-action-dashboard/deployments",
      },
    },
    {
      id: 1330379871,
      name: "ci",
      node_id: "WFR_kwLOFCwDGs5PS_xf",
      head_branch: "add-heroku-deployment",
      head_sha: "c7af911db3ab34f195932c2c619d16d5613a279f",
      run_number: 74,
      event: "pull_request",
      status: "completed",
      conclusion: "success",
      workflow_id: 5777275,
      check_suite_id: 4022181107,
      check_suite_node_id: "CS_kwDOFCwDGs7vvZzz",
      url: "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1330379871",
      html_url:
        "https://github.com/chriskinsman/github-action-dashboard/actions/runs/1330379871",
      pull_requests: [],
      created_at: "2021-10-11T19:53:51Z",
      updated_at: "2021-10-11T20:02:30Z",
      run_attempt: 1,
      run_started_at: "2021-10-11T19:53:51Z",
      jobs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1330379871/jobs",
      logs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1330379871/logs",
      check_suite_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/check-suites/4022181107",
      artifacts_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1330379871/artifacts",
      cancel_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1330379871/cancel",
      rerun_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1330379871/rerun",
      previous_attempt_url: null,
      workflow_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/workflows/5777275",
      head_commit: {
        id: "c7af911db3ab34f195932c2c619d16d5613a279f",
        tree_id: "dcaeb62e8a1e515598973f008cde4a06b673ca1d",
        message: "Added full backward compatibility",
        timestamp: "2021-10-11T19:53:45Z",
        author: { name: "Gianni Carafa", email: "gianni.carafa@srf.ch" },
        committer: { name: "Gianni Carafa", email: "gianni.carafa@srf.ch" },
      },
      repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
      head_repository: {
        id: 392653553,
        node_id: "MDEwOlJlcG9zaXRvcnkzOTI2NTM1NTM=",
        name: "github-action-dashboard",
        full_name: "mms-gianni/github-action-dashboard",
        private: false,
        owner: {
          login: "mms-gianni",
          id: 2052196,
          node_id: "MDQ6VXNlcjIwNTIxOTY=",
          avatar_url: "https://avatars.githubusercontent.com/u/2052196?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/mms-gianni",
          html_url: "https://github.com/mms-gianni",
          followers_url: "https://api.github.com/users/mms-gianni/followers",
          following_url:
            "https://api.github.com/users/mms-gianni/following{/other_user}",
          gists_url: "https://api.github.com/users/mms-gianni/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/mms-gianni/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/mms-gianni/subscriptions",
          organizations_url: "https://api.github.com/users/mms-gianni/orgs",
          repos_url: "https://api.github.com/users/mms-gianni/repos",
          events_url:
            "https://api.github.com/users/mms-gianni/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/mms-gianni/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/mms-gianni/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: true,
        url: "https://api.github.com/repos/mms-gianni/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/deployments",
      },
    },
    {
      id: 1328631293,
      name: "ci",
      node_id: "WFR_kwLOFCwDGs5PMU39",
      head_branch: "add-heroku-deployment",
      head_sha: "60d00cace8ca2e509623200a5e037bad603f1a95",
      run_number: 73,
      event: "pull_request",
      status: "completed",
      conclusion: "success",
      workflow_id: 5777275,
      check_suite_id: 4017206827,
      check_suite_node_id: "CS_kwDOFCwDGs7vcbYr",
      url: "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1328631293",
      html_url:
        "https://github.com/chriskinsman/github-action-dashboard/actions/runs/1328631293",
      pull_requests: [],
      created_at: "2021-10-11T10:55:47Z",
      updated_at: "2021-10-11T11:04:56Z",
      run_attempt: 1,
      run_started_at: "2021-10-11T10:55:47Z",
      jobs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1328631293/jobs",
      logs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1328631293/logs",
      check_suite_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/check-suites/4017206827",
      artifacts_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1328631293/artifacts",
      cancel_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1328631293/cancel",
      rerun_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1328631293/rerun",
      previous_attempt_url: null,
      workflow_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/workflows/5777275",
      head_commit: {
        id: "60d00cace8ca2e509623200a5e037bad603f1a95",
        tree_id: "c0f8a033f81912ca97eaab28d6ad902be9e40386",
        message: "fix merge conflicts, remove code duplication",
        timestamp: "2021-10-11T10:55:40Z",
        author: { name: "Gianni Carafa", email: "gianni.carafa@srf.ch" },
        committer: { name: "Gianni Carafa", email: "gianni.carafa@srf.ch" },
      },
      repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
      head_repository: {
        id: 392653553,
        node_id: "MDEwOlJlcG9zaXRvcnkzOTI2NTM1NTM=",
        name: "github-action-dashboard",
        full_name: "mms-gianni/github-action-dashboard",
        private: false,
        owner: {
          login: "mms-gianni",
          id: 2052196,
          node_id: "MDQ6VXNlcjIwNTIxOTY=",
          avatar_url: "https://avatars.githubusercontent.com/u/2052196?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/mms-gianni",
          html_url: "https://github.com/mms-gianni",
          followers_url: "https://api.github.com/users/mms-gianni/followers",
          following_url:
            "https://api.github.com/users/mms-gianni/following{/other_user}",
          gists_url: "https://api.github.com/users/mms-gianni/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/mms-gianni/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/mms-gianni/subscriptions",
          organizations_url: "https://api.github.com/users/mms-gianni/orgs",
          repos_url: "https://api.github.com/users/mms-gianni/repos",
          events_url:
            "https://api.github.com/users/mms-gianni/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/mms-gianni/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/mms-gianni/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: true,
        url: "https://api.github.com/repos/mms-gianni/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/mms-gianni/github-action-dashboard/deployments",
      },
    },
    {
      id: 1322495198,
      name: "ci",
      node_id: "WFR_kwLOFCwDGs5O06ze",
      head_branch: "v1.4.0",
      head_sha: "768300fdb2d88f16d13f757827ff42a311fbb96e",
      run_number: 72,
      event: "push",
      status: "completed",
      conclusion: "success",
      workflow_id: 5777275,
      check_suite_id: 4004491368,
      check_suite_node_id: "CS_kwDOFCwDGs7ur7Bo",
      url: "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1322495198",
      html_url:
        "https://github.com/chriskinsman/github-action-dashboard/actions/runs/1322495198",
      pull_requests: [],
      created_at: "2021-10-09T02:03:23Z",
      updated_at: "2021-10-09T02:03:54Z",
      run_attempt: 1,
      run_started_at: "2021-10-09T02:03:23Z",
      jobs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1322495198/jobs",
      logs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1322495198/logs",
      check_suite_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/check-suites/4004491368",
      artifacts_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1322495198/artifacts",
      cancel_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1322495198/cancel",
      rerun_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1322495198/rerun",
      previous_attempt_url: null,
      workflow_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/workflows/5777275",
      head_commit: {
        id: "768300fdb2d88f16d13f757827ff42a311fbb96e",
        tree_id: "ad7c89b83e51a2622b01ec2b9de1ac167746d955",
        message:
          "Add run duration (#14)\n" +
          "\n" +
          "* Update packages\r\n" +
          "* Added run duration\r\n" +
          "* Changed date formatting\r\n" +
          "* chore: update screenshot\r\n" +
          "* Add smee-client info\r\n" +
          "* add debug statements\r\n" +
          "* Add try/catch in webhook",
        timestamp: "2021-10-09T01:50:30Z",
        author: {
          name: "Chris Kinsman",
          email: "chriskinsman@users.noreply.github.com",
        },
        committer: { name: "GitHub", email: "noreply@github.com" },
      },
      repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
      head_repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
    },
    {
      id: 1322475149,
      name: "ci",
      node_id: "WFR_kwLOFCwDGs5O016N",
      head_branch: "main",
      head_sha: "768300fdb2d88f16d13f757827ff42a311fbb96e",
      run_number: 71,
      event: "push",
      status: "completed",
      conclusion: "success",
      workflow_id: 5777275,
      check_suite_id: 4004449993,
      check_suite_node_id: "CS_kwDOFCwDGs7urw7J",
      url: "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1322475149",
      html_url:
        "https://github.com/chriskinsman/github-action-dashboard/actions/runs/1322475149",
      pull_requests: [],
      created_at: "2021-10-09T01:50:32Z",
      updated_at: "2021-10-09T01:58:55Z",
      run_attempt: 1,
      run_started_at: "2021-10-09T01:50:32Z",
      jobs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1322475149/jobs",
      logs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1322475149/logs",
      check_suite_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/check-suites/4004449993",
      artifacts_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1322475149/artifacts",
      cancel_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1322475149/cancel",
      rerun_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1322475149/rerun",
      previous_attempt_url: null,
      workflow_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/workflows/5777275",
      head_commit: {
        id: "768300fdb2d88f16d13f757827ff42a311fbb96e",
        tree_id: "ad7c89b83e51a2622b01ec2b9de1ac167746d955",
        message:
          "Add run duration (#14)\n" +
          "\n" +
          "* Update packages\r\n" +
          "* Added run duration\r\n" +
          "* Changed date formatting\r\n" +
          "* chore: update screenshot\r\n" +
          "* Add smee-client info\r\n" +
          "* add debug statements\r\n" +
          "* Add try/catch in webhook",
        timestamp: "2021-10-09T01:50:30Z",
        author: {
          name: "Chris Kinsman",
          email: "chriskinsman@users.noreply.github.com",
        },
        committer: { name: "GitHub", email: "noreply@github.com" },
      },
      repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
      head_repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
    },
    {
      id: 1322210274,
      name: "ci",
      node_id: "WFR_kwLOFCwDGs5Oz1Pi",
      head_branch: "duration",
      head_sha: "c41657a195fd9667c0389c82cf8bc222d9ff8565",
      run_number: 70,
      event: "pull_request",
      status: "completed",
      conclusion: "success",
      workflow_id: 5777275,
      check_suite_id: 4003914755,
      check_suite_node_id: "CS_kwDOFCwDGs7upuQD",
      url: "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1322210274",
      html_url:
        "https://github.com/chriskinsman/github-action-dashboard/actions/runs/1322210274",
      pull_requests: [],
      created_at: "2021-10-08T23:32:14Z",
      updated_at: "2021-10-08T23:41:47Z",
      run_attempt: 1,
      run_started_at: "2021-10-08T23:32:14Z",
      jobs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1322210274/jobs",
      logs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1322210274/logs",
      check_suite_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/check-suites/4003914755",
      artifacts_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1322210274/artifacts",
      cancel_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1322210274/cancel",
      rerun_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1322210274/rerun",
      previous_attempt_url: null,
      workflow_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/workflows/5777275",
      head_commit: {
        id: "c41657a195fd9667c0389c82cf8bc222d9ff8565",
        tree_id: "ad7c89b83e51a2622b01ec2b9de1ac167746d955",
        message: "fix getUsage call",
        timestamp: "2021-10-08T23:32:07Z",
        author: { name: "Chris Kinsman", email: "chris@kinsman.net" },
        committer: { name: "Chris Kinsman", email: "chris@kinsman.net" },
      },
      repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
      head_repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
    },
    {
      id: 1322210261,
      name: "ci",
      node_id: "WFR_kwLOFCwDGs5Oz1PV",
      head_branch: "duration",
      head_sha: "c41657a195fd9667c0389c82cf8bc222d9ff8565",
      run_number: 69,
      event: "push",
      status: "completed",
      conclusion: "success",
      workflow_id: 5777275,
      check_suite_id: 4003914676,
      check_suite_node_id: "CS_kwDOFCwDGs7upuO0",
      url: "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1322210261",
      html_url:
        "https://github.com/chriskinsman/github-action-dashboard/actions/runs/1322210261",
      pull_requests: [],
      created_at: "2021-10-08T23:32:13Z",
      updated_at: "2021-10-08T23:41:21Z",
      run_attempt: 1,
      run_started_at: "2021-10-08T23:32:13Z",
      jobs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1322210261/jobs",
      logs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1322210261/logs",
      check_suite_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/check-suites/4003914676",
      artifacts_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1322210261/artifacts",
      cancel_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1322210261/cancel",
      rerun_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1322210261/rerun",
      previous_attempt_url: null,
      workflow_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/workflows/5777275",
      head_commit: {
        id: "c41657a195fd9667c0389c82cf8bc222d9ff8565",
        tree_id: "ad7c89b83e51a2622b01ec2b9de1ac167746d955",
        message: "fix getUsage call",
        timestamp: "2021-10-08T23:32:07Z",
        author: { name: "Chris Kinsman", email: "chris@kinsman.net" },
        committer: { name: "Chris Kinsman", email: "chris@kinsman.net" },
      },
      repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
      head_repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
    },
    {
      id: 1322191435,
      name: "ci",
      node_id: "WFR_kwLOFCwDGs5OzwpL",
      head_branch: "duration",
      head_sha: "11acc9f09f2e46fb4b69287bf6350cb54047ed89",
      run_number: 68,
      event: "pull_request",
      status: "completed",
      conclusion: "success",
      workflow_id: 5777275,
      check_suite_id: 4003871146,
      check_suite_node_id: "CS_kwDOFCwDGs7upjmq",
      url: "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1322191435",
      html_url:
        "https://github.com/chriskinsman/github-action-dashboard/actions/runs/1322191435",
      pull_requests: [],
      created_at: "2021-10-08T23:21:43Z",
      updated_at: "2021-10-08T23:33:51Z",
      run_attempt: 1,
      run_started_at: "2021-10-08T23:21:43Z",
      jobs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1322191435/jobs",
      logs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1322191435/logs",
      check_suite_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/check-suites/4003871146",
      artifacts_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1322191435/artifacts",
      cancel_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1322191435/cancel",
      rerun_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1322191435/rerun",
      previous_attempt_url: null,
      workflow_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/workflows/5777275",
      head_commit: {
        id: "11acc9f09f2e46fb4b69287bf6350cb54047ed89",
        tree_id: "d0ac29829cc4f0be1f44a9a020f32114cf09ad31",
        message: "Add try/catch in webhook",
        timestamp: "2021-10-08T23:21:36Z",
        author: { name: "Chris Kinsman", email: "chris@kinsman.net" },
        committer: { name: "Chris Kinsman", email: "chris@kinsman.net" },
      },
      repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
      head_repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
    },
    {
      id: 1322191258,
      name: "ci",
      node_id: "WFR_kwLOFCwDGs5Ozwma",
      head_branch: "duration",
      head_sha: "11acc9f09f2e46fb4b69287bf6350cb54047ed89",
      run_number: 67,
      event: "push",
      status: "completed",
      conclusion: "success",
      workflow_id: 5777275,
      check_suite_id: 4003870866,
      check_suite_node_id: "CS_kwDOFCwDGs7upjiS",
      url: "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1322191258",
      html_url:
        "https://github.com/chriskinsman/github-action-dashboard/actions/runs/1322191258",
      pull_requests: [],
      created_at: "2021-10-08T23:21:41Z",
      updated_at: "2021-10-08T23:30:46Z",
      run_attempt: 1,
      run_started_at: "2021-10-08T23:21:41Z",
      jobs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1322191258/jobs",
      logs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1322191258/logs",
      check_suite_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/check-suites/4003870866",
      artifacts_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1322191258/artifacts",
      cancel_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1322191258/cancel",
      rerun_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1322191258/rerun",
      previous_attempt_url: null,
      workflow_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/workflows/5777275",
      head_commit: {
        id: "11acc9f09f2e46fb4b69287bf6350cb54047ed89",
        tree_id: "d0ac29829cc4f0be1f44a9a020f32114cf09ad31",
        message: "Add try/catch in webhook",
        timestamp: "2021-10-08T23:21:36Z",
        author: { name: "Chris Kinsman", email: "chris@kinsman.net" },
        committer: { name: "Chris Kinsman", email: "chris@kinsman.net" },
      },
      repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
      head_repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
    },
    {
      id: 1322099234,
      name: "ci",
      node_id: "WFR_kwLOFCwDGs5OzaIi",
      head_branch: "duration",
      head_sha: "75b7ebbcf8ef4d708dcb09a2a3785cc92a3e50b8",
      run_number: 66,
      event: "pull_request",
      status: "completed",
      conclusion: "success",
      workflow_id: 5777275,
      check_suite_id: 4003650070,
      check_suite_node_id: "CS_kwDOFCwDGs7uotoW",
      url: "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1322099234",
      html_url:
        "https://github.com/chriskinsman/github-action-dashboard/actions/runs/1322099234",
      pull_requests: [],
      created_at: "2021-10-08T22:35:17Z",
      updated_at: "2021-10-08T22:44:36Z",
      run_attempt: 1,
      run_started_at: "2021-10-08T22:35:17Z",
      jobs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1322099234/jobs",
      logs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1322099234/logs",
      check_suite_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/check-suites/4003650070",
      artifacts_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1322099234/artifacts",
      cancel_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1322099234/cancel",
      rerun_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1322099234/rerun",
      previous_attempt_url: null,
      workflow_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/workflows/5777275",
      head_commit: {
        id: "75b7ebbcf8ef4d708dcb09a2a3785cc92a3e50b8",
        tree_id: "fa2eb1f6679963013e9bb1bb69472cbd4addef1e",
        message: "Update readme.md",
        timestamp: "2021-10-08T22:35:09Z",
        author: { name: "Chris Kinsman", email: "chris@kinsman.net" },
        committer: { name: "Chris Kinsman", email: "chris@kinsman.net" },
      },
      repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
      head_repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
    },
    {
      id: 1322099170,
      name: "ci",
      node_id: "WFR_kwLOFCwDGs5OzaHi",
      head_branch: "duration",
      head_sha: "75b7ebbcf8ef4d708dcb09a2a3785cc92a3e50b8",
      run_number: 65,
      event: "push",
      status: "completed",
      conclusion: "success",
      workflow_id: 5777275,
      check_suite_id: 4003649879,
      check_suite_node_id: "CS_kwDOFCwDGs7uotlX",
      url: "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1322099170",
      html_url:
        "https://github.com/chriskinsman/github-action-dashboard/actions/runs/1322099170",
      pull_requests: [],
      created_at: "2021-10-08T22:35:15Z",
      updated_at: "2021-10-08T22:45:56Z",
      run_attempt: 1,
      run_started_at: "2021-10-08T22:35:15Z",
      jobs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1322099170/jobs",
      logs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1322099170/logs",
      check_suite_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/check-suites/4003649879",
      artifacts_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1322099170/artifacts",
      cancel_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1322099170/cancel",
      rerun_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1322099170/rerun",
      previous_attempt_url: null,
      workflow_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/workflows/5777275",
      head_commit: {
        id: "75b7ebbcf8ef4d708dcb09a2a3785cc92a3e50b8",
        tree_id: "fa2eb1f6679963013e9bb1bb69472cbd4addef1e",
        message: "Update readme.md",
        timestamp: "2021-10-08T22:35:09Z",
        author: { name: "Chris Kinsman", email: "chris@kinsman.net" },
        committer: { name: "Chris Kinsman", email: "chris@kinsman.net" },
      },
      repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
      head_repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
    },
    {
      id: 1321637725,
      name: "ci",
      node_id: "WFR_kwLOFCwDGs5Oxpdd",
      head_branch: "duration",
      head_sha: "cf89070c2e1e3b87c0c8831bd6999f0b3cec7e46",
      run_number: 64,
      event: "pull_request",
      status: "completed",
      conclusion: "success",
      workflow_id: 5777275,
      check_suite_id: 4002436347,
      check_suite_node_id: "CS_kwDOFCwDGs7ukFT7",
      url: "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1321637725",
      html_url:
        "https://github.com/chriskinsman/github-action-dashboard/actions/runs/1321637725",
      pull_requests: [],
      created_at: "2021-10-08T19:31:29Z",
      updated_at: "2021-10-08T19:40:24Z",
      run_attempt: 1,
      run_started_at: "2021-10-08T19:31:29Z",
      jobs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1321637725/jobs",
      logs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1321637725/logs",
      check_suite_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/check-suites/4002436347",
      artifacts_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1321637725/artifacts",
      cancel_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1321637725/cancel",
      rerun_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1321637725/rerun",
      previous_attempt_url: null,
      workflow_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/workflows/5777275",
      head_commit: {
        id: "cf89070c2e1e3b87c0c8831bd6999f0b3cec7e46",
        tree_id: "83e7fc5810b3960832b7a6411b7cb93b511f45e2",
        message: "Add debug statements",
        timestamp: "2021-10-08T19:31:22Z",
        author: { name: "Chris Kinsman", email: "chris@kinsman.net" },
        committer: { name: "Chris Kinsman", email: "chris@kinsman.net" },
      },
      repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
      head_repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
    },
    {
      id: 1321637646,
      name: "ci",
      node_id: "WFR_kwLOFCwDGs5OxpcO",
      head_branch: "duration",
      head_sha: "cf89070c2e1e3b87c0c8831bd6999f0b3cec7e46",
      run_number: 63,
      event: "push",
      status: "completed",
      conclusion: "success",
      workflow_id: 5777275,
      check_suite_id: 4002436089,
      check_suite_node_id: "CS_kwDOFCwDGs7ukFP5",
      url: "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1321637646",
      html_url:
        "https://github.com/chriskinsman/github-action-dashboard/actions/runs/1321637646",
      pull_requests: [],
      created_at: "2021-10-08T19:31:27Z",
      updated_at: "2021-10-08T19:41:29Z",
      run_attempt: 1,
      run_started_at: "2021-10-08T19:31:27Z",
      jobs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1321637646/jobs",
      logs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1321637646/logs",
      check_suite_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/check-suites/4002436089",
      artifacts_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1321637646/artifacts",
      cancel_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1321637646/cancel",
      rerun_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1321637646/rerun",
      previous_attempt_url: null,
      workflow_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/workflows/5777275",
      head_commit: {
        id: "cf89070c2e1e3b87c0c8831bd6999f0b3cec7e46",
        tree_id: "83e7fc5810b3960832b7a6411b7cb93b511f45e2",
        message: "Add debug statements",
        timestamp: "2021-10-08T19:31:22Z",
        author: { name: "Chris Kinsman", email: "chris@kinsman.net" },
        committer: { name: "Chris Kinsman", email: "chris@kinsman.net" },
      },
      repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
      head_repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
    },
    {
      id: 1321602064,
      name: "ci",
      node_id: "WFR_kwLOFCwDGs5OxgwQ",
      head_branch: "duration",
      head_sha: "c77d6081007a2d6379b9afe80eb3544bf4eb369a",
      run_number: 62,
      event: "pull_request",
      status: "completed",
      conclusion: "success",
      workflow_id: 5777275,
      check_suite_id: 4002332130,
      check_suite_node_id: "CS_kwDOFCwDGs7ujr3i",
      url: "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1321602064",
      html_url:
        "https://github.com/chriskinsman/github-action-dashboard/actions/runs/1321602064",
      pull_requests: [],
      created_at: "2021-10-08T19:17:26Z",
      updated_at: "2021-10-08T19:26:16Z",
      run_attempt: 1,
      run_started_at: "2021-10-08T19:17:26Z",
      jobs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1321602064/jobs",
      logs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1321602064/logs",
      check_suite_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/check-suites/4002332130",
      artifacts_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1321602064/artifacts",
      cancel_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1321602064/cancel",
      rerun_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1321602064/rerun",
      previous_attempt_url: null,
      workflow_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/workflows/5777275",
      head_commit: {
        id: "c77d6081007a2d6379b9afe80eb3544bf4eb369a",
        tree_id: "bc77120d8b67b34ec55071f73b86bd19f981d418",
        message: "Add smee-client info",
        timestamp: "2021-10-08T19:17:17Z",
        author: { name: "Chris Kinsman", email: "chris@kinsman.net" },
        committer: { name: "Chris Kinsman", email: "chris@kinsman.net" },
      },
      repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
      head_repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
    },
    {
      id: 1321601828,
      name: "ci",
      node_id: "WFR_kwLOFCwDGs5Oxgsk",
      head_branch: "duration",
      head_sha: "c77d6081007a2d6379b9afe80eb3544bf4eb369a",
      run_number: 61,
      event: "push",
      status: "completed",
      conclusion: "success",
      workflow_id: 5777275,
      check_suite_id: 4002331713,
      check_suite_node_id: "CS_kwDOFCwDGs7ujrxB",
      url: "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1321601828",
      html_url:
        "https://github.com/chriskinsman/github-action-dashboard/actions/runs/1321601828",
      pull_requests: [],
      created_at: "2021-10-08T19:17:24Z",
      updated_at: "2021-10-08T19:26:17Z",
      run_attempt: 1,
      run_started_at: "2021-10-08T19:17:24Z",
      jobs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1321601828/jobs",
      logs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1321601828/logs",
      check_suite_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/check-suites/4002331713",
      artifacts_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1321601828/artifacts",
      cancel_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1321601828/cancel",
      rerun_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1321601828/rerun",
      previous_attempt_url: null,
      workflow_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/workflows/5777275",
      head_commit: {
        id: "c77d6081007a2d6379b9afe80eb3544bf4eb369a",
        tree_id: "bc77120d8b67b34ec55071f73b86bd19f981d418",
        message: "Add smee-client info",
        timestamp: "2021-10-08T19:17:17Z",
        author: { name: "Chris Kinsman", email: "chris@kinsman.net" },
        committer: { name: "Chris Kinsman", email: "chris@kinsman.net" },
      },
      repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
      head_repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {
          login: "chriskinsman",
          id: 1522018,
          node_id: "MDQ6VXNlcjE1MjIwMTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1522018?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chriskinsman",
          html_url: "https://github.com/chriskinsman",
          followers_url: "https://api.github.com/users/chriskinsman/followers",
          following_url:
            "https://api.github.com/users/chriskinsman/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chriskinsman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chriskinsman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chriskinsman/subscriptions",
          organizations_url: "https://api.github.com/users/chriskinsman/orgs",
          repos_url: "https://api.github.com/users/chriskinsman/repos",
          events_url:
            "https://api.github.com/users/chriskinsman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chriskinsman/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/merges",
        archive_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/downloads",
        issues_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/deployments",
      },
    },
    {
      id: 1321360895,
      name: "ci",
      node_id: "WFR_kwLOFCwDGs5Owl3_",
      head_branch: "duration",
      head_sha: "9902dbe3c94ddcebfb13deadc30e8c2592a5fa3e",
      run_number: 60,
      event: "pull_request",
      status: "completed",
      conclusion: "success",
      workflow_id: 5777275,
      check_suite_id: 4001689016,
      check_suite_node_id: "CS_kwDOFCwDGs7uhO24",
      url: "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1321360895",
      html_url:
        "https://github.com/chriskinsman/github-action-dashboard/actions/runs/1321360895",
      pull_requests: [],
      created_at: "2021-10-08T17:56:56Z",
      updated_at: "2021-10-08T18:08:48Z",
      run_attempt: 1,
      run_started_at: "2021-10-08T17:56:56Z",
      jobs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1321360895/jobs",
      logs_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1321360895/logs",
      check_suite_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/check-suites/4001689016",
      artifacts_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1321360895/artifacts",
      cancel_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1321360895/cancel",
      rerun_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/runs/1321360895/rerun",
      previous_attempt_url: null,
      workflow_url:
        "https://api.github.com/repos/chriskinsman/github-action-dashboard/actions/workflows/5777275",
      head_commit: {
        id: "9902dbe3c94ddcebfb13deadc30e8c2592a5fa3e",
        tree_id: "53417c1f87064282c3fd8fcab94d2d26244cfa89",
        message: "chore: update screenshot",
        timestamp: "2021-10-08T17:56:47Z",
        author: { name: "Chris Kinsman", email: "chris@kinsman.net" },
        committer: { name: "Chris Kinsman", email: "chris@kinsman.net" },
      },
      repository: {
        id: 338428698,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzg0Mjg2OTg=",
        name: "github-action-dashboard",
        full_name: "chriskinsman/github-action-dashboard",
        private: false,
        owner: {},
        html_url: "https://github.com/chriskinsman/github-action-dashboard",
        description:
          "A dashboard to keep track of the status of your GitHub Actions",
        fork: false,
        url: "https://api.github.com/repos/chriskinsman/github-action-dashboard",
        forks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/forks",
        keys_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/teams",
        hooks_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/hooks",
        issue_events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/events",
        assignees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/tags",
        blobs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/languages",
        stargazers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/stargazers",
        contributors_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/contributors",
        subscribers_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscribers",
        subscription_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/subscription",
        commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chriskinsman/github-action-dashboard/git/commits{/sha}",
      },
      head_repository: {},
    },
  ],
};
