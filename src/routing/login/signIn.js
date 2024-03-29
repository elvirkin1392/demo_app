import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  CognitoUser,
  AuthenticationDetails,
  CognitoUserPool,
} from "amazon-cognito-identity-js";
import { Form } from "react-final-form";
import Input from "./styled/input";
import Button from "./styled/button";
import { Box as MuiBox, Typography as MuiTypography } from "@material-ui/core";
import LoginFirstTime from "routing/login/loginFirstTime";
import { actions as profileActions, getModuleState } from "services/profile";

import { getUserPool } from "cognito.js";
import { actions as authActions } from "services/auth";
import useDialog from "lib/hooks/useDialog";

function SignIn(props) {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const setNewPassword = useDialog();

  function onSubmit(values) {
    const poolData = getUserPool();
    const authDetails = new AuthenticationDetails({
      Username: values.username,
      Password: values.password,
    });

    const userPool = new CognitoUserPool({
      ClientId: poolData.clientId,
      UserPoolId: poolData.userPoolId,
    });
    const userData = {
      Username: values.username,
      Pool: userPool,
    };
    const user = new CognitoUser(userData);

    user.authenticateUser(authDetails, {
      onSuccess: async (data) => {
        //TODO remove post when back is connected

        dispatch(
          authActions.login({
            username: values.username,
            userProfile: data.getAccessToken().payload,
            accessToken: data.getAccessToken().getJwtToken(),
          })
        );
        
        dispatch(
          profileActions.setName({
            username: values.username
          })
        );
      },
      onFailure: (err) => {
        setError(err.message);
      },
      newPasswordRequired: async (userAttributes, data) => {
        delete userAttributes.email_verified;

        const result = await setNewPassword.open(userAttributes);

        user.completeNewPasswordChallenge(result.password, userAttributes, {
          onSuccess: (data) => {
            dispatch(
              authActions.login({
                username: values.username,
                userProfile: data.getAccessToken().payload,
                accessToken: data.getAccessToken().getJwtToken(),
              })
            );
          },
          onFailure: (err) => {
            console.log("Set new password failed", err);
          },
        });
      },
    });
  }

  return setNewPassword.isOpen ? (
    <LoginFirstTime setNewPassword={setNewPassword} />
  ) : (
    <Form
      onSubmit={onSubmit}
      initialValues={{ username: "", password: "" }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} noValidate>
          <MuiBox display="flex" flexDirection="column" alignItems="center">
            <MuiTypography
              style={{
                marginTop: "40px",
                marginBottom: "40px",
                fontWeight: "bold",
                color: "#322e4e",
                zIndex: 1,
              }}
              variant="h5"
              align="center"
            >
              Sign in
            </MuiTypography>

            {error && (
              <MuiTypography
                align="center"
                color="error"
                style={{ marginBottom: "48px" }}
              >
                {error}
              </MuiTypography>
            )}
            <Input placeholder="Email or phone number" name="username" />
            <Input type="password" placeholder="Password" name="password" />
            <Button type="submit">Sign in</Button>
          </MuiBox>
        </form>
      )}
    />
  );
}

export default SignIn;
