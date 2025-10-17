import { useAddress } from '@features/hooks';
import { Grid } from '@mui/material';
import {
  Edit,
  SimpleForm
} from 'react-admin';
import { AdditionalMemberInformationForm } from '../create/additional-member-information-form';
import { ChurchMembresyForm } from '../create/church-membresy-form';
import { ContactMemberForm } from '../create/contact-member-form';
import { FamilyMemberForm } from '../create/family-members-form';
import { MemberPersonalInformationForm } from '../create/member-personal-information-form';
import { ProfessionalMemberInformationForm } from '../create/professional-member-information-form';

export function EditMember() {
  return (
    <Edit>
      <SimpleForm>
        <Grid columnSpacing={1} container>
          <MemberPersonalInformationForm />
          <FamilyMemberForm />
          <ContactMemberForm />
          <ProfessionalMemberInformationForm />
          <ChurchMembresyForm />
          <AdditionalMemberInformationForm />
        </Grid>
      </SimpleForm>
    </Edit>
  );
}