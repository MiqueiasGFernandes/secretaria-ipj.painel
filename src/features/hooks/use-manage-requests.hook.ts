import { useNotify, useRecordContext, useRedirect, useUpdate } from "ra-core";
import { v4 } from "uuid";

export function useManageRequests() {
    const notify = useNotify();
    const record = useRecordContext();
  
    const redirect = useRedirect();
    const [update] = useUpdate();
  
    const onConfirm = () => {
      update('requests', { id: record.id, data: { status: 'approved', memberDocumentId: v4().slice(0, 4).toUpperCase() } })
        .catch(() => {
          notify('Ocorreu um erro interno ao aprovar o registro');
        })
        .then(() => {
          notify('Solicitação aprovada com êxito');
          redirect('/requests');
        });
    };
  
    const onReject = () => {
      update('requests', { id: record.id, data: { status: 'rejected' } })
        .catch(() => {
          notify('Ocorreu um erro interno ao rejeitar o registro');
        })
        .then(() => {
          notify('Solicitação rejeitada com êxito');
          redirect('/requests');
        });
    };

    return { onReject, onConfirm }
}