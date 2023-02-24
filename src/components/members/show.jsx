import React from 'react';
import { SimpleShowLayout, Show, TextField } from 'react-admin';
import columns from '../../constants/model-columns';

export default function ShowMember() {
  return (
    <Show>
      <SimpleShowLayout>
        {columns.full.map((item) => <TextField label={item.label} source={item.source} />)}
      </SimpleShowLayout>
    </Show>
  );
}
