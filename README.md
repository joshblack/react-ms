# `react-ms`

[![Build Status](https://travis-ci.org/joshblack/react-ms.svg?branch=master)](https://travis-ci.org/joshblack/react-ms) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

> `Switch` and `Match` components, with generic matching tools, to
> assist you in all your conditional rendering needs.

## Install

```bash
npm install react-ms --save
# Or, with yarn
yarn add react-ms
```

## Usage

The main component exported by `react-ms` is the `<Switch>` component.
`Switch` takes in a couple props, namely:

- `match` which is an object that contains a mapping of the props and their
  values that you want to match against.
- `only`: by default, `Switch` will render *every* child that matches the
  `match` criteria with the given matcher. If you don't want this behavior,
  setting the `only` prop to true will make `Switch` render only the first match.
- `isMatch` an optional prop that allows you to implement your own matching
  logic, or use one of the strategies exported in `matchers`.

We can use `Switch` in the following way:

```js
import { Switch, Match } from 'react-ms';
const App = () => (
  <Switch match={{ foo: 'bar' }}>
    <Match foo="bar">Bar</Match>
    <Match foo="baz">Baz</Match>
  </Switch>
);
```

In this example, it would only render the first `Match` with `foo="bar"`. This
matches the object given to the `match` prop for `Switch`, where the name of the
prop, `foo`, matches the value of the prop, `'bar'`.

`Switch` also can be used to render all matches of the `match` prop, or just the
first match. This is what the `only` prop is used for. For example:

```js
import { Switch, Match } from 'react-ms';

// In this case, `Switch` renders both `Bar 1` and `Bar 2`
const AllMatches = () => (
  <Switch match={{ foo: 'bar' }}>
    <Match foo="bar">Bar 1</Match>
    <Match foo="bar">Bar 2</Match>
  </Switch>
);

// In this case, `Switch` renders only `Bar 1` because of the `only` prop
const FirstMatch = () => (
  <Switch match={{ foo: 'bar' }} only>
    <Match foo="bar">Bar 1</Match>
    <Match foo="bar">Bar 2</Match>
  </Switch>
);
```

### Further Examples

- [Toggle based on state](https://codesandbox.io/embed/j312oq1ww3)
- [Toggle based on dynamic response](https://codesandbox.io/embed/ll58w8zm)

### Inspiration

- https://www.youtube.com/watch?v=MkdV2-U16tc
