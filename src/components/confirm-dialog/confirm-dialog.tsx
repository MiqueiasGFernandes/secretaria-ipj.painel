import { Confirm } from "react-admin";

type OpenDialogState = {
  APPROVE: boolean,
  REJECT: boolean
}

type ConfirmDialogOptions = {
  dialogOpen: OpenDialogState,
  setDialogOpen: (dialogOpen: OpenDialogState) => void,
  onConfirm: () => void,
  onReject: () => void
}

export function ConfirmDialog({ dialogOpen, setDialogOpen, onConfirm, onReject }: ConfirmDialogOptions) {
  return (
    <>
      <Confirm
        isOpen={dialogOpen.APPROVE}
        title="Aprovar solicitação"
        content="Deseja aprovar a solicitação?"
        cancel="Cancelar"
        onConfirm={onConfirm}
        onClose={() => setDialogOpen({ ...dialogOpen, APPROVE: false })}
      />
      <Confirm
        isOpen={dialogOpen.REJECT}
        title="Rejeitar solicitação"
        content="Deseja rejeitar a solicitação?"
        cancel="Cancelar"
        onConfirm={onReject}
        onClose={() => setDialogOpen({ ...dialogOpen, REJECT: false })}
      />
    </>

  );
}
