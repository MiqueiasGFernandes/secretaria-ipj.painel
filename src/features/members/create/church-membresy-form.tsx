import { SectionTitle } from "@components/section-title";
import { Grid } from "@mui/material";
import { DateInput, RadioButtonGroupInput, TextInput } from "react-admin";

export function ChurchMembresyForm() {
  return (<>
    <Grid item xs={12}>
      <SectionTitle>
        Membresia
      </SectionTitle>
    </Grid>
    <Grid item xs={12} md={2}>
      <RadioButtonGroupInput
        source="isMember"
        label="Já é membro da IPB?"
        choices={[
          {
            id: true,
            name: 'Sim',
          },
          {
            id: false,
            name: 'Nâo',
          },
        ]}
      />
    </Grid>
    <Grid item xs={12} md={10}>
      <TextInput
        source="previousPresbyterianChurch"
        label="IPB de membresia"
        fullWidth
      />
    </Grid>
    <Grid item xs={6} md={2}>
      <DateInput
        source="pedobaptismDate"
        label="Data do Batismo Infantil"
        fullWidth
      />
    </Grid>
    <Grid item xs={6} md={10}>
      <TextInput
        source="pedobaptismMinister"
        label="Ministro Oficiante"
        fullWidth
      />
    </Grid>
    <Grid item xs={6} md={2}>
      <DateInput
        source="faithConfessionDate"
        label="Data da Profissão de Fé"
        fullWidth
      />
    </Grid>
    <Grid item xs={6} md={10}>
      <TextInput
        source="faithConfessionMinister"
        label="Ministro Oficiante"
        fullWidth
      />
    </Grid>
    <Grid item xs={12}>
      <RadioButtonGroupInput
        source="frequenter"
        label="Frequentante?"
        choices={[
          {
            id: true,
            name: 'Sim',
          },
          {
            id: false,
            name: 'Nâo',
          },
        ]}
      />
    </Grid>
  </>)
}