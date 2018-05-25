import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'

const Badge = styled.span`
  line-height: 1.8;
  color: #fff;
  border-radius: 0.2em;
  background-color: ${props =>
    props.phase === 'alpha' ? '#e8026e' : '#ff5a02'};
  padding: 0.45rem 1rem;
`
export const PhaseBadge = ({ phase, ...rest }) => (
  <Badge {...rest} phase={phase}>
    {phase.toUpperCase()}
  </Badge>
)

PhaseBadge.propTypes = {
  phase: PropTypes.string.isRequired,
}
