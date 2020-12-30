const TYPE = "@@todo";

const initialState = {
  items: [],
  nextId: 0,
};

export default function reducer(state = initialState, action) {
  return action.type.includes(TYPE) ? action.result(state) : state;
}
