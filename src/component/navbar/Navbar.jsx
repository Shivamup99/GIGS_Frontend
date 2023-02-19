import React, { useEffect, useState } from 'react'
import './navbar.scss'
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [active , setActive] = useState(false);
  const [open,setOpen] = useState(false);

  const {pathname} = useLocation();

  const isActive=()=>{
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

  useEffect(()=>{
    window.addEventListener("scroll",isActive);
    return()=>{
      window.removeEventListener("scroll",isActive);
    }
  },[]);

  const currentUser={
    id:1,
    name:'Shivam',
    isSeller:true
  };

  return (
    <div className={active || pathname!=='/' ? 'navbar active':'navbar'}>
      <div className="container">
        <div className="logo">
          <Link to='/'>
          <span className="text">Multi</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Business</span>
          <span>Explore</span>
          {!currentUser.isSeller && <span>Become a Seller</span>}
          <span>English</span>
          <span>Sign In</span>
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className='user' onClick={()=>setOpen(!open)}>
              <img src='https://www.befunky.com/images/prismic/d5660d64-faac-42a9-81fd-137f392812a3_hair-color.jpg?auto=avif,webp&format=jpg&width=1920&height=1920&fit=bounds' alt='user'/>
              <span>{currentUser?.name}</span>
              { open && <div className="options">
                {currentUser && (
                  <>
                  <Link to="/myGigs">Gigs</Link>
                  <Link to="/add">Add new Gigs</Link>
                  </>
                )}
                <Link to='/orders'>Orders</Link>
                <Link to='/messages'>Messages</Link>
                <Link to='/login'>Logout</Link>
              </div>
            }
            </div>
            
          )}
        </div>
      </div>
      {(active || pathname !=='/' )&& 
      <>
       <hr/>
      <div className="menu">
       <Link to='/' className='menuLink'>Graphics & Design</Link>
       <Link to='/' className='menuLink'>Video & Animation</Link>
       <Link to='/' className='menuLink'>Writting & Translation</Link>
       <Link to='/' className='menuLink'>AI Services</Link>
       <Link to='/' className='menuLink'>Digital Marketing</Link>
       <Link to='/' className='menuLink'>Music & Audio</Link>
       <Link to='/' className='menuLink'>Programming & Tech</Link>
       <Link to='/' className='menuLink'>Business</Link>
       <Link to='/' className='menuLink'>Lifestyle</Link>
      </div>
      </>
      }
     
    </div>
  )
}

export default Navbar