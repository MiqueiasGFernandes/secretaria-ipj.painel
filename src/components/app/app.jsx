import { createTheme } from '@mui/material';
import React from 'react';
import {
  Admin,
  Resource,
} from 'react-admin';

import authProviderService from '../../services/auth-provider';
import dataProviderService from '../../services/data-provider';
import i18nProvider from '../../services/translation/i18n-provider';

import CreateMember from '../members/create';
import EditMember from '../members/edit';
import ListMember from '../members/list';
import ShowMember from '../members/show';

import Login from '../login';

import backgroundImage from '../../assets/login-backgroud.png';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#9c1421ff',
    },
  },
});

function App() {
  return (
    <Admin
      authProvider={authProviderService}
      theme={customTheme}
      dataProvider={dataProviderService}
      requireAuth
      i18nProvider={i18nProvider}
      loginPage={<Login backgroundImage={backgroundImage} />}
    >
      <Resource name="members" create={CreateMember} list={ListMember} show={ShowMember} edit={EditMember} />
    </Admin>
  );
}

export default App;
