import React from 'react';
import { ApiServiceProvider } from '../BookStoreServiceContext/BookStoreServiceContext';
import BookStoreService from '../../services/book-store-service';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const api = new BookStoreService();

function App() {
  return (
    <ApiServiceProvider value={api}>
      <ErrorBoundary>
        <div>hello</div>
      </ErrorBoundary>
    </ApiServiceProvider>
  );
}

export default App;
