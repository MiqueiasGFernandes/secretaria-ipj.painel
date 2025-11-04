import { useCopySignUpLinkToClipBoard } from "@features/hooks";
import { Button, Grid, Typography } from "@mui/material";
import { Empty } from "react-admin";

export function ListEmpty() {
  const { copyToClipBoard } = useCopySignUpLinkToClipBoard()

  return <Grid container spacing={1}>
    <Grid item xs={12}>
      <Empty />
    </Grid>
    <Grid container item xs={12} sx={{ justifyContent: 'center', alignItems: 'center' }}>
      <Button onClick={copyToClipBoard}>
        <Typography variant="caption">Copiar link para autocadastro</Typography>
      </Button>
    </Grid>
  </Grid>
}