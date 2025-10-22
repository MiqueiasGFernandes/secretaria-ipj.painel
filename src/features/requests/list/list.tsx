import React from 'react';
import {
  Datagrid,
  List,
  ShowButton,
} from 'react-admin';
import { requestColumns } from '@shared/constants';

function ListRequests() {
  return (
    <List
      filter={{
        status: 'pending',
      }}
      exporter={false}
    >
      <Datagrid bulkActionButtons={false}>
        {requestColumns.resume.map((item) => React.createElement(item.View, {
          source: item.source,
          label: item.label,
        }))}
        <ShowButton label="Exibir" />
      </Datagrid>
    </List>
  );
}

export {ListRequests};
