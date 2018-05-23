import React from 'react'
import { shallow } from 'enzyme'
import { PhaseBadge } from '../../PhaseBadge'

describe('<PhaseBadge />', () => {
  describe('when phase == "alpha"', () => {
    it('renders an alpha message', () => {
      let wrapper = shallow(<PhaseBadge phase="alpha" />).dive()
      expect(wrapper.text()).toMatch(/ALPHA/)
    })
  })

  describe('when phase == "beta"', () => {
    it('renders an beta message', () => {
      let wrapper = shallow(<PhaseBadge phase="beta" />).dive()
      expect(wrapper.text()).toMatch(/BETA/)
    })
  })
})
