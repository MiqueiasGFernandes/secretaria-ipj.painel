import React from 'react';
import { FunctionField, Show, SimpleShowLayout } from 'react-admin';
import columns from '../../constants/model-columns';

export default function ShowMember() {
  return (
    <Show>
      <SimpleShowLayout>
        {columns.full.map((item) => <FunctionField label={item.label} source={item.source} render={(render) => render[item.source] || '-'} />)}
      </SimpleShowLayout>
    </Show>
  );
}
