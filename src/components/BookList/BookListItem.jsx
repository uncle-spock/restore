import React from 'react';

const BookListItem = ({ book }) => {
	const { title, author, price, imgUrl } = book;

	return (
		<div className="card mb-3">
			<div className="row no-gutters">
				<div className="col-md-4">
					<div className="img-box">
						<img src={imgUrl} className="card-img" alt="book" />
					</div>
				</div>

				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">{title}</h5>

						<p className="card-text"><small className="text-muted">{author}</small></p>

						<p className="card-text">${price}</p>

						<button className="btn btn-info">Add to Cart</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BookListItem;
