import {FC} from 'react'
import { InconmeSpan } from '../../../common/cards/styles'
import { PeopleContainerInformation, PeopleContainerInformationText } from '../styles'

const ListInformation: FC<{value: number}> = ({value}) => {
    return (
      <PeopleContainerInformation>
      <PeopleContainerInformationText 
        fSize={'32px'}
        fWeight={700}
        colorText={'#3F3E3A'}
        textAlign={'center'}
        marginText={'1rem 0rem'}
        paddingText={'0rem 1rem'}
      >Your matches</PeopleContainerInformationText>
      <PeopleContainerInformationText 
        fSize={'20px'}
        fWeight={400}
        colorText={'#3F3E3A'}
        textAlign={'center'}
        marginText={'0rem'}
        paddingText={'0rem 2rem'}
      >Your income: <InconmeSpan>${value.toLocaleString()}</InconmeSpan></PeopleContainerInformationText>
      </PeopleContainerInformation>
    )
}

ListInformation.propTypes = {

}

export default ListInformation
