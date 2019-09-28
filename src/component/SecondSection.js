import React from 'react'
import SectionTitle from './sectionTitle';
import AppliancesCard from './Cards/AppliancesCard';
import bricksWall from "../assets/bricks.jpg";


const SecondSection =()=> {
    return (
        <React.Fragment>
        <SectionTitle Sectiontitle="BEST SELLERS" />
        <div className="container">
            <div className="row">

                <AppliancesCard
                    src={bricksWall}
                    price="2000"
                    percent="50% Off"
                    title="Home Appliances"
                />
                <AppliancesCard
                    src={bricksWall}
                    price="2000"
                    percent="50% Off"
                    title="Home Appliances"
                />
                <AppliancesCard
                    src={bricksWall}
                    price="2000"
                    percent="50% Off"
                    title="Home Appliances"
                />
            </div>
        </div>
        </React.Fragment>
           
    )
}

export default SecondSection
