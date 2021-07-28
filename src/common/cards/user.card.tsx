import {FC} from 'react'
import { CustomImage } from '../../assets/images/custom.image'
import { PeopleContainerInformationText } from '../../components/find-people/styles'
import { InconmeSpan, UserCardContainer } from './styles'

interface Props {
    avatar: string
    name: string
    income: number
    id: number
    action: any
  }

const UserCard: FC<Props> = ({avatar, name, income, id, action}) => {
    return (
      <UserCardContainer 
        onClick={action}
        >
        <CustomImage 
          url={avatar}
          w={'78px'}
          h={'78px'}
          r={'50%'}
        />
        <div>
        <PeopleContainerInformationText 
        fSize={'20px'}
        fWeight={700}
        colorText={'#5F5F5F'}
        textAlign={'left'}
        marginText={'0rem 0rem 0.5rem'}
        paddingText={'0rem'}
      >{name}</PeopleContainerInformationText>
        <PeopleContainerInformationText 
        fSize={'16px'}
        fWeight={400}
        colorText={'#5F5F5F'}
        textAlign={'left'}
        marginText={'0rem 0rem 0.5rem'}
        paddingText={'0rem'}
      >ID: {id}</PeopleContainerInformationText>
        <PeopleContainerInformationText 
        fSize={'20px'}
        fWeight={400}
        colorText={'#5F5F5F'}
        textAlign={'left'}
        marginText={'0rem 0rem 0rem'}
        paddingText={'0rem'}
      >Income <InconmeSpan>${income.toLocaleString()}</InconmeSpan></PeopleContainerInformationText>
        </div>
      </UserCardContainer>
    )
}

UserCard.propTypes = {

}

export default UserCard
