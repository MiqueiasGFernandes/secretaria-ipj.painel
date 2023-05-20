import React from 'react';
import {
  Admin,
  Login,
  Resource,
  defaultTheme,
} from 'react-admin';
import authProviderService from '../../services/auth-provider';
import dataProviderService from '../../services/data-provider';
import CreateMember from '../members/create';
import EditMember from '../members/edit';
import ListMember from '../members/list';
import ShowMember from '../members/show';

const customTheme = {
  ...defaultTheme,
  palette: {
    ...defaultTheme.palette,
    secoundary: {
      ...defaultTheme.palette.secondary,
      main: '#b3002d',
      light: '#ff1a53',
      dark: '#800020',
    },
  },

};

function App() {
  return (
    <Admin
      authProvider={authProviderService}
      theme={customTheme}
      dataProvider={dataProviderService}
      requireAuth
      loginPage={Login}
    >
      <Resource name="members" create={CreateMember} list={ListMember} show={ShowMember} edit={EditMember} />
    </Admin>
  );
}

export default App;
