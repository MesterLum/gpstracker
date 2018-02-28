import React from 'react'
import { Provider, connect } from 'react-redux'
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { createReactNavigationReduxMiddleware, createReduxBoundAddListener } from 'react-navigation-redux-helpers'

import configureStore from './store'

import Navigator from './src/config/routes'

const store = configureStore()

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);
const addListener = createReduxBoundAddListener("root");

const App = ({nav, dispatch}) => {

  return (
    <Navigator navigation={addNavigationHelpers({
        dispatch: dispatch,
        state: nav,
        addListener
      })} />
  )
}

const mapStateToProps = (state) => ({
  nav: state.nav
})


const AppWithNavigator = connect(mapStateToProps)(App);

export default () => {
  
  return (<Provider store={store}>
    <AppWithNavigator />
  </Provider>)
}
