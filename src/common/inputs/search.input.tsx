import React, {FC} from 'react'
import { PeopleContainerInformationText } from '../../components/find-people/styles'
import { ContainerInput, SimpleDivInput, StyledInput } from './styles'

interface Props {
    customIcon?: JSX.Element
    typeInput: string
    maxValuesLength: number
    onChanceValues: any
    inputValue: any
  }

const SearchInput: FC<Props> = (
    {   customIcon, 
        typeInput,
        maxValuesLength,
        onChanceValues,
        inputValue}) => {
    return (
        <SimpleDivInput>
            <PeopleContainerInformationText 
          fSize={'14px'}
          fWeight={400}
          colorText={'#5F5F5F'}
          textAlign={'left'}
          marginText={'1rem 0rem'}
          paddingText={'0rem'}
        >Current income.</PeopleContainerInformationText>
        <ContainerInput>
        {customIcon}
        <StyledInput 
          type={typeInput} 
          max={maxValuesLength} 
          onChange={onChanceValues} 
          value={inputValue}/>
        </ContainerInput>
          </SimpleDivInput>
    )
}

SearchInput.propTypes = {

}

export default SearchInput
