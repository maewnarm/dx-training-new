// import "@/styles/globals.css";
import "@/styles/main.scss";
import type { AppProps } from "next/app";
import Navbar from "@/components/navbar";
import Head from "next/head";
import { store } from "@/app/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className="app-main">
        <Head>
          <title>Welcome to Temp-app</title>
          <link href="/css/all.css" rel="stylesheet" />
        </Head>
        <Navbar />
        <div className="app-main__component">
          <Component {...pageProps} />
        </div>
      </div>
    </Provider>
  );
}

export default MyApp;
