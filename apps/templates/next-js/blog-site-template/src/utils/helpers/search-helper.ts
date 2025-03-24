import { Column, eq, like, or, SQL, sql } from "drizzle-orm";

export class SearchHelper {
  private filters: SQL<unknown>[] = [];
  private searchableFields: Record<string, Column<any>> = {};

  constructor(searchableFields: Record<string, Column<any>>) {
    this.searchableFields = searchableFields;
  }

  equals(field: string, value: any): this {
    if (
      value !== undefined &&
      value !== null &&
      field in this.searchableFields
    ) {
      this.filters.push(eq(this.searchableFields[field], value));
    }
    return this;
  }

  contains(field: string, value: string | undefined): this {
    if (value && field in this.searchableFields) {
      this.filters.push(like(this.searchableFields[field], `%${value}%`));
    }
    return this;
  }

  search(term: string | undefined, fields: string[]): this {
    if (term) {
      const conditions: SQL<unknown>[] = fields
        .filter((field) => field in this.searchableFields)
        .map((field) => like(this.searchableFields[field], `%${term}%`));

      if (conditions.length > 0) {
        this.filters.push(or(...conditions) as SQL<unknown>);
      }
    }
    return this;
  }

  getWhereClause(): SQL<unknown> | undefined {
    return this.filters.length > 0
      ? sql.join(this.filters, sql` AND `)
      : undefined;
  }
}
