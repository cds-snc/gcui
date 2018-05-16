import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'react-emotion'

const breakpoints = {
  xs: 481,
  small: 576,
  medSmall: 600,
  medium: 764,
  large: 992,
  xLarge: 1500,
  xxl: 3000,
}

const mediaQuery = Object.keys(breakpoints).reduce((accumulator, label) => {
  let prefix = typeof breakpoints[label] === 'string' ? '' : 'max-width:'
  let suffix = typeof breakpoints[label] === 'string' ? '' : 'px'
  accumulator[label] = cls =>
    css`
      @media screen and (${prefix + breakpoints[label] + suffix}) {
        ${cls};
      }
    `
  return accumulator
}, {})

const borderRadius = 2

const roundedEdges = css`
  -webkit-border-radius: ${borderRadius}px;
  -moz-border-radius: ${borderRadius}px;
  border-radius: ${borderRadius}px;
`

export const theme = {
  colour: {
    blue: '#335075',
    red: '#A5071B',
    green: '#00823B',
    redFIP: '#FF0000',
    grey: '#4A4A4A',
    gray: '#4A4A4A',
    greyLight: '#DBDBDB',
    grayLight: '#DBDBDB',
    greyVeryLight: '#f5f5f5',
    grayVeryLight: '#f5f5f5',
    white: '#FFFFFF',
    black: '#000000',
    focus: '#ffbf47',
    visited: '#551a8b',
    alpha: '#F90277',
  },
  font: {
    xs: '0.694rem',
    sm: '0.833rem',
    base: '1rem',
    md: '1rem',
    lg: '1.2rem',
    xl: '1.44rem',
    xxl: '1.728rem',
    xxxl: '1.602rem',
  },
  spacing: {
    xxs: '0.17rem',
    xs: '0.33rem',
    sm: '0.5rem',
    md: '1.0rem',
    base: '1.0rem',
    lg: '1.3rem',
    xl: '2rem',
    xxl: '3rem',
    xxxl: '4.5rem',
  },
}

const banner = css`
  background-color: ${theme.colour.black};
  color: ${theme.colour.white};
  padding-left: ${theme.spacing.xxxl};
  padding-right: ${theme.spacing.xxxl};
  padding-top: 12px;
  padding-bottom: ${theme.spacing.sm};
  font-size: ${theme.font.xs};

  ${mediaQuery.small(css`
    padding-left: ${theme.spacing.xl};
    padding-right: ${theme.spacing.xl};
    font-size: ${theme.font.xs};
  `)};
`

const horizontalAlign = css`
  position: relative;
  display: inline-block;
  bottom: 2px;
`

const badge = css`
  text-transform: uppercase;
  line-height: 1.8;
  color: ${theme.colour.white};
  background-color: ${theme.colour.alpha};
  padding: 2px ${theme.spacing.md};
  margin-right: ${theme.spacing.md};
  ${roundedEdges};
  ${horizontalAlign};
  ${mediaQuery.small(css`
    padding: 2px ${theme.spacing.md};
    margin-bottom: ${theme.spacing.xs};
  `)};
`

const message = css`
  ${horizontalAlign};
  font-weight: 600;

  ${mediaQuery.small(css`
    display: block;
    bottom: 0;
    font-weight: 400;
  `)};
`

export const PhaseBanner = ({ alpha = null, beta = null, children }) => (
  <div className={banner}>
    <div className={`alphaBanner--badge ${badge}`}>Alpha</div>
    <div className={`alphaBanner--message ${message}`}>{children}</div>
  </div>
)
PhaseBanner.propTypes = {
  children: PropTypes.any.isRequired,
  alpha: (props, propName, componentName) => {
    if (!props.alpha && !props.beta) {
      return new Error(
        `Either an 'alpha' or 'beta' prop needs to be specified in '${componentName}'.`
      )
    }
  },

  beta: (props, propName, componentName) => {
    if (!props.beta && !props.alpha) {
      return new Error(
        `Either an 'alpha' or 'beta' prop needs to be specified in '${componentName}'.`
      )
    }
  },
}
