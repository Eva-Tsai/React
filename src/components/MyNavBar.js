import React from 'react'

import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const MyNavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">路由範例</Navbar.Brand>
        <Nav className="mr-auto">
          {/* exact精確匹配路由路徑 */}
          <LinkContainer to="/" exact>
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/news" exact>
            <Nav.Link>News</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/contact" exact>
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </>
  )
}

export default MyNavBar
