import React from 'react'
import { Pagination } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import './paginate.css'

const Paginate = ({ page, pages, pageName }) => {
  return (
    pages > 1 && (
      <Pagination style={{ marginTop:'1rem' }}>
        {[...Array(pages).keys()].map((x) => (
          <LinkContainer key={x + 1} to={`${pageName}/${x + 1}`}>
            <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  )
}

export default Paginate
