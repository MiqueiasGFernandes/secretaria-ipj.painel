import { Typography } from "@mui/material";
import { Link, LoginForm as RaLoginForm } from "react-admin";

export function LoginForm({ handleRedirectToSignUpForm }: { handleRedirectToSignUpForm: () => void }) {
  return <div>
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
  </div >
}