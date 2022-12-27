import React from 'react';
import { Datagrid, List, TextField } from 'react-admin';

function ListMembers() {
  const columns = ['código', 'nome', 'nascimento', 'naturalidade', 'uf', 'estado civil', 'bairro', 'cidade', 'cep', 'telefones', 'email', 'profissão', 'membresia'];

  return (
    <List>
      <Datagrid>
        {columns.map((column) => (
          <TextField source={column} />
        ))}
      </Datagrid>
    </List>
  );
}

export default ListMembers;
