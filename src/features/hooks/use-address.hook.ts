import { RemoteAddressProvider } from "@services/address-provider";
import { useSafeSetState, useNotify } from "ra-core";
import { useCallback, useState } from "react";

export type AddressDto = {
  bairro: string | null;
  cep: string | null;
  complemento: string | null;
  localidade: string | null;
  logradouro: string | null;
  uf: string | null;
};

export function useAddress() {
  const [address, setAddress] = useState<AddressDto>({
    bairro: null,
    cep: null,
    complemento: null,
    localidade: null,
    logradouro: null,
    uf: null,
  });

  const [isLoading, setLoading] = useSafeSetState(false);
  const [success, setSuccess] = useSafeSetState(false);
  const notify = useNotify();

  const handleGetAddressByPostalCode = useCallback(async (cep: string) => {
    const sanitizedCep = cep?.replace(/\D/g, "");

    if (!sanitizedCep || sanitizedCep.length < 8) {
      notify("CEP inválido", { type: "warning" });
      return;
    }

    try {
      setLoading(true);
      const addressInformation = await new RemoteAddressProvider().getOne(sanitizedCep);

      setAddress(addressInformation);
      setSuccess(true);
    } catch (error: any) {
      notify("Erro ao buscar endereço. Verifique o CEP.", { type: "error" });
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  }, [notify, setLoading, setSuccess]);

  return {
    address,
    isLoading,
    success,
    handleGetAddressByPostalCode,
  };
}
