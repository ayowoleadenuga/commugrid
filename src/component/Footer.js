import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    // faSearch, 
    faChevronUp } from '@fortawesome/free-solid-svg-icons'
// import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
// import bricksWall from "../assets/bricks.jpg";
// import building from "../assets/building.jpg";
// import android from "../assets/android-vector-logo.png";
// import googleDrive from "../assets/Google.svg";
// import google from "../assets/google-logor.svg";
// import walmart from "../assets/walmart-new-vector-logo.png";
// import elab from "../assets/elab.svg";
// import mastercard from "../assets/mastercard.png";
// import paypal from "../assets/paypal-logo-preview.png";
// import happy from "../assets/iconshappy.png";
// import man from "../assets/man.svg"
// import happy2 from "../assets/happy2.png"
import Facebook from "../assets/inkedin.png"
import {
    // Collapse,
    // Navbar,
    // NavbarToggler,
    // NavbarBrand,
    // Nav,
    // NavItem,
    // NavLink,
    Button} from 'reactstrap';
    // import {Form} from 'reactstrap';

export class Footer extends Component {
    render() {
        return (
            <footer>
                <div class="footer">
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
                                                <input type="text" className="form-control form-2" placeholder="Email Address" />
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
                    <hr />
                    <div class="d-flex bd-highlight">
                        <div class="p-2 flex-grow-1 bd-highlight">
                            <p className="text-light">Copyright &copy;  2019 All right reserved</p>

                        </div>

                        <div class="p-2 bd-highlight"><Button outline color="primary" className="btn btn-outline-light">English
                      <FontAwesomeIcon icon={faChevronUp} className="ml-3" />
                        </Button></div>
                    </div>
                </div>

            </footer>
        )
    }
}

export default Footer
