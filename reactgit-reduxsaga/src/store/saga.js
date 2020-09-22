import { takeLatest, put, select, all } from "redux-saga/effects";
import api from "../services/api";
import { Types } from "./ducks/reposi";

function* getRepository(action) {
  try {
    const state = yield select();
    const listaRepos = state.reposi.listaRepos;

    const texto = action.payload;

    const resp = yield api.get(`/repos/${texto}`);
    const {
      id,
      owner: { avatar_url, login },
      name,
      stargazers_count,
      language,
      forks,
    } = resp.data;
    let repo = {
      id,
      owner: { avatar_url, login },
      name,
      stargazers_count,
      language,
      forks,
    };

    let found = listaRepos.find((r) => r.id === repo.id);
    if (found !== undefined) {
      yield put({
        type: Types.FAILURE_ADD_REPO,
      });
      alert("Não é permitido adicionar repositórios repetidos");
    } else {
      yield put({
        type: Types.SUCCESS_ADD_REPO,
        payload: repo,
      });
    }
  } catch (err) {
    yield put({
      type: Types.FAILURE_ADD_REPO,
    });
    alert("Repositorio não encontrado");
  }
}

function* updateRepo(action) {
  try {
    let repo = action.payload;

    const resp = yield api.get(`/repos/${repo.owner.login}/${repo.name}`);

    const {
      id,
      owner: { avatar_url, login },
      name,
      stargazers_count,
      language,
      forks,
    } = resp.data;
    repo = {
      id,
      owner: { avatar_url, login },
      name,
      stargazers_count,
      language,
      forks,
    };

    yield put({
      type: Types.SUCCESS_UPDATE_REPO,
      payload: repo,
    });
  } catch (error) {
    yield put({
      type: Types.FAILURE_UPDATE_REPO,
    });
    alert("Não foi possivel atualizar o repositorio");
  }
}

export default function* raiz() {
  yield all([
    takeLatest(Types.REQUEST_ADD_REPO, getRepository),
    takeLatest(Types.REQUEST_UPDATE_REPO, updateRepo),
  ]);
}
