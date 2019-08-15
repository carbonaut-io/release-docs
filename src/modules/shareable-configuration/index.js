#!/usr/bin/env node

module.exports = {
  "plugins":
    [
      "@semantic-release/commit-analyzer",
      "@semantic-release/release-notes-generator",
      "@semantic-release/changelog",
      ["@semantic-release/exec", {
        "prepareCmd": "release-docs-adjust-version --version=${nextRelease.version}",
        "successCmd": "release-docs-update-changelog-project --repo_url=$GH_REPO_URL --token=$GH_TOKEN --project=$PROJECT_TITLE"
      }],
      ["@semantic-release/git", {
        "assets": ["package-lock.json", "package.json", "CHANGELOG.md", "config.xml"],
        "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
      }],
      "@semantic-release/github"
    ],
  "preset":
    "angular"
};