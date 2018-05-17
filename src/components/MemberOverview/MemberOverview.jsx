import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MemberOverviewRow from './MemberOverviewRow';

const positionFloatingActionButton = {
  position: 'fixed',
  right: '50px',
  bottom: '50px',
};

const MemberOverview = props => (
  <div>
    <Table>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn>ID</TableHeaderColumn>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Status</TableHeaderColumn>
          <TableHeaderColumn>Action</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {props.memberData.map(m => <MemberOverviewRow key={m.id} data={m} handleAction={props.handleAction}/>)}
      </TableBody>
    </Table>
    <FloatingActionButton style={positionFloatingActionButton} secondary={true}>
      <ContentAdd/>
    </FloatingActionButton>
  </div>
);

MemberOverview.propTypes = {
  memberData: PropTypes.array,
  handleAction: PropTypes.func,
};

export default MemberOverview;

