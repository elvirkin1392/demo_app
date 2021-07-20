import React, { useState } from 'react';
import {  Container as MuiContainer, Typography } from '@material-ui/core';

import SignInPage from './signInPage';

function SignIn() {
  const [ setIsRestorePassword] = useState(false);
  
  const Content = () => {

    return <SignInPage restorePassword={() => setIsRestorePassword(true)} />;
  };
  
  return (
    <>
      <Typography variant="subtitle" color="textSecondary">
        Version 0.1
      </Typography>
      
      <MuiContainer style={{ paddingTop: '155px' }}>
        <img src="2.jpg" alt="" style={{width: '30%', left: "10%", position: 'fixed', top: '10%'}}/>
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
          <Content />
        </div>
   
      </MuiContainer>
    </>
  );
}

export default SignIn;
