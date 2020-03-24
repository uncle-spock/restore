import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { ApiServiceProvider } from '../BookStoreServiceContext/BookStoreServiceContext';
import BookStoreService from '../../services/book-store-service';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import store from '../../store/store';
import App from '../App/App';

const apiService = new BookStoreService();

function Root() {
	return (
		<Provider store={store}>
			<ErrorBoundary>
				<ApiServiceProvider value={apiService}>
					<Router>
						<App />
					</Router>
				</ApiServiceProvider>
			</ErrorBoundary>
		</Provider>
	);
}

export default Root;
