import React from 'react';
import { Admin, defaultTheme, Resource } from 'react-admin';
import dataProviderService from '../../services/data-provider';
import ListMember from '../members/list';
import CreateMember from '../members/create';

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
      <Resource name="membros" create={CreateMember} list={ListMember} />
    </Admin>
  );
}

export default App;
