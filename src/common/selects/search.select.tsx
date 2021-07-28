import {FC, useContext} from 'react'
import { PeopleContainerInformationText } from '../../components/find-people/styles'
import { ListContext } from '../../context/ListContext'
import { ContainerInput, SimpleDiv } from '../inputs/styles'
import { StyledOption, StyledSelect } from './styles'

const SearchSelect: FC = () => {
  const { addrtype, setAddrType } = useContext(ListContext)
const handleAddrTypeChange = (e: any) =>{
    setAddrType(e.target.value);
}

const optionsSelect = [
  {
    id:0,
    title:'Name (A-Z)',
    value:'name',
  },
  {
    id:1,
    title:'ID',
    value:'id',
  },
  {
    id:2,
    title:'Income: High first',
    value:'high',
  },
  {
    id:3,
    title:'Income: Low first',
    value:'less',
  }

]

    return (
      <SimpleDiv>
            <PeopleContainerInformationText 
          fSize={'14px'}
          fWeight={400}
          colorText={'#5F5F5F'}
          textAlign={'left'}
          marginText={'1rem 0rem'}
          paddingText={'0rem'}
        >Order agents by.</PeopleContainerInformationText>
        <ContainerInput>
        <StyledSelect 
            onChange={handleAddrTypeChange} 
            value={addrtype}>
          {
            optionsSelect.map((op)=>{
              return (
                <StyledOption 
                  key={op.id}
                  value={op.value}
                >{op.title}
                </StyledOption>
              )
            })
          }
        </StyledSelect>
        </ContainerInput>
      </SimpleDiv>
    )
}

SearchSelect.propTypes = {

}

export default SearchSelect
