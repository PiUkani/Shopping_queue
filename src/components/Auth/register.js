import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AccountDetail from './accountDetail';
import withStyles from '@material-ui/core/styles/withStyles';
import NavBar from '../navbar';
import Link from '@material-ui/core/Link';
import ProfileDetail from './profileDetail';


const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(4),
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
});

const steps = ['Account Details', 'Profile Details', 'Confirm'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AccountDetail/>;
    case 1:
      return <ProfileDetail/>;
    case 2:
      return <div>test</div>;
    default:
      throw new Error('Unknown step');
  }
}

class Register extends React.Component {
  state = {
    activeStep: 0,
    setActiveStep: 0
  };

  handleNext = () => {
    this.setState(previousState => {
      return {
        activeStep: previousState.activeStep + 1
      };
    });
  };

  handleBack = () => {
    this.setState(previousState => {
      return {
        activeStep: previousState.activeStep - 1
      };
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline/>
        <NavBar currentPath={this.props.location.pathname}/>

        <div className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Register
            </Typography>
            <Stepper activeStep={this.state.activeStep} className={classes.stepper}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            {getStepContent(this.state.activeStep)}
            <div className={classes.buttons}>
              {this.state.activeStep !== 0 && (
                <Button onClick={this.handleBack} className={classes.button}>
                  Back
                </Button>
              )}
              <Button
                variant="contained"
                color="primary"
                onClick={this.handleNext}
                className={classes.button}
              >
                {this.state.activeStep === steps.length - 1 ? 'Register' : 'Next'}
              </Button>
            </div>
          </Paper>

          <Link href="/login" variant="body2">
            Already have an account? Sign in
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Register);