// React imports
import React from 'react';
// Material UI imports
import { Button, Checkbox, FormControlLabel, withStyles } from '@material-ui/core';
// User JS imports
import FormTextField from '../../FormTextField';
import FormSelectField from '../../FormSelectField';
import { withRouter } from 'react-router-dom';
import { login } from '../../../actions/auth';
import { styles } from './style';


class LoginForm extends React.Component {

  state = {
    username: '',
    password: '',
    userType: 0,
    displayError: false,
    errorMessage: ''
  };

  handleFormField = (field, event) => {
    this.setState({
      [field]: event.target.value,
      displayError: false,
      errorMessage: null
    });
  };

  handleLoginSubmit = (event) => {
    event.preventDefault();
    console.log(this)
    login(this, this.props.app)
  }

  render() {
    const { classes } = this.props;
    const { displayError, errorMessage, userType } = this.state;

    return (
      <React.Fragment>
        <form className={classes.form} onSubmit={this.handleLoginSubmit}>
          <FormTextField
            variant="outlined"
            margin="normal"
            name="username"
            label="Username"
            displayError={displayError}
            handleFormField={this.handleFormField}
          />

          <FormTextField
            variant="outlined"
            margin="normal"
            name="password"
            label="Password"
            type="password"
            errorMessage={errorMessage}
            displayError={displayError}
            handleFormField={this.handleFormField}
          />

          <FormSelectField
            name="userType"
            label="Login As"
            variant="outlined"
            value={userType}
            handleFormField={this.handleFormField}
            menuItems={['Shopper', 'Shop Owner', 'Admin']}
            useIndex
          />

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(LoginForm));
