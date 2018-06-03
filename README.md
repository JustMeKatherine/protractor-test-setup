# `ux-user`

The main content of this repository is `src/ux-user`, the `User` module. It's an Angular `NgModule` which can be embedded in any Angular application.

Along with it, the `src/app` is a tiny demo application, which embeds `ux-user`. It's used mainly for development and e2e tests purposes.

# Automation

 * `ux-user` output: `dist` directory, gets `npm publish`-ed
 * `app-ux-user` output: `build`

# Tests

 * Unit tests are published into `testresults/unit-test-results.xml`
 * e2e tests are published into `testresults/e2e-test-results.xml`

# User.WebClient.E2E

Local setup
-----
- To run local app version, type:
npm run start
- To run mock api:
npm run mock-api (in User.Contract repo)

Tests
-----
- If you want to run specific suite, type:  'npm run e2e -- --suite=suite_name'
(suite_name is defined in protractor.conf.js) 

- User CRUD tests are in 'user' suite
