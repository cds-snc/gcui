import React from 'react'
import { mount, shallow } from 'enzyme'
import { sheet, flush } from 'emotion'
import toJSON from 'enzyme-to-json'
import Button from '../../Button'

const stringify = stylesheet =>
  stylesheet.tags.map(tag => tag.textContent || '').join('')

describe('<Button />', () => {
  afterEach(() => flush())

  it('can be rendered', () => {
    let wrapper = shallow(<Button />).dive()
    expect(wrapper.is('button')).toBeTruthy()
  })

  it('has a default background color', () => {
    let button = shallow(<Button>submit</Button>).dive()
    expect(stringify(sheet)).toMatch(/background-color:#eaebed/)
  })

  it('<Button primary /> has a different background-color', () => {
    let button = shallow(<Button primary>submit</Button>).dive()
    expect(stringify(sheet)).toMatch(/background-color:#335075/)
  })
})
