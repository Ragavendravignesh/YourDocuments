import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateReducer,
} from './reducers/userReducers'
import {
  indentAddReducer,
  indentGetAllReducer,
  indentGetByDateReducer,
  indentGetByIdReducer,
  indentUpdateReducer
} from './reducers/indentReducer'

const reducers = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdate: userUpdateReducer,
  indentAdd: indentAddReducer,
  indentGet: indentGetAllReducer,
  indentGetByDate: indentGetByDateReducer,
  indentGetById: indentGetByIdReducer,
  indentUpdate: indentUpdateReducer
});

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
