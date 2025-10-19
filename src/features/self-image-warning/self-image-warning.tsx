import { Alert } from "@mui/material";
import { WarningAmber as WarningIcon } from '@mui/icons-material';

type SelfImageWarningOptions = {
  isSharingSelfImage: number | boolean
}

export function SelfImageWarning({ isSharingSelfImage }: SelfImageWarningOptions) {
  return isSharingSelfImage === 0 ? <Alert
    icon={<WarningIcon fontSize="inherit" />}
    severity="warning"
    sx={{ mb: 2 }}
  >
    Atenção! Este membro optou por não permitir o uso de sua imagem nas mídias digitais da igreja
  </Alert> : <Alert>
    Este membro optou por permitir o uso de sua imagem nas mídias digitais da igreja
  </Alert>
}