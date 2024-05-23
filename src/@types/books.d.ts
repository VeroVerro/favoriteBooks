export interface IBook {
  id: number;
  name: string;
  author?: string;
  description?: string;
}

export interface IBooksContext {
  books: IBook[];
  addBook: (book: IBook) => void;
}
