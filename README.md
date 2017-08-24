# test-semantic-deploy-with-now

> Test semantic-action to deploy using Zeit Now

[![Build status][ci-image] ][ci-url]

Uses [semantic-action][semantic-action] to deploy to Zeit Now using
[now-pipeline][now-pipeline]. Read [Semantic Action][sem action] blog post.

Deploys to [https://test-semantic-deploy-with-now-123.now.sh/](https://test-semantic-deploy-with-now-123.now.sh/) and the last deployed version is at
[/build.json](https://test-semantic-deploy-with-now-123.now.sh/build.json). This version
is fetched by `url-to-sha` plugin to determine the next version to publish.

Trace the deploy steps in the [package.json](package.json) to see all that is
necessary to determine if a new version should be deployed, generating new
`public/build.json` file with updated version and then deploying using `now-pipeline`.

[semantic-action]: https://github.com/bahmutov/semantic-action
[now-pipeline]: https://github.com/bahmutov/now-pipeline
[sem action]: https://glebbahmutov.com/blog/semantic-action/

[ci-image]: https://travis-ci.org/bahmutov/test-semantic-deploy-with-now.svg?branch=master
[ci-url]: https://travis-ci.org/bahmutov/test-semantic-deploy-with-now
