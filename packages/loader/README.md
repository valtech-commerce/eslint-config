# @valtech-commerce/eslint-loader

[![npm][npm-badge]][npm-url]
[![npm dependencies][dependencies-badge]][dependencies-url]
[![Tests][tests-badge]][tests-url]
[![npms][npms-badge]][npms-url]
[![License: MIT][license-badge]][license-url]

> ESLint YAML configuration loader

Reads and parses an ESLint YAML [shareable config](https://eslint.org/docs/developer-guide/shareable-configs.html) file and merges [Prettier](https://github.com/prettier/eslint-config-prettier) configurations on top.

## Install

```
$ npm install @valtech-commerce/eslint-loader
```

## Usage

Expects a `shareable-config.yaml` file in the root of your package.

```js
import loader from "@valtech-commerce/eslint-loader";

module.exports = loader(__dirname);
```

## Used configuration

- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) - Turns off all rules that are unnecessary or might conflict with Prettier.

## Related

- [Opiniated configs](https://github.com/valtech-commerce/eslint-config)

## Documentation

View [documentation](https://valtech-commerce.github.io/eslint-config/loader)

## License

[MIT](LICENSE) © [Valtech Canada inc.](https://www.valtech.ca/)

[npm-badge]: https://img.shields.io/npm/v/@valtech-commerce/eslint-loader?style=flat-square
[dependencies-badge]: https://img.shields.io/david/valtech-commerce/eslint-config?path=packages/loader&style=flat-square
[tests-badge]: https://img.shields.io/github/workflow/status/valtech-commerce/eslint-config/tests/main?label=tests&style=flat-square
[npms-badge]: https://badges.npms.io/%40valtech-commerce%2Feslint-loader.svg?style=flat-square
[license-badge]: https://img.shields.io/badge/license-MIT-green?style=flat-square
[npm-url]: https://www.npmjs.com/package/@valtech-commerce/eslint-loader
[dependencies-url]: https://david-dm.org/valtech-commerce/eslint-config?path=packages/loader
[tests-url]: https://github.com/valtech-commerce/eslint-config/actions?query=workflow%3Atests+branch%3Amain
[npms-url]: https://npms.io/search?q=%40valtech-commerce%2Feslint-loader
[license-url]: https://opensource.org/licenses/MIT
