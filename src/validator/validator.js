import { required } from './messages';

const naturalityInformation = (values) => {
  const errors = {};
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
