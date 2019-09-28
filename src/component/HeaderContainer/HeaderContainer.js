import React from 'react'
import TopHeader from './mainHeader';
import HeaderContent from './HeaderContent';
import '../../header/header.css';

function HeaderContainer({toggle,isOpen,scrollToTop}) {
    return (
        <header className="navbar_bg">
            <TopHeader toggle={toggle} isOpen={isOpen} scrollToTop={scrollToTop} />
            <HeaderContent />
        </header>
    )
}

export default HeaderContainer
