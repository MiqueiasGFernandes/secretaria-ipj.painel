import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Typography,
} from '@mui/material';
import { Button } from 'react-admin';

export type TermOptions = {
  onClose: () => void,
  isOpen: boolean
}

export function Terms({ onClose, isOpen }: TermOptions) {
  return (
    <Dialog onClose={onClose} open={isOpen}>
      <DialogTitle>
        Termo de Privacidade e Tratamento de Dados Pessoais
      </DialogTitle>

      <DialogContent>
        <p>
          A <b>Igreja Presbiteriana de Jundiaí</b>, na qualidade de controladora de dados pessoais,
          valoriza a privacidade e a segurança das informações de seus membros, visitantes e colaboradores.
          Este termo tem por finalidade descrever, de forma transparente, como os dados pessoais são coletados,
          utilizados, armazenados e protegidos no âmbito do sistema de secretaria e gestão de membros, em conformidade
          com a <b>Lei nº 13.709/2018 (Lei Geral de Proteção de Dados – LGPD)</b>.
        </p>

        <b>1. Base Legal e Legítimo Interesse</b>
        <p>
          O tratamento de dados pessoais é realizado com fundamento no <b>legítimo interesse</b> da Igreja Presbiteriana de Jundiaí,
          conforme previsto no art. 7º, inciso IX, da LGPD, para fins de gestão e manutenção de registros eclesiásticos,
          comunicações institucionais, organização de atividades e suporte pastoral.
          O tratamento é limitado ao mínimo necessário, observando o princípio da finalidade e da proporcionalidade.
        </p>

        <b>2. Coleta de Dados Pessoais</b>
        <p>
          São coletados dados pessoais fornecidos voluntariamente por você, incluindo, mas não se limitando a:
        </p>

        <ul>
          <li>Nome completo</li>
          <li>Data de nascimento</li>
          <li>Naturalidade</li>
          <li>Estado civil</li>
          <li>Data de casamento</li>
          <li>Nome do cônjuge</li>
          <li>Nome do pai e da mãe</li>
          <li>Nomes de outros integrantes da família</li>
          <li>Endereço</li>
          <li>Telefones pessoais</li>
          <li>E-mail</li>
          <li>Informações profissionais e acadêmicas</li>
          <li>Informações de membresia na Igreja Presbiteriana de Jundiaí</li>
        </ul>

        <b>3. Finalidade do Tratamento</b>
        <p>Os dados pessoais serão tratados exclusivamente para as seguintes finalidades:</p>

        <ul>
          <li>Manter registros atualizados de membros e frequentadores</li>
          <li>Facilitar a comunicação institucional e pastoral</li>
          <li>Organizar eventos, atividades e grupos ministeriais</li>
          <li>Administrar contribuições, doações e compromissos financeiros</li>
          <li>Promover acompanhamento espiritual e suporte assistencial</li>
        </ul>

        <b>4. Armazenamento e Segurança das Informações</b>
        <p>
          Os dados são armazenados em sistemas internos protegidos por medidas técnicas e administrativas adequadas,
          incluindo:
        </p>

        <ul>
          <li>Uso de criptografia e protocolos seguros para armazenamento e transmissão de dados</li>
          <li>Acesso restrito e controlado apenas a pessoas autorizadas</li>
          <li>Rotinas regulares de backup e monitoramento de integridade</li>
        </ul>

        <b>5. Retenção e Eliminação dos Dados</b>
        <p>
          As informações pessoais serão mantidas pelo período necessário ao cumprimento das finalidades acima descritas,
          podendo permanecer armazenadas por até 10 (dez) anos após a última interação do titular com a Igreja,
          conforme critérios de necessidade e legítimo interesse. Após esse prazo, os dados serão eliminados de forma
          segura, ou renovados mediante manifestação expressa do titular.
        </p>

        <b>6. Compartilhamento de Dados</b>
        <p>
          A Igreja Presbiteriana de Jundiaí <b>não compartilha, vende ou cede</b> os dados pessoais coletados com terceiros
          sob nenhuma hipótese. O acesso poderá ocorrer apenas:
        </p>

        <ul>
          <li>Quando exigido por lei, decisão judicial ou autoridade competente;</li>
          <li>Para o cumprimento de obrigações legais ou regulatórias aplicáveis;</li>
          <li>Ou quando estritamente necessário à operação do sistema, por prestadores de serviço contratados,
            os quais estarão vinculados a cláusulas contratuais de confidencialidade e proteção de dados equivalentes
            a este Termo.</li>
        </ul>

        <p>
          Em nenhum momento os dados pessoais serão compartilhados com terceiros para fins comerciais, de marketing
          ou quaisquer outros não previstos neste documento.
        </p>

        <b>7. Direitos do Titular dos Dados</b>
        <p>Nos termos da LGPD, o titular dos dados pessoais poderá, a qualquer tempo:</p>

        <ul>
          <li>Solicitar confirmação da existência de tratamento e acesso aos seus dados;</li>
          <li>Requerer a correção de informações incompletas, inexatas ou desatualizadas;</li>
          <li>Solicitar a eliminação de dados pessoais desnecessários, excessivos ou tratados em desconformidade com a LGPD;</li>
          <li>Revogar consentimento ou se opor ao tratamento, nos limites legais;</li>
          <li>
            Para exercer seus direitos ou obter esclarecimentos adicionais, entre em contato através do e-mail:
            <a href="mailto:secretaria@ipjundiai.org.br"> secretaria@ipjundiai.org.br</a>
          </li>
        </ul>

        <b>8. Atualizações deste Termo</b>
        <p>
          Este Termo poderá ser atualizado periodicamente para refletir eventuais alterações nas práticas de tratamento
          de dados pessoais. Recomenda-se sua leitura regular. Mudanças relevantes serão comunicadas por meio dos
          canais oficiais da Igreja.
        </p>

        <b>9. Informações de Contato</b>
        <p><b>Igreja Presbiteriana de Jundiaí</b></p>
        <p>Endereço: R. Vig. J. J. Rodrigues, 504 - Centro, Jundiaí - SP, 13201-001</p>
        <p>E-mail: secretaria@ipjundiai.org.br</p>
        <p>Telefone: (11) 4586-2004</p>

        <p><b>Data de Vigência:</b> 18/10/2024</p>

        <p>
          Ao utilizar o sistema de secretaria e gestão de membros, o titular declara estar ciente e de acordo com
          as disposições deste Termo de Privacidade, reconhecendo que o tratamento de seus dados ocorre com base
          no legítimo interesse e em conformidade com a LGPD.
        </p>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>
          <Typography>
            Fechar
          </Typography>
        </Button>
      </DialogActions>
    </Dialog>
  );
}
