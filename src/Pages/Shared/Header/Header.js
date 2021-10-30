import React from 'react';
import { Navbar,Container,Nav,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
const Header = () => {
    const {logOut,users}=useAuth()
    return (
            <div  className="fixed-top">
                <Navbar collapseOnSelect expand="lg"   bg="light" variant="light" >
                    <Container>
                    <Navbar.Brand href="#home"><img className="img-logo" src="https://i.ibb.co/tYRCCMy/food-logo-59-E5-A73-AFD-seeklogo-com.png" alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Nav.Link  as={HashLink} to="/home#home">Home</Nav.Link>
                    <Nav.Link  as={HashLink} to="/home#services">Services</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#faq">FAQ</Nav.Link>
                    <Nav.Link as={Link} to="/adduser">Add User</Nav.Link>
                    <Nav.Link as={Link} to="/myorders">My Orders</Nav.Link>
                    <Nav.Link as={Link} to="/manageallorders">Manage All Orders</Nav.Link>
                
                    {users?.email?
                     <Button className="border-primary" variant="light" onClick={logOut}>Logout</Button>:
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                    <Navbar.Text>
                        Signed in as: <a href="#login">{users?.displayName}</a>
                    </Navbar.Text>
                    </Navbar.Collapse>
                
                    </Container>
                </Navbar>
                </div>
        
    );
};

export default Header;