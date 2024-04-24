import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem } from 'reactstrap'

const Menu = () => {
  return (
    <ListGroup  className=' fs-5'>
        <Link className='list-group-item  list-group-item-action'  to="/"  >Home</Link>
        <Link className='list-group-item  list-group-item-action'   to="/add-course">Add Invoice</Link>
        <Link className='list-group-item  list-group-item-action'  to="/view-courses">View Invoice</Link>
        <Link className='list-group-item  list-group-item-action' to="">About</Link>
        <Link  className='list-group-item  list-group-item-action'  to="">Contact</Link>
    </ListGroup>
  )
}

export default Menu