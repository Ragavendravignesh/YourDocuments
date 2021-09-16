import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import './indentCard.css'

const IndentCard = ({ id, date, balance }) => {
  return (
    <LinkContainer to={`/show/indent/${id}`}>
      <Card>
        <Row className='indent-content'>
          <h4>{date}</h4>
          <p>Amount: {balance}</p>
        </Row>
      </Card>
    </LinkContainer>
  )
}

export default IndentCard
