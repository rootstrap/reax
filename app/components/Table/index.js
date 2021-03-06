import React, { forwardRef } from 'react';
import { array, func } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from 'material-table';
import Paper from '@material-ui/core/Paper';
import { noop } from 'lodash';

import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

const Table = ({ headers, rows, onRowClick, onEditClick, onDestroyClick }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <MaterialTable
        icons={tableIcons}
        columns={headers}
        data={rows && rows.map(item => Object.assign({}, item))}
        onRowClick={onRowClick}
        actions={[
          () => ({
            icon: Edit,
            tooltip: 'Edit',
            onClick: onEditClick,
          }),
          () => ({
            icon: DeleteOutline,
            tooltip: 'Delete',
            onClick: onDestroyClick,
          }),
        ]}
        options={{
          actionsColumnIndex: -1,
          toolbar: false,
        }}
      />
    </Paper>
  );
};

export default Table;

Table.propTypes = {
  rows: array.isRequired,
  headers: array.isRequired,
  onRowClick: func,
  onEditClick: func,
  onDestroyClick: func,
};

Table.defaultProps = {
  onRowClick: noop,
  onEditClick: noop,
  onDestroyClick: noop,
};
