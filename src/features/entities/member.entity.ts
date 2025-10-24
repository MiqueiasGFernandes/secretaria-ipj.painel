import { v4 } from 'uuid';
export class MemberEntity {

  constructor(data?: MemberEntity) {
    if (data) {
      Object.assign(this, data)
    }
  }

  id?: string
  /**
   * Nome
   */
  name: string;
  /**
   * Matrícula gerada automaticamente
   */
  memberDocumentId?: string;
  /**
   * Data de Nascimento
   */
  birthdate: Date | string;
  /**
   * Naturalidade
   */
  naturality: string;
  /**
   * UF
   */
  ufOrigin: string;
  /**
  * Estado civil
  */
  maritalStatus: string;
  /**
   * Data de Casamento (opcional)
   */
  weddingDate?: Date | string;
  /**
   * Nome do Cônjuge (opcional)
   */
  spouse?: string;
  /**
   * Nome do Pai
   */
  fatherName: string;
  /**
  * Nome da Mãe
  */
  motherName: string;
  /**
  * Outros membros da família (opcional)
  */
  anotherFamilyMembers?: string;
  /**
   * CEP
   */
  cep: string;
  /**
   * Endereço
   */
  address: string;
  /**
   * Telefone Celular
   */
  mobilePhone: string;
  /**
   * Email
   */
  email: string;
  /**
   * Grau de escolaridade
   */
  schooling: string;
  /**
   * Profissão
   */
  occupation: string;
  /**
   * É membro
   */
  isMember: boolean;
  /**
   * Igreja presbiteriana anterior
   */
  previousPresbyterianChurch?: string;
  /**
   * Data de pedobatismo
   */
  pedobaptismDate?: Date | string;
  /**
   * Ministro de pedobatismo
   */
  pedobaptismMinister?: string;
  /**
   * Data de confissão de Fé
   */
  faithConfessionDate?: Date | string;
  /**
   * Ministro de confissão de Fé
   */
  faithConfessionMinister?: string;
  /**
   * Observações
   */
  observations?: string;
  /**
   * Frequentante
   */
  frequenter: boolean;

  password?: string;

  passwordConfirmation?: string;

  hasAcceptShareSelfImage: boolean

  private formateToLocalDateString(dateString?: string): string | undefined {
    return dateString ? new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }) : dateString
  }

  generateMemberDocumentId(): MemberEntity {
    this.memberDocumentId = v4().slice(0, 4).toUpperCase()

    return this
  }

  transformISODateIntoLocalString(): MemberEntity {
    this.birthdate = this.formateToLocalDateString(this.birthdate as string) as string
    this.weddingDate = this.formateToLocalDateString(this.weddingDate as string);
    this.pedobaptismDate = this.formateToLocalDateString(this.pedobaptismDate as string)
    this.faithConfessionDate = this.formateToLocalDateString(this.faithConfessionDate as string)

    return this
  }
}
