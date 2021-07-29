import {FC, useContext, useState} from 'react'
import { ShowLessIcon } from '../../assets/icons/show-less.icon'
import { ShowMoreIcon } from '../../assets/icons/show-more.icon'
import { PeopleContainerInformationText } from '../../components/find-people/styles'
import { ListContext } from '../../context/ListContext'
import { ContainerInput, ContainerOptions, SimpleDiv } from '../inputs/styles'
import { StyledOption, StyledSelect } from './styles'

const SearchSelect: FC = () => {
  const { setAddrType, internalLabel, setInternalLabel } = useContext(ListContext)
  const [openOptions, setOpenOptions] = useState(false)
const handleAddrTypeChange = (data: any) =>{
    setInternalLabel(data.title)
    setAddrType(data.value);
    setOpenOptions(false);
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
        <StyledSelect onClick={()=>{setOpenOptions(!openOptions)}}>
        <PeopleContainerInformationText 
          fSize={'14px'}
          fWeight={400}
          colorText={'#8B8B8B'}
          textAlign={'left'}
          marginText={'0rem'}
          paddingText={'0rem'}
        >{internalLabel}</PeopleContainerInformationText>
          {
            openOptions ? (
              <ShowLessIcon />
            ): (
<ShowMoreIcon />
            )
            
          }
        </StyledSelect>
        </ContainerInput>
        {
          openOptions && (
            <ContainerOptions>
        {
            optionsSelect.map((op)=>{
              return (
                <StyledOption 
                  key={op.id}
                  onClick={()=> {handleAddrTypeChange(op)}}
                >{op.title}
                </StyledOption>
              )
            })
          }
        </ContainerOptions>
          )
        }
      </SimpleDiv>
    )
}

SearchSelect.propTypes = {

}

export default SearchSelect
