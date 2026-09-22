const { test } = require('node:test');
const assert = require('node:assert');

// Basic smoke test: the Express app should load without throwing
// (this also proves your CI environment has everything the app needs,
// e.g. the Prisma client was generated before this ran).
test('app module loads and exposes an Express app', () => {
  const app = require('../src/app');
  assert.strictEqual(typeof app, 'function', 'app.js should export an Express app');
  assert.strictEqual(typeof app.listen, 'function', 'exported app should have a .listen method');
});

test('/analytics routes are mounted', () => {
  const app = require('../src/app');
  const mountedPaths = app._router.stack
    .filter(layer => layer.name === 'router')
    .map(layer => layer.regexp);
  assert.ok(mountedPaths.length > 0, 'expected at least one router to be mounted on the app');
});
