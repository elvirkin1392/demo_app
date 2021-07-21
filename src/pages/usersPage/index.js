import React from 'react';
import {Typography} from "@material-ui/core";
import Table from "./table";

const UsersPage = () => {
  return (
    <div>
      <Typography variant="h4" color="textSecondary" style={{marginBottom: '20px'}}>
        Users
      </Typography>
      <Table/>
    </div>
  );
};

export default UsersPage;