import PropTypes from 'prop-types'
import styled from 'styled-components'

const Padding = styled.span`
  padding: ${props => props.vertical + ' ' + props.horizontal};
`

Padding.propTypes = {
  vertical: PropTypes.string.isRequired,
  horizontal: PropTypes.string.isRequired,
}

export default Padding
