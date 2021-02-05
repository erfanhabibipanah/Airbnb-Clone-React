import React from 'react';
import Header from '../../Container/Header/Header';
import Footer from '../Footer/Footer';
import "./Layout.css";
const Layout = ({children}) => {
    return (
        <div className="home">
            <Header/>
            {children}
            <Footer/>
        </div>
    )
};

export default Layout;
