import { MemberEntity } from "@features/entities";
import { useDataProvider, useNotify } from "ra-core";
import { useState } from "react";

export function useMemberSignup() {
  const dataProvider = useDataProvider();

  const [requestId, setRequestId] = useState(null);
  const [success, setSuccess] = useState(false);

  const notify = useNotify();

  const onSubmit = async (values: MemberEntity) => {
    const data = new MemberEntity(values)

    if (data.password !== data.passwordConfirmation) {
      notify('As senhas digitadas devem ser iguais', { type: 'error' });
      return;
    }
    await dataProvider
      .create('requests', { data })
      .then((result) => {
        setRequestId(result.data.id);
        setSuccess(true);
      });
  }

  return { onSubmit, requestId, success }
}