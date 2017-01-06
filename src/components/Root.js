import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import App from './App'

const Root = ({ store }) => (
  <Provider store={store}>
    {/* Router must go inside the provider in order to inherit the store */}
    <Router history={browserHistory}>
      {/* I wrap my parameter in parentheses in order to make them optional */}
      <Route path='/(:filter)' component={App} />
    </Router>
  </Provider>
)

export default Root
