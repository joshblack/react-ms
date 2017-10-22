# `react-ms`

[![Build Status](https://travis-ci.org/joshblack/react-ms.svg?branch=master)](https://travis-ci.org/joshblack/react-ms) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

> Generic `Switch` and `Match` components, with generic matching tools, to
> assist you in all your conditional rendering needs.

## Install

```bash
npm install react-ms --save
# Or, with yarn
yarn add react-ms
```

## Usage

The main component exported by `react-ms` is the `<Switch>` component.
`<Switch>` takes in a couple props, namely:

- `match` which is an object that contains a mapping of the props and their
  values that you want to match against.
- `only`: by default, `<Switch>` will render *every* child that matches the
  `match` criteria with the given matcher. If you don't want this behavior,
  setting the `only` prop to true will make `<Switch>` render only the first match.
- `isMatch` an optional prop that allows you to implement your own matching
  logic, or use one of the strategies exported in `matchers`.

### Examples

- [Toggle based on state](https://codesandbox.io/embed/j312oq1ww3)
- [Toggle based on dynamic response](https://codesandbox.io/embed/ll58w8zm)
- Rendering all matches versus rendering first match

### Inspiration

- https://www.youtube.com/watch?v=MkdV2-U16tc
