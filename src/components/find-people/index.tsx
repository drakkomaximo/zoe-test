import { FC, useState } from 'react'
import { CashIcon } from '../../assets/icons/cash.icon'
import { LeftArrowIcon } from '../../assets/icons/left-arrow.icon'
import MatchButton from '../../common/buttons/match.button'
import SearchInput from '../../common/inputs/search.input'
import { getUser } from '../../service/user.service'
import { ListProps } from '../list'
import { SearchContainer } from './styles'
import PeopleInformation from './ui/people-information'

export const FindPeople:FC = () => {
    const [valueSearched, setValueSearched] = useState<number | ''>('')
  const [listSearched, setlistSearched] = useState<any>([])
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
      }
    }else{
      setValueSearched('')
      setlistSearched('')
    }
    setValueSearched('')
    console.log(listSearched)
  }
    return (
        <>
        <PeopleInformation/>
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
        <MatchButton 
          action={search}
          title={'Get matches'}
          customIcon={<LeftArrowIcon style={{marginLeft: '4rem', marginRight: '1rem'}} />}
          />
        </>
    )
}
