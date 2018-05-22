const path = require('path');

// TODO Tidy these up because some are likely redundant. The extensions
// were added to an oft-used existing tslint config.

module.exports = {
  extends: [
    'tslint:latest',
    path.join(
      path.dirname(require.resolve('tslint-config-prettier')),
      'index'
    )
  ],
  rules: {
    align: [true],
    'arrow-parens': false,
    'arrow-return-shorthand': [true, 'multiline'],
    'await-promise': [true],
    'interface-name': [true, 'always-prefix'],
    'interface-over-type-literal': [true],
    'max-classes-per-file': [false],
    'max-line-length': [true, 140],
    'member-access': [false],
    'no-consecutive-blank-lines': [true],
    'no-console': [false],
    'no-duplicate-variable': [true, 'check-parameters'],
    'no-empty-interface': [false],
    'no-implicit-dependencies': [false],
    'no-magic-numbers': [true],
    'no-return-await': [true],
    'ordered-imports': [false],
    'prefer-object-spread': [true],
    'prefer-template': [true, 'allow-single-concat'],
    'promise-function-async': [true]
  }
};
