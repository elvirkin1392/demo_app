import React from 'react';
import {Container as MuiContainer, Typography} from '@material-ui/core';

import SignIn from 'routing/login/signIn';

function Content() {
  return (
    <>
      <Typography variant="subtitle" color="textSecondary">
        Version 0.1
      </Typography>
      
      <MuiContainer style={{paddingTop: '155px'}}>
        <img src="2.jpg" alt="" style={{width: '30%', left: "10%", position: 'fixed', top: '10%'}}/>
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
          <SignIn/>
        </div>
      
      </MuiContainer>
    </>
  );
}

export default Content;
