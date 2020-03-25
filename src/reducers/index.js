import * as constants from '../constants';

const initialState = {
	books: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case constants.BOOKS_LOADED:
			return {
				books: action.payload
			};

		default:
			return state;
	}
};

export default reducer;
