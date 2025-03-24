export type ApiResponse<T = null> = {
  success: boolean;
  message: string;
  data: T | null;
  error: string | null;
};

export type PaginatedResponse<T> = ApiResponse<{
  items: T[];
  metadata: {
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
    hasNext: boolean;
    hasPrevious: boolean;
  };
}>;
