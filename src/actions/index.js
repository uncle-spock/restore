import { actionsNames } from '../constants';
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
	cartItemIncrease,
	cartItemDecrease,
	cartItemDelete,
	addBookToCart,
	booksLoadStart,
	booksLoadSuccess,
	booksLoadFailed,
};
