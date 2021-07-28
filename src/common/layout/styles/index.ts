import styled from 'styled-components'

export const MainHeader = styled.header`
    display: flex;
    width: 100%;
    height: 3rem;
    background-color: #FAFAFA;
    -webkit-box-shadow: 0px 2px 3px 0px rgba(50, 50, 50, 0.1);
    -moz-box-shadow:    0px 2px 3px 0px rgba(50, 50, 50, 0.1);
    box-shadow:         0px 2px 3px 0px rgba(50, 50, 50, 0.1);
`

export const SectionMain = styled.section`
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ContainerChildren = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow-y: auto;
`