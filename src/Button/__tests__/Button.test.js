import "raf/polyfill"
import React from "react"
import { shallow, configure } from "enzyme"
import { sheet, flush } from "emotion"
import Button from "../../Button"
import Adapter from "enzyme-adapter-react-16"

configure({ adapter: new Adapter() })

const stringify = stylesheet =>
  stylesheet.tags.map(tag => tag.textContent || "").join("")

describe("<Button />", () => {
  afterEach(() => flush())

  it("can be rendered", () => {
    let wrapper = shallow(<Button />).dive()
    expect(wrapper.is("button")).toBeTruthy()
  })

  it("has a default background color", () => {
    shallow(<Button>submit</Button>).dive()
    expect(stringify(sheet)).toMatch(/background-color:#eaebed/)
  })

  it("<Button primary /> has a different background-color", () => {
    shallow(<Button primary>submit</Button>).dive()
    expect(stringify(sheet)).toMatch(/background-color:#335075/)
  })
})
