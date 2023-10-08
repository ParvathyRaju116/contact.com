import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>

        {/* NavBar */}

        <Navbar className="nav">
      <Container>
        <Link to={'/'} style={{textDecoration:'none'}}><Navbar.Brand href="#home" className='text-white navText'><i class="fa-solid fa-address-book"></i> contact.com</Navbar.Brand></Link>
        
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
     
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default Header