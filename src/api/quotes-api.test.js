import { getQuote } from "./quotes-api";

describe("Quotes API", () => {
  it("fetches data successfully from the API", async () => {
    const fakeData = [
      {
        quote: "This is a Quote",
        character: "Someone"
      }
    ];

    jest.spyOn(global, "fetch").mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve(fakeData)
      })
    );

    await expect(getQuote()).resolves.toEqual({
      quoteText: fakeData[0].quote,
      quoteAuthor: fakeData[0].character
    });
  });

  it("returns error if the API request fails", async () => {
    const errorMessage = "API Error";

    jest
      .spyOn(global, "fetch")
      .mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));

    await expect(getQuote("react")).resolves.toEqual("error");
  });
});
