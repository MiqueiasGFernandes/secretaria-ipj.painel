import {
  Grid,
} from '@mui/material';
import {
  Create,
  SimpleForm
} from 'react-admin';

import { AdditionalMemberInformationForm } from './additional-member-information-form';
import { ContactMemberForm } from './contact-member-form';
import { FamilyMemberForm } from './family-members-form';
import { MemberPersonalInformationForm } from './member-personal-information-form';
import { ProfessionalMemberInformationForm } from './professional-member-information-form';
import { MemberEntity } from '@features/entities';
import { ChurchMembresyForm } from './church-membresy-form';


function CreateMember() {
  return (
    <Create
      title="Cadastrar Novo Membro"
      transform={(data: MemberEntity) => data.transformStringIntoBoolean()}
      redirect="list"
    >
      <SimpleForm>
        <Grid columnSpacing={1} container style={{ justifyContent: 'center', alignItems: 'center' }}>
          <MemberPersonalInformationForm />
          <FamilyMemberForm />
          <ContactMemberForm />
          <ProfessionalMemberInformationForm />
          <ChurchMembresyForm />
          <AdditionalMemberInformationForm />
        </Grid>
      </SimpleForm>
    </Create>
  );
}

export { CreateMember };
