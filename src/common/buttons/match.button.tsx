import {FC} from 'react'
import { PeopleContainerInformationText } from '../../components/find-people/styles'
import { MatchButtonStyle } from './styles'

interface Props {
    customIcon?: JSX.Element
    title: string
    action: any
  }

const MatchButton: FC<Props> = ({action, title, customIcon}) => {
    return (
      <MatchButtonStyle onClick={action}>
        <PeopleContainerInformationText
        fSize={'16px'}
        fWeight={700}
        colorText={'#FFFFFF'}
        textAlign={'right'}
        marginText={'0rem'}
        paddingText={'0rem'}
        >
        {title}
        {customIcon}
        </PeopleContainerInformationText>
        </MatchButtonStyle>
    )
}

MatchButton.propTypes = {

}

export default MatchButton
