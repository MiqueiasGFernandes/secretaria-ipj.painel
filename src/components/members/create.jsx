import {
  Grid, MenuItem, Select as CustomSelectInput, TextField as CustomTextField,
} from '@mui/material';
import React, { useState } from 'react';
import {
  Create,
  DateInput, RadioButtonGroupInput, required,
  SelectInput, TextInput,
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
    setMember({
      ...member,
      address: addressInformation.logradouro,
      district: addressInformation.bairro,
      city: addressInformation.localidade,
      uf: addressInformation.uf,
    });
  };

  return (
    <Create
      title="Cadastrar Novo Membro"
    >
      <Stepper member={member} setMember={setMember}>
        <Step
          label="Informações de Naturalidade"
        >
          <Grid container>
            <Grid item xs={12}>
              <TextInput
                source="name"
                fullWidth
                validate={[
                  required('O campo \'nome\' é obrigatório'),
                ]}
              />
            </Grid>
            <Grid />
            <Grid container columnSpacing={2} style={{ justifyContent: 'center', alignItems: 'center' }}>
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
                />
              </Grid>
            </Grid>
          </Grid>
        </Step>
        <Step label="Família">
          <Grid container columnSpacing={1} style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Grid item xs={6} md={4} style={{ paddingLeft: 0 }}>
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
              />
            </Grid>
            <Grid xs={12}>
              <TextInput
                source="motherName"
                label="Nome da Mãe"
                fullWidth
              />
            </Grid>
            <Grid xs={12}>
              <TextInput
                multiline
                source="anotherFamilyMembers"
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
                source="residenceNumber"
                label="Número da residência"
                validate={[
                  required('O campo \'número de residência\' é obrigatório'),
                ]}
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
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
                source="schooling"
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
                source="occupation"
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
                source="isMember"
                address
                label="Já é membro da IPB?"
                choices={[
                  {
                    id: 'true',
                    name: 'Sim',
                  },
                  {
                    id: 'false',
                    name: 'Nâo',
                  },
                ]}
              />
            </Grid>
            <Grid item xs={12} md={10}>
              <CustomTextField
                id="previousPresbyterianChurch"
                label="IPB de membresia"
                value={member.previousPresbyterianChurch}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(event) => setMember({
                  ...member,
                  previousPresbyterianChurch: event.target.value,
                })}
                fullWidth
              />
            </Grid>
            <Grid item xs={6} md={2}>
              <DateInput
                source="pedobaptismDate"
                label="Data do Batismo Infantil"
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
              <TextInput
                source="observations"
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
