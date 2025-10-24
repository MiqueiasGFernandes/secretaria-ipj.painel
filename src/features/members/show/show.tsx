import { RenderInformation } from '@components/render-information';
import { MemberEntity } from '@features/entities';
import { WarningAmber as WarningIcon } from '@mui/icons-material';
import { Alert } from '@mui/material';
import { columns } from '@shared/constants';
import { ShowColumn } from '@shared/types/column-type';
import { FunctionField, Show, SimpleShowLayout, useRecordContext } from 'react-admin';

export function ShowMember() {
  const record = useRecordContext();
  return (
    <Show>
      <SimpleShowLayout>
        {record?.hasAcceptShareSelfImage === 0 && (
          <Alert
            icon={<WarningIcon fontSize="inherit" />}
            severity="warning"
            sx={{ mb: 2 }}
          >
            Este membro autorizou o compartilhamento da própria imagem.
          </Alert>
        )}

        {columns.full.map((item) => (
          <FunctionField
            key={item.label}
            label={item.label}
            source={item.source}
            render={(record) => {
              const member = new MemberEntity(record)

              member.transformISODateIntoLocalString()

              return <RenderInformation isDetailedView={true} record={member} column={item as ShowColumn<MemberEntity>} />
            }}
          />
        ))}
      </SimpleShowLayout>
    </Show>
  );
}
