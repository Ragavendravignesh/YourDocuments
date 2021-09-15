import {
  INDENT_ADD_REQUEST,
  INDENT_ADD_SUCCESS,
  INDENT_ADD_FAIL,
  INDENT_GETALL_REQUEST,
  INDENT_GETALL_SUCCESS,
  INDENT_GETALL_FAIL,
} from '../constants/indentConstants'

export const indentAddReducer = (state = {}, action) => {
  switch (action.type) {
    case INDENT_ADD_REQUEST:
      return { loading: true }
    case INDENT_ADD_SUCCESS:
      return { loading: false, data: action.payload, success: true }
    case INDENT_ADD_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const indentGetAllReducer = (state = { indents: [] }, action) => {
  switch (action.type) {
    case INDENT_GETALL_REQUEST:
      return { loading: true }
    case INDENT_GETALL_SUCCESS:
      return { loading: false, indents: action.payload }
    case INDENT_GETALL_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
