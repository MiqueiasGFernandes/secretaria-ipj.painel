export type ShowColumn<T = any> = {
  source: keyof T,
  label: string
}