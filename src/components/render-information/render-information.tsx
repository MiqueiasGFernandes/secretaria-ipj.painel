import { MemberEntity } from "@features/entities";
import { SelfImageWarning } from "@features/self-image-warning";
import { Typography } from "@mui/material";
import { isBoolean, isEmail } from "@shared/transformers";
import { ShowColumn } from "@shared/types/column-type";
import { ReactNode } from "react";

type RenderInformationOptions = {
  record: any
  column: ShowColumn
  isDetailedView: boolean
}

export function RenderInformation({ record, column, isDetailedView = true }: RenderInformationOptions) {
  const value = record[column.source] ?? "-";

  if (column.source === "hasAcceptShareSelfImage" && isDetailedView) {
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

  return isDetailedView ? <Typography>{value as any}</Typography> : value;
}