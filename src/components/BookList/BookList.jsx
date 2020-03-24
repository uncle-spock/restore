import React, { Component } from 'react';

import './book-list.scss';
import BookListItem from './BookListItem';

class BookList extends Component {
	render() {
		const { books } = this.props;

		return (
			<ul>
				{books.map((book) => (
					<li key={book.id}>
						<BookListItem book={book} />
					</li>
				))}
			</ul>
		);
	}
}

export default BookList;
