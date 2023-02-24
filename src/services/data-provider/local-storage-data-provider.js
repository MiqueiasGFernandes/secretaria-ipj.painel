export default {
  getList: (resource) => {
    const data = localStorage.getItem(resource) ? JSON.parse(localStorage.getItem(resource)) : [];
    const total = data?.length || 0;

    return Promise.resolve({
      total,
      data,
    });
  },
  getOne: (resource, { id }) => {
    const previousData = localStorage.getItem(resource)
      ? JSON.parse(localStorage.getItem(resource)) : [];
    const data = previousData.find((item) => String(item.id) === String(id));

    if (!data) {
      return Promise.resolve();
    }

    return Promise.resolve({
      data,
    });
  },
  getMany: () => Promise,
  getManyReference: () => Promise,
  create: (resource, params) => {
    const previousData = localStorage.getItem(resource)
      ? JSON.parse(localStorage.getItem(resource))
      : [];

    previousData.push({ id: new Date().getMilliseconds(), ...params });

    localStorage.setItem(resource, JSON.stringify(previousData));
  },
  update: () => Promise,
  updateMany: () => Promise,
  delete: () => Promise,
  deleteMany: () => Promise,
};
