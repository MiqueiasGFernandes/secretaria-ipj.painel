
export function transformBooleanFieldIntoViewText<T>(source: keyof T, value: string | number): any {
  if (isBoolean(value)) {
    return transformBoolean(value)
  }
  return value || '-';
}

export function transformBoolean(value: string | number): string {
  return value === "true" || value === 1 ? "Sim" : "Não"
}

export function isBoolean(value: string | number): boolean {
  return value === "true" || value === "false" || value === 0 || value === 1
}

export const isEmail = (value: string) => !!String(value)
  .toLowerCase()
  .match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );
