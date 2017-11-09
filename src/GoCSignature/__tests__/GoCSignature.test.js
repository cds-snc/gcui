import React from 'react'
import { sheet, flush } from 'emotion'
import { mount, shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import GoCSignature from '../../GoCSignature'

const stringify = stylesheet =>
  stylesheet.tags.map(tag => tag.textContent || '').join('')

describe('<GoCSignature />', () => {
  afterEach(() => flush())

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

  it('the color passed to the flag prop ends up in the generated stylesheet', () => {
    let wrapper = mount(<GoCSignature flag="papayawhip" />)
    expect(stringify(sheet)).toMatch(/fill:papayawhip/)
  })

  it('the flag defaults to #F00', () => {
    let wrapper = mount(<GoCSignature />)
    let flag = wrapper.find('Styled(path)').first()
    expect(flag.props().flag).toEqual('#F00')
  })

  it('the text defaults to #000', () => {
    let wrapper = mount(<GoCSignature />)
    let text = wrapper.find('Styled(path)').last()
    expect(text.props().text).toEqual('#000')
  })

  it('the color passed to the text prop ends up in the generated stylesheet', () => {
    let wrapper = mount(<GoCSignature text="mistyrose" />)
    expect(stringify(sheet)).toMatch(/fill:mistyrose/)
  })
})
