import styled from 'styled-components'

export const PeopleContainerInformation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
`

export const PeopleContainerInformationText = styled.p<{
    fSize: string
    fWeight: number
    colorText: string 
    textAlign: string
    marginText: string
    paddingText: string
}>`
    font-size: ${({fSize}): string=> fSize};
    font-weight: ${({fWeight}): number=> fWeight};
    color: ${({colorText}): string=> colorText};
    font-family: Helvetica;
    text-align: ${({textAlign}): string=> textAlign};
    margin: ${({marginText}): string=> marginText};
    padding: ${({paddingText}): string=> paddingText};
`

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 375px;
    padding: 0rem 2rem;
`

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`