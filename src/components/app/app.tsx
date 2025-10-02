import {
  Admin,
  CustomRoutes,
  Resource,
} from 'react-admin';

import { People, Update } from '@mui/icons-material';
import { Route } from 'react-router-dom';
import { authProvider } from '../../services/auth-provider';
import { theme } from 'styles/theme';

export function App() {
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
