import { AppProps } from "next/dist/next-server/lib/router/router";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { rootReducer } from "../config/store";
import { SnackbarProvider } from 'notistack';
import "../styles/index.scss";

const store = configureStore({
  reducer: rootReducer,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <SnackbarProvider>
        <Component {...pageProps} />
      </SnackbarProvider>
    </Provider>
  );
}

export default MyApp;
