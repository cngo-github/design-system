<!--
**Note:**
- Add the [Jira ticket number](https://jira.cms.gov/projects/WNMGDS/) to the PR title like this `[WNMGDS-10] - title of pr here` to link to the related issue in Jira.
- You can automatically [close related GitHub issues by using keywords](https://help.github.com/en/articles/closing-issues-using-keywords).
- A doc site needs to be generated manually using [Jenkins](https://ci.backends.cms.gov/wds/job/design-system/job/build-demo-sites/). Navigate to "Pipeline build-demo-sites," add your branch name and Slack username, and select the builds you want built. Upon a successful build, you should be able to navigate to a demo url resembling `http://design-system-demo.s3-website-us-east-1.amazonaws.com/[branch-name]/[core|hcgov|mgov]/storybook/` (omit `/storybook` if it's a docs site).
- If your changes involve code please update the snapshots by running `yarn update-snapshots`.

**Please follow the format below and remove any sections that aren't relevant.**
-->

## Summary

Overview of changes

### Added

List new features or components. Include a screenshot for new visual elements.

### Changed

List changes in existing functionality or design.
If the change was visual, include a comparison screenshot showing the before and after the visual change.

### Deprecated

List once-stable features or components to be deprecated in this PR.

### Removed

List deprecated features or components removed in this PR.

### Fixed

List any bug fixes.

## How to test

Instructions on how to test the changes. This is not exhaustive list of ways you should test this PR.
