import bg from "@assets/login-background.png";

import { BackgroudImageContainer } from "@components/background-image-container";
import { Link, LoginForm as RaLoginForm } from "react-admin";

export function LoginForm({ handleRedirectToSignUpForm}: { handleRedirectToSignUpForm: () => void}) {
  return <div>
    <BackgroudImageContainer backgroundImage={bg}>
      <RaLoginForm />
    </BackgroudImageContainer>    
    <Link
      to="/#"
      onClick={handleRedirectToSignUpForm}
      style={{
        textAlign: 'center',
        width: '100%',
        display: 'block',
      }}
    >
      Crie uma conta agora
    </Link>
  </div>
}