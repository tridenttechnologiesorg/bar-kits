import { InferSelectModel, InferInsertModel } from 'drizzle-orm';
import * as schema from '../../database/schema';

// Enum types and values


// Select types (for querying)
export type User = InferSelectModel<typeof schema.user>;
export type Session = InferSelectModel<typeof schema.session>;
export type Account = InferSelectModel<typeof schema.account>;
export type Verification = InferSelectModel<typeof schema.verification>;
export type Blog = InferSelectModel<typeof schema.blog>;

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

export type NewBlog = Omit<InferInsertModel<typeof schema.blog>, 'id' | 'createdAt' | 'updatedAt'> & {
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
  blog: {} as Blog,
} as const;

// Export table type
export type Tables = typeof tableTypes;

// Export schema
export * from '../../database/schema';
