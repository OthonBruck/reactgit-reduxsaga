import React, { useEffect } from "react";
import Repository from "./repositorios";
import { connect } from "react-redux";

const List = ({ listaRepos }) => {
  useEffect(() => {}, [listaRepos]);
  return (
    <ul className="repo-list">
      {listaRepos.map((repo, index) => (
        <Repository key={index} repo={repo} />
      ))}
    </ul>
  );
};

const mapStateToProps = (store) => ({
  listaRepos: store.reposi.listaRepos,
});

export default connect(mapStateToProps)(List);
