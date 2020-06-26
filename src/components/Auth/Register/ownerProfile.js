import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormTextField from '../formTextField';


class OwnerProfile extends React.Component {

  render() {
    const { handleFormField } = this.props;

    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Profile details
        </Typography>
        <Grid container spacing={3}>
          <FormTextField
            name="storeName"
            label="Store Name"
            handleFormField={handleFormField}
          />
          <FormTextField
            name="location"
            label="Location"
            handleFormField={handleFormField}
          />
          <FormTextField
            name="customerLimit"
            label="Customer Limit"
            type="number"
            handleFormField={handleFormField}
          />
          <FormTextField
            name="shoppingTimeLimit"
            label="Customer Shopping Time Limit (min)"
            type="number"
            handleFormField={handleFormField}
          />
          <FormTextField
            name="openTime"
            label="Opening Time"
            type="time"
            defaultValue="07:30"
            handleFormField={handleFormField}
          />
          <FormTextField
            name="closeTime"
            label="Closing Time"
            type="time"
            defaultValue="07:30"
            handleFormField={handleFormField}
          />
        </Grid>
      </React.Fragment>
    );
  }
}

export default OwnerProfile;