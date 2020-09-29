import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Description from '../client/src/components/description';

describe('A suite', function() {
  xit('should render without throwing an error', function() {
    expect(shallow(<App />).contains('Picture' )).toBe(true);
  });

  xit('should be selectable by class "foo"', function() {
    expect(shallow(<App />).is('.foo')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<App />).find('.foo').length).toBe(0);
  });

  xit('should render to static HTML', function() {
    expect(render(<Description />).text()).toEqual('');
  });
});