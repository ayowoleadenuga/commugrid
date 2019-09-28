import React from 'react'
import CommentCard from './Cards/CommentCard';
import CommentCard2 from './Cards/CommentCard2';
import CommentCard3 from './Cards/CommentCard3';
// import happy from "../assets/iconshappy.png";
// import man from "../assets/man.svg"
// import happy2 from "../assets/happy2.png";
function EightSection() {
    return (
         <div className ="container-fluid commentsContainer">
             <CommentCard/>
             <CommentCard2/>
             <CommentCard3/>
            
        </div>
    )
}

export default EightSection
