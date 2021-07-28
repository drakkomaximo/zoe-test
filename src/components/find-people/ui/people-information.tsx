import {FC} from 'react'
import { PeopleIcon } from '../../../assets/icons/people.icon'
import { PeopleContainerInformation, PeopleContainerInformationText } from '../styles'

const PeopleInformation: FC = () => {
    return (
      <PeopleContainerInformation>
      <PeopleIcon/>
      <PeopleContainerInformationText 
        fSize={'32px'}
        fWeight={700}
        colorText={'#3F3E3A'}
        textAlign={'center'}
        marginText={'1rem 0rem'}
        paddingText={'0rem 1rem'}
      >Find the best agent for you!</PeopleContainerInformationText>
      <PeopleContainerInformationText 
        fSize={'16px'}
        fWeight={400}
        colorText={'#3F3E3A'}
        textAlign={'center'}
        marginText={'1rem 0rem'}
        paddingText={'0rem 2rem'}
      >Fill the information below to get your matches.</PeopleContainerInformationText>
      </PeopleContainerInformation>
    )
}

PeopleInformation.propTypes = {

}

export default PeopleInformation
