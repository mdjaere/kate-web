import jsonResponse from "../mockResponse/painting_local";

const promisedPaintings = new Promise((resolve, reject) => {
  resolve(jsonResponse);
});

export { promisedPaintings };