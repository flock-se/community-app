import React from 'react';
import MemberOverview from '../components/MemberOverview/MemberOverview';
import { getMembers, deleteMember, updateMember } from '../actions/member';

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
    if (action === 'save') {
      this.handleSave(memberData);
    } else if (action === 'delete') {
      this.handleDelete(memberData.id);
    }
  }

  handleDelete = (memberId) => {
    deleteMember(memberId, this.setState({ memberData: this.state.memberData.filter(item => memberId !== item.id) }));
  }

  handleSave = (editedMember) => {
    updateMember(editedMember.data, data => this.setState({
      memberData: this.state.memberData.map((item) => {
        const result = item.id === data.id ? data : item;
        return result;
      }),
    }));
  }

  render() {
    return (
      <MemberOverview memberData={this.state.memberData} handleAction={this.handleAction}/>
    );
  }
}
