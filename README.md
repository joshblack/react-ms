# `<packageName>`

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

> Generic `Switch` and `Match` helpers to assist in all of your
> conditional rendering needs.

## Install

```bash
npm install <packageName> --save
# Or, with yarn
yarn add <packageName>
```

## Usage

The main component exported by `<packageName>` is the `<Switch>` component.
`<Switch>` takes in a couple props, namely:

- `match` which is an object that contains a mapping of the props and their
  values that you want to match against.
- `only`: by default, `<Switch>` will render *every* child that matches the
  `match` criteria with the given matcher. If you don't want this behavior,
  setting the `only` prop to true will make `<Switch>` render only the first match.
- `isMatch` an optional prop that allows you to implement your own matching
  logic, or use one of the strategies exported in `matchers`.

### Toggle based on state

```js
import React from 'react';
import { Shallow, Match } from '<packageName>';

export default class PingPong extends React.Component {
  state = {
    action: 'ping',
  }

  render() {
    return (
      <Switch match={this.state} only={true}>
        <Match
          action="ping"
          render={() => (
            <button onClick={this.handleOnClick}>
              Ping
            </button>
          )}
        />
        <Match
          action="pong"
          render={() => (
            <button onClick={this.handleOnClick}>
              Pong
            </button>
          )}
        />
      </Switch>
    );
  }

  handleOnClick = () => {
    const { action } = this.state;
    this.setState({
      action: action === 'ping' ? 'pong' : 'ping',
    });
  }
}
```

- Toggle based on dynamic response
- Toggle based on props
- Rendering all matches versus rendering first match

### Inspiration

- https://www.youtube.com/watch?v=MkdV2-U16tc
