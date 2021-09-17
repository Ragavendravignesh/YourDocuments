import axios from 'axios'
import {
  INDENT_ADD_REQUEST,
  INDENT_ADD_SUCCESS,
  INDENT_ADD_FAIL,
  INDENT_GETALL_REQUEST,
  INDENT_GETALL_SUCCESS,
  INDENT_GETALL_FAIL,
  INDENT_GET_BY_DATE_REQUEST,
  INDENT_GET_BY_DATE_SUCCESS,
  INDENT_GET_BY_DATE_FAIL,
  INDENT_GET_BY_ID_REQUEST,
  INDENT_GET_BY_ID_FAIL,
  INDENT_GET_BY_ID_SUCCESS,
  INDENT_UPDATE_REQUEST,
  INDENT_UPDATE_SUCCESS,
  INDENT_UPDATE_FAIL
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

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get('/api/indents/', config)

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

export const getIndentByDate =
  (date = '2021-09-15') =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: INDENT_GET_BY_DATE_REQUEST })

      const {
        userLogin: { userInfo },
      } = getState()

      const config = {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }

      const { data } = await axios.get(`/api/indents/date/${date}`, config)

      dispatch({ type: INDENT_GET_BY_DATE_SUCCESS, payload: data })
    } catch (error) {
      dispatch({
        type: INDENT_GET_BY_DATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

export const getIndentById = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: INDENT_GET_BY_ID_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/indents/${id}`, config)

    dispatch({ type: INDENT_GET_BY_ID_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: INDENT_GET_BY_ID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const updateIndent = (id, value) => async (dispatch, getState) => {
  try {
    dispatch({ type: INDENT_UPDATE_REQUEST })

    const {userLogin: {userInfo }} = getState()

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const {data} = await axios.put(`/api/indents/${id}`, value ,config);

    dispatch({ type: INDENT_UPDATE_SUCCESS })
  } catch (error) {
    dispatch({
      type: INDENT_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}
