import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../../actions/register.action";
// ใช้ redux แทน
// import { httpClient } from "./../../utils/HttpClient";
// import { server } from "../../constants";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  showError = () =>{
    return(
      <div className="alert alert-danger alert-dismissible">
      {/* <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button> */}
      <h4><i className="icon fa fa-ban" /> Error!</h4>Incorrect infomation</div>
    )
  }
  showSuccess = () =>{
    return(
      <div className="alert alert-success alert-dismissible">
      {/* <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button> */}
      <h4><i className="icon fa fa-check" /> Successful!</h4>correct infomation</div>
    )
  }
  // onClickRegister = () => {
  //   // Axios.post("http://localhost:8081/api/v2/authen/register",this.state).then(response=>{
  //   //     alert(JSON.stringify(response.data))
  //   // })
  //   // httpClient.post(server.REGISTER_URL, this.state).then(response => {
  //   //   alert(JSON.stringify(response.data));
  //   // });

  // };

  render() {
    return (
      <div>
        <div className="login-box">
          <div className="login-logo">
            <a href="../../index2.html">
              <b>ReactJS</b>Register
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
                  type="email"
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
              {this.props.registerReducer.pass ? this.showSuccess() : null}
              {this.props.registerReducer.isError ? this.showError() : null}

              <div className="row">
                <div className="col-xs-12">
                  <button
                    onClick={e => {
                      e.preventDefault();
                      this.props.register(this.props.history, this.state);
                    }}
                    type="submit"
                    className="btn btn-primary btn-block btn-flat"
                  >
                    Register
                  </button>
                </div>
                <div className="col-xs-12">
                  <button
                    style={{ marginTop: 8 }}
                    onClick={e => {
                      e.preventDefault();
                      this.props.history.goBack();
                    }}
                    className="btn btn-block btn-default"
                  >
                    Login
                  </button>
                </div>
                {/* /.col */}
                {/* /.col */}
                <br />
              </div>
            </form>
          </div>
          {/* /.login-box-body */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ registerReducer }) => ({ registerReducer });

const mapDispatchToProps = {
  register
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
