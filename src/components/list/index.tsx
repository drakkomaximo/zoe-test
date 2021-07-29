import { useEffect, useState, FC, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { useWindowSize } from "@react-hook/window-size/throttled";
import ShowButton from '../../common/buttons/show.button'
import UserDesktopCard from '../../common/cards/user-desktop.card'
import UserCard from '../../common/cards/user.card'
import SearchSelect from '../../common/selects/search.select'
import { ListContext } from '../../context/ListContext'
import sortList from '../../helpers/sort-list'
import { ButtonsContainer, ContainerListWrap, MainListContainer, RegenerateList } from './styles'
import ListInformation from './ui/list-information'
import { PeopleContainerInformationText } from '../find-people/styles';

export interface ListProps{
    id: number,
    name: string,
    avatar: string,
    income: number
}

export const List:FC = () => {

    const history = useHistory()
    const [width] = useWindowSize({ fps: 60 });
    const { listSearched, setValueSearched, valueSearched, count, setCount, addrtype, setAddrType, setInternalLabel } = useContext(ListContext)
    const [lists, setLists] = useState<ListProps[] | []>([])
    const [storeNames, setstoreNames] = useState<ListProps[] | []>([])

    const storeName = (data: ListProps) =>{
        const filterNmae  =  lists.filter(
            (fname: any) => fname.id !== data.id
        )
        setLists(filterNmae)
        setstoreNames([...storeNames, data])
    }

    const createList = () =>{
      if(listSearched.length > 3){
        const newlist = listSearched.slice(0, count)
        setLists(newlist)
    }else{
        setLists(listSearched)
    }
  }


    useEffect(() => {
        if(listSearched.length === 0 && valueSearched === ''){
            history.push('/')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

    useEffect(() => {
        if(addrtype !== ''){
            sortList(addrtype, lists, setLists)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [addrtype])

    useEffect(() => {
      createList()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [listSearched, count])

    return (
        <MainListContainer>
            <ListInformation value={valueSearched}/>
            {
              listSearched.length > 0 ? (
                <>
                <SearchSelect />
            <br />
            <ContainerListWrap>
            {lists.map( (listsMap, index) => {
                return (
                  width > 600 ?(
                    <UserDesktopCard 
                                        action={()=> {storeName(listsMap)}}
                                        key={listsMap.id}
                                        avatar={listsMap.avatar}
                                        name={listsMap.name}
                                        income={listsMap.income}
                                        id={listsMap.id}
                                        index={index}
                                        />
                                          ):(
                                            <UserCard 
                                        action={()=> {storeName(listsMap)}}
                                        key={`${listsMap.id}/${index}`}
                                        avatar={listsMap.avatar}
                                        name={listsMap.name}
                                        income={listsMap.income}
                                        id={listsMap.id}
                                        />
                                          )
                )
            })}
            </ContainerListWrap>
            
            {
                lists.length > 0 && (
                    <ButtonsContainer>
                    <ShowButton 
                        action={()=>{
                          setCount( count === 3 ? 3 : count - 3)
                          count !== 3 && setAddrType('Select...')
                          count !== 3 && setInternalLabel('Select...')
                        }}
                        title={'Show less -'}
                        type={'LESS'}
                    />
                    <ShowButton 
                        action={()=>{
                          setCount( count >= listSearched.length ? count : count + 3 )
                          count <= listSearched.length && setAddrType('Select...')
                          count <= listSearched.length && setInternalLabel('Select...')
                        }}
                        title={'Show more +'}
                        type={'MORE'}
                    />
                    </ButtonsContainer>
                )
            }
            {
              lists.length === 0 && (
<RegenerateList onClick={()=>{
  createList()
  setAddrType('Select...')
  setInternalLabel('Select...')
  setCount(3)
}}>
              Click to regenerate list
              </RegenerateList>
              )
            }
                </>
              ):(
                <>
                <PeopleContainerInformationText
        fSize={'20px'}
        fWeight={700}
        colorText={'var(--danger-dark)'}
        textAlign={'center'}
        marginText={'1rem 0rem 0rem'}
        paddingText={'0rem'}
        >No available Agents based on your income. Please try a different income value.</PeopleContainerInformationText>
        <PeopleContainerInformationText
        fSize={'20px'}
        fWeight={700}
        colorText={'#5C7BEB'}
        textAlign={'center'}
        marginText={'1rem 0rem 0rem'}
        paddingText={'0rem'}
        cursor={'pointer'}
        onClick={()=>{ 
          setValueSearched('')
          history.push('/')}}
        >Click here to return.</PeopleContainerInformationText>
                </>
              )
            }
            
        </MainListContainer>
    )
}
