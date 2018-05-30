import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'
import { PhaseBadge } from '../PhaseBadge'
import { mediaQuery } from '../utils'

const Banner = styled.aside`
  display: flex;
  display: -ms-flexbox;
  align-items: center;
  -ms-flex-align: center;
  padding: 0.75rem 4.5rem 0.75rem 4.5rem;
  min-width: 20em;
  background-color: #000;
  color: #fff;
  font: 0.694rem sans-serif;
  ${mediaQuery.small(css`
    display: block;
    padding-left: 1.44rem;
    padding-right: 1.44rem;
  `)};
`

const message = css`
  margin-left: 1rem;
  font-weight: bold;
  ${mediaQuery.small(css`
    margin-left: 0;
    display: flex;
    padding-top: 0.9em;
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
  alpha = false,
  beta = false,
  children,
  ...rest
}) => (
  <Banner {...rest}>
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
