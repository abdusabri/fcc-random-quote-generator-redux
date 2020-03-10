import mockedGetQuote from "../api/quotes-api";
import React from "react";
import { render, wait, fireEvent } from "@testing-library/react";
import pretty from "pretty";
import QuoteContainer from "./quote-container";
import { Provider } from "react-redux";
import store from "../store";

jest.mock("../api/quotes-api");

const fakeData = {
  quoteText: "This is a Quote",
  quoteAuthor: "Someone"
};

mockedGetQuote
  .mockImplementationOnce(async () => Promise.resolve(fakeData))
  .mockImplementationOnce(async () => Promise.resolve("error"));

describe("Quote Container", () => {
  it("Renders properly", async () => {
    const { getByText, container } = render(
      <Provider store={store}>
        <QuoteContainer />
      </Provider>
    );

    await wait();

    expect(getByText("This is a Quote")).toBeInTheDocument();
    expect(getByText(fakeData.quoteAuthor)).toBeInTheDocument();

    expect(pretty(container.innerHTML)).toMatchSnapshot();

    fireEvent.click(getByText(/Generate Quote/i));

    await wait();

    expect(getByText("Oops! Something is not right!")).toBeInTheDocument();

    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
});
