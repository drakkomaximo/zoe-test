import { FC } from 'react'

import { Main, Spinner } from './styles'

interface MainLoadingProps {
  position?: string
}

/**
 * @param props props
 * @param props.position position
 * @returns component
 */
export const MainLoading: FC<MainLoadingProps> = ({ position }) => (
  <Main position={position}>
    <Spinner />
  </Main>
)
