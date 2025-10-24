import { ConfirmDialog } from '@components/confirm-dialog';
import { RenderInformation } from '@components/render-information';
import { MemberEntity } from '@features/entities';
import { MemberRequestEntity } from '@features/entities/member-request.entity';
import { useManageRequests } from '@features/hooks';
import { Close, Done } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import { columns as memberColumns, requestColumns } from '@shared/constants';
import { ShowColumn } from '@shared/types/column-type';
import React, { useState } from 'react';
import {
  Button,
  FunctionField,
  Show as ShowContext,
  SimpleShowLayout, useRecordContext
} from 'react-admin';

export function ShowRequest() {
  const [openDialog, setOpenDialog] = useState({
    APPROVE: false,
    REJECT: false,
  });

  function InnerShowContent() {
    const record = useRecordContext();
    const { onConfirm, onReject } = useManageRequests(record);

    return (
      <>
        <ConfirmDialog
          dialogOpen={openDialog}
          setDialogOpen={setOpenDialog}
          onConfirm={onConfirm}
          onReject={onReject}
        />
        <SimpleShowLayout>
          <Typography fontSize={32}>Dados da Solicitação</Typography>
          {requestColumns.resume.map((item) => React.createElement(item.View, {
            key: item.source,
            label: item.label,
            source: item.source,
          }))}
          <Grid xs={12} justifyItems="start">
            <Button
              color="success"
              startIcon={<Done />}
              variant="contained"
              label="Aprovar"
              style={{ marginRight: 5 }}
              onClick={() => setOpenDialog({ ...openDialog, APPROVE: true })}
            />
            <Button
              color="error"
              startIcon={<Close />}
              variant="contained"
              label="rejeitar"
              onClick={() => setOpenDialog({ ...openDialog, REJECT: true })}
            >
              <Typography>Rejeitar</Typography>
            </Button>
          </Grid>
        </SimpleShowLayout>
        <SimpleShowLayout>
          {memberColumns.full
            .filter((item) => item.source !== 'memberDocumentId')
            .map((item) => (
              <FunctionField
                key={item.source}
                label={item.label}
                source={item.source}
                render={(record) => {
                  const request = new MemberRequestEntity(record)

                  const member = new MemberEntity(request.member);

                  member.transformISODateIntoLocalString()

                  return <RenderInformation isDetailedView={true} record={member} column={item as ShowColumn<MemberEntity>} />

                }}
              />
            ))}
        </SimpleShowLayout>
      </>
    );
  }

  return (
    <ShowContext>
      <InnerShowContent />
    </ShowContext>
  );
}
