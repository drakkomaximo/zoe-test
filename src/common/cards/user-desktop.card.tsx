import {FC} from 'react'
import { CustomImage } from '../../assets/images/custom.image'
import { PeopleContainerInformationText } from '../../components/find-people/styles'
import { InconmeDesktopSpan, UserDesktopCardContainer } from './styles'

interface Props {
    avatar: string
    name: string
    income: number
    id: number
    action: any
    index: number
  }

const UserDesktopCard: FC<Props> = ({avatar, name, income, id, action, index}) => {
    return (
      <UserDesktopCardContainer 
        marginFlag={((index + 1)%3) === 0}
        onClick={action}
        >
        <CustomImage 
          url={avatar}
          w={'78px'}
          h={'78px'}
          r={'50%'}
          marginImage={'1rem 0rem 2rem'}
        />
        <div>
        <PeopleContainerInformationText 
        fSize={'20px'}
        fWeight={700}
        colorText={'#5F5F5F'}
        textAlign={'center'}
        marginText={'0rem 0rem 0.5rem'}
        paddingText={'0rem'}
      >{name}</PeopleContainerInformationText>
        <PeopleContainerInformationText 
        fSize={'16px'}
        fWeight={400}
        colorText={'#5F5F5F'}
        textAlign={'center'}
        marginText={'0rem 0rem 0.5rem'}
        paddingText={'0rem'}
      >ID: {id}</PeopleContainerInformationText>
        <div style={{
          padding: '1rem 0rem',
          backgroundColor: '#F5F5F5',
          width: '288px',
        }}>
        <PeopleContainerInformationText 
        fSize={'14px'}
        fWeight={400}
        colorText={'#5F5F5F'}
        textAlign={'center'}
        marginText={'0rem 0rem 0rem'}
        paddingText={'0rem'}
      >Income <InconmeDesktopSpan>${income.toLocaleString()}</InconmeDesktopSpan></PeopleContainerInformationText>
        </div>
        </div>
      </UserDesktopCardContainer>
    )
}

UserDesktopCard.propTypes = {

}

export default UserDesktopCard
