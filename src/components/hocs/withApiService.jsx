import React from 'react';
import { ApiServiceConsumer } from '../BookStoreServiceContext/BookStoreServiceContext';

const withApiService = (Wrapped) => {
	return (props) => {
		return (
			<ApiServiceConsumer>
				{apiService => <Wrapped {...props} apiService={apiService} />}
			</ApiServiceConsumer>
		);
	};
};

export default withApiService;
