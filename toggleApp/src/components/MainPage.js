import React, {useState} from 'react'
import { FaBars, FaTimes } from "react-icons/fa";

const MainPage = () => {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () =>{
        setToggle(!toggle)
      }

  return (
    <React.Fragment>
    <section className="centered w-full h-screen">
      <div className='text-9xl'>
        {
            (toggle === false)? <FaBars onClick={handleToggle}/>:
            <FaTimes onClick={handleToggle}/>
        }
        
    
      </div>
    </section>
  </React.Fragment>
  )
}

export default MainPage