import React, { PropsWithChildren } from 'react';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';
import { NextPage } from 'next';

const PublicLayout: NextPage<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
};

export default PublicLayout;
