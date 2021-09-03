import reducer from '../../reducers';
import ProductMock from '../../__mocks__/ProductMock';

describe('test of reducers', () => {
  it('return initial state', () => {
    expect(reducer({}, '')).toEqual({});
  });

  it('return product mock state', () => {
    const initialState = {
      cart: [],
    };
    const payload = ProductMock;

    const action = {
      type: 'ADD_TO_CART',
      payload,
    };

    const expected = {
      cart: [
        ProductMock,
      ],
    };

    expect(reducer(initialState, action)).toEqual(expected);
  });

  it('return empty state', () => {
    const initialState = {
      cart: [
        ProductMock,
      ],
    };
    const payload = ProductMock;

    const action = {
      type: 'REMOVE_FROM_CART',
      payload,
    };

    const expected = {
      cart: [],
    };

    expect(reducer(initialState, action)).toEqual(expected);
  });
});

