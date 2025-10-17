import { Grid } from '@mui/material';
import { TextInput } from 'react-admin';

export function AdditionalMemberInformationForm() {
  return <>
    <Grid item xs={12}>
      <TextInput
        source='observations'
        label='Observações'
        fullWidth
        multiline
      />
    </Grid>
  </>
}