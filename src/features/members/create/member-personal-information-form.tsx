import { SectionTitle } from "@components/section-title";
import { Grid } from "@mui/material";
import { brazilianStates } from "@shared/constants/brazilian-states-map";
import { DateInput, required, SelectInput, TextInput } from "react-admin";

export function MemberPersonalInformationForm() {
  return <>
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
        label="UF de naturalidade"
        choices={brazilianStates}
        fullWidth
        validate={[
          required('O campo \'Uf de naturalidade\' é obrigatório'),
        ]}
        style={{ marginTop: 0 }}
      />
    </Grid>
  </>
}