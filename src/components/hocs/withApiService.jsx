import React from 'react';
import { ApiServiceConsumer } from '../BookStoreServiceContext/BookStoreServiceContext';

const withApiService = (Wrapped) => {
	return (props) => {
		return (
			<ApiServiceConsumer>
				{api => <Wrapped {...props} api={api} />}
			</ApiServiceConsumer>
		);
	};
};

export default withApiService;
