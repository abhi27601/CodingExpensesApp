import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

/*
export class LoginPage extends React.Component {

    render () {
        return (
            <div>
                <button onClick = {this.props.startLogin}>Login With Google</button>
            </div>
        )
    }
}*/
export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box_layout__box">
      <h1 className="box-layout__title">Expenses App</h1>
      <p>Time to Manage Expenses</p>
      <button className="button" onClick={startLogin}>
        Login With Google
      </button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
