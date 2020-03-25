import React, { Component } from 'react';
import { connect } from 'react-redux';

import './book-list.scss';
import BookListItem from './BookListItem';
import { booksLoaded } from '../../actions';
import withApiService from '../hocs/withApiService';
import { compose } from '../../utils';

class BookList extends Component {
	componentDidMount() {
		const { apiService, onBooksLoaded } = this.props;
		const books = apiService.getBooks();
		onBooksLoaded(books);
	}

	render() {
		const { books } = this.props;

		return (
			<div>
				{books.map((book) => (
					<div key={book.id}>
						<BookListItem book={book} />
					</div>
				))}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	books: state.books,
});

const mapDispatchToProps = {
	onBooksLoaded: booksLoaded,
};

export default compose(
	withApiService,
	connect(mapStateToProps, mapDispatchToProps)
)(BookList);
