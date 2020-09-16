import React, { Component } from "react";
import { Grid, Input, Button } from "semantic-ui-react";
import logo from "../images/logo.svg";
import api from "../services/api";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ReposiActions } from "../store/ducks/reposi";

class Pesquisa extends Component {
  updateTexto = (texto) => {
    this.setState({ texto });
  };

  addRepository = async () => {
    try {
      const response = await api.get(`/repos/${this.state.texto}`);
      const {
        id,
        owner: { avatar_url, login },
        name,
        stargazers_count,
        language,
        forks,
      } = response.data;

      var repo = {
        id,
        owner: { avatar_url, login },
        name,
        stargazers_count,
        language,
        forks,
      };
      let found = this.props.listaRepos.find((r) => r.id === repo.id);
      console.log(found);
      if (found === undefined) {
        this.props.addRepo(repo);
      } else {
        return alert("Dados já inseridos");
      }
    } catch (error) {
      alert("Dados inseridos incorretamente");
    }
  };

  render() {
    const { listaRepos } = this.props;

    return (
      <Grid centered className="search-component">
        <Grid.Row columns={3} verticalAlign="middle" className="search-header">
          <Grid.Column width={2}>
            <img alt="Logo" src={logo}></img>
          </Grid.Column>
          <Grid.Column width={8}>Repositórios</Grid.Column>
          <Grid.Column width={4} textAlign="right">
            {listaRepos.length}
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2}>
          <Grid.Column width={12}>
            <Input
              focus
              className="search-bar"
              type="text"
              value={this.texto}
              onChange={(evt) => this.updateTexto(evt.target.value)}
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <Button className="search-button" onClick={this.addRepository}>
              ADD
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  listaRepos: state.reposi.listaRepos,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(ReposiActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Pesquisa);
