import { AddressDto } from '@features/hooks';
import axios from 'axios';

export class RemoteAddressProvider {
  async getOne(cep: string): Promise<AddressDto> {
    const { data } = await axios.get(`${import.meta.env.VITE_BUSCACEP_API_URL}/${cep.replace('-', '')}/json`);

    return data;  
  }
}