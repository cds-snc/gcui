import React from 'react'
import { mount, shallow } from 'enzyme'
import 'jest-styled-components'
import toJSON from 'enzyme-to-json'
import Button from '../../Button'

describe('<Button />', () => {
  it('can be rendered', () => {
    let wrapper = shallow(<Button />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  describe('<Button primary />', () => {
    it('has a different background', () => {
      let a = shallow(<Button>submit</Button>).dive()
      let b = shallow(<Button primary>submit</Button>).dive()
      expect(toJSON(a)).toHaveStyleRule('background-color', '#eaebed')
      expect(toJSON(b)).toHaveStyleRule('background-color', '#335075')
    })
  })
})
