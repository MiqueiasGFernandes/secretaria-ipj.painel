import { MemberEntity } from "@features/entities";
import { SelfImageWarning } from "@features/self-image-warning";
import { Typography } from "@mui/material";
import { isBoolean, isEmail } from "@shared/transformers";
import { ShowColumn } from "@shared/types/column-type";
import { ReactNode } from "react";

type RenderInformationOptions = {
  record: MemberEntity
  column: ShowColumn
}

export function RenderInformation({ record, column }: RenderInformationOptions) {

  const value = record[column.source] ?? "-";

  if (column.source === "hasAcceptShareSelfImage") {
    return <SelfImageWarning isSharingSelfImage={record[column.source]} />
  }

  if (isBoolean(value)) {
    return value ? 'Sim' : 'Não';
  }

  if (isEmail(value)) {
    return (
      <a
        title={`Enviar email para: ${value}`}
        href={`mailto:${value}`}
      >
        {value as ReactNode}
      </a>
    );
  }

  return <Typography>{value as any}</Typography>;
}