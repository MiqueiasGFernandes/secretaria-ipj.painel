
import { ConfirmDialog } from '@components/confirm-dialog';
import { useManageRequests } from '@features/hooks';
import { Close, Done } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import { requestColumns, columns as memberColumns } from '@shared/constants';
import { isBoolean, isEmail } from '@shared/transformers';
import React, { useState } from 'react';
import {
  Button,
  FunctionField,
  Show,
  SimpleShowLayout
} from 'react-admin';

export function ShowRequest() {
  const [openDialog, setOpenDialog] = useState({
    APPROVE: false,
    REJECT: false,
  });

  const { onConfirm, onReject } = useManageRequests()

  return (
    <>
      <Show>
        <ConfirmDialog 
          dialogOpen={openDialog} 
          setDialogOpen={setOpenDialog}
          onConfirm={onConfirm}
          onReject={onReject}
         />
        <SimpleShowLayout>
          <Typography fontSize={32}>Dados da Solicitação</Typography>
          {requestColumns.resume.map((item) => React.createElement(item.View, {
            label: item.label,
            source: item.source,
          }))}
          <Grid xs={12} justifyItems="start">
            <Button
              color="success"
              startIcon={<Done />}
              variant="contained"
              label="Aprovar"
              style={{
                marginRight: 5,
              }}
              onClick={() => setOpenDialog({ ...openDialog, APPROVE: true })}
            />
            <Button
              color="error"
              startIcon={<Close />}
              variant="contained"
              label="rejeitar"
              onClick={() => setOpenDialog({ ...openDialog, REJECT: true })}
            >
              <Typography>
                Rejeitar
              </Typography>
            </Button>
          </Grid>
        </SimpleShowLayout>
      </Show>
      <Show>
        <SimpleShowLayout>
          {memberColumns.full
            .filter((item) => item.source !== 'memberDocumentId')
            .map((item) => (
              <FunctionField
                label={item.label}
                source={item.source}
                render={({ member: render }) => {
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
    </>
  );
}
