import React, { Suspense, useEffect } from "react";
import { Redirect, Route, Switch } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'
import { ToastContainer } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.min.css';

// routes config
import routes from '../routes'

const AppContent = () => {
  return (
    <CContainer lg>
      <ToastContainer />
      <Suspense fallback={<div className="text-center"><CSpinner color="primary" /></div>}>
        <Switch>
          {routes.map((route, idx) => {
            return (
              route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => (
                    <>
                      <route.component {...props} />
                    </>
                  )}
                />
              )
            )
          })}
          <Redirect from="/" to="/dashboard" />
        </Switch>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
