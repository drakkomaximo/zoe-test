import styled from 'styled-components'

export const SimpleDiv = styled.div`
    width:100%;
    position: relative;

    @media (min-width: 600px) { 
        max-width: 230px;
        }
`

export const SimpleDivInput = styled.div`
    width:100%;
    position: relative;
`

export const StyledInput = styled.input`
    width: 90%;
    border: none;
    margin-left: 0.5rem;
    outline: none;
`

export const ContainerInput = styled.div`
    display:flex;
    border: 1px solid #DCDCDC;
    padding: 0.5rem 1rem;
    box-sizing: border-box;
    border-radius: 4px;
`

export const ContainerOptions = styled.div`
    display:flex;
    flex-direction: column;
    border: 1px solid #DCDCDC;
    background: #FFFFFF;
    padding: 0.5rem 1rem;
    box-sizing: border-box;
    border-radius: 4px;
    position: absolute;
    width: 100%;
`