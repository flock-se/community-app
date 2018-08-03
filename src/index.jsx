import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MemberOverviewContainer from './containers/member/overview';

const App = () => (
  <MuiThemeProvider >
      <MemberOverviewContainer />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
