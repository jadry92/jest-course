const getData = (api) => {
  return fetch(api)
    .then(response => response.json)
    .catch((err) => { return err; });
};

export default getData;
