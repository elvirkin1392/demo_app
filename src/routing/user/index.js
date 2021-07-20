import React from 'react';
import Table from './table'
import {  Container as MuiContainer, Typography } from '@material-ui/core';

const User = () => {
  return (
    <div>
      <MuiContainer style={{ paddingTop: '50px' }}>
        <Typography  variant="h4" color="textSecondary" style={{marginBottom: '20px'}}>
          Users
        </Typography>
      
      
      <Table/>
      </MuiContainer>
    </div>
  );
};

export default User;
