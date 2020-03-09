import React from "react";
import { render, fireEvent } from "@testing-library/react";
import pretty from "pretty";
import QuoteCard from "./quote-card";

describe("Quote Card", () => {
  const baseProps = {
    quoteText: "This is a Quote",
    quoteAuthor: "Someone",
    classes: {},
    isLoading: false,
    onGenerateQuote: jest.fn(),
    isError: false
  };

  it("Matches snapshot", () => {
    const { container } = render(<QuoteCard {...baseProps} />);

    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });

  it("Renders properly", () => {
    const { getByText, rerender } = render(<QuoteCard {...baseProps} />);

    expect(getByText(baseProps.quoteText)).toBeInTheDocument();
    expect(getByText(baseProps.quoteAuthor)).toBeInTheDocument();

    const newProps = {
      ...baseProps,
      quoteText: "This is Another Quote",
      quoteAuthor: "Another Person"
    };

    rerender(<QuoteCard {...newProps} />);

    expect(getByText(newProps.quoteText)).toBeInTheDocument();
    expect(getByText(newProps.quoteAuthor)).toBeInTheDocument();
  });

  it("Responds properly to user click", () => {
    const { getByText } = render(<QuoteCard {...baseProps} />);

    fireEvent.click(getByText(/Generate Quote/i));

    expect(baseProps.onGenerateQuote).toHaveBeenCalledTimes(1);
  });

  it("Handles error state properly", () => {
    const props = {
      ...baseProps,
      isError: true
    };

    const { getByText, container } = render(<QuoteCard {...props} />);

    expect(getByText("Oops! Something is not right!")).toBeInTheDocument();

    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });

  it("Handles loading state properly", () => {
    const props = {
      ...baseProps,
      isLoading: true
    };

    const { getByTestId, container } = render(<QuoteCard {...props} />);

    expect(getByTestId("loading-indicator")).toBeInTheDocument();
    expect(getByTestId("new-quote").hasAttribute("disabled")).toBeTruthy();

    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
});
