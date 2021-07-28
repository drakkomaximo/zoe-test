import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { CONFIGURE_FONT } from './helpers'

/**
 * Routes
 */

export const Anchor = styled(Link)`
  ${CONFIGURE_FONT('14px', 600)};
  color: ${({ theme }): string =>
    theme.key === 'light' ? 'var(--green-primary)' : theme.color} !important;
  text-decoration: underline !important;
`
