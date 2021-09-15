import axios from 'axios'
import {
  INDENT_ADD_REQUEST,
  INDENT_ADD_SUCCESS,
  INDENT_ADD_FAIL,
  INDENT_GETALL_REQUEST,
  INDENT_GETALL_SUCCESS,
  INDENT_GETALL_FAIL,
} from '../constants/indentConstants'

export const addIndent = (indent) => async (dispatch, getState) => {
  try {
    dispatch({ type: INDENT_ADD_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post('/api/indents', indent, config)

    dispatch({ type: INDENT_ADD_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: INDENT_ADD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    })
  }
}

export const getAllIndents = () => async (dispatch, getState) => {
  try {
    dispatch({ type: INDENT_GETALL_REQUEST })

    const { userLogin: userInfo } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get('/', config)

    dispatch({ type: INDENT_GETALL_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: INDENT_GETALL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
