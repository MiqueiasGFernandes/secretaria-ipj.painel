import { useState } from "react";
import { SignUpForm } from "../signup-form";
import { SucessScreen } from "@features/success-screen";
import { LoginForm } from "../login-form";

export function AuthenticationFormsSwitcher() {
  const [activeForm, setActiveForm] = useState('LOGIN');

  const ACTIVE_FORM = {
    LOGIN: <LoginForm handleRedirectToSignUpForm={() => setActiveForm('SIGNUP')} />,
    SIGNUP: <SignUpForm handleRedirectToConfirmedSignUpForm={() => setActiveForm('CONFIRMED_SIGNUP')} handleRedirectToLoginForm={() => setActiveForm('SIGNUP')} />,
    CONFIRMED_SIGNUP:
      <SucessScreen
        title="Suas informações de Usuário foram enviadas com sucesso."
        message="Nossa equipe analisará suas informações para autorizar sua autenticação"
        callbackAction={(event) => {
          event.preventDefault();
          setActiveForm('LOGIN');
        }}
        callbackBtnText="Login"
      />
  } as Record<string, React.JSX.Element>;


  return ACTIVE_FORM[activeForm]
}