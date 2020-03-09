import React from "react";
import "./App.css";
import QuoteContainer from "./components/quote-container";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <QuoteContainer />
      </Provider>
    </div>
  );
}

export default App;
