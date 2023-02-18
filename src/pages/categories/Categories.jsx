import React, { useState } from 'react'
import './categories.scss'
import {projects} from '../../data'
import GigCard from '../../component/gigcard/GigCard'
const Categories = () => {
  const [open,setOpen] = useState(false);
  const [sort,setSort] = useState("sales");
  const reSort = (type)=>{
    setSort(type)
    setOpen(false)
  }
  return (
    <div className='categories'>
      <div className="container">
        <span className="bread">
          VIKINGS {'>'} GAPHICS & DESIGN
        </span>
        <h1>AI Artist</h1>
        <p>Explore the boundries of VIKINGS for the get Tech people</p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder='min' />
            <input type="text" placeholder='max' />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className='sortBy'>SortBy</span>
            <span className="sortType">{sort==='sales'? 'Best Selling':'Newest'}</span>
            <img src="/images/down.png" alt="pq" onClick={()=>setOpen(!open)}/>
            {open && (
               <div className="rightMenu">
                {sort ==='sales'?(
                  <span onClick={()=>reSort("createdAt")}>Newest</span>
                ):(
                  <span onClick={()=>reSort("sales")}>Oldest</span>
                )}
             </div>
            )}
          </div>
        </div>
        <div className="cards">
          {projects.map((gig)=>{
            return(
              <GigCard item={gig} key={gig.id}/>
            )
          })}
        </div>
      </div>
      
    </div>
  )
}

export default Categories