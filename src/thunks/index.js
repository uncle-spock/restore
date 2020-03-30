import {
	booksLoadStart,
	booksLoadSuccess,
	booksLoadFailed,
} from '../actions';
import { handleError } from "../helpers";

export const fetchBooks = (apiService) => async (dispatch) => {
	try {
		dispatch(booksLoadStart());

		const books = await apiService.getBooks();

		dispatch(booksLoadSuccess(books));
	} catch (error) {
		dispatch(booksLoadFailed(error));
		handleError(error);
	}
};