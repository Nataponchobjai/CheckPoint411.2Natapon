import { createStore } from 'redux'
import reducers from './reducers'
import initialState from './state'

export default createStore(reducers, initialState)