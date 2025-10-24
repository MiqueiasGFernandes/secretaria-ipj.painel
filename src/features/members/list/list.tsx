import { RenderInformation } from '@components/render-information';
import { MemberEntity } from '@features/entities';
import { columns } from '@shared/constants';
import { transformBooleanFieldIntoViewText } from '@shared/transformers';
import { ShowColumn } from '@shared/types/column-type';
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
              render={(record) => {
                const member = new MemberEntity(record)

                member.transformISODateIntoLocalString()

                return <RenderInformation isDetailedView={false} record={member} column={item as ShowColumn<MemberEntity>} />
              }} />
          )
        })}
        <ShowButton label="Exibir" />
        <EditButton label="Editar" />
      </Datagrid>
    </List>
  );
}