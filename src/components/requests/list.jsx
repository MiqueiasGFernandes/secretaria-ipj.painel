import React from 'react';
import {
  Datagrid,
  List,
  ShowButton,
  TextInput,
} from 'react-admin';

import columns from './request-model-columns';

function ListRequests() {
  return (
    <List
      filters={
      [
        <TextInput
          label="Pesquisar"
          source="q"
          alwaysOn
          style={{ marginTop: 30, marginBottom: 30 }}
        />,
      ]
    }
      exporter={false}

    >
      <Datagrid>
        {columns.map((item) => React.createElement(item.View, {
          source: item.source,
          label: item.label,
        }))}
        <ShowButton label="Exibir" />
      </Datagrid>
    </List>
  );
}

export default ListRequests;
