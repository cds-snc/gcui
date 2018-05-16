import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'react-emotion'

const badge = css`
  line-height: 1.8;
  color: #fff;
  padding: 2px 1rem;
  margin-right: 1rem;
  border-radius: 2px;
  position: relative;
  display: inline-block;
  bottom: 2px;
`

const alpha = css`
  background-color: rgb(232, 2, 110);
`

const beta = css`
  background-color: #ff5a02;
`

export const PhaseBadge = ({ phase }) => (
  <div className={`${badge} ${phase === 'alpha' ? alpha : beta}`}>
    {phase.toUpperCase()}
  </div>
)

PhaseBadge.propTypes = {
  phase: PropTypes.string.isRequired,
}
