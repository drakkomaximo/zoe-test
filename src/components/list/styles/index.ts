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
    padding: 0rem 1rem;

    @media (min-width: 600px) { 
    justify-content: flex-end;
    padding: 0rem;
    }
`

export const RegenerateList = styled.div`
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    color: #5C7BEB;
    font-family: Helvetica;
    text-align: center;

`

export const ContainerListWrap = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;

    @media (min-width: 600px) { 
        justify-content: flex-start;
        }

`

export const MainListContainer = styled.div`
    width: 100vw;
    padding: 0rem 2rem;
    max-width: 984px;
`