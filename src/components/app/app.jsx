import React from 'react';
import {
  Admin,
  CustomRoutes,
  Resource,
} from 'react-admin';

import { People, Update } from '@mui/icons-material';
import { Route } from 'react-router-dom';
import authProvider from '../../services/auth-provider';
import dataProvider from '../../services/data-provider';
import i18nProvider from '../../services/translation/i18n-provider';

import CreateMember from '../members/create';
import EditMember from '../members/edit';
import ListMember from '../members/list';
import ShowMember from '../members/show';

import SignupMember from '../member-signup/member-signup-view';

import Dashboard from '../dashboard/dashboard';

import Login from '../login';

import backgroundImage from '../../assets/login-backgroud.png';

import resources from '../../config/resources';
import theme from '../../config/theme';
import ListRequests from '../requests/list';
import ShowRequest from '../requests/show';

function App() {
  return (
    <Admin
      authProvider={authProvider}
      theme={theme}
      dataProvider={dataProvider}
      requireAuth={false}
      i18nProvider={i18nProvider}
      loginPage={<Login backgroundImage={backgroundImage} />}
      dashboard={Dashboard}
    >
      <Resource
        options={{
          label: resources.members.label,
        }}
        icon={People}
        name={resources.members.name}
        create={CreateMember}
        list={ListMember}
        show={ShowMember}
        edit={EditMember}
      />
      <Resource
        options={{
          label: resources.requests.label,
        }}
        icon={Update}
        name={resources.requests.name}
        list={ListRequests}
        show={ShowRequest}
      />
      <CustomRoutes noLayout>
        <Route element={<SignupMember />} path="/signup" />
      </CustomRoutes>
    </Admin>
  );
}

export default App;
