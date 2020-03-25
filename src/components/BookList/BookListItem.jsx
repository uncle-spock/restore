import React from 'react';

import bookImg from '../../assets/img/book.png';

const BookListItem = ({ book }) => {
	const { title, author } = book;

	return (
		<div className="card mb-3">
			<div className="row no-gutters">
				<div className="col-md-4">
					<img src={bookImg} className="card-img" alt="book" />
				</div>

				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">{title}</h5>

						<p className="card-text"><small className="text-muted">{author}</small></p>

						<p className="card-text">$34</p>

						<button className="btn btn-info">Add to Cart</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BookListItem;
