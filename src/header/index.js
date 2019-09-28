
import React ,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import bricksWall from "../assets/bricks.jpg";
import building from "../assets/building.jpg";
import android from "../assets/android-vector-logo.png";
import googleDrive from "../assets/Google.svg";
import google from "../assets/google-logor.svg";
import walmart from "../assets/walmart-new-vector-logo.png";
import elab from "../assets/elab.svg";
import mastercard from "../assets/mastercard.png";
import paypal from "../assets/paypal-logo-preview.png";
import happy from "../assets/iconshappy.png";
import man from "../assets/man.svg"
import happy2 from "../assets/happy2.png"
import Facebook from "../assets/inkedin.png"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,Button} from 'reactstrap';
    import {Form} from 'reactstrap';

    import './header.css';

    function MainNavbar() {

  const [isOpen,setisOpen] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  }
  const toggle = () => {
    setisOpen(!isOpen)
  }
    return(
      <div className ="main-container">
         
          <header className="navbar_bg">
          <div className = "container">          
          <Navbar color="light" none expand="md" className=" navbar py-4">
                <NavbarBrand href="/" className = "logo" onClick={scrollToTop}>COMMUNGRID</NavbarBrand>
                <Button outline color="primary" className="btn btn-outline-light">English
                <FontAwesomeIcon icon={faChevronUp} className = "ml-3"/>
                </Button>


                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                  <Nav className="mx-auto" navbar>
                    <NavItem>
                      <NavLink href="/components/">
                      <Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} isOpen={isOpen}>News</Link>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/components/">
                      <Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={500} onClick={toggle}>More Offers</Link>

                        </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/components/">
                      <Link activeClass="active" className="test3" to="test3" spy={true} smooth={true} duration={500} onClick={toggle}>News</Link>

                        </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/components/">
                      <Link activeClass="active" className="test4" to="test4" spy={true} smooth={true} duration={500} onClick={toggle}>Marketplace</Link>

                        </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/components/">
                      <Link activeClass="active" className="test4" to="test4" spy={true} smooth={true} duration={500} onClick={toggle}>  About Us</Link>

                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/components/">
                      <Link activeClass="active" className="test5" to="test5" spy={true} smooth={true} duration={500} onClick={toggle}>  Partner4</Link>

                        </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/components/">
                      <Link activeClass="active" className="test6" to="test6" spy={true} smooth={true} duration={500} onClick={toggle}>  Reviews</Link>

                        </NavLink>
                    </NavItem>
                   
                    <NavItem>
                      <NavLink href="">
                      <Button outline color="primary" className="btn btn-outline-light login px-3">Login
               
                </Button>
                      </NavLink>
                    </NavItem>
                    
                  </Nav>
                </Collapse>
              </Navbar>
              
          </div>

          <div className="container">        
              <Form inline className = " py-5 pl-3">              
        <input type = "text"  className ="searchField mt-2" placeholder ="Find Affordable energe | tools">
        {/* <FontAwesomeIcon icon={faSearch}/> */}
        </input>
        
        <Button className="searchButton">Search</Button>
      </Form>
     
      <h1 className ="text-white font-weight-bold">Get connected to <br/> affordable energy <br/> systems</h1>
      <p className =" text-white">We provide unlimited access to a reliable range of <br/> tested and trusted energy providers and <br/> merchants</p>
      <Button outline color="primary" className="btn btn-outline-light btn-lg px-5 py-3 font-weight-bold">Start Now  </Button>
  </div>
    </header>

    <div className = "container">
     <h3 className="text-center py-5 p_header">BEST SELLER</h3>
    </div>
    <div className ="container">
      <div className ="row">
      <div class="col-xs-12 col-sm-6 col-md-4 mb-5">
      <div class="card rounded-lg p-0">
                                <div class="card-body text-center">
                                    <img class="img-fluid rounded-lg" src={bricksWall} alt="brick_walls"/>
                                    <h4 class="card-title mt-2"><span>&#8358;</span>1,500</h4>
                                    <button type="button" class="btn btn-danger rounded-lg btn-sm m-0">50% Off</button>
                                </div>
                                <div class="card-header bg-success text-center">Home Appliances</div>
                            </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4 mb-5">
      <div class="card rounded-lg p-0">
                                <div class="card-body text-center">
                                    <img class="img-fluid rounded-lg" src={bricksWall} alt="brick_walls"/>
                                    <h4 class="card-title mt-2"><span>&#8358;</span>1,500</h4>
                                    <button type="button" class="btn btn-danger rounded-lg btn-sm m-0">50% Off</button>
                                </div>
                                <div class="card-header bg-success text-center">Home Appliances</div>
                            </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4 mb-5">
      <div class="card rounded-lg p-0">
                                <div class="card-body text-center">
                                    <img class="img-fluid rounded-lg" src={bricksWall} alt="brick_walls"/>
                                    <h4 class="card-title mt-2"><span>&#8358;</span>1,500</h4>
                                    <button type="button" class="btn btn-danger rounded-lg btn-sm m-0">50% Off</button>
                                </div>
                                <div class="card-header bg-success text-center">Home Appliances</div>
                            </div>
      </div>
     

      </div>

    </div>
    <div className = "container">
     <h3 className="text-center py-5 p_header">BEST RATINGS</h3>
    </div>
    <div className ="container">
      <div className ="row">
      <div class="col-xs-12 col-sm-6 col-md-4 mb-5">
      <div class="card rounded-lg p-0">
                                <div class="card-body text-center">
                                    <img class="img-fluid rounded-lg" src={bricksWall} alt="brick_walls"/>
                                    <h4 class="card-title mt-2"><span>&#8358;</span>1,500</h4>
                                    <button type="button" class="btn btn-danger rounded-lg btn-sm m-0">50% Off</button>
                                </div>
                                <div class="card-header bg-success text-center">Home Appliances</div>
                            </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4 mb-5">
      <div class="card rounded-lg p-0">
                                <div class="card-body text-center">
                                    <img class="img-fluid rounded-lg" src={bricksWall} alt="brick_walls"/>
                                    <h4 class="card-title mt-2"><span>&#8358;</span>1,500</h4>
                                    <button type="button" class="btn btn-danger rounded-lg btn-sm m-0">50% Off</button>
                                </div>
                                <div class="card-header bg-success text-center">Home Appliances</div>
                            </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4 mb-5">
      <div class="card rounded-lg p-0">
                                <div class="card-body text-center">
                                    <img class="img-fluid rounded-lg" src={bricksWall} alt="brick_walls"/>
                                    <h4 class="card-title mt-2"><span>&#8358;</span>1,500</h4>
                                    <button type="button" class="btn btn-danger rounded-lg btn-sm m-0">50% Off</button>
                                </div>
                                <div class="card-header bg-success text-center">Home Appliances</div>
                            </div>
      </div>
     

      </div>

    </div>
    <div className = "container">
     <h3 className="text-center py-5 p_header">BEST RATINGS</h3>
    </div>
    <div className ="container">
      <div className ="row">
      <div class="col-xs-12 col-sm-6 col-md-4 mb-5 ">
      <div class="card rounded-lg p-0 img_blocks">
                                <div class="card-body text-center">
                                    <img class="img-fluid rounded-lg img_blocks" src={building} alt="brick_walls"/>
                                    <h6 className="text-left">Product Name goes here</h6>
                                    <h4 class="card-title mt-2 text-left"><span>&#8358;</span>5000</h4>
                                    <div className="d-flex flex-row justify-content-start">
                                    <h6 class="card-title text-muted text-left offAmount"><span>&#8358;</span>4,500</h6>
                                    <h6 className="pt-0 pl-3 Offpercent">10% Off</h6>
                                    </div>
                                
                                </div>
                                <div class="d-flex bd-highlight mb-3">
  <div class="p-2 bd-highlight"><span style ={{color:'green'}}>&#9733;</span>
</div>
  <div class="p-2 bd-highlight">4.5</div>
  <div class="ml-auto p-2 bd-highlight">250 Sold</div>
</div>
                                
                            </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4 mb-5 ">
      <div class="card rounded-lg p-0 img_blocks">
                                <div class="card-body text-center">
                                    <img class="img-fluid rounded-lg img_blocks" src={building} alt="brick_walls"/>
                                    <h6 className="text-left">Product Name goes here</h6>
                                    <h4 class="card-title mt-2 text-left"><span>&#8358;</span>5000</h4>
                                    <div className="d-flex flex-row justify-content-start">
                                    <h6 class="card-title text-muted text-left offAmount"><span>&#8358;</span>4,500</h6>
                                    <h6 className="pt-0 pl-3 Offpercent">10% Off</h6>
                                    </div>
                                
                                </div>
                                <div class="d-flex bd-highlight mb-3">
  <div class="p-2 bd-highlight"><span style ={{color:'green'}}>&#9733;</span>
</div>
  <div class="p-2 bd-highlight">4.5</div>
  <div class="ml-auto p-2 bd-highlight">250 Sold</div>
</div>
                                
                            </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4 mb-5 ">
      <div class="card rounded-lg p-0 img_blocks">
                                <div class="card-body text-center">
                                    <img class="img-fluid rounded-lg img_blocks" src={building} alt="brick_walls"/>
                                    <h6 className="text-left">Product Name goes here</h6>
                                    <h4 class="card-title mt-2 text-left"><span>&#8358;</span>5000</h4>
                                    <div className="d-flex flex-row justify-content-start">
                                    <h6 class="card-title text-muted text-left offAmount"><span>&#8358;</span>4,500</h6>
                                    <h6 className="pt-0 pl-3 Offpercent">10% Off</h6>
                                    </div>
                                
                                </div>
                                <div class="d-flex bd-highlight mb-3">
  <div class="p-2 bd-highlight"><span style ={{color:'green'}}>&#9733;</span>
</div>
  <div class="p-2 bd-highlight">4.5</div>
  <div class="ml-auto p-2 bd-highlight">250 Sold</div>
</div>
                                
                            </div>
      </div>
     
     

      </div>

    </div>
   
    <div className = "container">
     <h3 className="text-center py-5 p_header">BEST SELLERS</h3>
    </div>
    <div className ="container">
      <div className ="row">
      <div class="col-xs-12 col-sm-6 col-md-4 mb-5 ">
      <div class="card rounded-lg p-0 img_blocks">
                                <div class="card-body text-center">
                                    <img class="img-fluid rounded-lg img_blocks" src={building} alt="brick_walls"/>
                                    <h6 className="text-left">Product Name goes here</h6>
                                    <h4 class="card-title mt-2 text-left"><span>&#8358;</span>5000</h4>
                                    <div className="d-flex flex-row justify-content-start">
                                    <h6 class="card-title text-muted text-left offAmount"><span>&#8358;</span>4,500</h6>
                                    <h6 className="pt-0 pl-3 Offpercent">10% Off</h6>
                                    </div>
                                
                                </div>
                                <div class="d-flex bd-highlight mb-3">
  <div class="p-2 bd-highlight"><span style ={{color:'green'}}>&#9733;</span>
</div>
  <div class="p-2 bd-highlight">4.5</div>
  <div class="ml-auto p-2 bd-highlight">250 Sold</div>
</div>
                                
                            </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4 mb-5 ">
      <div class="card rounded-lg p-0 img_blocks">
                                <div class="card-body text-center">
                                    <img class="img-fluid rounded-lg img_blocks" src={building} alt="brick_walls"/>
                                    <h6 className="text-left">Product Name goes here</h6>
                                    <h4 class="card-title mt-2 text-left"><span>&#8358;</span>5000</h4>
                                    <div className="d-flex flex-row justify-content-start">
                                    <h6 class="card-title text-muted text-left offAmount"><span>&#8358;</span>4,500</h6>
                                    <h6 className="pt-0 pl-3 Offpercent">10% Off</h6>
                                    </div>
                                
                                </div>
                                <div class="d-flex bd-highlight mb-3">
  <div class="p-2 bd-highlight"><span style ={{color:'green'}}>&#9733;</span>
</div>
  <div class="p-2 bd-highlight">4.5</div>
  <div class="ml-auto p-2 bd-highlight">250 Sold</div>
</div>
                                
                            </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4 mb-5 ">
      <div class="card rounded-lg p-0 img_blocks">
                                <div class="card-body text-center">
                                    <img class="img-fluid rounded-lg img_blocks" src={building} alt="brick_walls"/>
                                    <h6 className="text-left">Product Name goes here</h6>
                                    <h4 class="card-title mt-2 text-left"><span>&#8358;</span>5000</h4>
                                    <div className="d-flex flex-row justify-content-start">
                                    <h6 class="card-title text-muted text-left offAmount"><span>&#8358;</span>4,500</h6>
                                    <h6 className="pt-0 pl-3 Offpercent">10% Off</h6>
                                    </div>
                                
                                </div>
                                <div class="d-flex bd-highlight mb-3">
  <div class="p-2 bd-highlight"><span style ={{color:'green'}}>&#9733;</span>
</div>
  <div class="p-2 bd-highlight">4.5</div>
  <div class="ml-auto p-2 bd-highlight">250 Sold</div>
</div>
                                
                            </div>
      </div>
     
     

      </div>

    </div>
    <div className= "container-fluid full_Container">

    </div>
    <div className ="container">
      <div className = "row d-flex justify-content-between align-content-center align-items-center industryPara">
        <div className = "col-lg-6 col-md-12">
          <h3 className = "py-5">Lorem Ipsum has <br/>been the industry's <br/> standard dummy</h3>
</div>
        <div className = "col-lg-6 col-md-12 py-5">
       <p className = " py-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
       </p> 
</div>

      </div>

    </div>

    <div className ="container-fluid iconsContainer">
      <div className = "row text-center icons">
        <div class="col-lg-3 col-sm-6">
          <img src= {android} alt="androidIcon" className="w-50"/>
        </div>
        <div class="col-lg-3 col-sm-6">
        <img src= {googleDrive} alt="googl_drive" className="w-50"/>
        </div>
        <div class="col-lg-3 col-sm-6">
          <img src= {google} alt="google" className="w-50 pt-5"/>
        </div>
        <div class="col-lg-3 col-sm-6">
        <img src= {walmart} alt="walmalt" className="w-50"/>
        </div>

        <div class="col-lg-3 col-sm-6">
          <img src= {elab} alt="elab" className="w-50"/>
        </div>
        <div class="col-lg-3 col-sm-6">
        <img src= {mastercard} alt="mastercard" className="w-50"/>
        </div>
        <div class="col-lg-3 col-sm-6">
        <img src= {paypal} alt="walmalt" className="w-50"/>
        </div>
        <div class="col-lg-3 col-sm-6">
        <img src= {walmart} alt="walmalt" className="w-50"/>
        </div>
        

      </div>

    </div>
   
    <div className ="container-fluid commentsContainer">
      
      
      <div className = "row text-center icons py-5">
        <div className ="col-12 comments py-5">
            <div className="card bg-light py-3 px-5">
            <div class="d-flex bd-highlight mb-3">
            <div class="p-2 bd-highlight">
    <img src={man} alt="man" className="man"/>
  </div>
  <div class="p-2 bd-highlight ">
    <p>Olajide Ajibade</p>
    <p className=" text-muted commentdate">23rd Aug,2018</p>
    
</div>
  
  <div class="ml-auto p-2 bd-highlight">
  <span  class="starComment">&#9733;</span>
  <span class="starComment">&#9733;</span>
  <span class="starComment">&#9733;</span>
  <span class="starComment">&#9733;</span>
  <span class="starComment">&#9733;</span>
  </div>
  <div class=" p-2 bd-highlight">
    <img src={happy} alt = "happy" className="happy"/>
  </div>
</div>
  <p className="text-left pt-1 mt-1">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
        </div>
        <div className ="col-12 comments py-5">
            <div className="card bg-light py-3 px-5">
            <div class="d-flex bd-highlight mb-3">
            <div class="p-2 bd-highlight">
    <img src={man} alt="man" className="man"/>
  </div>
  <div class="p-2 bd-highlight ">
    <p>Olajide Ajibade</p>
    <p className=" text-muted commentdate">23rd Aug,2018</p>
    
</div>
  
  <div class="ml-auto p-2 bd-highlight">
  <span  class="starComment">&#9733;</span>
  <span class="starComment">&#9733;</span>
  <span class="starComment">&#9733;</span>
  <span class="starComment">&#9733;</span>
  <span class="starComment2">&#9733;</span>
  </div>
  <div class=" p-2 bd-highlight">
    <img src={happy} alt = "happy" className="happy"/>
  </div>
</div>
  <p className="text-left pt-1 mt-1">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
        </div>
        <div className ="col-12 comments py-5">
            <div className="card bg-light py-3 px-5">
            <div class="d-flex bd-highlight mb-3">
            <div class="p-2 bd-highlight">
    <img src={man} alt="man" className="man"/>
  </div>
  <div class="p-2 bd-highlight ">
    <p>Olajide Ajibade</p>
    <p className=" text-muted commentdate">23rd Aug,2018</p>
    
</div>
  
  <div class="ml-auto p-2 bd-highlight">
  <span  class="starComment">&#9733;</span>
  <span class="starComment">&#9733;</span>
  <span class="starComment2">&#9733;</span>
  <span class="starComment2">&#9733;</span>
  <span class="starComment2">&#9733;</span>
  </div>
  <div class=" p-2 bd-highlight">
    <img src={happy2} alt = "happy2" className="happy"/>
  </div>
</div>
  <p className="text-left pt-1 mt-1">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
        </div>
      </div>

    </div>   
    <footer>
      <div class = "container">
        <div className="row text-center">
            <div className="col-lg-2 col-md-4 col-sm-6 py-5 text-left">
            <ul class="list-group list-group-flush ">
  <li class="list-group-item bg-transparent text-white font-weight-bold">COMMUNGRID</li>
  <li class="list-group-item bg-transparent text-white">Dapibus ac facilisis in</li>
  <li class="list-group-item bg-transparent text-white">Morbi leo risus</li>
  <li class="list-group-item bg-transparent text-white">Porta ac consectetur ac</li>
  <li class="list-group-item bg-transparent text-white">Vestibulum at eros</li>
</ul>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 py-5 text-left">
            <ul class="list-group list-group-flush ">
  <li class="list-group-item bg-transparent text-white">NEED HELPS</li>
  <li class="list-group-item bg-transparent text-white">Customer Service</li>
  <li class="list-group-item bg-transparent text-white">Marketplace</li>
  <li class="list-group-item bg-transparent text-white">More Offers</li>
  <li class="list-group-item bg-transparent text-white">About Us</li>
  <li class="list-group-item bg-transparent text-white">News</li>
</ul>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 py-5 text-left">
            <ul class="list-group list-group-flush ">
  <li class="list-group-item bg-transparent text-white">VISIT US</li>
  <li class="list-group-item bg-transparent text-white">1717 Harrison St</li>
  <li class="list-group-item bg-transparent text-white">San Francisco</li>
  <li class="list-group-item bg-transparent text-white">CA 94103, USA</li>
  <li class="list-group-item bg-transparent text-white">Vestibulum at eros</li>
</ul>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 py-5 text-left">
            <ul class="list-group list-group-flush ">
  <li class="list-group-item bg-transparent text-white">LEGAL</li>
  <li class="list-group-item bg-transparent text-white"> facilisis in</li>
  <li class="list-group-item bg-transparent text-white"> facilisis in</li>
  
</ul>
            </div>
            
            <div className="col-lg-4 col-md-4 col-sm-6 py-5 text-left">
            <ul class="list-group list-group-flush text-left">
  <li class="list-group-item bg-transparent text-white">STAY CONNECTED</li>
  <li class="list-group-item bg-transparent text-white ">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves ..."</li>
  <li class="list-group-item bg-transparent text-white">
  <div className="form-row align-items-center">
  <div className="col-auto">
      <div className="input-group mb-2">       
        <input type="text" className="form-control form-2"placeholder="Email Address"/>
        <div className="input-group-append">
          <span className="input-group-text bg-success signupbtn text-light font-weight-bold">Sign Up</span>
        </div>
      </div>
    </div>
  </div>
  </li>
  <li class="list-group-item bg-transparent text-white">
      <img src={Facebook} alt="facebook" />
  </li>
  
</ul>
            </div>

        </div>
<hr/>
<div class="d-flex bd-highlight">
  <div class="p-2 flex-grow-1 bd-highlight">
  <p className="text-light">Copyright &copy;  2019 All right reserved</p>

  </div>
 
  <div class="p-2 bd-highlight"><Button outline color="primary" className="btn btn-outline-light">English
                <FontAwesomeIcon icon={faChevronUp} className = "ml-3"/>
                </Button></div>
</div>
      </div>
      
    </footer>     
          </div>
    )
}
export default MainNavbar;
