import React from 'react'
import './card.scss'
import { Link } from 'react-router-dom'
const Card = ({item}) => {
  return (
    <Link to='/gigs/?cat="design"'>
      <div className='card'>
        <div className="container">
         <img src={item.image} alt="ss" />
         <span className='desc'>{item.des}</span>
         <div className="title">{item.title}</div>
        </div>
    </div>
    </Link>
  )
}

export default Card