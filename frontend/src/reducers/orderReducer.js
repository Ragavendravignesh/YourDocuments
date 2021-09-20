import {
  ORDER_ADD_REQUEST,
  ORDER_ADD_SUCCESS,
  ORDER_ADD_FAIL,
  ORDER_GET_ALL_REQUEST,
  ORDER_GET_ALL_SUCCESS,
  ORDER_GET_ALL_FAIL,
  ORDER_GET_MINE_REQUEST,
  ORDER_GET_MINE_SUCCESS,
  ORDER_GET_MINE_FAIL,
} from '../constants/orderConstants'

export const orderAddReducer = (
  state = { loading: false, success: false },
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

export const orderGetAllReducer = (
  state = { orders: [], loading: false },
  action
) => {
  switch (action.type) {
    case ORDER_GET_ALL_REQUEST:
      return { loading: true }
    case ORDER_GET_ALL_SUCCESS:
      return {
        loading: false,
        orders: action.payload.orders,
        page: action.payload.page,
        pages: action.payload.pages,
      }
    case ORDER_GET_ALL_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const orderGetMineReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ORDER_GET_MINE_REQUEST:
      return { loading: true }
    case ORDER_GET_MINE_SUCCESS:
      return { loading: false, orders: action.payload }
    case ORDER_GET_MINE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
