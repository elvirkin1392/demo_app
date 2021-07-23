import React, { useState } from "react";
import { Typography, IconButton } from "@material-ui/core";
import EditForm from "./editForm";
import Content from "./content";
import { Edit as EditIcon } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { actions as profileActions, getModuleState } from "services/profile";

const ProfilePage = () => {
  const profileState = useSelector(getModuleState);
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);


  const save = (values) => {
    dispatch(profileActions.setProfile(values));
  };
  return (
    <div>
      <Typography
        variant="h4"
        color="textSecondary"
        style={{ marginBottom: "20px" }}
      >
        Profile{" "}
        <IconButton
          onClick={() => {
            setShowForm(!showForm);
          }}
        >
          <EditIcon />
        </IconButton>
      </Typography>

      {showForm ? (
        <EditForm
          values={profileState}
          setValues={save}
          closeForm={() => setShowForm(false)}
        />
      ) : (
        <Content values={profileState} />
      )}
    </div>
  );
};

export default ProfilePage;
