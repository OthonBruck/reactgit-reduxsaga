import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import remove from "../images/remove.svg";
import update from "../images/reload.svg";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ReposiActions } from "../store/ducks/reposi";

class Repository extends Component {
  render() {
    const { repo, requestUpdateRepo } = this.props;
    return (
      <li>
        <Grid className="repo-component">
          <Grid.Row>
            <Grid.Column textAlign="center">
              <img
                src={repo.owner.avatar_url}
                className="repo-icon"
                alt="Logo do repositório"
              ></img>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column textAlign="center">
              <h1 className="repo-name">{repo.name}</h1>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <h2 className="repo-subtitle">{repo.owner.login}</h2>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row className="repo-info">
            <Grid.Column width={8} textAlign="left">
              Stars
            </Grid.Column>
            <Grid.Column width={8} textAlign="right">
              {repo.stargazers_count}
            </Grid.Column>
          </Grid.Row>

          <Grid.Row className="repo-info">
            <Grid.Column width={8} textAlign="left">
              Language
            </Grid.Column>
            <Grid.Column width={8} textAlign="right">
              {repo.language}
            </Grid.Column>
          </Grid.Row>

          <Grid.Row className="repo-info">
            <Grid.Column width={8} textAlign="left">
              Forks
            </Grid.Column>
            <Grid.Column width={8} textAlign="right">
              {repo.forks}
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={16} textAlign="right">
              <img
                alt="remover"
                className="repo-icons"
                src={remove}
                onClick={() => this.props.removeRepo(repo)}
              ></img>
              <img
                alt="atualizar"
                className="repo-icons"
                src={update}
                onClick={() => requestUpdateRepo(repo)}
              ></img>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </li>
    );
  }
}

const mapStateToProps = (state) => ({
  listaRepos: state.reposi.listaRepos,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(ReposiActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Repository);
