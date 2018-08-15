import React from 'react'
import styled from 'react-emotion'
import PropTypes from 'prop-types'

const Rect = styled.rect`
  fill: #000;
`

const LogoText = styled.path`
  fill: #fff;
`

const EnerguideLogo = ({ width = '15em', ...props }) => (
  <svg
    role="img"
    aria-label="Energuide"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    viewBox="0 0 176.06615 50.069547"
    width={width}
    preserveAspectRatio="xMinYMin"
    {...props}
  >
    <title>Energuide</title>
    <desc>Energuide Logo</desc>
    <g transform="translate(-8.2273903,-71.225685)">
      <Rect y="71.225685" x="8.2273903" height="50.069546" width="176.06615" />
      <LogoText d="m 111.033,110.141 c 0.004,1.245 1.033,2.253 2.279,2.251 1.248,-0.002 2.123,-1.014 2.121,-2.26 L 115.41,96.381 c 0,-0.494 -0.207,-0.634 -0.701,-0.634 l -13.354,0.024 c -1.246,0.001 -2.252,1.062 -2.252,2.31 0.002,1.246 1.016,2.208 2.26,2.206 l 5.51,-0.065 c 0.797,0.014 0.287,0.805 0.287,0.805 -1.518,2.911 -4.684,4.759 -8.465,4.94 C 92.428,106.268 87.4,101.014 87.39,94.738 87.379,88.463 92.42,83.451 98.695,83.47 c 4.729,0.015 7.791,2.05 9.779,4.921 0.449,0.649 0.297,1.352 -0.537,1.354 l -12.593,0.006 a 2.256,2.256 0 0 0 -2.253,2.26 c 0.001,1.247 1.014,2.144 2.261,2.142 l 16.485,-0.028 c 2.887,-0.043 3.033,-3.137 2.426,-4.784 -2.361,-6.386 -8.348,-11.046 -15.539,-11.034 -9.064,0.015 -16.4,7.376 -16.384,16.438 0.015,9.064 7.95,16.455 15.947,16.48 4.881,0.016 8.619,-2.029 11.729,-5.267 0.611,-0.637 0.986,-0.167 1.012,0.302 z m -91.949,-4.829 -0.025,-14.876 12.255,-0.022 0.005,3.471 -7.328,0.013 0.005,2.129 6.2,-0.011 0.006,3.471 -6.201,0.01 0.004,2.335 7.62,-0.013 0.006,3.472 z m 24.831,-6.798 -0.194,-3.389 -0.008,-4.73 4.717,-0.011 0.026,14.878 -4.614,0.009 -5.379,-8.091 0.195,3.389 0.008,4.711 -4.719,0.008 -0.026,-14.878 4.615,-0.008 z m 7.774,6.743 -0.025,-14.877 12.255,-0.021 0.005,3.471 -7.327,0.013 0.003,2.128 6.2,-0.011 0.006,3.473 -6.2,0.009 0.005,2.335 7.619,-0.012 0.006,3.471 z M 71.5,96.771 73.442,96.768 c 1.524,-0.003 2.337,-0.377 2.335,-1.41 -0.001,-1.052 -0.837,-1.546 -1.984,-1.545 l -2.297,0.004 z m 0.046,3.265 0.009,5.187 -4.928,0.009 -0.024,-14.877 7.098,-0.011 c 5.01,-0.01 6.661,1.331 6.666,4.223 0.003,1.715 -0.768,3.164 -2.519,3.642 1.586,0.574 2.547,0.946 2.552,3.941 0.003,1.942 -0.058,2.604 0.527,2.603 l 10e-4,0.455 -4.989,0.009 c -0.127,-0.33 -0.253,-1.28 -0.256,-2.604 -0.003,-1.942 -0.338,-2.582 -2.635,-2.578 z m 46.169,-9.769 4.928,-0.008 0.016,8.905 c 0.002,1.468 0.297,2.726 2.32,2.725 1.775,-0.003 2.295,-1.122 2.295,-2.732 l -0.018,-8.905 4.928,-0.01 0.014,8.411 c 0.008,4.773 -2.223,6.864 -7.211,6.872 -4.656,0.008 -7.248,-1.745 -7.256,-6.869 z m 17.262,14.849 -0.026,-14.878 4.928,-0.009 0.023,14.877 z m 7.888,-0.015 -0.025,-14.877 6.598,-0.011 c 4.842,-0.008 7.852,2.218 7.861,7.115 0.008,5.602 -3.139,7.754 -7.961,7.763 z m 4.606,-3.48 1.805,-10e-4 c 2.297,-0.005 3.547,-1.206 3.541,-4.016 -0.006,-3.1 -1.029,-3.924 -3.66,-3.921 l -1.699,0.003 z m 11.861,3.452 -0.025,-14.877 12.254,-0.021 0.005,3.471 -7.328,0.012 0.004,2.129 6.199,-0.011 0.006,3.472 -6.199,0.011 0.004,2.335 7.621,-0.014 0.006,3.472 z" />
    </g>
  </svg>
)

EnerguideLogo.propTypes = {
  width: PropTypes.string,
}

export default EnerguideLogo
