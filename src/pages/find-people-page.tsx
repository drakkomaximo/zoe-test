import { FC } from 'react'

import { FindPeople } from '../components/find-people'
import { PagesProps } from '../models/props-pages.interface'

/**
 *
 * @param props props
 * @returns component
 */
const FindPeoplePage: FC<PagesProps> = props => <FindPeople {...props} />
export default FindPeoplePage
