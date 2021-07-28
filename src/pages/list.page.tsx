import { FC } from 'react'

import { List } from '../components/list'
import { PagesProps } from '../models/props-pages.interface'

/**
 *
 * @param props props
 * @returns component
 */
const ListPage: FC<PagesProps> = props => <List {...props} />
export default ListPage
