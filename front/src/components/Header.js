/* 
  1. type rafce for boiler template
  # Place header tags 
  2. Paste react bootstrap navbar jsx inside of header tags
  3. Import Navbar, Nav, Container
  4. Delete form and dropdown
  5. Change Nav.Link href to /cart and /login
  6. Change Navbar.Brand to Pro Shop and #home to '/'
  7. Change Navbar bg="dark" variant="dark" collapseOnSelect
  8. Add Container between Navbar tags
  9. Change Nav className to ml-auto to move links to right side
  10. Add shopping cart i class to Cart link
  11. Add user i class to login link
*/
import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>ProShop</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link href='/cart'>
                <i className='fas fa-shopping-cart'></i>Cart
              </Nav.Link>
              <Nav.Link href='/login'>
                <i className='fas fa-user'></i>Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
