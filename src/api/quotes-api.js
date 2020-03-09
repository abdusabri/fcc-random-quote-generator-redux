export const getQuote = async function() {
  try {
    const res = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes");
    const data = await res.json();
    if (data && data[0]) {
      return {
        quoteText: data[0].quote,
        quoteAuthor: data[0].character
      };
    }
  } catch (error) {
    return "error";
  }
};

export default getQuote;
