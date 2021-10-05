import React from "react";
import User from "./User";
import { connect } from "react-redux";

const Uselist = ({ users }) => {
  const [details] = users.map((users) => {
    return <User users={users} />;
  });
  return <div>{details}</div>;
};

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps)(Uselist);
