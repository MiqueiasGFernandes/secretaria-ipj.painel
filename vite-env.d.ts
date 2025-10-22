interface ImportMetaEnv {
  readonly VITE_BUSCACEP_API_URL: string;
  readonly VITE_LOGIN_URL: string
  readonly VITE_API_URL: string
}


interface ImportMeta {
  readonly env: ImportMetaEnv;
}