import React from 'react';
import styled from 'styled-components';
import { Field } from 'react-final-form';
import { KeyboardDatePicker } from '@material-ui/pickers';


const DatePicker = styled((props) => (
  <Field name={props.name}>
    {({ input, meta }) => {
      return (
        <>
          <KeyboardDatePicker
            {...props}
            {...input}
            InputProps={{ className: 'input' }}
            inputProps={{ className: 'input' }}
          />
          {/*{props.isErrorVisible && meta.error && meta.touched && (*/}
          {/*  <span>{meta.error}</span>*/}
          {/*)}*/}
        </>
      );
    }}
  </Field>
))`
  .input {
    height: 32px;
    padding-top: 0;
    padding-right: 0;
    padding-bottom: 0;
  }

  button svg {
    color: #eee;
  }

  button:hover {
    background-color: transparent;
  }

  fieldset {
    border-color: #eee;
  }
`;

export default DatePicker;
