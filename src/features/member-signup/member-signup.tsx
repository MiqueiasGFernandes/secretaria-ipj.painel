import { SectionTitle } from '@components/section-title';
import { useAddress, useMemberSignup } from '@features/hooks';
import { Done } from '@mui/icons-material';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from '@mui/material';
import { academicLevels, brazilianStates } from '@shared/constants';
import { useState } from 'react';
import {
  DateInput,
  RadioButtonGroupInput,
  SaveButton,
  SelectInput,
  SimpleForm,
  TextInput,
  Toolbar,
  required,
  useAuthenticated
} from 'react-admin';
import logo from '../../assets/logo.png';
import Terms from '../../components/terms/terms';
import { useStyles } from './styles';

export function SignupMember() {
  const classes = useStyles();

  useAuthenticated({
    params: {
      isGuest: true,
    },
  });

  const [openTermsDialog, setOpenTermsDialog] = useState(false);

  const { address, handleGetAddressByPostalCode } = useAddress()
  const { onSubmit, requestId, success } = useMemberSignup()

  return (
    <Grid container classes={classes.container}>
      <div>
        <img src={logo} alt="Igreja Presbiteriana de Jundiaí" />
      </div>
      <SimpleForm
        onSubmit={(event: any) => onSubmit(event)}
        toolbar={(
          <Toolbar>
            <SaveButton label="Cadastrar-se" />
          </Toolbar>
        )}
      >
        <Grid columnSpacing={1} container className={classes.content}>
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
              style={{ paddingTop: 3 }}
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
            />
          </Grid>
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
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <DateInput
              source="weddingDate"
              label="Data de Casamento"
              type="date"
              fullWidth
              style={{ paddingTop: 3 }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextInput
              source="spouse"
              label="Nome do Cônjuge"
              fullWidth
            />
          </Grid>
          <Grid xs={12}>
            <TextInput
              source="fatherName"
              label="Nome do Pai"
              fullWidth
              style={{
                marginLeft: 8,
              }}
            />
          </Grid>
          <Grid xs={12}>
            <TextInput
              source="motherName"
              label="Nome da Mãe"
              fullWidth
              style={{
                marginLeft: 8,
              }}
            />
          </Grid>
          <Grid xs={12}>
            <TextInput
              multiline
              source="anotherFamilyMembers"
              label="Outros Integrantes da Família"
              fullWidth
              style={{
                marginLeft: 8,
              }}
            />
          </Grid>
          <Grid xs={12} style={{ marginLeft: 8 }}>
            <SectionTitle>
              Contato
            </SectionTitle>
          </Grid>
          <Grid item xs={4}>
            <TextInput
              source="cep"
              label="CEP"
              onBlur={(event) => handleGetAddressByPostalCode(event.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={8}>
            <TextInput
              label="Endereço"
              source="address"
              fullWidth
              defaultValue={address.logradouro}
              validate={[
                required('O campo \'endereço\' é obrigatório'),
              ]}
            />
          </Grid>
          <Grid item xs={6}>
            <TextInput
              label="Bairro"
              source="district"
              fullWidth
              defaultValue={address.bairro}
              validate={[
                required('O campo \'bairro\' é obrigatório'),
              ]}
            />
          </Grid>
          <Grid item xs={6}>
            <TextInput
              label="Cidade"
              defaultValue={address.localidade}
              source="city"
              fullWidth
              validate={[
                required('O campo \'cidade\' é obrigatório'),
              ]}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <SelectInput
              label="UF"
              defaultValue={address.uf}
              source="uf"
              fullWidth
              choices={brazilianStates}
              validate={[
                required('O campo \'UF\' é obrigatório'),
              ]}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <TextInput
              type="number"
              source="residenceNumber"
              label="Número da residência"
              validate={[
                required('O campo \'número de residência\' é obrigatório'),
              ]}
              fullWidth
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <TextInput
              source="addressComplement"
              label="Complemento"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextInput
              source="homePhone"
              label="Tel. Residencial"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextInput
              source="commercialPhone"
              label="Tel. Comercial"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextInput
              source="mobilePhone"
              label="Celular"
              fullWidth
              validate={[
                required('O campo \'celular\' é obrigatório'),
              ]}
            />
          </Grid>
          <Grid item xs={12}>
            <TextInput
              type="email"
              source="email"
              label="Email"
              fullWidth
            />
          </Grid>
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
                marginRight: 10,
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
          <Grid xs={12} style={{ marginLeft: 8 }}>
            <SectionTitle>
              Membresia
            </SectionTitle>
          </Grid>
          <Grid item xs={12} md={2}>

            <RadioButtonGroupInput
              source="isMember"
              label="Já é membro da IPB?"
              validate={[
                required('O campo é obrigatório'),
              ]}
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
          <Grid item xs={12}>
            <DateInput
              source="pedobaptismDate"
              label="Data do Batismo Infantil"
            />
          </Grid>
          <Grid item xs={12}>
            <TextInput
              source="pedobaptismMinister"
              label="Ministro Oficiante"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <DateInput
              source="faithConfessionDate"
              label="Data da Profissão de Fé"
            />
          </Grid>
          <Grid item xs={12}>
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
              validate={[
                required('O campo é obrigatório'),
              ]}
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
          <Grid item xs={12}>
            <TextInput
              source="observations"
              label="Observações"
              fullWidth
              multiline
            />
          </Grid>
        </Grid>
        <Grid>
          <Typography fontSize={10}>
            Ao clicar em Cadastre-se você declara que concorda com
            os <button
              type="button"
              style={{
                color: 'blue',
                cursor: 'pointer',
                textDecoration: 'underline',
                background: 'none',
                border: 0,
              }}
              onClick={() => setOpenTermsDialog(true)}
            >termos de privacidade.
            </button>
          </Typography>
          <Terms onClose={() => setOpenTermsDialog(false)} isOpen={openTermsDialog} />
          <Dialog open={success}>
            <DialogTitle>
              <b>
                Solicitação {requestId} Criada
              </b>
            </DialogTitle>
            <DialogContent>
              <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: 10 }}>
                <Done
                  style={{
                    fontSize: 100,
                    color: 'green',
                  }}
                />
              </div>
              <div>
                <Typography>
                  Sua solicitação foi criada com sucesso!
                  Obrigado por contribuir para facilitar a gestão de membros da nossa Igreja!
                </Typography>
              </div>

            </DialogContent>
          </Dialog>
        </Grid>
      </SimpleForm>
    </Grid>
  );
}