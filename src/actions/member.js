import handleErrors from '../utils/handleErrors';

const memberUrl = '/api/members';

const getMembers = (callback) => {
  const options = { credentials: 'include' };
  return fetch(memberUrl, options)
    .then(handleErrors)
    .then(response => response.json())
    .then(callback)
    .catch(error => console.log(error));
};

const deleteMember = (memberId, callback) => {
  const options = { method: 'delete', credentials: 'include' };
  return fetch(`${memberUrl}/${memberId}`, options)
    .then(handleErrors)
    .then(callback)
    .catch(error => console.log(error));
};

const updateMember = (editedMemberData, callback) => {
  const options = {
    method: 'PUT',
    body: JSON.stringify(editedMemberData),
    credentials: 'include',
    headers: { 'content-type': 'application/json' },
  };

  return fetch(`${memberUrl}/${editedMemberData.id}`, options)
    .then(handleErrors)
    .then(response => response.json())
    .then(callback)
    .catch(error => console.log(error));
};

export { getMembers, deleteMember, updateMember };
