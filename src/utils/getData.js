const getData = (api) => {
  return fetch(api).then(response => response.json).catch((err) => { throw err; });
};

export default getData;
