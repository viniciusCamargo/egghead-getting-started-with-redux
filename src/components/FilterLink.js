import React from 'react'
import { Link } from 'react-router'

const FilterLink = ({ filter, children }) => (
  <Link
    to={filter === 'all' ? '' : filter}
    activeStyle={{
      textDecoration: 'none'
    }}
  >
    {children}
  </Link>
)

export default FilterLink
