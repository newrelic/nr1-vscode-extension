# Contributing

👋Contributions are always welcome!

Before contributing please read the [code of conduct](./CODE_OF_CONDUCT.md) and [search the existing issues](../../issues); as your issue may have already been discussed or fixed in the `main` branch.

See the [getting started](./GETTING_STARTED.md) instructions for development.

To contribute, [fork](https://help.github.com/articles/fork-a-repo/) this repository, commit your changes, and [submit a Pull Request](https://help.github.com/articles/using-pull-requests/).

Our [code of conduct](./CODE_OF_CONDUCT.md) applies to all platforms and venues related to this project; please adhear to it in all your interactions with the project and its participants.

## Check for existing issues

Before submitting any new Issue, please search for similar ones in
[closed Issues](../../issues?q=is%3Aissue+is%3Aclosed+label%3Aenhancement).

## Feature Requests

Feature requests can be submitted as an [Issue](../../issues/new/choose). These Feature Requests will be reviewed periodically and we'll monitor [community interest](../../issues?q=label%3A%22votes+needed%22+sort%3Areactions-%2B1-desc) in this feature. [e.g. :+1: reactions](https://help.github.com/articles/about-discussions-in-issues-and-pull-requests/).

## Bugs or security vulnerabilities

Bugs or security vulnerabilities can be submitted as an [Issue](../../issues/new/choose).

## Pull Requests

1. Ensure any install or build dependencies are removed before doing a build.
2. Increase the version numbers in any examples files and the README.md to the new version that this Pull Request would represent. The versioning scheme we use is [SemVer](http://semver.org/).
3. You may merge the Pull Request in once you have sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

## Conventional Commits and Semantic versioning

We use conventional commits and semantic release to automatically keep track of versioning. In order to trigger a new publish of the extension, the version must be updated. This can be achieved through the below prefixes. More on conventional commits [here](https://www.conventionalcommits.org/)

- `fix:` a commit of the type fix patches a bug in your codebase (this correlates with PATCH in semantic versioning).
- `feat:` a commit of the type feat introduces a new feature to the codebase (this correlates with MINOR in semantic versioning).
- `BREAKING CHANGE:` a commit that has a footer `BREAKING CHANGE:`, or appends a `!` after the type/scope introduces a breaking change (correlating with MAJOR in semantic versioning). A BREAKING CHANGE can be part of commits of any type. types other than `fix:` and `feat:`

### Example commit

```shell
git commit -m "fix: updated contributing guide"
```

## Contributor License Agreement

When you submit your Pull Request, you'll need to sign the CLA via the click-through using the `CLA-Assistant`. If you'd like to execute our corporate CLA, or if you have any questions, please send us an email at opensource@newrelic.com.

For more information about CLAs, please check out Alex Russell’s excellent post,
[“Why Do I Need to Sign This?”](https://infrequently.org/2008/06/why-do-i-need-to-sign-this/).

## Slack

We host a public Slack with a dedicated channel for contributors and maintainers of open source projects hosted by New Relic. If you are contributing to this project, you're welcome to request access to the #oss-contributors channel in the newrelicusers.slack.com workspace. To request access, see https://newrelicusers-signup.herokuapp.com/.
