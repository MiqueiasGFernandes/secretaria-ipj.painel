import { Button, CircularProgress, Grid, Typography } from '@mui/material';
import { Form, Link, TextInput } from 'react-admin';

import { useUserRegistration } from '@features/hooks';
import { useEffect } from 'react';
import { useStyles } from './styles';

type SignUpFormOptions = {
  handleRedirectToConfirmedSignUpForm: () => void;
  handleRedirectToLoginForm: () => void;
};


export function SignUpForm({ handleRedirectToConfirmedSignUpForm, handleRedirectToLoginForm, }: SignUpFormOptions) {
  const { isLoading, registerUser, success } = useUserRegistration()
  const classes = useStyles()

  useEffect(() => {
    if (success) {
      handleRedirectToConfirmedSignUpForm()
    }
  }, [success])

  return (
    <Form className={classes.form} onSubmit={(user: any) => registerUser(user)}>
      <Grid container>
        <TextInput label="Nome" source="name" fullWidth />
        <TextInput label="Email" source="email" fullWidth />
        <TextInput type="password" label="Senha" source="password" fullWidth />
        <TextInput type="password" label="Confirmação de Senha" source="passwordConfirmation" fullWidth />
        <Button
          variant="contained"
          type="submit"
          color="primary"
          disabled={isLoading}
          fullWidth
          className={classes.registerButton}
        >
          {isLoading ? (
            <CircularProgress
              size={19}
              thickness={3}
            />
          ) : (
            'Registrar Usuário'
          )}
        </Button>
        <Link
          to="#"
          onClick={(event) => {
            event.preventDefault()
            handleRedirectToLoginForm()
          }}
          className={classes.returnToLoginLink}
        >
          <Typography>
            Login
          </Typography>
        </Link>
      </Grid>
    </Form>
  );
}
