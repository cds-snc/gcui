import React from 'react'
import { mount, shallow } from 'enzyme'
import 'jest-styled-components'
import toJSON from 'enzyme-to-json'
import DownwardChevron from '../../DownwardChevron'

describe('<DownwardChevron />', () => {
  it('can be rendered', () => {
    let wrapper = shallow(<DownwardChevron />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('accepts a width prop', () => {
    let wrapper = shallow(<DownwardChevron width="1000%" />).find('svg')
    expect(wrapper.props().width).toEqual('1000%')
  })

  it('defaults to width of 0.7em', () => {
    let wrapper = shallow(<DownwardChevron />).find('svg')
    expect(wrapper.props().width).toEqual('0.7em')
  })

  it('accepts a colour', () => {
    let wrapper = shallow(<DownwardChevron colour="#abc" />)
    let path = wrapper.find('path')
    expect(path.props().style.fill).toEqual('#abc')
  })

  it('allows the padding around the chevron to be set', () => {
    let wrapper = shallow(
      <DownwardChevron verticalPadding="10vh" horizontalPadding="4em" />,
    ).dive()
    expect(toJSON(wrapper)).toHaveStyleRule('padding', '10vh 4em')
  })

  it('the padding has default values of 0.3em', () => {
    let wrapper = shallow(<DownwardChevron />).dive()
    expect(toJSON(wrapper)).toHaveStyleRule('padding', '0.3em 0.3em')
  })
})
