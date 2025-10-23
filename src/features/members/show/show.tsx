import { WarningAmber as WarningIcon } from '@mui/icons-material';
import { Alert } from '@mui/material';
import { columns } from '@shared/constants';
import { ShowColumn } from '@shared/types/column-type';
import { FunctionField, Show, SimpleShowLayout, useRecordContext } from 'react-admin';
import { RenderInformation } from './render-information';

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
            render={(record) => <RenderInformation record={record} column={item as ShowColumn} />}
          />
        ))}
      </SimpleShowLayout>
    </Show>
  );
}
