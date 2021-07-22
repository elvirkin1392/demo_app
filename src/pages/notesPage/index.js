import React from 'react';
import {Typography} from "@material-ui/core";
import Table from "./table";

const NotesPage = () => {
  return (
    <div>
      <Typography variant="h4" color="textSecondary" style={{marginBottom: '20px'}}>
        Notes
      </Typography>
      <Table/>
    </div>
  );
};

export default NotesPage;