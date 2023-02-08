# @valtech-commerce/eslint-config-pwastudio

[![npm][npm-badge]][npm-url]
[![npm dependencies][dependencies-badge]][dependencies-url]
[![Tests][tests-badge]][tests-url]
[![npms][npms-badge]][npms-url]
[![License: MIT][license-badge]][license-url]

> ESLint config for PWA Studio

Opinionated ESLint [shareable config](https://eslint.org/docs/developer-guide/shareable-configs.html) for [PWA Studio](https://pwastudio.io)

Extends [@valtech-commerce/eslint-config-react](https://github.com/valtech-commerce/eslint-config)

## Install

```
$ npm install @valtech-commerce/eslint-config-pwastudio
```

## Usage

Add some ESLint config to your `.eslintrc.yaml`:

```yaml
extends: "@valtech-commerce/eslint-config-pwastudio"
```

## Used plugins

- [eslint-plugin-package-json](https://github.com/zetlen/eslint-plugin-package-json) - Rules for valid, consistent, and readable package.json files

## Used configuration

- [jsx-a11y/recommended](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#usage) - Recommended rules for accessibility rules on JSX elements
- [package-json/recommended](https://github.com/zetlen/eslint-plugin-package-json#supported-rules) - Recommended rules for package.json files

## Related

- Implements [@magento/eslint-config](https://github.com/magento/magento-eslint)
- [Other configs](https://github.com/valtech-commerce/eslint-config)

## Documentation

View [documentation](https://valtech-commerce.github.io/eslint-config/pwastudio)

## License

[MIT](LICENSE) © [Valtech Canada inc.](https://www.valtech.ca/)

[npm-badge]: https://img.shields.io/npm/v/@valtech-commerce/eslint-config-pwastudio?style=flat-square
[dependencies-badge]: https://img.shields.io/david/valtech-commerce/eslint-config?path=packages/pwastudio&style=flat-square
[tests-badge]: https://img.shields.io/github/workflow/status/valtech-commerce/eslint-config/tests/main?label=tests&style=flat-square
[npms-badge]: https://badges.npms.io/%40valtech-commerce%2Feslint-config-pwastudio.svg?style=flat-square
[license-badge]: https://img.shields.io/badge/license-MIT-green?style=flat-square
[npm-url]: https://www.npmjs.com/package/@valtech-commerce/eslint-config-pwastudio
[dependencies-url]: https://david-dm.org/valtech-commerce/eslint-config?path=packages/pwastudio
[tests-url]: https://github.com/valtech-commerce/eslint-config/actions?query=workflow%3Atests+branch%3Amain
[npms-url]: https://npms.io/search?q=%40valtech-commerce%2Feslint-config-pwastudio
[license-url]: https://opensource.org/licenses/MIT
