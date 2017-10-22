import React from 'react';
import { mount } from 'enzyme';

describe('Switch component', () => {
  let Switch;
  let Match;

  beforeEach(() => {
    Switch = require('../Switch').default;
    Match = require('../Match').default;
  });

  it('should render no items if there are no matches', () => {
    let wrapper = mount(
      <Switch match={{}} />
    );

    expect(wrapper.children().length).toBe(0);

    wrapper = mount(
      <Switch match={{ foo: 'bar' }}>
        <Match render={() => 1} />
      </Switch>
    );

    expect(wrapper.children().length).toBe(0);

    wrapper = mount(
      <Switch match={{ foo: 'bar' }}>
        <Match foo="baz" render={() => 1} />
      </Switch>
    );

    expect(wrapper.children().length).toBe(0);

    wrapper = mount(
      <Switch match={{ foo: 'bar' }}>
        <Match foo="foo" render={() => 0} />
        <Match foo="baz" render={() => 1} />
        <Match foo="foobar" render={() => 2} />
      </Switch>
    );

    expect(wrapper.children().length).toBe(0);
  });

  it('should render each match that exists', () => {
    let wrapper = mount(
      <Switch match={{ foo: 'bar' }}>
        <Match foo="bar" render={() => 0} />
      </Switch>
    );

    expect(wrapper.children().length).toBe(1);

    wrapper = mount(
      <Switch match={{ foo: 'bar' }}>
        <Match foo="bar" render={() => 0} />
        <Match foo="bar" render={() => 1} />
        <Match foo="bar" render={() => 2} />
      </Switch>
    );

    expect(wrapper.children().length).toBe(3);
  });

  it('should render the first match if `only` is true', () => {
    const wrapper = mount(
      <Switch match={{ foo: 'bar' }} only={true}>
        <Match foo="bar" render={() => <p>0</p>} />
        <Match foo="bar" render={() => <p>1</p>} />
        <Match foo="bar" render={() => <p>2</p>} />
      </Switch>
    );

    expect(wrapper.find(Match).text()).toBe('0');
    expect(wrapper.children().length).toBe(1);
  });

  it('should use the custom `isMatch` provided', () => {
    const isMatch = jest.fn(() => true);
    const match = { foo: 'bar' };
    const children = [
      {
        child: 0,
        render: () => <p>0</p>,
      },
      {
        child: 1,
        render: () => <p>1</p>,
      },
      {
        child: 2,
        render: () => <p>2</p>,
      },
    ];
    const wrapper = mount(
      <Switch match={match} isMatch={isMatch}>
        {children.map(props => (
          <Match key={props.child} {...props} />
        ))}
      </Switch>
    );

    expect(wrapper.children().length).toBe(3);
    expect(isMatch).toHaveBeenCalledTimes(3);

    children.forEach(props => {
      expect(isMatch).toHaveBeenCalledWith(
        match,
        props
      );
    });
  });

  it('should render non-Match components', () => {
    const wrapper = mount(
      <Switch match={{ foo: 'bar' }}>
        <h1 />
        <Match foo="bar" render={() => <h2 />} />
        <h3 />
        <Match foo="baz" render={() => <h4 />} />
        <h4 />
        <Match foo="bar" render={() => <h5 />} />
        <h5 />
      </Switch>
    );

    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.find('h2').length).toBe(1);
    expect(wrapper.find('h3').length).toBe(1);
    expect(wrapper.find('h4').length).toBe(1);
    expect(wrapper.find('h5').length).toBe(2);
  });
});
