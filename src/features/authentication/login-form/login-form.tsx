import bg from "../../../assets/login-backgroud.png";

import { BackgroudImageContainer } from "@components/background-image-container";
import { Typography } from "@mui/material";
import { Link, LoginForm as RaLoginForm } from "react-admin";

export function LoginForm({ handleRedirectToSignUpForm }: { handleRedirectToSignUpForm: () => void }) {
  return <div>
    <BackgroudImageContainer backgroundImage={bg}>
      <RaLoginForm />
      <Link
        to="/#"
        onClick={handleRedirectToSignUpForm}
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
    </BackgroudImageContainer>
  </div>
}