import {FC} from 'react'
import { PeopleContainerInformationTextButton } from '../../components/find-people/styles'
import { MatchButtonStyle, MatchButtonTitleSpan } from './styles'

interface Props {
    customIcon?: JSX.Element
    title: string
    action: any
  }

const MatchButton: FC<Props> = ({action, title, customIcon}) => {
    return (
      <MatchButtonStyle onClick={action}>
        <PeopleContainerInformationTextButton
        fSize={'16px'}
        fWeight={700}
        colorText={'#FFFFFF'}
        textAlign={'right'}
        marginText={'0rem'}
        paddingText={'0rem'}
        >
          <MatchButtonTitleSpan>
        {title}
          </MatchButtonTitleSpan>
        {customIcon}
        </PeopleContainerInformationTextButton>
        </MatchButtonStyle>
    )
}

MatchButton.propTypes = {

}

export default MatchButton
