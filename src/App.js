import React from 'react'
import Header from "./Component/Header"
import Contact from './Component/Contact'
import About from "./Component/About"
import Project from './Component/Project'
import Skills from './Component/Skills'
import ScrollToTop from './Component/ScrollToTop'
import { useContext } from 'react'
import  {ThemeContext}  from './Context/theme';
import "./App.css"
import Footer from './Component/Footer'

const App = () => {
  const[{themeName}] = useContext(ThemeContext);
  return (
    <div id='top' className={`${themeName} app`}>
      <Header/>
      <main>
      <About/>
      <Project/>
      <Skills/>
      <Contact/>
      </main>
      <ScrollToTop/>
      <Footer/>
    </div>
  )
}

export default App