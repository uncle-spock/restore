import React from 'react';

import { BookList } from '../BookList';
import OrderList from '../OrderList/OrderList';

const HomePage = () => {
	return (
		<>
			<BookList />
			<OrderList />
		</>
	);
}

export default HomePage;
