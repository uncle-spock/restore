import React from "react";

import { BookListContainer } from "../BookList";
import OrderList from "../OrderList/OrderList";

const HomePage = () => {
  return (
    <>
      <BookListContainer />
      <OrderList />
    </>
  );
};

export default HomePage;
