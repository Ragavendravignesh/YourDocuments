import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getOrders, getMyOrder } from '../../actions/orderActions'
import { Card, Container, Row, Col } from 'react-bootstrap'
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

  return <Container style={{marginTop:'4rem'}}>
      { loading && <Loader/> }
      { error && <Message variant='danger'>{error}</Message> }
      { orders && orders.map(order => (
        <Card className='mt-2'>
          <Card.Title>{order.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{order.mobileno}</Card.Subtitle>
          <Row>
            <Col xs={5} md={3} lg={2}>
            <div className="round">
              <div className="content">{order.name.slice(0,1)}</div>
            </div>
            </Col>
            <Col>
              <h5>Amount: ₹{order.amount}</h5>
              <p>Message: {order.message}</p>
            </Col>
          </Row>
        </Card>
      ))}
  </Container>
}

export default ShowAllOrdersScreen