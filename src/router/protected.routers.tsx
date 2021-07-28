import { FC, lazy } from 'react'

import { Route, Switch, Redirect } from 'react-router-dom'
import SimpleLayout from '../common/layout/simple.layout'

/**
 * routes available without authorization
 */
const FindPeoplePage = lazy(() => import('../pages/find-people-page'))

/**
 * ProtectedRoutes
 *
 * @returns components
 */
const ProtectedRoutes: FC = () => {

  return (
    <Switch>
            <Route exact path="/">
              <SimpleLayout>
              <FindPeoplePage />
              </SimpleLayout>
            </Route>
            <Redirect to="/" />
          </Switch>
  )
}

export default ProtectedRoutes
