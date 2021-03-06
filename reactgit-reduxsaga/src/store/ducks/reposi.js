export const Types = {
  UPDATE_TEXTO: "UPDATE_TEXTO",
  REQUEST_ADD_REPO: "REQUEST_ADD_REPO",
  SUCCESS_ADD_REPO: "SUCCESS_ADD_REPO",
  FAILURE_ADD_REPO: "FAILURE_ADD_REPO",
  REQUEST_UPDATE_REPO: "REQUEST_UPDATE_REPO",
  SUCCESS_UPDATE_REPO: "SUCCESS_UPDATE_REPO",
  FAILURE_UPDATE_REPO: "FAILURE_UPDATE_REPO",
  DELETE_REPO: "DELETE_REPO",
};

const INITIAL_STATE = {
  texto: "",
  listaRepos: [],
  loading: false,
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
    };
  }

  if (action.type === Types.FAILURE_ADD_REPO) {
    return {
      ...state,
      loading: false,
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
      loading: true,
    };
  }

  if (action.type === Types.SUCCESS_UPDATE_REPO) {
    return {
      ...state,
      listaRepos: state.listaRepos.map((r) =>
        r.id === action.payload.id ? action.payload : r
      ),
      loading: false,
    };
  }

  if (action.type === Types.FAILURE_UPDATE_REPO) {
    return {
      ...state,
      loading: false,
    };
  }

  return state;
}

export default reposi;

export const Creators = {
  updateTexto: (texto) => ({
    type: Types.UPDATE_TEXTO,
    payload: texto,
  }),

  requestRepo: (texto) => ({
    type: Types.REQUEST_ADD_REPO,
    payload: texto,
  }),

  removeRepo: (repo) => ({
    type: Types.DELETE_REPO,
    payload: repo,
  }),

  requestUpdateRepo: (repo) => ({
    type: Types.REQUEST_UPDATE_REPO,
    payload: repo,
  }),
};
