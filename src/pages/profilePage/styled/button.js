import styled from 'styled-components';
import { Button as MuiButton } from '@material-ui/core';
import React from 'react';

const Button = styled((props) => (
  <MuiButton color="primary" variant="contained" {...props} />
))`
  border-radius: 18px;
  //margin-bottom: 20px;
  box-shadow: none;
  text-transform: none;
  font-weight: bold;
  border: 1px solid #322e4e;
  
  &:hover {
    box-shadow: none;
  }
`;

export default Button;
