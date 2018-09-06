/**
 * This configuration is more strict than the base and is intended to
 * be used to lint code before it goes to production. The idea is that
 * the dev linter is more lenient because it knows you are probably
 * not "done" whereas at the point you are committing code you are
 * implicitly declaring it done.
 */

module.exports = {
  defaultSeverity: 'error',
  extends: ['./base'],
  rules: {}
};
