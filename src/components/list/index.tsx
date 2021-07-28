import { useEffect, useState, FC, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import ShowButton from '../../common/buttons/show.button'
import UserCard from '../../common/cards/user.card'
import SearchSelect from '../../common/selects/search.select'
import { ListContext } from '../../context/ListContext'
import { ButtonsContainer } from './styles'
import ListInformation from './ui/list-information'

export interface ListProps{
    id: number,
    name: string,
    avatar: string,
    income: number
}

export const List:FC = () => {

    const history = useHistory()
    const { listSearched, valueSearched, count, setCount, addrtype } = useContext(ListContext)
    const [lists, setLists] = useState<ListProps[] | []>([])
    const [storeNames, setstoreNames] = useState<ListProps[] | []>([])

    const storeName = (data: ListProps) =>{
        const filterNmae  =  lists.filter(
            (fname: any) => fname.name !== data.name
        )
        setLists(filterNmae)
        setstoreNames([...storeNames, data])
    }

    const sortList = (type: string) =>{
        switch (type) {
            case 'id':
                lists.sort((a: any, b:any) => {
                    if (a.id > b.id) {
                      return 1;
                    }
                    if (a.id < b.id) {
                      return -1;
                    }
                    // a must be equal to b
                    return 0;
                  })
                break;
            case 'name':
                lists.sort((a: any, b:any) => {
                    if (a.name > b.name) {
                      return 1;
                    }
                    if (a.name < b.name) {
                      return -1;
                    }
                    // a must be equal to b
                    return 0;
                  })
                break;
            case 'high':
                lists.sort((a: any, b:any) => {
                    if (a.income > b.income) {
                      return 1;
                    }
                    if (a.income < b.income) {
                      return -1;
                    }
                    // a must be equal to b
                    return 0;
                  })
                break;
            case 'less':
                lists.sort((a: any, b:any) => {
                    if (a.income < b.income) {
                      return 1;
                    }
                    if (a.income > b.income) {
                      return -1;
                    }
                    // a must be equal to b
                    return 0;
                  })
                break;
        
            default:
                break;
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
            sortList(addrtype)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [addrtype])

    useEffect(() => {
        if(listSearched.length > 3){
            const newlist = listSearched.slice(0, count)
            console.log(newlist)
            setLists(newlist)
        }else{
            setLists(listSearched)
        }
      }, [listSearched, count])

    return (
        <div>
            <ListInformation value={valueSearched}/>
            <SearchSelect />
            <br />
            {lists.map( (listsMap) => {
                return (
                    <UserCard 
                    action={()=> {return storeName(listsMap)}}
                    key={listsMap.id}
                    avatar={listsMap.avatar}
                    name={listsMap.name}
                    income={listsMap.income}
                    id={listsMap.id}
                    
                    />
                )
            })}
            {
                lists.length > 0 && (
                    <ButtonsContainer>
                    <ShowButton 
                        action={()=>{setCount( count === 3 ? 3 : count - 3)}}
                        title={'Show less -'}
                        type={'LESS'}
                    />
                    <ShowButton 
                        action={()=>{setCount( count >= listSearched.length ? count : count + 3 )}}
                        title={'Show more +'}
                        type={'MORE'}
                    />
                    </ButtonsContainer>
                )
            }
        </div>
    )
}
