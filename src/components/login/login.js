import React, { Component } from "react";
import { httpClient } from "../../utils/HttpClient";
import { server } from "../../constants";
import { login,autoLogin } from "../../actions/login.action";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }
  componentDidMount(){
    this.props.autoLogin(this.props.history);
  }
  showError = () =>{
    return(
      <div className="alert alert-danger alert-dismissible">
      {/* <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button> */}
      <h4><i className="icon fa fa-ban" /> Error!</h4>Incorrect infomation</div>
    )
  }
  // default axios no Redux
  // onClickLogin = () => {
  //   httpClient.post(server.LOGIN_URL, this.state).then(response => {
  //     alert(JSON.stringify(response.data));
  //   });
  // };

  render() {
    return (
      <div>
        <div className="login-box">
          <div className="login-logo">
            <a href="../../index2.html">
              <b>ReactJS</b>Login
            </a>
          </div>
          {/* /.login-logo */}
          <div
            className="login-box-body"
            style={{ background: "whitesmoke", borderRadius: 10 }}
          >
            <p className="login-box-msg">Sign in to start your session</p>
            <form>
              <div className="form-group has-feedback">
                <input
                  onChange={e => {
                    this.setState({ username: e.target.value });
                  }}
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="Username"
                />
                <span className="glyphicon glyphicon-envelope form-control-feedback" />
              </div>
              <div className="form-group has-feedback">
                <input
                  onChange={e => {
                    this.setState({ password: e.target.value });
                  }}
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                />
                <span className="glyphicon glyphicon-lock form-control-feedback" />
              </div>
              {this.props.loginReducer.isError ? this.showError() : null}
              <div className="row">
                <div className="col-xs-12">
                  <button
                    onClick={e=>{
                      e.preventDefault()
                      this.props.login(this.props.history,this.state)
                    }}
                    type="submit"
                    className="btn btn-primary btn-block btn-flat"
                  >
                    Sign In
                  </button>
                </div>
                {/* /.col */}
                <br />
                <div className="col-xs-12">
                  <button
                    type="button"
                    style={{ marginTop: 8 }}
                    onClick={() => this.props.history.push("/register")}
                    className="btn btn-block btn-default"
                  >
                    Register
                  </button>
                </div>
                {/* /.col */}
              </div>
            </form>
          </div>
          {/* /.login-box-body */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ loginReducer }) => ({ loginReducer });

const mapDispatchToProps = {
  login,autoLogin
};

export default connect(mapStateToProps,mapDispatchToProps)(Login)
