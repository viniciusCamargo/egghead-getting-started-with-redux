import { createStore } from 'redux'
import throttle from 'lodash/throttle'
import todoApp from './reducers'
import { loadState, saveState } from './localStorage'

const configureStore = () => {
  const persistedState = loadState()

  // const store = createStore(todoApp)
  const store = createStore(
    todoApp,
    persistedState, // set a initial state
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
  ) // to enable redux dev tools

  /*
  * throttle ensures that my inner function won't
  * be called more often as its second parameter
  */
  store.subscribe(throttle(() => {
    saveState({
      todos: store.getState().todos
    })
  }, 5000))

  console.log(store.getState())
  store.subscribe(() => {
    console.log(store.getState())
  })

  return store
}

export default configureStore
