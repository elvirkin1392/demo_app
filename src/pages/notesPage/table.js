import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import shortid from 'shortid';
import {useHistory} from 'react-router-dom';
import {getModuleState} from "services/notes";
import { useSelector } from 'react-redux';
import {map, values} from 'ramda';
import { format, parseISO } from "date-fns";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#322e4e',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:hover': {
      background: '#fff0ce',
      cursor: 'pointer'
    }
  }
}))(TableRow);


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const notesState = useSelector(getModuleState);
  const history = useHistory();
  const classes = useStyles();
  
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow >
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell >Description</StyledTableCell>
            <StyledTableCell align="right">Last updated</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {map((row) => (
            <StyledTableRow key={row.id}  onClick={() => {
              history.push(`/notes/${row.id}`);
            }}>
              <StyledTableCell component="th" scope="row">
                {row.title}
              </StyledTableCell>
              <StyledTableCell >
                {row.description}
              </StyledTableCell>
              <StyledTableCell align="right">
                {format(parseISO(row.date), "EEE. d MMM. yyyy  h:mma")}
              </StyledTableCell>
            </StyledTableRow>
          ), values(notesState))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
