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
  update: (resource, { id, ...newData }) => {
    const data = localStorage.getItem(resource) ? JSON.parse(localStorage.getItem(resource)) : [];
    console.log(id, newData.data);

    const newList = data.map((item) => {
      console.log(item.id);
      console.log(id === item.id);
      if (id === item.id) {
        return newData.data;
      }
      return item;
    });

    console.log(newList);

    localStorage.setItem(resource, JSON.stringify(newList));
  },
  updateMany: () => Promise,
  delete: (resource, { id }) => {
    const previousData = localStorage.getItem(resource)
      ? JSON.parse(localStorage.getItem(resource)) : [];
    const index = previousData.findIndex((item) => String(item.id) === String(id));

    delete previousData[index];

    localStorage.setItem(resource, JSON.stringify(previousData));
  },
  deleteMany: () => Promise,
};
