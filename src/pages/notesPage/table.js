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
  },
}))(TableRow);

function createData( name, calories, fat, carbs, protein) {
  return { id: shortid.generate(), name, calories, fat, carbs, protein };
}

const rows = [
  createData('Liam', '700 Oak Street, Brockton MA 2301', '715-312-2497', 24, 'f'),
  createData('Oliver', '42 Fairhaven Commons Way, Fairhaven MA 2719\n', '847-368-5914', 37, 'm'),
  createData('William', '677 Timpany Blvd, Gardner MA 1440\n', '940-603-7099', 24, 'm'),
  createData( 'Mia', '11 Jungle Road, Leominster MA 1453\n', '703-767-1495', 67, 'f'),
  createData('Henry', '830 Curran Memorial Hwy, North Adams MA 1247\n', '201-779-4768', 49, 'm'),
];

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
            <StyledTableCell align="right">Date</StyledTableCell>
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
                {row.date}
              </StyledTableCell>
            </StyledTableRow>
          ), values(notesState))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
