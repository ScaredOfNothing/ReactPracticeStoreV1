import { Button, Container, Nav, Navbar as NavbarBs} from "react-bootstrap"
import {NavLink} from "react-router-dom"


export function Navbar(){
    return (
    <>
    <NavbarBs className="bg-white shadow-sm mb-3">
         <Container>
            <Nav className="me-auto">
             <Nav.Link to="/" as={NavLink}>
             Home
             </Nav.Link>
             <Nav.Link to="/store" as={NavLink}>
              Store
             </Nav.Link>
             <Nav.Link to="/about" as={NavLink}>
             About
             </Nav.Link>
            </Nav>
            <Button style={{ }} 
            variant="outline-primary"
           > 
            Cart
            <div className="rounded-cricle bg-danger d-flex justify-content-center allign-items-center"
            style={{color: "white", 
            width: "1.5erm", 
            height: "1.5erm", 
            position: "absolute", 
            bottom:"0", 
            right:"0",
            //transform: "translate(25%, 25%)",
            }}>
                3
            </div>
            </Button>
         </Container>
    </NavbarBs>
    </> )
}