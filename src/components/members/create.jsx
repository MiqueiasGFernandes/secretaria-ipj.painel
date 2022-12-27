import {
  MenuItem, Select as CustomSelectInput, TextField as CustomTextField, Grid,
} from '@mui/material';
import React, { useState } from 'react';
import {
  Create,
  DateInput, RadioButtonGroupInput, required,
  SelectInput,
  TextInput,
} from 'react-admin';
import academicLevels from '../../constants/academic-levels';
import brazilianStates from '../../constants/brazilian-states';
import addressProviderService from '../../services/address-provider';
import Step from '../step';
import Stepper from '../stepper';

function CreateMember() {
  const [member, setMember] = useState({});
  const [address, setAddress] = useState({
    cep: '',
    logradouro: '',
    complemento: '',
    bairro: '',
    localidade: '',
    cidade: '',
    uf: '',
  });

  const handleGetAddressByPostalCode = async (cep) => {
    const addressInformation = await addressProviderService.getOne(cep.replace('-', ''));

    setAddress(addressInformation);
  };

  return (
    <Create
      title="Cadastrar Novo Membro"
    >
      <Stepper memberData={member} setMember={setMember}>
        <Step
          label="Informações de Naturalidade"
        >
          <Grid container columnSpacing={2}>
            <Grid item xs={12}>
              <TextInput
                source="nome"
                fullWidth
                validate={[
                  required('O campo \'nome\' é obrigatório'),
                ]}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <DateInput
                source="data de nascimento"
                label="Data de Nascimento"
                validate={[
                  required('O campo \'data de nascimento\' é obrigatório'),
                ]}
                fullWidth
              />

            </Grid>
            <Grid item xs={12} md={4}>
              <SelectInput
                source="naturalidade"
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
                source="uf de naturalidade"
                label="UF de naturalidade"
                choices={brazilianStates}
                fullWidth
              />
            </Grid>
          </Grid>
        </Step>
        <Step label="Família">
          <Grid container columnSpacing={1}>
            <Grid item xs={6} md={4}>
              <SelectInput
                source="estado civil"
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
                source="data de casamento"
                style={{ marginRight: '15px' }}
                label="Data de Casamento"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextInput
                style={{ marginRight: '15px', width: '80%' }}
                source="nome do conjuge"
                label="Nome do Cônjuge"
                fullWidth
              />
            </Grid>
            <Grid xs={12}>
              <TextInput
                source="nome do pai"
                label="Nome do Pai"
                fullWidth
              />
            </Grid>
            <Grid xs={12}>
              <TextInput
                source="nome da mae"
                label="Nome da Mãe"
                fullWidth
              />
            </Grid>
            <Grid xs={12}>
              <TextInput
                multiline
                source="outros integrantes da familia"
                label="Outros Integrantes da Família"
                fullWidth
              />
            </Grid>
          </Grid>
        </Step>
        <Step label="Contato">
          <Grid container columnSpacing={2}>
            <Grid item xs={4}>
              <TextInput
                source="cep"
                label="CEP"
                onBlur={(event) => handleGetAddressByPostalCode(event.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={8}>
              <CustomTextField
                width="50%"
                label="Endereço"
                value={address.logradouro}
                onChange={(event) => setMember({
                  ...member,
                  address: event.target.value,
                })}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                label="Bairro"
                value={address.bairro}
                onChange={(event) => setMember({
                  ...member,
                  district: event.target.value,
                })}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                label="Cidade"
                value={address.localidade}
                onChange={(event) => setMember({
                  ...member,
                  city: event.target.value,
                })}
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <CustomSelectInput
                variant="filled"
                label="UF"
                value={address.uf}
                onChange={(event) => setMember({
                  ...member,
                  uf: event.target.value,
                })}
                style={{
                  marginTop: 8,
                  height: '50px',
                }}
                fullWidth
              >
                {brazilianStates.map((item) => <MenuItem value={item.id}>{item.name}</MenuItem>)}
              </CustomSelectInput>
            </Grid>
            <Grid item xs={4}>
              <TextInput
                type="number"
                source="numero de residencia"
                label="Número da residência"
                validate={[
                  required('O campo \'número de residência\' é obrigatório'),
                ]}
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <TextInput
                source="complemento"
                label="Complemento"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextInput
                source="telefone residencial"
                label="Tel. Residencial"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextInput
                source="telefone comercial"
                label="Tel. Comercial"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextInput
                source="celular"
                label="Celular"
                fullWidth
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
          </Grid>
        </Step>
        <Step label="Escolaridade/Profissão">
          <Grid container columnSpacing={2}>
            <Grid item xs={12} md={4}>
              <SelectInput
                source="grau de instrucao"
                label="Grau de Instrução"
                choices={academicLevels}
                fullWidth
                style={{
                  marginRight: 10,
                }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <TextInput
                source="profissao"
                label="Profissão"
                fullWidth
              />
            </Grid>
          </Grid>
        </Step>
        <Step label="Informações de Membresia">
          <Grid container columnSpacing={2}>
            <Grid item xs={12} md={2}>
              <RadioButtonGroupInput
                source="membro"
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
                source="igreja anterior"
                label="IPB de Membresia"
                fullWidth
              />
            </Grid>
            <Grid item xs={6} md={2}>
              <DateInput
                source="data do batismo infantil"
                label="Data do Batismo Infantil"
              />
            </Grid>
            <Grid item xs={6} md={10}>
              <TextInput
                source="ministro oficante do batismo infantil"
                label="Ministro Oficiante"
                fullWidth
              />
            </Grid>
            <Grid item xs={6} md={2}>
              <DateInput
                source="data da profissao de fe"
                label="Data da Profissão de Fé"
              />
            </Grid>
            <Grid item xs={6} md={10}>
              <TextInput
                source="ministro oficiante da profissao de fe"
                label="Ministro Oficiante"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextInput
                source="observacoes"
                label="Observações"
                fullWidth
              />
            </Grid>
          </Grid>
        </Step>
      </Stepper>
    </Create>
  );
}

export default CreateMember;
