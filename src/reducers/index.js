import { combineReducers } from 'redux';
import { actionsNames } from '../constants';

const booksInitialState = {
	allBooks: [],
	isBooksLoading: false,
	loadBooksError: null,
};

const cartInitialState = {
	cartItems: [],
	totalOrderPrice: 0
};

const booksReducer = (state = booksInitialState, action) => {
	switch (action.type) {
		case actionsNames.BOOKS_LOAD_START:
			return {
				...state,
				isBooksLoading: true,
			};

		case actionsNames.BOOKS_LOAD_SUCCESS:
			return {
				...state,
				allBooks: action.payload,
				isBooksLoading: false,
			};

		case actionsNames.BOOKS_LOAD_ERROR:
			return {
				...state,
				isBooksLoading: false,
				loadBooksError: action.payload,
			};

		default:
			return state;
	}
};

const cartReducer = (state = cartInitialState, action) => {
	switch (action.type) {
		case actionsNames.CART_ITEM_DECREASE:
			return {
				...state,
				cartItems: action.payload,
			};

		case actionsNames.CART_ITEM_DELETE:
			return {
				...state,
				cartItems: action.payload,
			};

		case actionsNames.ADD_BOOK_TO_CART:
			return {
				...state,
				cartItems: action.payload
			};

		default:
			return state;
	}
};

export default combineReducers({
	books: booksReducer,
	cart: cartReducer,
});
