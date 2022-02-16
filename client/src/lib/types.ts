export interface Post {
  title: string;
  slug: string;
  description: string;
  content: string;
  date: string;
  cover_url: string;
  tags: string[];
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
