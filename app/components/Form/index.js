import React from 'react';
import { object, func, bool } from 'prop-types';
import { Field } from 'formik';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import TextField from '../common/TextField';
import withForm from '../../hoc/withForm';

const Form = ({
  isValid,
  disabled,
  attributes,
  handleSubmit,
  isSubmitting,
}) => (
  <form onSubmit={handleSubmit}>
    <Grid container spacing={3}>
      <Grid item xs={6}>
        {Object.keys(attributes).map(key => (
          <Field
            key={key}
            name={key}
            component={TextField}
            disabled={disabled}
          />
        ))}
        { !disabled && (
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={!isValid || isSubmitting}
          >
            Submit
          </Button>
        )}
      </Grid>
    </Grid>
  </form>
);

export default withForm(Form);

Form.propTypes = {
  attributes: object,
  handleSubmit: func.isRequired,
  isSubmitting: bool.isRequired,
  isValid: bool.isRequired,
  disabled: bool,
};

Form.defaultProps = {
  attributes: {},
  disabled: false,
};
