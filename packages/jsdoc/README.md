# @valtech-commerce/eslint-config-jsdoc

[![npm][npm-badge]][npm-url]
[![npm dependencies][dependencies-badge]][dependencies-url]
[![Tests][tests-badge]][tests-url]
[![npms][npms-badge]][npms-url]
[![License: MIT][license-badge]][license-url]

> ESLint config for JSDoc

Opinionated ESLint [shareable config](https://eslint.org/docs/developer-guide/shareable-configs.html) for [JSDoc](https://jsdoc.app).

Made to be combined with a [@valtech-commerce/eslint-config-core](https://github.com/valtech-commerce/eslint-config) sourced config.

## Install

```
$ npm install @valtech-commerce/eslint-config-jsdoc
```

## Usage

Add some ESLint config to your `.eslintrc.yaml`:

```yaml
extends: "@valtech-commerce/eslint-config-jsdoc"
```

## Used plugins

- [eslint-plugin-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc) - JSDoc linting rules

## Used configuration

- [jsdoc/recommended](https://github.com/gajus/eslint-plugin-jsdoc#configuration) - Recommended rules for JSDoc

## Related

- [Other configs](https://github.com/valtech-commerce/eslint-config)

## Documentation

View [documentation](https://valtech-commerce.github.io/eslint-config/jsdoc)

## License

[MIT](LICENSE) © [Valtech Canada inc.](https://www.valtech.ca/)

[npm-badge]: https://img.shields.io/npm/v/@valtech-commerce/eslint-config-jsdoc?style=flat-square
[dependencies-badge]: https://img.shields.io/david/valtech-commerce/eslint-config?path=packages/jsdoc&style=flat-square
[tests-badge]: https://img.shields.io/github/workflow/status/valtech-commerce/eslint-config/tests/main?label=tests&style=flat-square
[npms-badge]: https://badges.npms.io/%40valtech-commerce%2Feslint-config-jsdoc.svg?style=flat-square
[license-badge]: https://img.shields.io/badge/license-MIT-green?style=flat-square
[npm-url]: https://www.npmjs.com/package/@valtech-commerce/eslint-config-jsdoc
[dependencies-url]: https://david-dm.org/valtech-commerce/eslint-config?path=packages/jsdoc
[tests-url]: https://github.com/valtech-commerce/eslint-config/actions?query=workflow%3Atests+branch%3Amain
[npms-url]: https://npms.io/search?q=%40valtech-commerce%2Feslint-config-jsdoc
[license-url]: https://opensource.org/licenses/MIT
