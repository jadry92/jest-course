const getData = (api) => {
  return fetch(api)
    .then(response => response.json)
    .catch((err) => { return null; });
};

export default getData;
