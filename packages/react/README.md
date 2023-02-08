# @valtech-commerce/eslint-config-react

[![npm][npm-badge]][npm-url]
[![npm dependencies][dependencies-badge]][dependencies-url]
[![Tests][tests-badge]][tests-url]
[![npms][npms-badge]][npms-url]
[![License: MIT][license-badge]][license-url]

> ESLint config for React

Opinionated ESLint [shareable config](https://eslint.org/docs/developer-guide/shareable-configs.html) for React

Extends [@valtech-commerce/eslint-config-browser](https://github.com/valtech-commerce/eslint-config)

## Install

```
$ npm install @valtech-commerce/eslint-config-react
```

## Usage

Add some ESLint config to your `.eslintrc.yaml`:

```yaml
extends: "@valtech-commerce/eslint-config-react"
```

## Used parser

- [@babel/eslint-parser] - For flow

## Used plugins

- [eslint-plugin-import] - import/export syntax rules
- [eslint-plugin-jsx-a11y] - Accessibility rules on JSX elements
- [eslint-plugin-ordered-imports] - Sorting and grouping imports
- [eslint-plugin-react] - React
- [eslint-plugin-react-hooks] - Enforces rules for React Hooks

[@babel/eslint-parser]: https://github.com/babel/babel/tree/main/eslint/babel-eslint-parser
[eslint-plugin-import]: https://github.com/benmosher/eslint-plugin-import
[eslint-plugin-jsx-a11y]: https://github.com/evcohen/eslint-plugin-jsx-a11y
[eslint-plugin-ordered-imports]: https://github.com/KyleMayes/eslint-plugin-ordered-imports
[eslint-plugin-react]: https://github.com/yannickcr/eslint-plugin-react
[eslint-plugin-react-hooks]: https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks

## Used configuration

- [airbnb](https://github.com/airbnb/javascript) - Airbnb JavaScript Style Guide
- [airbnb/hooks](https://github.com/airbnb/javascript) - Airbnb JavaScript Style Guide for hooks

## Related

- [Other configs](https://github.com/valtech-commerce/eslint-config)

## Documentation

View [documentation](https://valtech-commerce.github.io/eslint-config/react)

## License

[MIT](LICENSE) © [Valtech Canada inc.](https://www.valtech.ca/)

[npm-badge]: https://img.shields.io/npm/v/@valtech-commerce/eslint-config-react?style=flat-square
[dependencies-badge]: https://img.shields.io/david/valtech-commerce/eslint-config?path=packages/react&style=flat-square
[tests-badge]: https://img.shields.io/github/workflow/status/valtech-commerce/eslint-config/tests/main?label=tests&style=flat-square
[npms-badge]: https://badges.npms.io/%40valtech-commerce%2Feslint-config-react.svg?style=flat-square
[license-badge]: https://img.shields.io/badge/license-MIT-green?style=flat-square
[npm-url]: https://www.npmjs.com/package/@valtech-commerce/eslint-config-react
[dependencies-url]: https://david-dm.org/valtech-commerce/eslint-config?path=packages/react
[tests-url]: https://github.com/valtech-commerce/eslint-config/actions?query=workflow%3Atests+branch%3Amain
[npms-url]: https://npms.io/search?q=%40valtech-commerce%2Feslint-config-react
[license-url]: https://opensource.org/licenses/MIT
