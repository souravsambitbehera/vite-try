import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>Header
      <Link to="about">about</Link>
      <Link to="showdata">data</Link>

    </div>
  )
}

export default Header