import { MemberEntity } from "@features/entities"

export type ShowColumn = {
  source: keyof MemberEntity,
  label: string
}