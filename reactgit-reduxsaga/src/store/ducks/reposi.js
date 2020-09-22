export const Types = {
  UPDATE_TEXTO: "repos/UPDATE_TEXTO",
  REQUEST_ADD_REPO: "repos/REQUEST_ADD_REPO",
  SUCCESS_ADD_REPO: "repos/SUCCESS_ADD_REPO",
  FAILURE_ADD_REPO: "repo/FAILURE_ADD_REPO",
  REQUEST_UPDATE_REPO: "repos/REQUEST_UPDATE_REPO",
  SUCCESS_UPDATE_REPO: "repos/SUCCESS_UPDATE_REPO",
  FAILURE_UPDATE_REPO: "repos/FAILURE_UPDATE_REPO",
  DELETE_REPO: "repos/DELETE_REPO",
};

const INITIAL_STATE = {
  texto: "",
  listaRepos: [],
  loading: false,
  error: false,
};

function reposi(state = INITIAL_STATE, action) {
  if (action.type === Types.UPDATE_TEXTO) {
    return {
      ...state,
      texto: action.payload,
    };
  }

  if (action.type === Types.REQUEST_ADD_REPO) {
    return {
      ...state,
      loading: true,
    };
  }

  if (action.type === Types.SUCCESS_ADD_REPO) {
    return {
      ...state,
      listaRepos: state.listaRepos.concat(action.payload),
      loading: false,
      error: false,
    };
  }

  if (action.type === Types.FAILURE_ADD_REPO) {
    return {
      ...state,
      loading: false,
      error: true,
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

  if (action.type === Types.REQUEST_UPDATE_REPO) {
    return {
      ...state,
    };
  }

  if (action.type === Types.SUCCESS_UPDATE_REPO) {
    return {
      ...state,
      listaRepos: state.listaRepos.map((r) =>
        r.id === action.payload.id ? action.payload : r
      ),
    };
  }

  if (action.type === Types.FAILURE_UPDATE_REPO) {
    return {
      ...state,
    };
  }

  return state;
}

export default reposi;

// Actions
export const Creators = {
  updateTexto: (texto) => ({
    type: Types.UPDATE_TEXTO,
    payload: texto,
  }),

  requestRepo: (texto) => ({
    type: Types.REQUEST_ADD_REPO,
    payload: texto,
  }),

  deleteRepo: (repo) => ({
    type: Types.DELETE_REPO,
    payload: repo,
  }),

  requestUpdateRepo: (repo) => ({
    type: Types.REQUEST_UPDATE_REPO,
    payload: repo,
  }),
};
