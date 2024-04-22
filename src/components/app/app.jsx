import React from 'react';
import {
  Admin,
  Resource,
} from 'react-admin';

import authProvider from '../../services/auth-provider';
import dataProvider from '../../services/data-provider';
import i18nProvider from '../../services/translation/i18n-provider';

import CreateMember from '../members/create';
import EditMember from '../members/edit';
import ListMember from '../members/list';
import ShowMember from '../members/show';

import Dashboard from '../dashboard/dashboard';

import Login from '../login';

import backgroundImage from '../../assets/login-backgroud.png';

import theme from '../../config/theme';
import resources from '../../config/resources';

function App() {
  return (
    <Admin
      authProvider={authProvider}
      theme={theme}
      dataProvider={dataProvider}
      requireAuth
      i18nProvider={i18nProvider}
      loginPage={<Login backgroundImage={backgroundImage} />}
      dashboard={Dashboard}
    >
      <Resource
        options={{
          label: resources.members.name,
        }}
        name={resources.members.name}
        create={CreateMember}
        list={ListMember}
        show={ShowMember}
        edit={EditMember}
      />
    </Admin>
  );
}

export default App;
