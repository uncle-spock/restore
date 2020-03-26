import React from 'react';

import './pages.scss';

import Header from '../Header/Header';

const PageLayout = ({ children }) => {
	return (
		<>
			<Header />

			<div className="page-content">
				<div className="container">
					{children}
				</div>
			</div>
		</>
	);
}

export default PageLayout;
