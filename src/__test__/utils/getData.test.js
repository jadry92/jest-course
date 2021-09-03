import getData from '../../utils/getData';

describe('fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('call api and return data', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '123456' }));

    getData('http://google.com').then((response) => {
      expect(response.data).toEqual('123456');
    }).catch((error) => {
      assert.isNotOk(error, 'Promise error');
      done();
    });

    expect(fetch.mock.calls[0][0]).toEqual('http://google.com');
  });
});

