import { FC, lazy } from 'react'

import { Route, Switch, Redirect } from 'react-router-dom'
import SimpleLayout from '../common/layout/simple.layout'

/**
 * routes available without authorization
 */
const FindPeoplePage = lazy(() => import('../pages/find-people.page'))
const ListPage = lazy(() => import('../pages/list.page'))

/**
 * ProtectedRoutes
 *
 * @returns components
 */
const ProtectedRoutes: FC = () => {

  return (
    <Switch>
          <SimpleLayout>
            <Route exact path="/">
              <FindPeoplePage />
            </Route>
            <Route exact path="/list">
              <ListPage />
            </Route>
          </SimpleLayout>
            <Redirect to="/" />
          </Switch>
  )
}

export default ProtectedRoutes
