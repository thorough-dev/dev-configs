const base = require('./base');

module.exports = {
  ...base,
  rules: {
    ...base.rules,
    'no-submodule-imports': [...base.rules['no-submodule-imports'], 'rxjs']
  }
};
