import {FC} from 'react'
import { ContainerChildren, SectionMain } from './styles'
import Header from './ui/header'

interface Props {
    children?: any
  }

const SimpleLayout: FC<Props> = ({children}) => {
    return (
        <SectionMain>
            <Header />
            <ContainerChildren>
            {children}
            </ContainerChildren>
        </SectionMain>
    )
}

SimpleLayout.propTypes = {

}

export default SimpleLayout
