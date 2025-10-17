import { SectionTitle } from "@components/section-title";
import { Grid } from "@mui/material";
import { academicLevels } from "@shared/constants/academic-levels-map";
import { required, SelectInput, TextInput } from "react-admin";

export function ProfessionalMemberInformationForm() {
  return <>
    <Grid xs={12} style={{ marginLeft: 8 }}>
      <SectionTitle>
        Informações Profissionais
      </SectionTitle>
    </Grid>
    <Grid item xs={12} md={4}>
      <SelectInput
        source="schooling"
        label="Grau de Instrução"
        choices={academicLevels}
        fullWidth
        style={{
          marginTop: 0,
        }}
        validate={[
          required('O campo \'Grau de instrução\' é obrigatório'),
        ]}
      />
    </Grid>
    <Grid item xs={12} md={8}>
      <TextInput
        source="occupation"
        label="Profissão"
        fullWidth
      />
    </Grid>
  </>
}