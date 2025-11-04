import logo from '@assets/logo.png';
import { Terms } from '@components/terms';
import { useMemberSignup } from '@features/hooks';
import { AdditionalMemberInformationForm } from '@features/members/create/additional-member-information-form';
import { ChurchMembresyForm } from '@features/members/create/church-membresy-form';
import { ContactMemberForm } from '@features/members/create/contact-member-form';
import { FamilyMemberForm } from '@features/members/create/family-members-form';
import { MemberPersonalInformationForm } from '@features/members/create/member-personal-information-form';
import { ProfessionalMemberInformationForm } from '@features/members/create/professional-member-information-form';
import { Done } from '@mui/icons-material';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import {
  BooleanInput,
  SaveButton,
  SimpleForm,
  Toolbar,
  useAuthenticated
} from 'react-admin';

export function SignupMember() {
  useAuthenticated({
    params: {
      isGuest: true,
    },
  });

  const [openTermsDialog, setOpenTermsDialog] = useState(false);

  const { onSubmit, requestId, success } = useMemberSignup()

  const containerPadding = {
    py: { xs: 0, xl: 10 },
    px: { xs: 0, xl: 50 }
  }

  return (
    <SimpleForm
      onSubmit={(event: any) => onSubmit(event)}
      toolbar={(
        <Toolbar>
          <Grid
            container
            sx={{
              py: 1,
              px: containerPadding.px
            }}>
            <Grid item xs={12}>
              <Typography fontSize={14}>
                Ao clicar em Cadastre-se você declara que concorda com
                os <Typography
                  sx={{
                    display: {
                      xs: 'block',
                      xl: 'inline'
                    }
                  }}
                  style={{
                    color: 'blue',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    background: 'none',
                    border: 0,
                  }}
                  onClick={() => setOpenTermsDialog(true)}
                >termos de privacidade.
                </Typography>
              </Typography>
            </Grid>
            <Grid item sx={{ my: { xs: 2 } }} xs={12}>
              <SaveButton label="Cadastrar-se" />
            </Grid>
          </Grid>
        </Toolbar>
      )}
    >
      <Grid
        container
        sx={containerPadding}>
        <Grid xs={12}>
          <img src={logo} alt="Igreja Presbiteriana de Jundiaí" />
        </Grid>
        <Grid container xs={12}>
          <MemberPersonalInformationForm />
          <FamilyMemberForm />
          <ContactMemberForm />
          <ProfessionalMemberInformationForm />
          <ChurchMembresyForm />
          <AdditionalMemberInformationForm />
          <Grid item xs={12} sx={{ pb: { xs: 10, md: 0 } }}>
            <BooleanInput
              source="hasAcceptShareSelfImage"
              label="Deseja permitir que sua imagem seja compartilhada através das mídias digitais da IPJ?"
            />
          </Grid>
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
      </Grid >
    </SimpleForm>
  );
}