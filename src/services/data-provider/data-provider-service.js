import remoteStorageDataProvider from './remote-storage-data-provider';

let dataProvider = null;

function setDataProvider() {
  dataProvider = remoteStorageDataProvider;
}

setDataProvider();

export default {
  getList: (resource, params) => dataProvider.getList(resource, params),
  getOne: (resource, params) => dataProvider.getOne(resource, params),
  getMany: (resource, params) => dataProvider.getMany(resource, params),
  getManyReference: (resource, params) => dataProvider.getManyReference(resource, params),
  create: (resource, params) => dataProvider.create(resource, params),
  update: (resource, params) => dataProvider.update(resource, params),
  updateMany: (resource, params) => dataProvider.updateMany(resource, params),
  delete: (resource, params) => dataProvider.delete(resource, params),
  deleteMany: (resource, params) => dataProvider.deleteMany(resource, params),
};
