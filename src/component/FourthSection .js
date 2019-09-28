import React from 'react'
import SectionTitle from './sectionTitle';
import BestSellerCards from './Cards/BestSellerCards';
import buildings from '../assets/building.jpg';

function FourthSection() {
    return (
        <React.Fragment>
                    <SectionTitle Sectiontitle="BEST SELLERS" />
            <div className="container">
                <div className="row">
                    <BestSellerCards src={buildings} name="Product Name Goes Here" price="5,000" amountOff="4,500" percent="10" rating="4.5" sold='250' />
                    <BestSellerCards src={buildings} name="Product Name Goes Here" price="5,000" amountOff="4,500" percent="10" rating="4.5" sold='250' />
                    <BestSellerCards src={buildings} name="Product Name Goes Here" price="5,000" amountOff="4,500" percent="10" rating="4.5" sold='250' />
                </div>
            </div>

        </React.Fragment>
    )
}

export default FourthSection
