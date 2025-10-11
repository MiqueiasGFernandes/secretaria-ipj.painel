import { useState } from "react";
import { SignUpForm } from "../signup-form";
import { SuccessScreen } from "@features/success-screen";
import { LoginForm } from "../login-form";
import { BackgroudImageContainer } from "@components/background-image-container";
import bg from "@assets/login-backgroud.png";


export function AuthenticationFormsSwitcher() {
  const [activeForm, setActiveForm] = useState('LOGIN');

  const ACTIVE_FORM = {
    LOGIN: <LoginForm handleRedirectToSignUpForm={() => setActiveForm('SIGNUP')} />,
    SIGNUP: <SignUpForm handleRedirectToConfirmedSignUpForm={() => setActiveForm('CONFIRMED_SIGNUP')} handleRedirectToLoginForm={() => setActiveForm('LOGIN')} />,
    CONFIRMED_SIGNUP:
      <SuccessScreen
        title="Suas informações de Usuário foram enviadas com sucesso."
        message="Nossa equipe analisará suas informações para autorizar sua autenticação"
        callbackAction={(event) => {
          event.preventDefault();
          setActiveForm('LOGIN');
        }}
        callbackBtnText="Login"
      />
  } as Record<string, React.JSX.Element>;


  return <BackgroudImageContainer backgroundImage={bg}>{ACTIVE_FORM[activeForm]}</BackgroudImageContainer>
}