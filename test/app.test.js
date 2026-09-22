const { test } = require('node:test');
const assert = require('node:assert');
const request = require('supertest');

// Basic smoke tests: prove the Express app boots and actually handles an
// HTTP request. We deliberately hit a route that does NOT exist rather than
// a real /analytics route, so this test needs no database or weather API
// connection — it just checks the app pipeline itself is wired correctly.

test('app module loads and exposes an Express app', () => {
  const app = require('../src/app');
  assert.strictEqual(typeof app, 'function', 'app.js should export an Express app');
  assert.strictEqual(typeof app.listen, 'function', 'exported app should have a .listen method');
});

test('app responds to HTTP requests (404 for an unknown route)', async () => {
  const app = require('../src/app');
  const response = await request(app).get('/this-route-does-not-exist');
  assert.strictEqual(response.status, 404, 'Express should return 404 for an unmounted route');
});
