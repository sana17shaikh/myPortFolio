import React, { useEffect, useState } from 'react'
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"
import "./ScrollToTop.css"

const ScrollToTop = () => {
    const [isVisible, setIsvariable] = useState(false);
    useEffect(() => {
        toggleVisibility()
    })
    const toggleVisibility = () => {
        window.pageYOffset > 500 ? setIsvariable(true) : setIsvariable(false)
        window.addEventListener('scroll',toggleVisibility)
        return () => window.removeEventListener('scroll',toggleVisibility)
    }
  return isVisible ? (
    <div className='scroll-top'>
      <a href="#top">
        <ArrowUpwardIcon fontSize='large'/>
      </a>
    </div>
  ) : null
}

export default ScrollToTop
