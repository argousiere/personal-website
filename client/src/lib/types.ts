export interface Post {
	id: number;
  attributes: {
    title: string;
    slug: string;
    description: string;
    content: string;
    created_at: string;
    updated_at: string;
  }
}

export interface SearchResults<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageCount: number;
      pageSize: number;
      total: number;
    }
  }
}

export interface SearchResult<T> {
  data: T;
  meta: {};
}
