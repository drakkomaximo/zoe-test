import React, { useEffect, useState, FC } from 'react'
import { getUser } from '../service/user.service'

export interface ListProps{
    id: number,
    name: string,
    avatar: string,
    income: number
}

const List:FC<{listRender: any}> = ({listRender}) => {

    const [lists, setLists] = useState<ListProps[] | []>([])
    const [count, setCount] = useState<number>(3)
    const [storeNames, setstoreNames] = useState<string[] | []>([])

    const storeName = (name: string) =>{
        const filterNmae  =  lists.filter(
            (fname: any) => fname.name !== name
        )
        setLists(filterNmae)
        setstoreNames([...storeNames, name])
    }

    useEffect(() => {
        if(listRender.length > 3){
            const newlist = listRender.slice(0, count)
            console.log(newlist)
            setLists(newlist)
        }else{
            setLists(listRender)
        }
      }, [listRender, count])

    return (
        <div>
            {lists.map( (listsMap) => {
                return (
                    <p key={listsMap.id}>
                        <button onClick={()=>{storeName(listsMap.name)}}>
                        {listsMap.name}
                        </button>
                    </p>
                )
            })}
            {
                lists.length > 0 && (
                    <>
                    <button onClick={()=>{setCount( count + 3)}}>see more</button>
                    <button onClick={()=>{setCount( count - 3 < 3 ? 3 : count - 3)}}>see less</button>
                    </>
                )
            }
        </div>
    )
}

export default List
