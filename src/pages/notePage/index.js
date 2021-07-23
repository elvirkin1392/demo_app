import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getModuleState, actions as notesActions } from "services/notes";
import { useParams } from "react-router-dom";
import { Typography } from "@material-ui/core";
import Button from "routing/login/styled/button";
import { Form } from "react-final-form";
import { FormCKEdtior, FormControl, FormTextField } from "lib/ui";
import { format } from "date-fns";

const NotePage = () => {
  const notesState = useSelector(getModuleState);
  const routeParams = useParams();
  const noteID = routeParams.id;
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(
      notesActions.setNote({
        id: noteID,
        title: values.title,
        description: values.description,
        text: values.text,
        date: new Date(),
      })
    );
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" style={{ marginBottom: "20px" }}>
          Edit note
        </Typography>
        <Typography variant="subtitle2" style={{ marginBottom: "20px" }}>
          {format(notesState[noteID].date, "EEE. d MMM. yyyy  h:mma")}
        </Typography>
      </div>

      <Form
        onSubmit={onSubmit}
        initialValues={{
          title: notesState[noteID].title,
          description: notesState[noteID].description,
          text: notesState[noteID].text,
        }}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} noValidate>
            <FormControl label="Title">
              <FormTextField placeholder="Title" name="title" />
            </FormControl>
            <FormControl label="Description">
              <FormTextField
                multiline
                rows={5}
                placeholder="Description"
                name="description"
              />
            </FormControl>
            <FormControl label="Text">
              <FormCKEdtior name="text" placeholder="Text" />
            </FormControl>

            <Button type="submit" style={{ width: "150px" }}>
              Save
            </Button>
          </form>
        )}
      />
    </div>
  );
};

export default NotePage;
