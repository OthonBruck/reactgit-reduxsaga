import React from "react";
import Repository from "./repositorios";
import { connect } from "react-redux";

const List = ({ listaRepos }) => {
  return (
    <ul className="repo-list">
      {listaRepos.map((repo, index) => (
        <Repository key={index} repo={repo} />
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  listaRepos: state.reposi.listaRepos,
});

export default connect(mapStateToProps)(List);
