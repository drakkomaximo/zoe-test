import styled from 'styled-components'

export const MatchButtonStyle = styled.button`
    width: 83%;
    height: 3rem;
    background-color: #5C7BEB;
    border-radius: 4px;
    border: none;
    margin: 2rem;
    max-width: 375px;

    @media (min-width: 600px) { 
        width: 144px;
        margin: 2rem 0rem 0rem;
        }
`

export const ShowButtonStyle = styled.button`
    width: 100%;
    height: 3rem;
    background-color: transparent;
    border: none;
    max-width: 120px;
    cursor: pointer;


`

export const MatchButtonTitle = styled.span`
    width: 100%;
    height: 3rem;
    background-color: #5C7BEB;
    border-radius: 4px;
`

export const MatchButtonTitleSpan = styled.span`
    margin-right:4rem;
    margin-left: 5rem;

    @media (min-width: 600px) { 
        margin-right:1rem;
        margin-left: 0rem;
        }

`