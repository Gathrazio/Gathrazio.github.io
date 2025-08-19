import NavColumn from './components/NavColumn'
import Body from './components/Body'
import Footer from './components/Footer'
import Titlebar from './components/Titlebar'
import { useRef } from 'react'
import './App.css'

export default function App() {
  const about = useRef(null);
  const skillsAndEducation = useRef(null);
  const projects = useRef(null);

  const scrollToPart = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    })
  }
  return (
    <div className="app-wrapper">
        <Titlebar />
        <NavColumn scrollToPart={scrollToPart} sections={{about, skillsAndEducation, projects}}/>
        <Body sections={{about, skillsAndEducation, projects}}/>
    </div>
  )
}
