import React from 'react';
import { Outlet } from 'react-router';
import { Toaster } from 'react-hot-toast';


const RootLayout = () => {
    return (
        <div>
            <Outlet />
            <Toaster />
        </div>
    );
};

export default RootLayout;