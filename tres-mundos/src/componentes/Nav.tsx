import './Nav.css'
import { Cross as Hamburger } from 'hamburger-react'
import { useState } from 'react'

export default function Nav() {

  const [active, setActive] = useState<boolean>(false)

  return (

    <div className='nav-bar'>
      <div className={`fondo-nav ${active ? 'open-menu' : ''}`}>
        <div className='hamburger'>
          <Hamburger size={80} toggled={active} toggle={setActive} />
        </div>
      </div>
    </div>
  )
}