import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { Link,
  // DirectLink, 
  // Element, 
  // Events, 
  // animateScroll as scroll, 
  // scrollSpy, 
  // scroller 
} from 'react-scroll'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';
import CustomeButton from '../customeButton';
import '../../header/header.css';
import LoginModal from '../login';
function mainHeader({toggle,isOpen,scrollToTop}) {
    return (
        <div className = "bg">          
          <Navbar color="light" none="true" expand="lg" className="navbar">
                <NavbarBrand href="/" className = "logo" onClick={scrollToTop}><h4>COMMUGRID</h4></NavbarBrand>
                <CustomeButton outline="outline" className = "btn btn-outline-light btn-sm light lng-toggle" color="none" >
                   English
                    <FontAwesomeIcon icon={faChevronUp} className = "ml-3"/>
                </CustomeButton>

                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="/components/">
                      <Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} onClick={toggle}>News</Link>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/components/">
                      <Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={500}>More Offers</Link>

                        </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/components/">
                      <Link activeClass="active" className="test3" to="test3" spy={true} smooth={true} duration={500}>News</Link>

                        </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/components/">
                      <Link activeClass="active" className="test4" to="test4" spy={true} smooth={true} duration={500}>Marketplace</Link>

                        </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/components/">
                      <Link activeClass="active" className="test4" to="test4" spy={true} smooth={true} duration={500}>About Us</Link>

                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/components/">
                      <Link activeClass="active" className="test5" to="test5" spy={true} smooth={true} duration={500}>Partners</Link>

                        </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/components/">
                      <Link activeClass="active" className="test6" to="test6" spy={true} smooth={true} duration={500}>Reviews</Link>
                        </NavLink>
                    </NavItem>
                   
                    <NavItem>
                      {/* <NavLink href=""> */}
                      <LoginModal outline color="primary" centered className="btn btn-outline-light login px-3" buttonLabel="Login" />
                      {/* </NavLink> */}
                    </NavItem>
                    
                  </Nav>
                </Collapse>
              </Navbar>
              
          </div>
    )
}

export default mainHeader
