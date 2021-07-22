import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {getModuleState, actions as notesActions} from "services/notes";
import {useHistory, useParams} from "react-router-dom";
import {TextField, Typography, } from '@material-ui/core';
import Input from "routing/login/styled/input";
import Button from "routing/login/styled/button";
import { Form } from "react-final-form";

const NotePage = () => {
  const notesState = useSelector(getModuleState);
  const routeParams = useParams();
  const noteId = routeParams.id;
  const dispatch = useDispatch();
  
  const onSubmit = (values) => {
    dispatch(
      notesActions.setNote({
        id: noteId,
        title: values.title,
        description: values.description
      })
    );
  }
  
  return (
    <div>
      <Typography variant='h5' style={{marginBottom: '20px'}}>
        Edit note
      </Typography>
      <Form
        onSubmit={onSubmit}
        initialValues={{ title: notesState[noteId].title, description: notesState[noteId].description }}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Input  placeholder="Title" name="title" />
            <Input multiline placeholder="Description" name="description" />
            <Button type="submit">Save</Button>
          </form>)}/>
    </div>
  );
};

export default NotePage;