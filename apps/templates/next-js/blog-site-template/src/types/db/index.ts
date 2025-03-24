import { InferSelectModel, InferInsertModel } from 'drizzle-orm';
import * as schema from '../../database/schema';

// Enum types and values


// Select types (for querying)
export type User = InferSelectModel<typeof schema.user>;
export type Session = InferSelectModel<typeof schema.session>;
export type Account = InferSelectModel<typeof schema.account>;
export type Verification = InferSelectModel<typeof schema.verification>;

// Insert types (for creating new records)
export type NewUser = Omit<InferInsertModel<typeof schema.user>, 'id' | 'createdAt' | 'updatedAt'> & {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type NewSession = Omit<InferInsertModel<typeof schema.session>, 'id' | 'createdAt' | 'updatedAt'> & {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type NewAccount = Omit<InferInsertModel<typeof schema.account>, 'id' | 'createdAt' | 'updatedAt'> & {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type NewVerification = Omit<InferInsertModel<typeof schema.verification>, 'id' | 'createdAt' | 'updatedAt'> & {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

// Table types object
export const tableTypes = {
  user: {} as User,
  session: {} as Session,
  account: {} as Account,
  verification: {} as Verification,
} as const;

// Export table type
export type Tables = typeof tableTypes;

// Export schema
export * from '../../database/schema';
