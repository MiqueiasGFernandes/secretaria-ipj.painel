import { SectionTitle } from '@components/section-title';
import { Grid } from '@mui/material';
import {
  DateInput, required, SelectInput, TextInput,
} from 'react-admin';
import { useWatch } from 'react-hook-form';

export function FamilyMemberForm() {
  const maritalStatus = useWatch<{ maritalStatus: string }>({ name: 'maritalStatus' })

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <SectionTitle>
          Família
        </SectionTitle>
      </Grid>
      <Grid item xs={6} md={4}>
        <SelectInput
          source="maritalStatus"
          label="Estado Civil"
          validate={
            [
              required('O campo \'estado civil\' é obrigatório'),
            ]
          }
          fullWidth
          choices={[
            {
              id: 'solteiro',
              name: 'Solteiro',
            },
            {
              id: 'casado',
              name: 'Casado',
            },
            {
              id: 'divorciado',
              name: 'Divorciado',
            },
            {
              id: 'viuvo',
              name: 'Viúvo',
            },
          ]}
          style={{ marginTop: 0 }}
        />
      </Grid>
      <Grid item xs={6} md={4}>
        <DateInput
          source="weddingDate"
          disabled={maritalStatus !== 'casado'}
          label="Data de Casamento"
          type="date"
          fullWidth
          validate={
            maritalStatus === 'casado' ? [
              required('O campo \'data de casamento\' é obrigatório'),
            ] : []
          }
          style={{ marginTop: 0 }}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextInput
          source="spouse"
          label="Nome do Cônjuge"
          fullWidth
          disabled={maritalStatus !== 'casado'}
          validate={
            maritalStatus === 'casado' ? [
              required('O campo \'nome do cônjuge\' é obrigatório'),
            ] : []
          }
        />
      </Grid>
      <Grid item xs={12}>
        <TextInput
          source="fatherName"
          label="Nome do Pai"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextInput
          source="motherName"
          label="Nome da Mãe"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextInput
          multiline
          source="anotherFamilyMembers"
          label="Outros Integrantes da Família"
          fullWidth
        />
      </Grid>
    </Grid>
  );
}
