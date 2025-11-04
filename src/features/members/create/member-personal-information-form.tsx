import { SectionTitle } from "@components/section-title";
import { Grid } from "@mui/material";
import { brazilianStates } from "@shared/constants/brazilian-states-map";
import { DateInput, required, SelectInput, TextInput } from "react-admin";
import { useWatch } from 'react-hook-form';

export function MemberPersonalInformationForm() {
  const naturality = useWatch<{ naturality: string }>({ name: 'naturality' })

  return <Grid container spacing={1}>
    <Grid item xs={12}>
      <SectionTitle>
        Informações Pessoais
      </SectionTitle>
    </Grid>
    <Grid item xs={12}>
      <TextInput
        source="name"
        label="Nome"
        fullWidth
        validate={[
          required('O campo \'nome\' é obrigatório'),
        ]}
        style={{ marginTop: 0 }}
      />
    </Grid>
    <Grid item xs={12} md={4}>
      <DateInput
        source="birthdate"
        label="Data de Nascimento"
        validate={[
          required('O campo \'data de nascimento\' é obrigatório'),
        ]}
        fullWidth
        style={{ marginTop: 0 }}
      />
    </Grid>
    <Grid item xs={12} md={4}>
      <SelectInput
        label="Naturalidade"
        source="naturality"
        choices={[{
          id: 'brasileiro',
          name: 'Brasileiro',
        }, {
          id: 'estrangeiro',
          name: 'Estrangeiro',
        }]}
        validate={[
          required('O campo \'naturalidade\' é obrigatório'),
        ]}
        fullWidth
        style={{ marginTop: 0 }}
      />
    </Grid>
    <Grid item xs={12} md={4}>
      <SelectInput
        source="ufOrigin"
        disabled={naturality === 'estrangeiro'}
        label="UF de naturalidade"
        choices={brazilianStates}
        fullWidth
        validate={naturality === 'brasileiro' ? [
          required('O campo \'Uf de naturalidade\' é obrigatório'),
        ] : []}
        style={{ marginTop: 0 }}
      />
    </Grid>
  </Grid>
}