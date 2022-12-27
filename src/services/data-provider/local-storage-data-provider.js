export default {
  getList: (resource) => {
    const data = localStorage.getItem(resource) ? JSON.parse(localStorage.getItem(resource)) : [];
    const total = data?.length || 0;

    return Promise.resolve({
      total,
      data,
    });
  },
  getOne: () => Promise,
  getMany: () => Promise,
  getManyReference: () => Promise,
  create: (resource, params) => {
    const previousData = localStorage.getItem(resource)
      ? JSON.parse(localStorage.getItem(resource))
      : [];

    previousData.push(params);

    localStorage.setItem(resource, JSON.stringify(previousData));
  },
  update: () => Promise,
  updateMany: () => Promise,
  delete: () => Promise,
  deleteMany: () => Promise,
};
