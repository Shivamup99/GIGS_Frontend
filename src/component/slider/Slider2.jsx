import React from 'react'
import './slider.scss'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { projects } from '../../data';
import ProjectCard from '../projectCard/ProjectCard';
const Slider2 = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div className='slider'>
        <div className="container">
        <Carousel responsive={responsive} infinite={true}  autoPlay={true}  autoPlaySpeed={3000}>
       {projects.map((item,i)=>{
        return(
         <ProjectCard item={item} key={i}/>
        )
       })}
      </Carousel>;
        </div>
    </div>
  )
}

export default Slider2