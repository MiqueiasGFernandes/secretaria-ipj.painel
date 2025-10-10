import {
  Admin,
  CustomRoutes,
  DashboardComponent,
  Resource,
} from 'react-admin';

import { AuthenticationFormsSwitcher } from '@features/authentication/auth-form-switcher';
import { People, Update } from '@mui/icons-material';
import { dataProvider } from '@services/data-provider';
import { i18nProvider } from '@services/translation';
import { Route } from 'react-router-dom';
import { theme } from 'styles/theme';
import { authProvider } from '@services/auth-provider';
import { resources } from '@shared/constants/resources-map';
import { CreateMember } from '@features/members/create';
import { ListMembers } from '@features/members/list';
import { EditMember } from '@features/members/edit';
import { ShowMember } from '@features/members/show';
import { ShowRequest } from '@features/requests/show';
import { ListRequests } from '@features/requests/list';
import { SignupMember } from '@features/member-signup';
import { Dashboard } from '@features/dashboard';

export function App() {
  return (
    <Admin
      authProvider={authProvider}
      theme={theme}
      dataProvider={dataProvider}
      requireAuth={false}
      i18nProvider={i18nProvider}
      loginPage={<AuthenticationFormsSwitcher />}
      dashboard={Dashboard as DashboardComponent}
    >
      <Resource
        options={{
          label: resources.members.label,
        }}
        icon={People}
        name={resources.members.name}
        create={CreateMember}
        list={ListMembers}
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
