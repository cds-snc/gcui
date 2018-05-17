import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'
import { PhaseBadge } from '../PhaseBadge'

const breakpoints = {
  xs: 28,
  small: 32,
}

const mediaQuery = Object.keys(breakpoints).reduce((accumulator, label) => {
  let prefix = typeof breakpoints[label] === 'string' ? '' : 'max-width:'
  let suffix = typeof breakpoints[label] === 'string' ? '' : 'em'
  accumulator[label] = cls =>
    css`
      @media screen and (${prefix + breakpoints[label] + suffix}) {
        ${cls};
      }
    `
  return accumulator
}, {})

const Banner = styled.aside`
  display: flex;
  display: -ms-flexbox;
  align-items: baseline;
  min-width: 20em;
  background-color: #000;
  color: #fff;
  padding: ${props => props.padding};
  font: 0.694rem sans-serif;
  ${mediaQuery.small(css`
    display: block;
    padding-left: 2rem;
    padding-right: 2rem;
    font-size: 0.694rem;
  `)};
`

const message = css`
  bottom: 2px;
  font-weight: 600;
  ${mediaQuery.small(css`
    display: block;
    padding: 0.2em;
    font-weight: 400;
  `)};
`

const alphaBetaCheck = (props, propName, componentName) => {
  if (!props.beta && !props.alpha) {
    return new Error(
      `You need to provided either an 'alpha' or 'beta' prop to '${componentName}'.`
    )
  }
}

export const PhaseBanner = ({
  padding = '12px 4.5rem 0.5rem 4.5rem',
  alpha = false,
  beta = false,
  children,
}) => (
  <Banner padding={padding}>
    {alpha && <PhaseBadge phase="alpha" />}
    {beta && <PhaseBadge phase="beta" />}
    <span className={message}>{children}</span>
  </Banner>
)

PhaseBanner.propTypes = {
  children: PropTypes.any.isRequired,
  alpha: alphaBetaCheck,
  beta: alphaBetaCheck,
  padding: PropTypes.string,
}
