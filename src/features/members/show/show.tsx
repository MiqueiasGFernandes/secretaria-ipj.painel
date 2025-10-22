import { SelfImageWarning } from '@features/self-image-warning';
import { WarningAmber as WarningIcon } from '@mui/icons-material';
import { Alert } from '@mui/material';
import { columns } from '@shared/constants';
import { isBoolean, isEmail } from '@shared/transformers';
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
              if (item.source === "hasAcceptShareSelfImage") {
                return <SelfImageWarning isSharingSelfImage={record[item.source]} />
              }

              const value = record[item.source];

              if (isBoolean(value)) {
                return value ? 'Sim' : 'Não';
              }

              if (isEmail(value)) {
                return (
                  <a
                    title={`Enviar email para: ${value}`}
                    href={`mailto:${value}`}
                  >
                    {value}
                  </a>
                );
              }

              return value || '-';
            }}
          />
        ))}
      </SimpleShowLayout>
    </Show>
  );
}
