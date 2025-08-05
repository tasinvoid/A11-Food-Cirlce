import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/shared/Navbar';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default RootLayout;