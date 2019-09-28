import React, { useState, 
  // useEffect 
} from 'react';
import './App.scss';

import HeaderContainer from './component/HeaderContainer/HeaderContainer';
import SecondSection from './component/SecondSection';
import ThirdSection from './component/ThirdSection';
import FourthSection from './component/FourthSection ';
import FifthSection from './component/FifthSection';
import SixthSection from './component/SixthSection';
import SeventhSection from './component/SeventhSection';
import EightSection from './component/EightSection';
import Footer from './component/Footer';


const App = () => {
  const [isOpen, setIsopen] = useState(false);

  // useEffect(() => {
  //   Loopcard();
  // });
  
  
  const toggle = () => {
    setIsopen(!isOpen)
  }
 
  return (
    <div className="main-container">
     <HeaderContainer toggle={toggle} isOpen={isOpen} />
     <SecondSection/>
     <ThirdSection/>
     <FourthSection/>
     <FifthSection/>
     <SixthSection/>
     <SeventhSection/>
     <EightSection/>
     <Footer/>
    </div>
  );
}

export default App;
