import * as React from "react"
import { IBook, IBooksContext } from "../@types/books"
import { useContext } from "react"

const BooksContext = React.createContext<IBooksContext | null>(null)

export const useBooksContext = () => useContext(BooksContext) as IBooksContext

export const BooksProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [books, setBooks] = React.useState<IBook[]>([])

  const addBook = (book: IBook) => {
    const newBook: IBook = {
      id: books.length + 1,
      name: book.name,
      author: book.author,
      description: book.description
    }
    setBooks([...books, newBook])
  }


  return (
    <BooksContext.Provider value={({ books, addBook })}>
      {children}
    </BooksContext.Provider>
  )
}