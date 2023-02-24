import React from 'react';
import {
  Datagrid, EditButton, List, ShowButton, TextField, TextInput,
} from 'react-admin';
import columns from '../../constants/model-columns';

function ListMembers() {
  return (
    <List filters={
      [
        <TextInput
          label="Pesquisar"
          source="q"
          alwaysOn
          style={{ marginTop: 30, marginBottom: 30 }}
        />,
      ]
    }
    >
      <Datagrid>
        {columns.resume.map(({ source, label }) => (
          <TextField source={source} label={label} />
        ))}
        <ShowButton label="Exibir" />
        <EditButton label="Editar" />
      </Datagrid>
    </List>
  );
}

export default ListMembers;
