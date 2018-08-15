import React from 'react'
import { shallow } from 'enzyme'
import EnerguideLogo from '../../EnerguideLogo'

describe('<EnerguideLogo />', () => {
  it('renders svg', () => {
    let wrapper = shallow(<EnerguideLogo />)
    expect(wrapper.is('svg')).toBeTruthy()
  })

  it('accepts a width prop', () => {
    let wrapper = shallow(<EnerguideLogo width="1000%" />)
    expect(wrapper.props().width).toEqual('1000%')
  })

  it('defaults to width of 10em', () => {
    let wrapper = shallow(<EnerguideLogo />)
    expect(wrapper.props().width).toEqual('15em')
  })

  it('allows passing through abritrary props', () => {
    let wrapper = shallow(<EnerguideLogo focusable="false" whizz="bang" />)
    expect(wrapper.props().focusable).toEqual('false')
    expect(wrapper.props().whizz).toEqual('bang')
  })
})
