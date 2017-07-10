import React from 'react'
import 'jest-styled-components'
import { shallow } from 'enzyme'
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
})
