import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Picture from '../client/src/components/picture';

describe('A suite', function() {
  describe("<Picture />", () => {
    it("renders an image", () => {
        const picture = shallow(<Picture />);
        expect(picture.find("img").prop("src")).toEqual();
     });
 });
});

