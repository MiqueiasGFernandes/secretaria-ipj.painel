import React from 'react';
import {
  Datagrid, EditButton, List, ShowButton, FunctionField, TextInput,
} from 'react-admin';
import columns from '../../constants/model-columns';
import isBoolean from '../../helpers/is-boolean';

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
        {columns.resume.map((item) => (
          <FunctionField
            label={item.label}
            source={item.source}
            render={(render) => {
              if (isBoolean(render[item.source])) {
                return item ? 'Sim' : 'Não';
              }
              return render[item.source] || '-';
            }}
          />
        ))}
        <ShowButton label="Exibir" />
        <EditButton label="Editar" />
      </Datagrid>
    </List>
  );
}

export default ListMembers;
