import { AuthCredentialEntity } from "@features/entities";
import { authProvider } from "@services/auth-provider";
import { useNotify, useSafeSetState } from "ra-core";

export function useUserRegistration() {
    const [isLoading, setLoading] = useSafeSetState(false);
    const [success, setSuccess] = useSafeSetState(false)
      const notify = useNotify();


  const registerUser = (values: AuthCredentialEntity) => {
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
        setSuccess(true);
      })
      .catch((error: any) => {
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

  return { isLoading, registerUser, success }
}