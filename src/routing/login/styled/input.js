import React from 'react';
import styled from 'styled-components';
import { TextField as RffTextField } from 'mui-rff';

const Input = styled((props) => (
  <RffTextField
    variant='outlined'
    autoComplete='off'
    InputProps={{ className: 'formControl' }}
    inputProps={{ className: 'input' }}
    {...props}
  />
))`
  width: 400px;
  .formControl {
    padding-top: ${(props) => props.multiline && '6px'};
    padding-bottom: ${(props) => props.multiline && '6px'};
    height: 50px;

    margin-bottom: 40px;
  }
  .input {
    background-color: #fff;

    border-radius: 50px;
    padding: 0 20px;
    height: 46px;
    display: flex;
    flex: auto;
    width: 400px;
  }
  fieldset {
    border-radius: 50px;
  }
`;
export default Input;
