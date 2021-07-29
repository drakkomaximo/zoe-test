import { FC, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { CashIcon } from '../../assets/icons/cash.icon'
import { LeftArrowIcon } from '../../assets/icons/left-arrow.icon'
import MatchButton from '../../common/buttons/match.button'
import SearchInput from '../../common/inputs/search.input'
import { ListContext } from '../../context/ListContext'
import { getUser } from '../../service/user.service'
import { ListProps } from '../list'
import { ButtonContainerDesktop, SearchContainer } from './styles'
import PeopleInformation from './ui/people-information'

export const FindPeople:FC = () => {
  const history = useHistory()
  
  const { setlistSearched, valueSearched, setValueSearched } = useContext(ListContext)
  const validate = (n: number) =>{
    if(n < 99999){
      setValueSearched(n)
    }
  }
  const search = async () =>{
    if(valueSearched !== ''){
      if(!isNaN(valueSearched)){
        const response = await getUser()
        const filterIncomePositive = response.filter(
          (fIncome: ListProps) => (fIncome.income <= valueSearched + 10000) && (fIncome.income >= valueSearched - 10000)
        )
        setlistSearched(filterIncomePositive)
        history.push('/list')
      }
    }else{
      setValueSearched('')
      setlistSearched('')
    }
  }
    return (
        <>
        <PeopleInformation/>
        <div>
        <SearchContainer>
          <SearchInput
            customIcon={<CashIcon />}
            typeInput={'number'}
            maxValuesLength={5}
            onChanceValues={(e: any): void=>{
              if(e.target.value !== ''){
                validate(parseInt(e.target.value))
              }else{
                setValueSearched('')
              }
              }}
            inputValue={valueSearched}
          />
        </SearchContainer>
        <ButtonContainerDesktop>
        <MatchButton 
          action={search}
          title={'Get matches'}
          customIcon={<LeftArrowIcon/>}
          />
        </ButtonContainerDesktop>
        </div>
        </>
    )
}
