import React from 'react';
import {
  Datagrid, EditButton,
  FunctionField,
  List, ShowButton,
} from 'react-admin';
import columns from '../../constants/model-columns';
import isBoolean from '../../helpers/is-boolean';

function ListMembers() {
  return (
    <List
      storeKey={false}
      filter={{ status: 'pending' }}
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
