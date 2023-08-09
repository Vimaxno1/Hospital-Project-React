import React from 'react';
import { connect } from 'react-redux';

import { emailSignInStart } from '../../redux/user/user.action';
import hospitalimage from '../../assets/images/hospitalicon.ico';
import FormInput from '../form-input/form-in.component';

import './sign-in.styles.scss';
class SignInPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDfault();

    const { email, password } = this.state;
    const { emailSignInStart } = this.props;

    emailSignInStart(email, password);
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="page-header">
        <div className="page-header-image" />
        <div className="container">
          <div className="content-center">
            <div className="card-plain">
              <form className="form" onSubmit={this.handleSubmit}>
                <div className="header">
                  <div class="logo-container">
                    <img className="img" src={hospitalimage} alt="" />
                  </div>
                  <h5>Log in</h5>
                </div>
                <div className="content">
                  <div className="input-group">
                    <FormInput
                      type="Email"
                      placeholder="Enter User Email"
                      value={this.state.email}
                      handleChange={this.handleChange}
                      required
                    />
                    <span className="input-group-addon">
                      <i className="zmdi zmdi-account-circle fa-solid fa-circle-user"></i>
                    </span>
                  </div>
                  <div className="input-group">
                    <FormInput
                      type="password"
                      placeholder="Password"
                      value={this.state.password}
                      handleChange={this.handleChange}
                      required
                    />
                    <span className="input-group-addon">
                      <i className="zmdi zmdi-lock"></i>
                    </span>
                  </div>
                </div>
                <div className="footer text-center">
                  <button
                    className="btn btn-primary btn-round btn-block  "
                    type="submit"
                  >
                    SIGN IN
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});
export default connect(null, mapDispatchToProps)(SignInPage);
