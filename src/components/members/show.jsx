import React from 'react';
import { FunctionField, Show, SimpleShowLayout } from 'react-admin';
import columns from '../../constants/model-columns';
import isBoolean from '../../helpers/is-boolean';
import isEmail from '../../helpers/is-email';

export default function ShowMember() {
  return (
    <Show>
      <SimpleShowLayout>
        {columns.full.map((item) => (
          <FunctionField
            label={item.label}
            source={item.source}
            render={(render) => {
              if (isBoolean(render[item.source])) {
                return item ? 'Sim' : 'Não';
              }

              if (isEmail(render[item.source])) {
                return <a title={`Enviar email para: ${render[item.source]}`} href={`mailto:${render[item.source]}`}>{render[item.source]}</a>;
              }
              return render[item.source] || '-';
            }}
          />
        ))}
      </SimpleShowLayout>
    </Show>
  );
}
