import { required } from './messages';

type ErrorMap = {
  nome: string
  naturalidade: string
  'data de nascimento': string
  'uf de naturalidade': string
}

const naturalityInformation = (values: any) => {
  const errors: Partial<ErrorMap> = {};

  if (!values.nome) {
    errors.nome = required('nome');
  }
  if (!values['data de nascimento']) {
    errors['data de nascimento'] = required('data de nascimento');
  }
  if (!values.naturalidade) {
    errors.naturalidade = required('naturalidade');
  }
  if (!values['uf de naturalidade']) {
    errors['uf de naturalidade'] = required('uf de naturalidade');
  }
};

export default {
  naturalityInformation,
};
