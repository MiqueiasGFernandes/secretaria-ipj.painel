import { AuthenticationCard } from "@components/authentication-card";
import { Typography } from "@mui/material";
import { Link, LoginForm as RaLoginForm } from "react-admin";

export function LoginForm({ handleRedirectToSignUpForm }: { handleRedirectToSignUpForm: () => void }) {
  return <AuthenticationCard>
    <RaLoginForm />
    <Link
      to="#"
      onClick={(event) => {
        event.preventDefault();
        handleRedirectToSignUpForm();
      }}
      style={{
        textAlign: 'center',
        width: '100%',
        display: 'block',
      }}
    >
      <Typography>
        Crie uma conta agora
      </Typography>
    </Link>
  </AuthenticationCard >
}