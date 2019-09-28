import React, { Component } from 'react'
import '../../header/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch } from '@fortawesome/free-solid-svg-icons'
// import CustomeButton from '../customeButton';
import {Form,Button} from 'reactstrap';
import SignupModalConsumer from '../signup';

export class HeaderContent extends Component {
    renderSearchIcon = () =>{
        return(<FontAwesomeIcon icon={faSearch} />)
    }
    render() {
        return (
            <div className="container landing">
                <Form inline className="search-form py-5">
                    <input type="text" className="searchField mt-2" placeholder="Find Affordable energy | tools"></input>
                    <Button className="searchButton">Search</Button>
                </Form>

                <h1 className="text-white font-weight-bold cta">Get connected to <br /> affordable energy <br /> systems</h1>
                <p className="hero-text text-white">We provide unlimited access to a reliable range of <br /> tested and trusted energy providers and <br /> merchants</p>
                <SignupModalConsumer outline ="outline" className="btn btn-outline-light btn-lg px-5 py-3 font-weight-bold" buttonLabel="Start Now"/>
                
            </div>
        )
    }
}

export default HeaderContent
