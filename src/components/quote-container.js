import React, { useEffect } from "react";
import QuoteCard from "./quote-card";
import { requestQuote } from "../actions/quote-actions";
import { useDispatch, useSelector } from "react-redux";

function QuoteContainer() {
  const dispatch = useDispatch();

  const { isLoading, isError } = useSelector(state => state.status);
  const quote = useSelector(state => state.quote);

  useEffect(() => {
    dispatch(requestQuote());
  }, [dispatch]);

  return (
    <QuoteCard
      quoteText={quote.quoteText}
      quoteAuthor={quote.quoteAuthor}
      isLoading={isLoading}
      onGenerateQuote={() => dispatch(requestQuote())}
      isError={isError}
    />
  );
}

export default QuoteContainer;
