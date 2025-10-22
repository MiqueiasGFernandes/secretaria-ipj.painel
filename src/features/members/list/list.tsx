import { MemberEntity } from '@features/entities';
import { columns } from '@shared/constants';
import { transformBooleanFieldIntoViewText } from '@shared/transformers';
import {
  Datagrid,
  EditButton,
  FunctionField,
  List,
  ShowButton,
  TextInput,
  BooleanInput,
} from 'react-admin';


export function ListMembers() {
  return (
    <List
      storeKey={false}
      filters={
        [
          <TextInput
            key="search"
            label="Nome"
            source="name"
            alwaysOn
          />,
          <BooleanInput
            source="hasAcceptShareSelfImage"
            label="Autoriza uso de Imagem"
          />
        ]
      }
    >
      <Datagrid bulkActionButtons={false}>
        {columns.resume.map((item) => {
          return (
            <FunctionField
              key={item.source}
              label={item.label}
              source={item.source}
              render={(render) => transformBooleanFieldIntoViewText<MemberEntity>(item.source as keyof MemberEntity, render[item.source])}
            />
          )
        })}
        <ShowButton label="Exibir" />
        <EditButton label="Editar" />
      </Datagrid>
    </List>
  );
}