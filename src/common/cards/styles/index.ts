import styled from 'styled-components'

export const InconmeSpan = styled.span`
    font-weight: 700 !important;
`

export const InconmeDesktopSpan = styled.span`
    font-size: 16px;
    font-weight: 700 !important;
`

export const UserCardContainer = styled.div`
    display: flex;
    background: rgb(255, 255, 255);
    box-shadow: rgb(29 35 58 / 10%) 0px 8px 16px;
    border-radius: 12px;
    width: 100vw;
    max-width: 300px;
    height: 7rem;
    margin: 0rem 0rem 1rem;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
`

export const UserDesktopCardContainer = styled.div<{marginFlag?:boolean}>`
    display: flex;
    flex-direction: column;
    background: rgb(255, 255, 255);
    box-shadow: rgb(29 35 58 / 10%) 0px 8px 16px;
    border-radius: 12px;
    width: 100vw;
    max-width: 288px;
    margin: 0rem 0rem 1rem;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    @media (min-width: 600px) { 
        margin: ${({marginFlag})=> !marginFlag ? '0rem 1.5rem 1rem 0rem' : '0rem 0rem 1rem'}
        }
`