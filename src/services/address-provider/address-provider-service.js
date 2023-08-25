import remoteAddressProvider from './remote-address-provider';

let dataProvider = null;

function setDataProvider() {
  if (process.env.REACT_APP_USE_LOCAL_DATA) {
    dataProvider = remoteAddressProvider;
  }
}

setDataProvider();

export default {
  getOne: (cep) => dataProvider.getOne(cep),
};
