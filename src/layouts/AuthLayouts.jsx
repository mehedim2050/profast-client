import React from 'react';

import img1 from '../assets/authImage.png'
import { Outlet } from 'react-router';
import ProFastLogo from '../router/Shared/ProFastLogo/ProFastLogo';

const AuthLayouts = () => {
    return (
        <div className="p-12 bg-base-200 ">
            <ProFastLogo></ProFastLogo>
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className='flex-1'>
                  <img
                    src={img1}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
              </div>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default AuthLayouts;