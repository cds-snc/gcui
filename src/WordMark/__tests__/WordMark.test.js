import React from 'react'
import { mount, shallow } from 'enzyme'
import 'jest-styled-components'
import toJSON from 'enzyme-to-json'
import WordMark from '../../WordMark'

describe('<WordMark />', () => {
  it('renders svg', () => {
    let wrapper = shallow(<WordMark />)
    expect(wrapper.is('svg')).toBeTruthy()
  })

  it('accepts a width prop', () => {
    let wrapper = shallow(<WordMark width="1000%" />)
    expect(wrapper.props().width).toEqual('1000%')
  })

  it('defaults to width of 10em', () => {
    let wrapper = shallow(<WordMark />)
    expect(wrapper.props().width).toEqual('10em')
  })

  it('allows the flag colour to be set', () => {
    let wrapper = mount(<WordMark flag="#fff" />)
    let flag = wrapper.find('.fipflag')
    expect(flag).toHaveStyleRule('fill', '#fff')
  })

  it('allows the text colour to be set', () => {
    let wrapper = mount(<WordMark text="#fff" />)
    let text = wrapper.find('.fiptext')
    expect(text).toHaveStyleRule('fill', '#fff')
  })
})
