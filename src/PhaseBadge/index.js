import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'
import { mediaQuery } from '../utils'

const Badge = styled.span`
  line-height: 1.8;
  color: #fff;
  border-radius: 0.125em;
  background-color: ${props =>
    props.phase === 'alpha' ? '#e8026e' : '#ff5a02'};
  padding: 0.125rem 1rem;
  ${mediaQuery.small(css`
    padding: 0.33rem 1.1rem;
  `)};
`
export const PhaseBadge = ({ phase, ...rest }) => (
  <Badge {...rest} phase={phase}>
    {phase.toUpperCase()}
  </Badge>
)

PhaseBadge.propTypes = {
  phase: PropTypes.string.isRequired,
}
