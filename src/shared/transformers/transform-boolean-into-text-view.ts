
export function transformBooleanFieldIntoViewText<T>(source: keyof T, value: string): string {
  if (isBoolean(value)) {
    return source ? 'Sim' : 'Não';
  }
  return value || '-';
}

export function isBoolean(value: string): boolean {
  return value === "true" || value === "false"
}

export const isEmail = (value: string) => !!String(value)
  .toLowerCase()
  .match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );
