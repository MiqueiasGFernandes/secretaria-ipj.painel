/* eslint-disable no-nested-ternary */
import { Button, CardContent, CircularProgress } from '@mui/material';
import { Link, TextInput } from 'react-admin';

import { styled } from '@mui/material/styles';
import {
  Form,
  useNotify,
  useSafeSetState,
} from 'ra-core';
import * as React from 'react';
import authProvider from '../../services/auth-provider';

const PREFIX = 'RaSignUpForm';

export const LoginFormClasses = {
  content: `${PREFIX}-content`,
  button: `${PREFIX}-button`,
  icon: `${PREFIX}-icon`,
};

const StyledForm = styled(Form, {
  name: PREFIX,
  overridesResolver: (_props, styles) => styles.root,
})(({ theme }) => ({
  [`& .${LoginFormClasses.content}`]: {
    width: 300,
  },
  [`& .${LoginFormClasses.button}`]: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  [`& .${LoginFormClasses.icon}`]: {
    margin: theme.spacing(0.3),
  },
}));

export default function Signup({ setActiveForm }) {
  const notify = useNotify();

  const [loading, setLoading] = useSafeSetState(false);

  const submit = (values) => {
    if (values.password !== values.passwordConfirmation) {
      notify('As senhas digitadas não correspondem', {
        type: 'error',
      });
      return;
    }

    setLoading(true);
    authProvider.register(values)
      .then(() => {
        setLoading(false);
        setActiveForm('CONFIRMED_SIGNUP');
      })
      .catch((error) => {
        setLoading(false);
        notify(
          (error.response.data.message)
            ? `Ocorreu um erro ao cadastrar o novo usuário: ${error.response.data.message}` : 'Ocorreu um erro ao cadastrar o novo usuário',
          {
            type: 'error',
          },
        );
      });
  };

  return (
    <StyledForm
      mode="onChange"
      noValidate
      onSubmit={submit}
    >
      <CardContent className={LoginFormClasses.content}>
        <TextInput label="Nome" source="name" fullWidth />
        <TextInput label="Email" source="email" fullWidth />
        <TextInput type="password" label="Senha" source="password" fullWidth />
        <TextInput type="password" label="Confirmação de Senha" source="passwordConfirmation" fullWidth />
        <Button
          variant="contained"
          type="submit"
          color="primary"
          disabled={loading}
          fullWidth
          className={LoginFormClasses.button}
        >
          {loading ? (
            <CircularProgress
              className={LoginFormClasses.icon}
              size={19}
              thickness={3}
            />
          ) : (
            'Registrar Usuário'
          )}
        </Button>
        <Link
          to="/#"
          onClick={(event) => {
            event.preventDefault();
            setActiveForm('LOGIN');
          }}
          style={{
            textAlign: 'center',
            width: '100%',
            display: 'block',
          }}
        >
          Login
        </Link>
      </CardContent>
    </StyledForm>
  );
}
