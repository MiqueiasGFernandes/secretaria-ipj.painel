import React from 'react';
import { Admin, defaultTheme, Resource } from 'react-admin';
import dataProviderService from '../../services/data-provider';
import ListMember from '../members/list';
import CreateMember from '../members/create';
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
    <Admin theme={customTheme} dataProvider={dataProviderService}>
      <Resource name="membros" create={CreateMember} list={ListMember} show={ShowMember} />
    </Admin>
  );
}

export default App;
