import {
  ORDER_ADD_FAIL,
  ORDER_ADD_REQUEST,
  ORDER_ADD_SUCCESS,
} from '../constants/orderConstants'

import axios from 'axios'

export const addOrder = (order) => async (dispatch, getState) => {
  try {
    console.log('action', order);
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

    const { data } = await axios.post('/api/orders', order, config)

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
