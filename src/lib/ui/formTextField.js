import styled from 'styled-components';
import React from 'react';
import { Field } from 'react-final-form';
import { TextField as MuiTextField } from '@material-ui/core';

const FormTextField = styled((props) => (
  <Field name={props.name}>
    {({ input, meta }) => (
      <>
        <MuiTextField
          {...input}
          autoComplete="off"
          variant="outlined"
          size="small"
          InputProps={{ className: 'formControl' }}
          inputProps={{ className: 'input' }}
          {...props}
        />
        {meta.error && meta.touched && (
          <span
            style={{
              color: 'red',
              fontSize: '16px',
            }}
          >
            {meta.error}
          </span>
        )}
      </>
    )}
  </Field>
))`
  margin-bottom: ${(props) => props.mb || 0}px;
  width: 100%;

  .formControl {
    padding-top: ${(props) => props.multiline && '6px'};
    padding-bottom: ${(props) => props.multiline && '6px'};
    height: ${(props) => (props.multiline ? 'auto' : '32px')};
    background: white;
  }
  .input {
    height: ${(props) => (props.multiline ? 'auto' : '32px')};
    min-height: ${(props) => `${props.minHeight}px`};
    max-height: 300px;
    border-color: #EEEEEE;
  }
  fieldset {
    border-color:#EEEEEE;
  }
`;

export default FormTextField;
