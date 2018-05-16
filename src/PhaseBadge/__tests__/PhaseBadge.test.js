import 'raf/polyfill'
import React from 'react'
import { shallow, configure } from 'enzyme'
import { PhaseBadge } from '../../PhaseBadge'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('<PhaseBadge />', () => {
  describe('when phase == "alpha"', () => {
    it('renders an alpha message', () => {
      let wrapper = shallow(<PhaseBadge phase="alpha" />)
      expect(wrapper.text()).toMatch(/ALPHA/)
    })
  })

  describe('when phase == "beta"', () => {
    it('renders an beta message', () => {
      let wrapper = shallow(<PhaseBadge phase="beta" />)
      expect(wrapper.text()).toMatch(/BETA/)
    })
  })
})
