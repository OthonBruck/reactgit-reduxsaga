import React, { Component } from "react";
import { Grid, Input, Button } from "semantic-ui-react";
import logo from "../images/logo.svg";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ReposiActions } from "../store/ducks/reposi";

class Pesquisa extends Component {
  render() {
    const { listaRepos, requestRepo, loading, texto, updateTexto } = this.props;

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
              value={texto}
              onChange={(evt) => updateTexto(evt.target.value)}
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <Button
              className="search-button"
              onClick={() => requestRepo(texto)}
            >
              ADD
            </Button>
          </Grid.Column>
          {loading && <p className="search-header">Carregando...</p>}
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  texto: state.reposi.texto,
  listaRepos: state.reposi.listaRepos,
  loading: state.reposi.loading,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(ReposiActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Pesquisa);
