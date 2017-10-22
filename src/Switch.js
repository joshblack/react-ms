import React, { Children } from 'react';
import PropTypes from 'prop-types';
import Match from './Match';
import { shallowMatch } from './matchers';

export default class Switch extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    // children(props, propName, componentName) {
      // const prop = props[propName];

      // Children.forEach(props[propName], child => {
        // if (child.type !== Match) {
          // throw new Error(
            // `Invalid prop \`children\` of type \`${child.type}\` supplied ` +
              // `to \`${componentName}\`, expected each child to be a ` +
              // `\`Match\` component.`
          // );
        // }
      // });
    // },
    match: PropTypes.object.isRequired,
    isMatch: PropTypes.func,
    only: PropTypes.bool,
  }

  static defaultProps = {
    only: false,
    isMatch: shallowMatch,
  }

  render() {
    const { children, match, only, isMatch } = this.props;
    const matched = Children.toArray(children)
      .filter(child => {
        if (child.type === Match) {
          return isMatch(match, child.props)
        }
        return true;
      });

    if (only) {
      if (matched.length === 0) {
        return null;
      }
      return Children.only(matched[0]);
    }

    return matched;
  }
}
