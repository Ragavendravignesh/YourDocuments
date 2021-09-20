import {
  INDENT_ADD_REQUEST,
  INDENT_ADD_SUCCESS,
  INDENT_ADD_FAIL,
  INDENT_GETALL_REQUEST,
  INDENT_GETALL_SUCCESS,
  INDENT_GETALL_FAIL,
  INDENT_GET_BY_ID_REQUEST,
  INDENT_GET_BY_ID_FAIL,
  INDENT_GET_BY_ID_SUCCESS,
  INDENT_GETALL_RESET,
  INDENT_GET_BY_DATE_REQUEST,
  INDENT_GET_BY_DATE_SUCCESS,
  INDENT_GET_BY_DATE_FAIL,
  INDENT_UPDATE_REQUEST,
  INDENT_UPDATE_SUCCESS,
  INDENT_UPDATE_FAIL,
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

export const indentGetAllReducer = (
  state = { indents: [], indentDate: [] },
  action
) => {
  switch (action.type) {
    case INDENT_GETALL_REQUEST:
      return { loading: true }
    case INDENT_GETALL_SUCCESS:
      return {
        loading: false,
        indents: action.payload.indents,
        page: action.payload.page,
        pages: action.payload.pages,
      }
    case INDENT_GETALL_RESET:
      return { loading: false, indents: [] }
    case INDENT_GETALL_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const indentGetByDateReducer = (state = { indents: [] }, action) => {
  switch (action.type) {
    case INDENT_GET_BY_DATE_REQUEST:
      return { loading: true }
    case INDENT_GET_BY_DATE_SUCCESS:
      return { loading: false, indents: action.payload, success: true }
    case INDENT_GET_BY_DATE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const indentGetByIdReducer = (
  state = { loading: true, indent: {} },
  action
) => {
  switch (action.type) {
    case INDENT_GET_BY_ID_REQUEST:
      return { loading: true }
    case INDENT_GET_BY_ID_SUCCESS:
      return { ...state, loading: false, indent: action.payload }
    case INDENT_GET_BY_ID_FAIL:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export const indentUpdateReducer = (
  state = { success: false, loading: true },
  action
) => {
  switch (action.type) {
    case INDENT_UPDATE_REQUEST:
      return { loading: true }
    case INDENT_UPDATE_SUCCESS:
      return { loading: false, success: true }
    case INDENT_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
