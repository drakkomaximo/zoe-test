import React, {FC} from 'react'
import { PeopleContainerInformationText } from '../../components/find-people/styles'
import { StyledInput } from './styles'

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
        <div style={{
            width:'100%'
          }}>
            <PeopleContainerInformationText 
          fSize={'14px'}
          fWeight={400}
          colorText={'#5F5F5F'}
          textAlign={'left'}
          marginText={'1rem 0rem'}
          paddingText={'0rem'}
        >Current income.</PeopleContainerInformationText>
        <div style={{
          display:'flex',
          border: '1px solid #DCDCDC',
          padding: '0.5rem',
          boxSizing: 'border-box',
          borderRadius: '4px',
        }}>
        {customIcon}
        <StyledInput 
          type={typeInput} 
          max={maxValuesLength} 
          onChange={onChanceValues} 
          value={inputValue}/>
        </div>
          </div>
    )
}

SearchInput.propTypes = {

}

export default SearchInput
