import React from 'react'
import { mount, shallow } from 'enzyme'
import 'jest-styled-components'
import toJSON from 'enzyme-to-json'
import GoCSignature from '../../GoCSignature'

describe('<GoCSignature />', () => {
  it('renders svg', () => {
    let wrapper = shallow(<GoCSignature />)
    expect(wrapper.is('svg')).toBeTruthy()
  })

  it('accepts a width prop', () => {
    let wrapper = shallow(<GoCSignature width="1000%" />)
    expect(wrapper.props().width).toEqual('1000%')
  })

  it('defaults to width of 10em', () => {
    let wrapper = shallow(<GoCSignature />)
    expect(wrapper.props().width).toEqual('10em')
  })

  it('allows the flag colour to be set', () => {
    let wrapper = mount(<GoCSignature flag="#fff" />)
    let flag = wrapper.find('.fipflag')
    expect(flag).toHaveStyleRule('fill', '#fff')
  })

  it('allows the text colour to be set', () => {
    let wrapper = mount(<GoCSignature text="#fff" />)
    let text = wrapper.find('.fiptext')
    expect(text).toHaveStyleRule('fill', '#fff')
  })
})
