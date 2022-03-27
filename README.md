# Vitest

There is a bug where updating the `vite.config.js` will cause the test watcher to reload and then fail the tests.

To reproduce:

1. run `yarn test`
2. hit `ctrl + s` inside the `vite.config.js`. No need to change anything.
