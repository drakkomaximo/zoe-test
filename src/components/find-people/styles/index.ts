import styled from 'styled-components'

export const PeopleContainerInformation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 8rem;
`

export const ButtonContainerDesktop = styled.div`

@media (min-width: 600px) { 
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    }

`

export const PeopleContainerInformationText = styled.p<{
    fSize: string
    fWeight: number
    colorText: string 
    textAlign: string
    marginText: string
    paddingText: string
    cursor?: string
}>`
    font-size: ${({fSize}): string=> fSize};
    font-weight: ${({fWeight}): number=> fWeight};
    color: ${({colorText}): string=> colorText};
    font-family: Helvetica;
    text-align: ${({textAlign}): string=> textAlign};
    margin: ${({marginText}): string=> marginText};
    padding: ${({paddingText}): string=> paddingText};
    cursor: ${({cursor}): string=> cursor ? cursor : 'none'};

`

export const PeopleContainerInformationTextButton = styled.p<{
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
    display: flex;
        align-items: center;
        justify-content: center;

    @media (min-width: 600px) { 
        
        }

`

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 375px;
    padding: 0rem 2rem;

    @media (min-width: 600px) { 
        padding: 0rem 0rem;
        }
`