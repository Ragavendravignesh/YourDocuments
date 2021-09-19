import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getOrders, getMyOrder } from '../../actions/orderActions'
import { Container } from 'react-bootstrap'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import './showAllOrdersScreen.css'

const ShowAllOrdersScreen = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const orderGetAll = useSelector((state) => state.orderGetAll)
  const { loading, error, orders } = orderGetAll

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(getOrders())
    }
  }, [])

  return <Container style={{marginTop:'3rem'}}>
      { loading && <Loader/> }
      { error && <Message variant='danger'>{error}</Message> }
      { orders && orders.map(order => (
        <h1>{order.message}</h1>
      ))}
  </Container>
}

export default ShowAllOrdersScreen
