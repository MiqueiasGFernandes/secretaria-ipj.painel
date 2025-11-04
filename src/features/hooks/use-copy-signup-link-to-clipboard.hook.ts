import { useCallback } from "react";
import { useNotify } from "react-admin";

export function useCopySignUpLinkToClipBoard() {
  const notify = useNotify();

  const copyToClipBoard = useCallback(async () => {
    try {
      const signUpLink = `${window.location.origin}/autocadastro`;

      await navigator.clipboard.writeText(signUpLink);

      notify("Link de autocadastro copiado para a área de transferência!", { type: "success" });
    } catch (error) {
      console.error(error);
      notify("Não foi possível copiar o link. Tente novamente.", { type: "warning" });
    }
  }, [notify]);

  return { copyToClipBoard };
}
