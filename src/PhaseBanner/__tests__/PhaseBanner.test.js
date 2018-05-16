import 'raf/polyfill'
import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import { PhaseBanner } from '../../PhaseBanner'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('<PhaseBanner />', () => {
  describe('when passed the alpha prop', () => {
    it('renders an alpha message', () => {
      let wrapper = mount(<PhaseBanner alpha>under development</PhaseBanner>)
      expect(wrapper.text()).toMatch(/ALPHA/)
      expect(wrapper.text()).toMatch(/under development/)
    })
  })

  describe('when passed the beta prop', () => {
    it('renders an beta message', () => {
      let wrapper = mount(<PhaseBanner beta>under development</PhaseBanner>)
      expect(wrapper.text()).toMatch(/BETA/)
      expect(wrapper.text()).toMatch(/under development/)
    })
  })

  describe('not passed any props', () => {
    it('warns that either alpha or beta is needed', () => {
      const originalConsole = global.console
      const spy = jest.fn()
      global.console = {
        error: spy,
        log: originalConsole.log, // Jest is using this
        warn: originalConsole.warn,
      }

      shallow(<PhaseBanner>under development</PhaseBanner>)

      expect(spy).toHaveBeenCalled()
      expect(spy.mock.calls[0][0]).toMatch(/Failed prop type/)
      global.console = originalConsole
    })
  })
})
