import styled, { keyframes } from 'styled-components'

import { FLEX_CENTER } from '../../../assets/styles/helpers'

interface MainProps {
  position?: string
}

export const Main = styled.section<MainProps>`
  background-color: var(--light);
  height: 100%;
  overflow: hidden;
  position: ${(props): string => (props.position ? props.position : `fixed`)};
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100vw;

  ${FLEX_CENTER};
`

const ROTATEPLANE_KEYFRAMES = keyframes`
  0% { 
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg) 
  } 50% { 
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg) 
  } 100% { 
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
`

export const Spinner = styled.div`
  width: 3.75rem;
  height: 3.75rem;
  background-color: var(--primary-medium);

  margin: 100px auto;
  -webkit-animation: ${ROTATEPLANE_KEYFRAMES} 1.2s infinite ease-in-out;
  animation: ${ROTATEPLANE_KEYFRAMES} 1.2s infinite ease-in-out;
`
