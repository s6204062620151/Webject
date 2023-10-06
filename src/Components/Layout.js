import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

const Layout = props => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>

        </div>
    );
};


export default Layout;