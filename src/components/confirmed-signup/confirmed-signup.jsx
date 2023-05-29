import React from 'react';

import { Typography, Link } from '@mui/material';

export default function ConfirmedSignup({ setActiveForm }) {
  return (
    <div style={{
      padding: '10px 20px',
    }}
    >
      <Typography>
        Suas informações de Usuário foram enviadas com sucesso.
        <br />
        Nossa equipe analisará suas informações para autorizar sua autenticação
      </Typography>
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
    </div>
  );
}
