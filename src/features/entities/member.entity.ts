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
  birthdate: Date;
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
  isMember: string | boolean;
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
  frequenter: string | boolean;

  password?: string;

  passwordConfirmation?: string;

  hasAcceptShareSelfImage: number | boolean

  transformStringIntoBoolean(): MemberEntity {
    this.isMember = this.isMember === 'true';
    this.frequenter = this.frequenter === 'true'

    return this
  }

  transformISODateIntoLocalString(): MemberEntity {
    this.weddingDate = this.weddingDate ? (this.weddingDate as Date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }) : this.weddingDate

    this.pedobaptismDate = this.pedobaptismDate ? (this.pedobaptismDate as Date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }) : this.pedobaptismDate

    this.faithConfessionDate = this.faithConfessionDate ? (this.faithConfessionDate as Date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }) : this.faithConfessionDate

    return this
  }
}
