import React, { Component } from "react";
import { connect } from "react-redux";

import "./book-list.scss";
import BookListItem from "./BookListItem";
import { addBookToCart } from "../../actions";
import { fetchBooks } from "../../thunks";
import withApiService from "../hocs/withApiService";
import { compose } from "../../utils";
import Spinner from "../Spinner/Spinner";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";

const BookList = ({ books, onAddBookToCart }) => {
  return (
    <>
      {books.map(book => {
        return (
          <div key={book.id}>
            <BookListItem
              book={book}
              onAddBookToCart={() => onAddBookToCart(book.id)}
            />
          </div>
        );
      })}
    </>
  );
};

class BookListContainer extends Component {
  componentDidMount() {
    const { apiService, onFetchBooks } = this.props;
    onFetchBooks(apiService);
  }

  render() {
    const { isBooksLoading, books, isLoadBooksError } = this.props;

    if (isLoadBooksError) {
      return <ErrorIndicator />;
    }

    if (isBooksLoading) {
      return <Spinner />;
    }

    return (
      <BookList books={books} onAddBookToCart={this.props.onAddBookToCart} />
    );
  }
}

const mapStateToProps = state => ({
  isBooksLoading: state.books.isBooksLoading,
  books: state.books.allBooks,
  isLoadBooksError: state.books.loadBooksError
});

const mapDispatchToProps = {
  onFetchBooks: fetchBooks,
  onAddBookToCart: addBookToCart
};

export default compose(
  withApiService,
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
