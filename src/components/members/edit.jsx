import { React } from 'react';
import {
  DateInput, Edit, SelectInput, SimpleForm, TextInput, RadioButtonGroupInput,
} from 'react-admin';
import brazilianStates from '../../constants/brazilian-states';
import academicLevels from '../../constants/academic-levels';

function EditMember() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput disabled label="Id" source="id" />
        <TextInput source="name" label="Nome" />
        <DateInput source="birthdate" label="Data de Nascimento" />
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
        />

        <SelectInput
          source="ufOrigin"
          label="UF de naturalidade"
          choices={brazilianStates}
        />

        <SelectInput
          source="maritalStatus"
          label="Estado Civil"
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
        <DateInput
          label="Data de Casamento"
          source="weddingDate"
        />
        <TextInput
          source="spouse"
          label="Nome do Cônjuge"
        />
        <TextInput
          source="fatherName"
          label="Nome do Pai"
        />
        <TextInput
          source="motherName"
          label="Nome da Mãe"
        />
        <TextInput
          multiline
          source="anotherFamilyMembers"
          label="Outros Integrantes da Família"
        />
        <TextInput
          source="cep"
          label="CEP"
        />
        <TextInput
          source="address"
          label="Endereço"
        />
        <TextInput
          source="district"
          label="Bairro"
        />
        <TextInput
          source="residenceNumber"
          label="Número da Residência"
        />
        <TextInput
          source="city"
          label="Cidade"
        />
        <TextInput
          source="addressComplement"
          label="Complemento"
        />
        <TextInput
          source="homePhone"
          label="Tel. Residencial"
        />
        <TextInput
          source="commercialPhone"
          label="Tel. Comercial"
        />
        <TextInput
          source="mobilePhone"
          label="Celular"
        />
        <TextInput
          source="email"
          label="Email"
        />
        <SelectInput
          source="schooling"
          choices={academicLevels}
          label="Grau de intrução"
        />
        <TextInput
          source="occupation"
          label="Profissão"
        />
        <RadioButtonGroupInput
          source="isMember"
          label="Membro da IPB"
          choices={[
            {
              id: 1,
              name: 'Sim',
            },
            {
              id: 2,
              name: 'Nâo',
            },
          ]}
        />
        <TextInput
          source="previousPresbyterianChurch"
          label="IPB de membresia"
        />
        <DateInput
          source="pedobaptismDate"
          label="Data do batismo infantil"
        />
        <TextInput
          source="pedobaptismMinister"
          label="Ministro Oficiante"
        />
        <DateInput
          source="faithConfessionDate"
          label="Data da Profissão de Fé"
        />
        <TextInput
          source="faithConfessionMinister"
          label="Ministro Oficiante"
        />
        <TextInput
          source="observations"
          label="Observações"
        />
      </SimpleForm>
    </Edit>
  );
}

export default EditMember;
