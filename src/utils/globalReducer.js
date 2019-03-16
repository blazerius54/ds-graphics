export const initialState = {
  foo: 'bar',
};

function globalReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default globalReducer;
