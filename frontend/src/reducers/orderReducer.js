import {
  ORDER_ADD_REQUEST,
  ORDER_ADD_SUCCESS,
  ORDER_ADD_FAIL,
} from '../constants/orderConstants'

export const orderAddReducer = (
  state = { loading: true, success: false },
  action
) => {
  switch (action.type) {
    case ORDER_ADD_REQUEST:
      return { loading: true }
    case ORDER_ADD_SUCCESS:
      return { loading: false, success: true }
    case ORDER_ADD_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
