import React from "react"
import { Provider } from 'react-redux';
import Cart from "../components/Cart";
import store from "../store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <Cart />
    </Provider>
  )
}

export default MyApp
