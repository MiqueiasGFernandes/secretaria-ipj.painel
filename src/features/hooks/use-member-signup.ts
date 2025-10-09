import { MemberEntity } from "@features/entities";
import { useDataProvider, useNotify } from "ra-core";
import { useState } from "react";

export function useMemberSignup() {
  const dataProvider = useDataProvider();

  const [requestId, setRequestId] = useState(null);
  const [success, setSuccess] = useState(false);

  const notify = useNotify();

  const onSubmit = async (member: MemberEntity) => {
    if (member.password !== member.passwordConfirmation) {
      notify('As senhas digitadas devem ser iguais', { type: 'error' });
      return;
    }
    const data = member.transformStringIntoBoolean()
    await dataProvider
      .create('requests', { data })
      .then((result) => {
        setRequestId(result.data.id);
        setSuccess(true);
      });
  }

  return { onSubmit, requestId, success }
}