# dev-configs

The development environment configurations we all extend from.

## Prettier

We use [Prettier](https://github.com/prettier/prettier) to format code consistently. Our base configuration is stored here in `prettier/base.js`.

To extend from our configuration you can use something like this in your project's `prettier.config.js`:

```js
const defaults = require('@thorough/dev-configs/prettier/base');

module.exports = Object.assign({}, defaults, {
  // Your personal overrides here.
});
```

## TSLint

We prefer TypeScript and use TSLint to lint it. Our primary base configuration is here at `tslint/base.js`. You can extend it in your project's `tslint.json` like this:

```json
{
  "extends": ["@thorough/dev-configs/tslint/base"],
  "rules": {
    "no-submodule-imports": [true, "date-fns/esm"]
  }
}
```
