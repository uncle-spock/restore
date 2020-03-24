import * as constants from '../constants';

const booksLoaded = (newBooks) => {
	return {
		type: constants.BOOKS_LOADED,
		payload: newBooks,
	};
};

export {
	booksLoaded,
};
