import React from "react"
import { mount, shallow } from "enzyme"
import { sheet, flush } from "emotion"
import WordMark from "../../WordMark"

const stringify = stylesheet =>
  stylesheet.tags.map(tag => tag.textContent || "").join("")

describe("<WordMark />", () => {
  afterEach(() => flush())

  it("renders svg", () => {
    let wrapper = shallow(<WordMark />)
    expect(wrapper.is("svg")).toBeTruthy()
  })

  it("accepts a width prop", () => {
    let wrapper = shallow(<WordMark width="1000%" />)
    expect(wrapper.props().width).toEqual("1000%")
  })

  it("defaults to width of 10em", () => {
    let wrapper = shallow(<WordMark />)
    expect(wrapper.props().width).toEqual("10em")
  })

  it("allows the flag colour to be set", () => {
    mount(<WordMark flag="#fff" />)
    expect(stringify(sheet)).toMatch(/fill:#fff/)
  })

  it("allows the text colour to be set", () => {
    mount(<WordMark text="#ddd" />)
    expect(stringify(sheet)).toMatch(/fill:#ddd/)
  })
})
