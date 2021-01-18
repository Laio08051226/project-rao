import React from 'react'
import { renderRoutes, matchRoutes } from 'react-router-config'
import MyBreadcrumb from '../components/main/MyBreadcrumb/MyBreadcrumb'
import routes from '../routes'

function Member(location) {
  return (
    <div>
      <h1>會員中心</h1>
      <MyBreadcrumb
        locationPath={location.pathname}
        // onMatchedRoutes={onMatchedRoutes}
      />
    </div>
  )
}

export default Member
