export const Types = {
  UPDATE_QUERY: "repos/UPDATE_QUERY",
  ADD_REPO: "repos/ADD_REPO",
  UPDATE_REPO: "repos/UPDATE_REPO",
  DELETE_REPO: "repos/DELETE_REPO",
};

const INITIAL_STATE = {
  query: "",
  listaRepos: [],
};

function reposi(state = INITIAL_STATE, action) {
  if (action.type === Types.UPDATE_QUERY) {
    return {
      ...state,
      query: action.payload,
    };
  }

  if (action.type === Types.ADD_REPO) {
    return {
      ...state,
      listaRepos: state.listaRepos.concat(action.payload),
    };
  }

  if (action.type === Types.DELETE_REPO) {
    return {
      ...state,
      listaRepos: state.listaRepos.filter((r) => {
        return r.id !== action.payload.id;
      }),
    };
  }

  if (action.type === Types.UPDATE_REPO) {
    return {
      ...state,
      listaRepos: state.listaRepos.map((r) =>
        r.id === action.payload.id ? action.payload : r
      ),
    };
  }

  return state;
}

export default reposi;

// Actions
export const Creators = {
  updateQuery: (query) => ({
    type: Types.UPDATE_QUERY,
    payload: query,
  }),

  addRepo: (repo) => ({
    type: Types.ADD_REPO,
    payload: repo,
  }),

  deleteRepo: (repo) => ({
    type: Types.DELETE_REPO,
    payload: repo,
  }),

  updateRepo: (repo) => ({
    type: Types.UPDATE_REPO,
    payload: repo,
  }),
};
