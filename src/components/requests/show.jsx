import React from 'react';
import { Show, SimpleShowLayout } from 'react-admin';
import columns from './request-model-columns';

export default function ShowRequest() {
  return (
    <Show>
      <SimpleShowLayout>
        {columns.map((item) => React.createElement(item.View, {
          label: item.label,
          source: item.source,
        }))}
        {/* Adicionar botões de ação e estratégias de exibição de membro */}
      </SimpleShowLayout>
    </Show>
  );
}
