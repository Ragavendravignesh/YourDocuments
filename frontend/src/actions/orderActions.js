import {
  ORDER_ADD_FAIL,
  ORDER_ADD_REQUEST,
  ORDER_ADD_SUCCESS,
  ORDER_GET_MINE_REQUEST,
  ORDER_GET_MINE_SUCCESS,
  ORDER_GET_MINE_FAIL,
  ORDER_GET_ALL_REQUEST,
  ORDER_GET_ALL_SUCCESS,
  ORDER_GET_ALL_FAIL,
} from '../constants/orderConstants'

import axios from 'axios'

export const addOrder = (order) => async (dispatch, getState) => {
  try {
    console.log('action', order)
    dispatch({ type: ORDER_ADD_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.post('/api/orders', order, config)

    dispatch({ type: ORDER_ADD_SUCCESS })
  } catch (error) {
    dispatch({
      type: ORDER_ADD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getOrders = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_GET_ALL_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get('/api/orders', config)

    dispatch({ type: ORDER_GET_ALL_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: ORDER_GET_ALL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getMyOrder = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_GET_MINE_REQUEST })

    const {userLogin: { userInfo }} = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    }
    const { data } = await axios.get('/api/orders/myorder', config);

    dispatch({ type: ORDER_GET_MINE_SUCCESS, payload: data });
    
  } catch (error) {
    dispatch({
      type: ORDER_GET_MINE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
