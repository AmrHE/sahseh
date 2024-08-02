import React from 'react';
import Navbar from './Navbar';
import Footer2 from './Footer2';

const Layout = ({ children }) => {
	return (
		<div className="relative rlt:font-cairo ">
			<Navbar />
			<>{children}</>
			<Footer2 />
		</div>
	);
};

export default Layout;
