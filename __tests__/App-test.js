/* eslint-disable no-undef */
import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from '../client/src/components/App';

describe('A suite', function() {
  it('should render without throwing an error', function() {
    expect(shallow(<App />).contains('Hello from React')).toBe(true);
  });

  xit('should be selectable by class "foo"', function() {
    expect(shallow(<App />).is('.foo')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<App />).find('.foo').length).toBe(0);
  });

  it('should render to static HTML', function() {
    expect(render(<App />).text()).toEqual('Hello from React');
  });
});