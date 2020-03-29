import { actionsNames } from '../constants';
import { handleError } from "../helpers";
import store from '../store/store';

const booksLoadStart = () => {
	return {
		type: actionsNames.BOOKS_LOAD_START,
	};
};

const booksLoadSuccess = (newBooks) => {
	return {
		type: actionsNames.BOOKS_LOAD_SUCCESS,
		payload: newBooks,
	};
};

const booksLoadFailed = (error) => {
	return {
		type: actionsNames.BOOKS_LOAD_ERROR,
		payload: error,
	};
};

const fetchBooks = (dispatch, apiService) => async () => {
	try {
		dispatch(booksLoadStart());

		const books = await apiService.getBooks();

		dispatch(booksLoadSuccess(books));
	} catch (error) {
		dispatch(booksLoadFailed(error));
		handleError(error);
	}
};

// const updateCartItem = (book, cartItem = {}) => {
// 	const {
// 		id = book.id,
// 		title = book.title,
// 		totalCount = 0,
// 		totalPrice = 0
// 	} = cartItem;

// 	return {
// 		id,
// 		title,
// 		totalCount: totalCount + 1,
// 		totalPrice: totalPrice + book.price,
// 	};
// };

// const updateCartItems = (bookId) => {
// 	const { books: {books}, cart: {cartItems} } = store.getState();

// 	const book = books.find((book) => book.id === bookId);
// 	const cartItemIndex = cartItems.findIndex((item) => item.id === bookId);
// 	const cartItem = cartItems[cartItemIndex];

// 	let newItem = updateCartItem(book, cartItem);

// 	if (cartItemIndex === -1) {
// 		return [
// 			...cartItems,
// 			newItem
// 		];
// 	} else {
// 		return [
// 			...cartItems.slice(0, cartItemIndex),
// 			newItem,
// 			...cartItems.slice(cartItemIndex + 1)
// 		];
// 	}
// };

const updateCartItems = (bookId, quantity) => {
	const { books: { allBooks }, cart: { cartItems } } = store.getState();

	const book = allBooks.filter((book) => book.id === bookId)[0];
	const cartItem = cartItems.filter((item) => item.id === bookId)[0];

	if (cartItem) {
		const newCartItems = cartItems.map((item) => item.id === bookId ? (
			{
				...item,
				totalCount: item.totalCount + quantity,
				totalPrice: item.totalPrice + quantity * book.price,
			}
		) : item);

		return newCartItems;
	} else {
		return [
			...cartItems,
			{
				id: book.id,
				title: book.title,
				totalCount: 1,
				totalPrice: book.price,
			}
		];
	}
};

const addBookToCart = (bookId) => {
	return {
		type: actionsNames.ADD_BOOK_TO_CART,
		payload: updateCartItems(bookId, 1),
	}
};

const cartItemIncrease = addBookToCart;

const cartItemDecrease = (id) => {
	return {
		type: actionsNames.CART_ITEM_DECREASE,
		payload: updateCartItems(id, -1),
	}
};

const cartItemDelete = (id) => {
	const { cart: { cartItems } } = store.getState();
	const newCartItems = cartItems.filter((item) => item.id !== id);

	return {
		type: actionsNames.CART_ITEM_DELETE,
		payload: newCartItems,
	}
};

export {
	fetchBooks,
	cartItemIncrease,
	cartItemDecrease,
	cartItemDelete,
	addBookToCart,
};
