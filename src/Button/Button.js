import React from 'react'
import styled from 'react-emotion'

const BasicButton = styled('button')`
  text-align: center;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  border: 1px solid transparent
    ${props => (props.primary ? '#335075' : '#bbbfc5')};
  padding: 6px 12px;
  font-size: 16px;
  line-height: 1.4375;
  border-radius: 4px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: ${props => (props.primary ? '#335075' : '#eaebed')};
  border-color: ${props => (props.primary ? '#335075' : '#bbbfc5')};
  min-height: 36px;
  min-width: 36px;
  color: ${props => (props.primary ? '#fff' : '#335075')};
  &:hover {
    background-color: ${props => (props.primary ? '#1c578a' : '#cfd1d5')};
    border-color: ${props => (props.primary ? '#091c2d' : '#bbbfc5')};
  }
`
const Button = props => <BasicButton {...props} />

export default Button
