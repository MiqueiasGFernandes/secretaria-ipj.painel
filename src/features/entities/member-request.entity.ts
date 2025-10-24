import { MemberEntity } from "./member.entity"

export class MemberRequestEntity {
  id: string

  status: 'approved' | 'rejected' | 'pending'

  memberId: string

  member: MemberEntity

  createdAt: string

  updatedAt: string

  constructor(data: MemberRequestEntity) {
    Object.assign(this, data)
  }
}