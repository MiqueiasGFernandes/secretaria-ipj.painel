import { useDataProvider, useNotify, useRedirect } from "ra-core";
import { v4 } from "uuid";

export function useManageRequests(record: any) {
  const notify = useNotify();
  const redirect = useRedirect();
  const dataProvider = useDataProvider();

  const onConfirm = async () => {
    if (!record || !record.id) {
      notify('Registro não disponível');
      return;
    }

    const data = { status: 'approved', memberDocumentId: v4().slice(0, 4).toUpperCase() };
    try {
      await dataProvider.update('requests', { id: record.id, data, previousData: {} });
      notify('Solicitação aprovada com êxito');
      redirect('/requests');
    } catch (err) {
      console.error(err)
      notify('Ocorreu um erro interno ao aprovar o registro');
    }
  };

  const onReject = async () => {
    if (!record || !record.id) {
      notify('Registro não disponível');
      return;
    }

    try {
      await dataProvider.update('requests', { id: record.id, data: { status: 'rejected' }, previousData: {} });
      notify('Solicitação rejeitada com êxito');
      redirect('/requests');
    } catch (err) {
      console.error(err)
      notify('Ocorreu um erro interno ao rejeitar o registro');
    }
  };

  return { onReject, onConfirm };
}
