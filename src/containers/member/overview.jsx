import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MemberOverview from '../../components/overview/overview';
import { getMembers, deleteMember, updateMember, createMember } from '../../actions/member';
import MemberDialogContainer from './dialog';

const positionFloatingActionButton = {
  position: 'fixed',
  right: '50px',
  bottom: '50px',
};

export default class MemberOverviewContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      memberData: [
      ],
    };
  }

  componentDidMount() {
    getMembers(data => this.setState({ memberData: data }));
  }

  handleAction = (action, memberData) => {
    let fAction;
    if (action === 'save') {
      fAction = this.handleSave(memberData);
    } else if (action === 'create') {
      fAction = this.handleCreate(memberData);
    } else if (action === 'delete') {
      fAction = this.handleDelete(memberData.id);
    }
    return fAction;
  }

  handleSave = editedMember => updateMember(editedMember.data, data => this.setState({
    memberData: this.state.memberData.map((item) => {
      const result = item.id === data.id ? data : item;
      return result;
    }),
  }));

  handleCreate = editedMember => createMember(editedMember.data, data => this.setState({
    memberData: [...this.state.memberData, data],
  }));

  handleDelete = memberId => deleteMember(memberId, () => this.setState({
    memberData: this.state.memberData.filter(item => memberId !== item.id),
  }));

  render() {
    return (
      <div>
        <MemberOverview memberData={this.state.memberData} handleAction={this.handleAction}/>
        <MemberDialogContainer handleAction={this.handleAction} data={{}} create={true}>
          <FloatingActionButton style={positionFloatingActionButton} secondary={true}>
            <ContentAdd/>
          </FloatingActionButton>
      </MemberDialogContainer>
    </div>
    );
  }
}
