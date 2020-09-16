import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  addRepo: ["repo"],
  removeRepo: ["repo"],
  updateRepo: ["repo"],
});

const initialState = {
  listaRepos: [],
};

const add = (state = initialState, action) => [
  ...state,
  { listaRepos: [...state.listaRepos, action] },
  console.log("entrou"),
];
const remove = (state = initialState, action) => [
  ...state,
  {
    listaRepos: state.listaRepos.filter((item) => {
      return item.id !== action.id;
    }),
  },
];
const update = (state = initialState, action) => [
  ...state,
  {
    listaRepos: state.listaRepos.map((item) =>
      item.id === action.id ? action : item
    ),
  },
];

export default createReducer(initialState, {
  [Types.ADD_REPO]: add,
  [Types.REMOVE_REPO]: remove,
  [Types.UPDATE_REPO]: update,
});
