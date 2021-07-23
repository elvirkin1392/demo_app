import React from 'react';
import {
  FormControl as MuiFormControl,
  Typography as MuiTypography,
} from '@material-ui/core';
import styled from 'styled-components';


const FormControl = styled((props) => {
  const { children, label, color, ...controlProps } = props;

  return (
    <MuiFormControl {...controlProps}>
      {label && (
        <MuiTypography variant="h6" color='textSecondary' gutterBottom>
          {label}
        </MuiTypography>
      )}
      {children}
    </MuiFormControl>
  );
})`
  width: 100%;
  margin-bottom: 15px;

  fieldset {
    border-color: #EEE;
  }
`;

export default FormControl;
