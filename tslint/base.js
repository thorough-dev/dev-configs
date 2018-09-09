module.exports = {
  defaultSeverity: 'warning',
  extends: ['tslint-config-airbnb', 'tslint-config-prettier'],
  rules: {
    'prefer-function-over-method': false,

    // Don't require explicit type definitions. We do not allow implicit
    // `any` though, so everything does have either an inferred type or an
    // explicitly defined one.
    typedef: false,

    // Enforce that comments begin with a space.
    'comment-format': [true, 'check-space']
  }
};
