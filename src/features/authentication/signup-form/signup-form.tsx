import { Button, CircularProgress } from '@mui/material';
import { Link, TextInput } from 'react-admin';

import { useUserRegistration } from '@features/hooks';
import { AuthForm } from '../auth-form';
import { StyledFormClasses } from '../styles/styles';
import { useEffect } from 'react';

type SignUpFormOptions = {
  handleRedirectToConfirmedSignUpForm: () => void;
  handleRedirectToLoginForm: () => void;
};


export function SignUpForm({ handleRedirectToConfirmedSignUpForm, handleRedirectToLoginForm, }: SignUpFormOptions) {
  const { isLoading, registerUser, success } = useUserRegistration()

  useEffect(() => {
    handleRedirectToConfirmedSignUpForm()
  }, [success])

  return (
    <AuthForm onSubmit={registerUser}>
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
        className={StyledFormClasses.button}
      >
        {isLoading ? (
          <CircularProgress
            className={StyledFormClasses.icon}
            size={19}
            thickness={3}
          />
        ) : (
          'Registrar Usuário'
        )}
      </Button>
        <Link
          to="/#"
          onClick={handleRedirectToLoginForm}
          style={{
            textAlign: "center",
            width: "100%",
            display: "block",
          }}
        >
          Login
        </Link>
    </AuthForm>
  );
}
