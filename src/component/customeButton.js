import React from 'react'
import {Button} from 'reactstrap';
import '../header/header.css'
const CustomeButton = ({children,className,color,outline}) => {
    return (
        <div>
             <Button outline={outline} className = {className} color={color} >
                   {children}
            </Button>
        </div>
    )
}

export default CustomeButton;
