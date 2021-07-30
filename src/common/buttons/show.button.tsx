import {FC, useContext} from 'react'
import { PeopleContainerInformationText } from '../../components/find-people/styles'
import { ListContext } from '../../context/ListContext'
import { ShowButtonStyle } from './styles'

interface Props {
    customIcon?: JSX.Element
    title: string
    type: string
  }

const ShowButton: FC<Props> = ({title, customIcon, type}) => {
  const { count, listSearched, setCount, setAddrType, setInternalLabel } = useContext(ListContext)

  const selectAction = () =>{
    switch (type) {
      case 'MORE':
        setCount( count >= listSearched.length ? count : count + 3 )
        count <= listSearched.length && setAddrType('Select...')
        count <= listSearched.length && setInternalLabel('Select...')
        break
      case 'LESS':
        setCount( count === 3 ? 3 : count - 3)
        count !== 3 && setAddrType('Select...')
        count !== 3 && setInternalLabel('Select...')
        break
    
      default:
        break
    }
  }

  const validationsateOfColor = (type: string) => {
    switch (type) {
      case 'MORE':
        if( count >= listSearched.length){
          return false
        }else{
          return true
        }
      case 'LESS':
        if( count === 3){
          return false
        }else{
          return true
        }
    
      default:
        return false;
    }
  }

    return (
      <ShowButtonStyle onClick={selectAction}>
        <PeopleContainerInformationText
        fSize={'16px'}
        fWeight={700}
        colorText={validationsateOfColor(type) ? '#5C7BEB' : '#B4B4B4'}
        textAlign={'center'}
        marginText={'0rem'}
        paddingText={'0rem'}
        >
        {title}
        {customIcon}
        </PeopleContainerInformationText>
        </ShowButtonStyle>
    )
}

ShowButton.propTypes = {

}

export default ShowButton
