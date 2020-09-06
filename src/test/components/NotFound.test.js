import React from 'react'

import NotFoundPage from '../../components/NotFound'
import { shallow } from 'enzyme'

test('should render the not found page', () => { 
    const wrapper = shallow(<NotFoundPage />)
    expect(wrapper).toMatchSnapshot()
})