export interface Credential {
  id?: string;         // optional, backend may return id
  name: string;
  email: string;
  [key: string]: any;  // allow extra fields
}
