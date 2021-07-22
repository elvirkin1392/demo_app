import React from 'react';
import {Form} from 'react-final-form';
import {
  Box as MuiBox,
  Typography as MuiTypography,
} from '@material-ui/core';
import Input from './styled/input';
import Button from './styled/button';

function LoginFirstTime(props) {
  const {setNewPassword} = props;
  
  const onSubmit = (values) => {
    if (values.password !== values.confirm_password) {
      return;
    }
    setNewPassword.close(values);
  };
  
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{confirm_password: '', password: ''}}
      render={({handleSubmit}) => (
        <form onSubmit={handleSubmit} noValidate>
          <MuiBox display="flex" flexDirection="column" alignItems="center">
            
            <MuiTypography
              align="center"
              variant="h6"
              color="textSecondary"
              style={{marginTop: '40px', marginBottom: '40px', fontWeight: 'bold', color: '#322e4e', zIndex: 1}}
            >
              As it is the first time you log into your account,
              <br/> please set a
              password
            </MuiTypography>
            
            <Input
              type="password" placeholder="Password" name="password"/>
            <Input
              type="password"
              placeholder="Confirm your password"
              name="confirm_password"
            />
            <Button type="submit">Sign in</Button>
          </MuiBox>
        </form>
      )}
    />
  );
}

export default LoginFirstTime;
