export interface Contact {
  id: string;
  name: string;
  email: string;
  phone?: string;
  group?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateContactData {
  name: string;
  email: string;
  phone?: string;
  group?: string;
}

export interface UpdateContactData {
  name?: string;
  email?: string;
  phone?: string;
  group?: string;
} 